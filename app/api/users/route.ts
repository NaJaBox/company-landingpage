import { connectDB } from "@/lib/database";
import User from "../../../models/user";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const uploadDirectory = path.join(process.cwd(), "public/uploads/userPhoto");

export async function POST(req: NextApiRequest) {
  console.log("Request body:", req.body);
  try {
    await connectDB();

    const body = (await (req as any).json()) as {
      firstName: string;
      lastName: string;
      birthday: string;
      mobileNumber: number;
      email: string;
      address: string;
      country: string;
      education: string;
      profilePhoto: string;
    };

    const { profilePhoto } = req.body;
    if (profilePhoto) {
      const filePath = path.join(uploadDirectory, `profile-${body.firstName}.jpg`); // Adjust the file name as needed
      fs.writeFileSync(filePath, Buffer.from(profilePhoto, "base64"));
      body.profilePhoto = `/uploads/profile-${body.firstName}.jpg`; // Adjust the URL path as needed
    }

    await User.create(body);
    return NextResponse.json({ message: "User Created" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}

export async function GET() {
  try {
    await connectDB();
    const users = await User.find();

    if (!users || users.length === 0) {
      return NextResponse.json({ message: "No users in the database" });
    } else {
      return NextResponse.json({ users });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectDB();
    const id = req.query.id as string;
    await User.findByIdAndDelete(id);
    return res.status(200).json({ message: "User Deleted" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

import { connectDB } from "@/lib/database";
import UserCV from "../../../models/userCV";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest) {
  console.log("Request body:", req.body);
  try {
    await connectDB();

    const body = (await (req as any).json()) as {
      firstName: string;
      mobileNumber: number;
    };

    await UserCV.create(body);
    return NextResponse.json({ message: "UserCV Created" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}

export async function GET() {
  try {
    await connectDB();
    const users = await UserCV.find();

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
    await UserCV.findByIdAndDelete(id);
    return res.status(200).json({ message: "UserCV Deleted" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

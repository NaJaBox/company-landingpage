import connectDB from "../../../lib/database";
import User from "../../../models/user";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next';


export async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
      const body = JSON.parse(req.body);
      const {
        firstName,
        lastName,
        birthday,
        mobileNumber,
        email,
        address,
        country,
        education,
      } = body;

      await User.create({
        firstName,
        lastName,
        birthday,
        mobileNumber,
        email,
        address,
        country,
        education,
      });

      return res.status(201).json({ message: "User Created" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
   
}


export async function GET() {
  await connectDB();
  const users = await User.find();
  return NextResponse.json({ users });
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  try {
      await connectDB(); 
      const id = req.query.id as string; 
      await User.findByIdAndDelete(id);
      return res.status(200).json({ message: "User Deleted" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
}

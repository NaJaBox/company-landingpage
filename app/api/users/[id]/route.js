import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/database";
import User from "../../../../models/user";

export async function PUT(req, { params }) {
  const { id } = params;
  const {
    newFirstName: firstName,
    newLastName: lastName,
    newBirthday: birthday,
    newMobileNumber: mobileNumber,
    newAddress: address,
    newCountry: country,
    newEducation: education,
  } = await req.json;
  await connectDB;
  await User.findByIdAndUpdate(id, {
    firstName,
    lastName,
    birthday,
    mobileNumber,
    email,
    address,
    country,
    education,
  });
  return NextResponse.json({ message: "ser Updated" }, { status: 200 });
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectDB();
  const user = await User.findOne({ _id: id });
  return NextResponse.json({ user }, { status: 200 });
}

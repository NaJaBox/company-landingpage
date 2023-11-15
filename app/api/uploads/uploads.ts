import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

interface CustomFile extends formidable.File {
  path: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const form = formidable({ uploadDir: "./public/uploads/userPhoto" });

  try {
    const files = await new Promise<{ [fieldName: string]: CustomFile[] }>(
      (resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) {
            reject(err);
          } else {
            resolve(files as { [fieldName: string]: CustomFile[] });
            
          }
        });
      }
    );

    if (!files || Object.keys(files).length === 0) {
      return res.status(400).json({ error: "No files provided" });
    }

    const filePaths = Object.values(files).flatMap((filesArray) =>
      filesArray.map((file) => file.path)
    );

    // Do something with the file paths, e.g., save them in the database

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error parsing form:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

interface Params {
  kindeAuth: string;
  // Add more properties if needed
}

export async function GET(request: Request, { params }: { params: Params }) {
  const endpoint = params.kindeAuth;
  return await handleAuth(request, endpoint);
}

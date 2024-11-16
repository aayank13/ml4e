import { NextRequest } from "next/server";
import { AppwriteException } from "node-appwrite";

import { errorHandler, successHandler } from "@/app/api/handler";
import { ClientAW } from "@/appwrite_configs/config";

export async function POST(req: NextRequest) {
  try {
    let body = {
      userId: null,
    };
    try {
      body = await req.json();
    } catch {
      throw new AppwriteException("No body passed", 400);
    }

    const { userId } = body;
    if (!userId) {
      throw new AppwriteException("No userId passed", 400);
    }

    const { account } = await ClientAW(true);

    const user = await account.get();

    if (user.emailVerification) {
      throw new AppwriteException("Email already verified", 400);
    }

    if (user.$id !== userId) {
      throw new AppwriteException("User Id does not match", 400);
    }

    await account.createVerification("http://localhost:3000/api/user/email/verify");

    return successHandler(
      {},
      "Email verification mail sent successfully",
      201
    );
  } catch (e) {
    return errorHandler(e);
  }
}

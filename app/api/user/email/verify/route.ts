import type { NextRequest } from "next/server";
import { AppwriteException } from "node-appwrite";

import { errorHandler, successHandler } from "@/app/api/handler";
import { ClientAW} from "@/appwrite_configs/config";

export async function GET(req: NextRequest) {
  try {
    const queryStore = req.nextUrl.searchParams;

    const isPresent = queryStore.has("secret") && queryStore.has("userId");

    if (!isPresent) {
      return errorHandler(
        new AppwriteException("userId or secret not present", 400)
      );
    }

    const secret = queryStore.get("secret") as string;
    const userId = queryStore.get("userId") as string;

    const {account} = await ClientAW(false);

    await account.updateVerification(userId, secret);



    return successHandler(
      {
        id: userId,
        
        verified: true,
      },
      "Email verified successfully",
      201
    );
  } catch (e) {
    return errorHandler(e);
  }
}

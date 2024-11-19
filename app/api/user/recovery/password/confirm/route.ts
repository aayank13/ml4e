import type { NextRequest } from "next/server";
import { AppwriteException } from "node-appwrite";

import { errorHandler, successHandler } from "@/app/api/handler";
import { ClientAW } from "@/appwrite_configs/config";
import { recoveryPasswordConfirmSchema } from "@/validations/user/recoveryPasswordConfirm";

export async function POST(req: NextRequest) {
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

    // getting new password
    let body = {
      userId: null,
    };
    try {
      body = await req.json();
    } catch {
      throw new AppwriteException("No body passed", 400);
    }

    const validation = recoveryPasswordConfirmSchema.safeParse(body);

    if (!validation.success) {
      throw new AppwriteException(validation.error.errors[0].message, 400);
    }

    const validatedData = validation.data;

    const { account } = await ClientAW(false);

    await account.updateRecovery(userId, secret,validatedData.newPassword);

    return successHandler(
      {
        id: userId,
      },
      "Passwrord reset successfully",
      201
    );
  } catch (e) {
    return errorHandler(e);
  }
}

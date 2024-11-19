import { NextRequest } from "next/server";
import { AppwriteException } from "node-appwrite";

import { errorHandler, successHandler } from "@/app/api/handler";
import { ClientAW } from "@/appwrite_configs/config";
import { recoveryPasswordSchema } from "@/validations/user/recoveryPassword";

export async function POST(req: NextRequest) {
  try {
    let body = {};
    try {
      body = (await req.json()) || {};
    } catch {
      throw new AppwriteException("No body passed", 400);
    }

    const validation = recoveryPasswordSchema.safeParse(body);
    if (!validation.success) {
      throw new AppwriteException(validation.error.errors[0].message, 400);
    }

    const { account } = await ClientAW(true);

    const validatedData = validation.data;
    await account.createRecovery(
      validatedData.email,
      "http://localhost:3000/api/user/recovery/password/confirm"
    );

    return successHandler({}, "Recovery email sent successfully", 201);
  } catch (e) {
    return errorHandler(e);
  }
}

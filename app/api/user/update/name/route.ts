import { NextRequest } from "next/server";
import { AppwriteException } from "node-appwrite";

import { errorHandler, successHandler } from "@/app/api/handler";
import { ClientAW } from "@/appwrite_configs/config";
import { updateNameSchema } from "@/validations/user/updateName";

export async function POST(req: NextRequest) {
  try {
    let body = {};
    try {
      body = (await req.json()) || {};
    } catch {
      throw new AppwriteException("No body passed", 400);
    }

    const validation = updateNameSchema.safeParse(body);
    if (!validation.success) {
      throw new AppwriteException(validation.error.errors[0].message, 400);
    }

    const { account } = await ClientAW(true);

    const validatedData = validation.data;
    await account.updateName(
      validatedData.name
    );

    return successHandler({}, "Name updated successfully", 201);
  } catch (e) {
    return errorHandler(e);
  }
}

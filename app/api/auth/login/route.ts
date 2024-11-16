import type { NextRequest } from "next/server";
import { AppwriteException } from "node-appwrite";

import { ClientAW, RootAW } from "@/appwrite_configs/config";
import { SetAuthCookie } from "@/helpers/sessionCookieFunctions";
import { loginSchema } from "@/validations/auth/loginSchema";

import { errorHandler, successHandler } from "../../handler";

export async function POST(req: NextRequest) {
  try {
    let body = {};
    try {
      body = (await req.json()) || {};
    } catch {
      throw new AppwriteException("No body passed", 400);
    }

    const validation = await loginSchema.safeParse(body);
    if (!validation.success) {
      throw new AppwriteException(validation.error.errors[0].message, 400);
    }
    const validatedData = validation.data;

    // Register user with validated data
    const { account: acccountRoot } = await RootAW();


    // creating sesssion
    const session = await acccountRoot.createEmailPasswordSession(
      validatedData.email,
      validatedData.password
    );



    const sessionKey = session.secret;
    
    // setting the cookie
    await SetAuthCookie(sessionKey);


    const {account:SavedUserAccount} = await ClientAW();

    const user = await SavedUserAccount.get();


    // return the user
    return successHandler({
      user: {
        id: user.$id,
        email: user.email,
        name: user.name,
        registrationDate: user.registration,
        verified: user.emailVerification,
      }
    });
  } catch (e) {
    return errorHandler(e);
  }
}

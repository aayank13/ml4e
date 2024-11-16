import type { NextRequest } from "next/server";
import { AppwriteException, ID } from "node-appwrite";

import { ClientAW, RootAW } from "@/appwrite_configs/config";
import { SetAuthCookie } from "@/helpers/sessionCookieFunctions";
import { registerSchema } from "@/validations/auth/registerSchema";

import { errorHandler, successHandler } from "../../handler";

export async function POST(req: NextRequest) {
  try {
    let body = {};
    try{
         body = await req.json() || {};
    }catch{
      throw new AppwriteException("No body passed", 400);
    }
    
    const validation = await registerSchema.safeParse(body);
    if (!validation.success) {
      throw new AppwriteException(validation.error.errors[0].message, 400);
    }
    const validatedData = validation.data;

    // Register user with validated data
    const { account } = await ClientAW(false);
    const { account: acccountRoot } = await RootAW();

    // creating account
    const user = await account.create(
      ID.unique(),
      validatedData.email,
      validatedData.password,
      validatedData.name
    );

    // creating sesssion
    const session = await acccountRoot.createEmailPasswordSession(
      validatedData.email,
      validatedData.password
    );
    const sessionKey = session.secret;

    // setting the cookie
    await SetAuthCookie(sessionKey);

    const { account: SavedUserAccount } = await ClientAW();
    // sending email
    await SavedUserAccount.createVerification("http://localhost:3000/api/user/email/verify");

    // return the user
    return successHandler({
      user: {
        id: user.$id,
        email: user.email,
        name: user.name,
        verified: user.emailVerification,
        registrationDate: user.registration,
      }
    });
  } catch (e) {
    return errorHandler(e);
  }
}


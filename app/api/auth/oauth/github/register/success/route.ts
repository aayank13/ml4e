import { NextRequest } from "next/server";
import { AppwriteException } from "node-appwrite";

import { errorHandler, successHandler } from "@/app/api/handler";
import { ClientAW, RootAW } from "@/appwrite_configs/config";
import { SetAuthCookie } from "@/helpers/sessionCookieFunctions";

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

    const { account: accountRoot } = await RootAW();
    const session = await accountRoot.createSession(userId, secret);

    const sessionKey = session.secret;

    //   setting the cookie
    await SetAuthCookie(sessionKey);

    const { account: SavedUserAccount } = await ClientAW();

    const user = await SavedUserAccount.get();

    return successHandler(
      {
        user: {
          id: user.$id,
          email: user.email,
          name: user.name,
          registrationDate: user.registration,
          verified: user.emailVerification,
        },
      },
      "Github login successful",
      200
    );
  } catch (e) {
    return errorHandler(e);
  }
}

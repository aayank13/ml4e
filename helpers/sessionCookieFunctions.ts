import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";
import { AppwriteException, Models } from "node-appwrite";

import { env } from "@/env";

export const EnsureAuthCookie = async (cookieStore: ReadonlyRequestCookies) => {
  const isPresent = cookieStore.has(env.auth.cookieName);
  if (!isPresent) {
    throw new AppwriteException("login please!", 401);
    // throw new AppwriteException("Cookie not present", 401);
  }
};

export const RetrieveAuthCookie = async ():Promise<string> => {
  const cookieStore = await cookies();
  await EnsureAuthCookie(cookieStore);

  const authToken = cookieStore.get(env.auth.cookieName);
  return authToken?.value || "";
};


export const SetAuthCookie = async (cookieData:Models.Session) => {
    const cookieStore = await cookies();
    cookieStore.set(env.auth.cookieName, cookieData.secret, {
        httpOnly:env.auth.cookieHttpOnly,
        secure:env.auth.cookieSecure,
        sameSite:env.auth.cookieSameSite  ,
        path:env.auth.cookiePath,
        expires:new Date(cookieData.expire)
    })
}
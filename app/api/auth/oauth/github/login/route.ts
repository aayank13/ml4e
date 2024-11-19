import { NextResponse } from "next/server";
import * as sdk from "node-appwrite";

import { errorHandler } from "@/app/api/handler";
import { ClientAW } from "@/appwrite_configs/config";
import { env } from "@/env";

export async function GET() {
  try {
    const { account } = await ClientAW(false);
    const result = await account.createOAuth2Token(
      sdk.OAuthProvider.Github, // provider
      `${env.vercel.url}/auth/oauth/github/login/success`, // success (optional)
      `${env.vercel.url}/auth/oauth/github/login/failure`, // failure (optional)
      [] // scopes (optional)
    );

    return NextResponse.redirect(result);
  } catch (e) {
    return errorHandler(e);
  }
}

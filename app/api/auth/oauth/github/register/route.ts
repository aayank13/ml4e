import { NextResponse } from "next/server";
import * as sdk from "node-appwrite";

import { errorHandler } from "@/app/api/handler";
import { ClientAW } from "@/appwrite_configs/config";

export async function GET() {
  try {
    const { account } = await ClientAW(false);
    const result = await account.createOAuth2Token(
      sdk.OAuthProvider.Github, // provider
      `${process.env.VERCEL_URL}/auth/oauth/github/register/success`, // success (optional)
      `${process.env.VERCEL_URL}/auth/oauth/github/register/failure`, // failure (optional)
      [] // scopes (optional)
    );

    return NextResponse.redirect(result);
  } catch (e) {
    return errorHandler(e);
  }
}

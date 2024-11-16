import { NextResponse } from "next/server";
import { AppwriteException } from "node-appwrite";

export const errorHandler = (error: unknown) => {
  if (error instanceof AppwriteException) {
    return NextResponse.json(
      {
        success: false,
        mode: process.env.NODE_ENV as string,
        status: error.code,
        message: error.message,
      },
      {
        status: error.code || 500,
      }
    );
  }

  if (error instanceof Error) {
    return NextResponse.json(
      {
        success: false,
        mode: process.env.NODE_ENV as string,
        status: 500,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }

  return NextResponse.json(
    {
      success: false,
      mode: process.env.NODE_ENV as string,
      status: 500,
      message: "An unknown error occurred",
    },
    {
      status: 500,
    }
  );
};

export const successHandler = (
  data: object | string,
  message?: string,
  code?: number
) => {
  return NextResponse.json(
    {
      success: true,
      message: message || "Successful",
      mode: process.env.NODE_ENV as string,
      data: data,
    },
    {
      status: code || 200,
    }
  );
};

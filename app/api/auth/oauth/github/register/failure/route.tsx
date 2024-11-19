import { AppwriteException } from "node-appwrite";

import { errorHandler } from "@/app/api/handler";

export function GET() {
  return errorHandler(new AppwriteException("Github registration failed", 400));
}
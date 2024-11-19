import { ClientAW } from "@/appwrite_configs/config";

import { errorHandler, successHandler } from "../../handler";

export async function POST() {
  try {
    const { account } = await ClientAW(true);
    await account.deleteSession("current");
    return successHandler({}, "Logged out successfully", 200);
  } catch (e) {
    return errorHandler(e);
  }
}

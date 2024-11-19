import { ClientAW } from "@/appwrite_configs/config";

import { errorHandler, successHandler } from "../../handler";

export async function GET() {
  try {
    const { account } = await ClientAW(true);
    const listSessions = await account.listSessions();
    return successHandler(listSessions, "Sessions fetched successfully", 200);
  } catch (e) {
    return errorHandler(e);
  }
}

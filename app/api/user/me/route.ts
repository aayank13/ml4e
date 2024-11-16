import { ClientAW } from "@/appwrite_configs/config";

import { errorHandler, successHandler } from "../../handler";

export async function GET() {
  try {
    const { account } = await ClientAW(true);
    const user= await account.get();
    return successHandler({
        id: user.$id,
        email: user.email,
        name: user.name,
        registrationDate: user.registration,
        verified: user.emailVerification,
      },"User details fetched successfully",200);
  } catch (e) {
    return errorHandler(e);
  }
}

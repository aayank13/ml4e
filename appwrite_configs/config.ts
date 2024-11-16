import * as sdk from "node-appwrite";

import { env } from "@/env";
import { RetrieveAuthCookie } from "@/helpers/sessionCookieFunctions";

export const ClientAW = async (autoSetSession = true) => {
  // if "autoSetSession" is true, then you just use this  function out of the box it will automatically set the session but if you want to set the session manually then set "autoSetSession" to false
  // also  if set to true and the session is not set, it will throw an error
  const client = new sdk.Client()
    .setEndpoint(env.appwrite.endpoint) // Your API Endpoint
    .setProject(env.appwrite.projectId) // Your project ID
    .setSession(""); // The user session to authenticate with

  if (autoSetSession) {
    const sessionKey = await RetrieveAuthCookie();
    client.setSession(sessionKey);
  }

  const database = new sdk.Databases(client);
  const account = new sdk.Account(client);
  const storage = new sdk.Storage(client);
  const functions = new sdk.Functions(client);
  const teams = new sdk.Teams(client);
  const locale = new sdk.Locale(client);
  const avatars = new sdk.Avatars(client);

  return {
    client,
    database,
    account,
    storage,
    functions,
    teams,
    locale,
    avatars,
  };
};

export const RootAW = async () => {
  const client = new sdk.Client()
    .setEndpoint(env.appwrite.endpoint) // Your API Endpoint
    .setProject(env.appwrite.projectId) // Your project ID
    .setKey(env.appwrite.key); // The user session to authenticate with

  const database = new sdk.Databases(client);
  const account = new sdk.Account(client);
  const storage = new sdk.Storage(client);
  const functions = new sdk.Functions(client);
  const teams = new sdk.Teams(client);
  const locale = new sdk.Locale(client);
  const avatars = new sdk.Avatars(client);

  return {
    client,
    database,
    account,
    storage,
    functions,
    teams,
    locale,
    avatars,
  };
};

export const env = {
    appwrite:{
        projectId:String(process.env.APPWRITE_PROJECT_ID),
        endpoint:String(process.env.APPWRITE_ENDPOINT),
        key:String(process.env.APPWRITE_KEY)
    },
    auth:{
        cookieName:"auth",
        cookieSecret:String(process.env.COOKIE_SECRET) || "secret",
        cookieMaxAge:60 * 60 * 8,
        cookieSecure:process.env.NODE_ENV === "production",
        cookieSameSite:"lax" as "lax" | "strict" | "none",
        cookiePath:"/",
        cookieHttpOnly:true,

    }
}
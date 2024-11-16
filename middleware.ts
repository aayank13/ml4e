import {  NextResponse } from "next/server";

export default async  function Middleware(){

    return NextResponse.next();

}
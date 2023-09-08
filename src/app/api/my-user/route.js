import { NextResponse } from "next/server";
import { loadUserData } from "../../../services/index";

export async function GET() {
  return NextResponse.json({ data: await loadUserData() });
}

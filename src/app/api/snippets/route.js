import { loadSnippets, loadUserData } from "../../../services/index";

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: await loadSnippets() });
}

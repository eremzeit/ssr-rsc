import { NextResponse } from "next/server";
import { loadSnippetComments } from "../../../services/index";

export async function GET() {
  return NextResponse.json({ data: await loadSnippetComments() });
}

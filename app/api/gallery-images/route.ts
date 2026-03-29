import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json(
    { message: "Gallery image API is deprecated. Use /gallery page data source." },
    { status: 410 }
  )
}

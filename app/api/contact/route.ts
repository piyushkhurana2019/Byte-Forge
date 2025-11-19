import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const data = await req.json().catch(() => ({}))
  console.log("[v0] Contact received:", data)
  // In production, send to email/CRM or queue.
  return NextResponse.json({ ok: true })
}
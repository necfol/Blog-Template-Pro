/*
 * @LastEditors: Necfol
 * @Date: 2024-03-25 22:37:06
 * @LastEditTime: 2024-03-25 23:34:42
 * @FilePath: /Blog-Template-Pro/app/api/grammer/route.ts
 */
import { NextResponse } from "next/server";

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};


export async function OPTIONS(req: Request) {
  return NextResponse.json({}, { headers: corsHeaders });
}


export async function POST(req: Request) {
  const params = await req.json()
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${params.key}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: `帮我检查一下这段话的语法，并且给出建议：${params.text}`
        }]
      }]
    })
  })

  const data = await res.json()
  return NextResponse.json(data, {
    status: 200,
    headers: corsHeaders
  })
}

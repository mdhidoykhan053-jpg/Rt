import { NextResponse } from 'next/server';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET(request) {
  const scriptContent = `console.log("BD Terminal Loaded Successfully!");`; // এখানে আপনার আসল ট্রেডিং স্ক্রিপ্ট বা কোড বসাবেন
  return new NextResponse(scriptContent, {
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/javascript',
    },
  });
}

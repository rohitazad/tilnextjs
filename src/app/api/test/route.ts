import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Sample data
    const data = {
      message: 'Hello from the test API!',
      timestamp: new Date().toISOString(),
    };

    // Return the response
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    // Handle any errors
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}



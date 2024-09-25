//export const dynamic = 'force-static'; // caceh data 
//export const dynamic = 'force-dynamic';  // not cache every hit get 
//export const revalidate = 20
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const currentDate = new Date();
    const fullDateTime = currentDate.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // 24-hour format
      });
      const milliseconds = currentDate.getMilliseconds();
      const fullDateTimeWithMilliseconds = `${fullDateTime}.${milliseconds}`;
    // Send success response
    return NextResponse.json(
      {
        success: true,
        message: "Current time fetch successfully",
        fullDateTimeWithMilliseconds: fullDateTimeWithMilliseconds,
      },
      { status: 200 }
    );
  } catch (error:any) {
    console.error('Error fetching time:', error);

    // Send error response
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch time ",
        error: error?.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
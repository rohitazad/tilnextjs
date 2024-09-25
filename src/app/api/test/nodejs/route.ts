import { NextResponse } from 'next/server';

export const POST = async (req:any)=>{
  try {
      const {slug, id, location} = await req.json();
      
      const courseData = {
        data:"hello",
        slug, id, location
      }
      const response = NextResponse.json({ ...courseData }, {
          status: 200,
      });
      return response;
  } catch (error) {
      return NextResponse.json({
          message:"get course error "
      },{
          status:500
      })
  } 
}
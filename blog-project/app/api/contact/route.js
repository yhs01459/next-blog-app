import { NextResponse } from "next/server";

export const POST = async(request) => {
    const req = await request.json();
 
    const data = {
        email: req.email,
        name: req.name,
        message: req.message,
    };
    
    return NextResponse.json(data);
}
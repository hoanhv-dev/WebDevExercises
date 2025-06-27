import { register } from "@/app/shared/serverActions/auth.actions";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const formData = await request.formData();
    const result = await register(formData);
    
    if (result.error) {
        return NextResponse.json({ error: result.error }, { status: 400 });
    }
    
    return NextResponse.json({ success: true });
}
import { env } from "@/env";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";


const loginSchema = z.object({
    email: z.string().refine(email => email == env.ADMIN_EMAIL, { error: "Email is not admin" }),
    password: z.string().refine(password => password == env.ADMIN_PASSWORD, { error: "Password is not admin" }),
});

export async function POST(request: NextRequest) {
    const body = await request.json();

    const result = loginSchema.safeParse(body);

    if (result.error) {
        const errors = result.error.issues
        .map(data => ({
            field: data.path[0],
            message: data.message
        }));

        return NextResponse.json({ message: "Fields are not valid", errors }, {
            status: 400
        })
    }

    
    return Response.json({ message: "Login is successfull" })
}
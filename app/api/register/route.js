import { connect } from "@/utils/config/dbConfig";
import Account from "@/utils/models/UserModel";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";


connect();
export async function POST(req){
    try {
        const { username,email,mobileno,password } = await req.json();
        const user = await Account.findOne({email});
        console.log(email);        
        if(user)
        {
            return NextResponse.json(
                { error: "Account already exists" },
                { status: 400 }
            );
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newuser = new Account({
            username,
            email,
            mobileno,
            password: hashedPassword,
        })

        const saveduser = await newuser.save();

        return NextResponse.json({
            message: "User created successfully ",
            success: true,
            saveduser,
        });

    } catch (error) {
        return NextResponse.json({ error: error.message}, { status: 500 });
    }
}
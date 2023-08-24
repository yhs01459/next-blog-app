import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export const POST = async(request) => {
    const req = await request.json();
 
    const data = {
        email: req.email,
        name: req.name,
        message: req.message,
    };

    try{
        const client = await MongoClient.connect('mongodb+srv://yhs:9swsqjh0MO8RuiyN@cluster0.aoiyfhc.mongodb.net/?retryWrites=true&w=majority')
        const db = client.db('blog');
        const result = await db.collection('messages').insertOne(data);
        data.id = result.insertedId;
    }
    catch(error){
        return NextResponse.json({message:'connect fail'})
    }

    
   
    
    return NextResponse.json(data);
}
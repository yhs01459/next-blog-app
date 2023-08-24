import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";


const url = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.aoiyfhc.mongodb.net/?retryWrites=true&w=majority`;
export const POST = async(request) => {
    const req = await request.json();
 
    const data = {
        email: req.email,
        name: req.name,
        message: req.message,
    };

    try{
        const client = await MongoClient.connect(url)
        const db = client.db('blog');
        const result = await db.collection('messages').insertOne(data);
        data.id = result.insertedId;
    }
    catch(error){
        return NextResponse.json({message:'connect fail'})
    }

    
   
    
    return NextResponse.json(data);
}
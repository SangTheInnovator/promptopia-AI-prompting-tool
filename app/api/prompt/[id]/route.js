import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

// GET (read)
export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const prompt = await Prompt.findById(params.id).populate("creator")
        if (!prompt) return new Response("Prompt Not Found", { status: 404 });

        return new Response(JSON.stringify(prompt), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

// PATCH (update)
export const PATCH = async (request,{params} ) => {
    
}

// DELETE (delete)
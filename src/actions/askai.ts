'use server'

import { GoogleGenAI } from "@google/genai";
import prisma from '@/lib/db';

const ai = new GoogleGenAI({});

export default async function Askai(question: string, senderId: string) {
    try {

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: question,
        });

        const result =  response.text || "Unable to process your request. Try again!"
        await prisma.chat.create({ data: { senderId, question, answer: result } })
        return result
    } catch (e: unknown) {
        console.log(e)
        return "Unable to process your request. Try again!"
    }

}
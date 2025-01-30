'use server'

import { GoogleGenerativeAI } from "@google/generative-ai"
import prisma from '@/lib/db';

export default async function Askai(question: string, senderId: string) {
    try {
        const genAI = new GoogleGenerativeAI(process.env.CHAT_API || '');
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(question);
        await prisma.chat.create({data: {senderId, question, answer: result.response.text()}})
        return result.response.text()
    } catch (e: unknown) {
        console.log(e)
        return "Unable to process your request. Try again!"
    }

} 
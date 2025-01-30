'use server'
import prisma from "@/lib/db";

interface chat {
    type: 'question' | 'answer',
    content: string
}

export async function getChatHistory(senderId: string) {
    const chatHistory: chat[] = []
    try {
        const Ischat = await prisma.chat.findMany({ where: { senderId } })
        if (Ischat.length > 0) {
            Ischat.forEach((chat) => {
                chatHistory.push({ type: 'question', content: chat.question })
                chatHistory.push({ type: 'answer', content: chat.answer })
            })
            return chatHistory
        }
        return []
    } catch (e: unknown) {
        console.log(e)
        return []
    }
}
# Sistya Chat AI

*An AI-powered chatbot with chat history and theme customization.*

## 🚀 Overview
Sistya Chat AI is an intelligent chatbot that leverages Google's **Gemini API** to answer user queries while storing previous conversations. It features a sleek UI with light and dark mode support, providing a seamless chat experience.

## ✨ Features
- 🤖 **AI-Powered Chatbot** (Google Gemini API)
- 💾 **Chat Memory** (Saves previous chats in PostgreSQL)
- 🎨 **Light & Dark Theme Support**
- 🔄 **Seamless User Experience** (React.js & Next.js)

## 🛠️ Built With
- **Next.js** (App Router)
- **React.js** (Frontend UI)
- **Google Gemini API** (@google/generative-ai package)
- **TypeScript** (Static Typing)
- **PostgreSQL** (Database for storing chat history)
- **Node.js** (Backend processing)
- **Vercel** (Deployment)

## 🌍 Live Demo
Sistya Chat AI is deployed on **[Vercel](https://sistya-chat.vercel.app)** for real-time chatbot interactions.

## 📥 Installation

To set up Sistya Chat AI locally, follow these steps:

### Prerequisites
- **Node.js** (>= 18)
- **npm** (Package manager)
- **PostgreSQL** (For chat history storage)

### Clone the Repository
```bash
git clone https://github.com/avinashsinghwk/chat-bot-next.git
cd chat-bot-next
```

### Install Dependencies
```bash
npm install
```

### Set Up Environment Variables
Create a `.env` file with the following variables:
```env
GEMINI_API_KEY=your-google-gemini-api-key

DATABASE_URL=postgresql://user:password@localhost:5432/sistya-chat-ai
```

### Apply Database Migrations
```bash
npx prisma migrate dev
```

### Run the Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` to start chatting with Sistya Chat AI.

## 📧 Contact
For support or inquiries, reach out via:
- GitHub Issues: [Create an Issue](https://github.com/avinashsinghwk/chat-bot-next/issues)
- Email: abhinashsinghwk2@gmail.com

---

⭐ **Star this repository** if you found it useful!


'use client'
import Askai from "@/actions/askai";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from 'react-markdown'
import { AutosizeTextarea } from "@/components/ui/auto-size-textarea";
import { UpArrowSvg } from "@/components/svg/upArrow-svg";
import { v4 as uuidv4 } from 'uuid';
import { getChatHistory } from "@/actions/getchat";
import { Navbar } from "@/components/Navbar";

interface chathistory {
  type: 'question' | 'answer',
  content: string
}

export default function Home() {
  const [question, setQuestion] = useState<string>('')
  const [requesting, setRequesting] = useState<boolean>(false)
  const [chathistory, setChatHistory] = useState<chathistory[]>([])
  const chatContainerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    async function main() {
      if (localStorage.getItem('senderId') == '' || !localStorage.getItem('senderId')) {
        localStorage.setItem('senderId', uuidv4())
        setChatHistory([])
        return;
      }
      setChatHistory(await getChatHistory(localStorage.getItem('senderId')!))
    }
    main()
  }, [])

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chathistory, requesting]);

  const handleMainButtonClick = async () => {
    if (question == '') return;
    setChatHistory(prev => [...prev, { type: 'question', content: question }])
    setRequesting(true)
    setQuestion('')
    const senderId = localStorage.getItem('senderId')
    const res = await Askai(question, senderId!)
    setChatHistory(prev => [...prev, { type: 'answer', content: res }])
    setRequesting(false)
  }

  return <div className="bg-slate-200 dark:bg-slate-600 h-screen w-full overflow-hidden">
    <Navbar />
    <div className="w-full h-[calc(100vh-9rem)] flex flex-col justify-center items-center">
      <div className="w-[calc(100%-2rem)] md:w-3/4 xl:w-1/2 h-[92%] bg-blue-50 dark:bg-gray-900 ">

        <div ref={chatContainerRef} className="h-full w-full rounded-md p-4 overflow-y-auto bg-blue-50 dark:bg-gray-900 shadow-lg no-scrollbar">

      {chathistory.length === 0 ? (<div className="h-full w-full rounded-md">
            <div className="bg-blue-50 dark:bg-gray-900 h-full w-full">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Welcome to chat-ai! 👋</h2>
              <p className="text-gray-600 mb-4">
                I&apos;m here to help you with anything you&apos;d like to know. You can ask me about:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="bg-white dark:bg-slate-700 dark:text-white p-4 rounded-lg shadow-sm">
                  <span className="text-blue-500">🍿</span> Movies & Entertainment
                </div>
                <div className="bg-white dark:bg-slate-700 dark:text-white p-4 rounded-lg shadow-sm">
                  <span className="text-blue-500">🔭</span> Science & Technology
                </div>
                <div className="bg-white dark:bg-slate-700 dark:text-white p-4 rounded-lg shadow-sm">
                  <span className="text-blue-500">💡</span> General knowledge
                </div>
                <div className="bg-white dark:bg-slate-700 dark:text-white p-4 rounded-lg shadow-sm">
                  <span className="text-blue-500">🔧</span> Technical questions
                </div>
                <div className="bg-white hidden md:block dark:bg-slate-700 dark:text-white p-4 rounded-lg shadow-sm">
                  <span className="text-blue-500">📝</span> Writing assistance
                </div>
                <div className="bg-white hidden md:block dark:bg-slate-700 dark:text-white p-4 rounded-lg shadow-sm">
                  <span className="text-blue-500">🤔</span> Problem solving
                </div>
              </div>
              <p className="text-gray-500 mt-6 text-sm">
                Just type your question below and press Enter or click Send!
              </p>
            </div>
          </div>) : (
            chathistory.map((chat, index) => { return <div key={index} className={`mb-4 ${chat.type === 'question' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block max-w-[90%] md:max-w-[80%] lg:max-w-[70%] p-3 rounded-lg overflow-auto hide-scrollbar ${chat.type === 'question'
                  ? 'bg-slate-500 dark:bg-blue-500 text-white rounded-br-none'
                  : 'bg-gray-300 text-gray-800 rounded-bl-none'
                  }`}>
                  <ReactMarkdown className="overflow-auto no-scrollbar">{chat.content}</ReactMarkdown>
                </div>
              </div>
            }))}
          {requesting && (
            <div className="text-left">
              <div className="inline-block bg-gray-100 dark:text-black p-3 rounded-lg animate-pulse">
                Thinking...
              </div>
            </div>
          )}


        </div>

      </div>
      {/* <div className="h-44 bg-slate-200 dark:bg-slate-600 w-full"></div> */}

      <div className="w-[calc(100%-2rem)] md:w-3/4 xl:w-1/2 absolute min-h-20 bottom-2 bg-slate-300 dark:bg-slate-700 flex gap-x-2 items-center shadow-2xl rounded-xl p-2">

        <div className="w-full">
          <AutosizeTextarea
            placeholder="Ask ai anything that is inside your mind 💡"
            maxHeight={200}
            className="w-full bg-blue-50 dark:bg-gray-900 rounded-xl resize-none border-none outline-none"
            onChange={(e) => { setQuestion(e.target.value) }}
            value={question}
            onKeyDown={async (e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                await handleMainButtonClick()
              }
            }}
          />
        </div>

        <button onClick={async () => {
          await handleMainButtonClick()
        }}>
          <UpArrowSvg color="#5c83a5" height="40px" width="40px" />
        </button>

      </div>

    </div>
  </div>
}
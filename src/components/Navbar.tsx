'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuSvg } from "./svg/menu-svg";
import { LogoSvg } from "./svg/logo-svg";
import { CrossSvg } from "./svg/cross-svg";
import { SunSvg } from "./svg/sun-svg";
import { MoonSvg } from "./svg/moon-svg";

type theme = 'dark' | 'light'

export function Navbar() {
    const [sidebarOn, setSidebarOn] = useState(false)
    const [theme, setTheme] = useState<theme>()

    useEffect(() => {
        if(!localStorage.myTheme || localStorage.myTheme == 'dark'){
            localStorage.myTheme = 'dark'
            document.documentElement.classList.add('dark')
        } else if(localStorage.myTheme = 'light') {
            if(document.documentElement.classList.contains('dark')){
                document.documentElement.classList.remove('dark')
            }
        }
        setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light')
    }, [theme])

    return <nav className="bg-slate-500 dark:bg-slate-800 h-12 relative flex px-14 items-center justify-between">

        <div>
            <button onClick={() => { setSidebarOn(!sidebarOn) }}>
                <MenuSvg height="20px" width="20px" color="white"/>
            </button>
        </div>
        <div>
            <Link href={'/'} className="flex gap-3 items-center">
                <LogoSvg className="w-6" />
                <span className="font-bold text-white">
                    Chat-ai
                </span>
            </Link>
        </div>

        <div className={`w-full sm:w-1/2 lg:w-1/4 z-20 h-screen absolute left-0 top-0 bg-slate-500 dark:bg-slate-800 p-6 ${sidebarOn ? '' : 'hidden'}`}>
            <div className="flex justify-between items-center">
                <span className="flex gap-3 items-center">
                <LogoSvg className="w-8" />
                    <span className="font-bold text-white">
                        Chat-ai
                    </span>
                </span>
                <button onClick={() => { setSidebarOn(!sidebarOn) }}>
                    <CrossSvg height="15px" width="15px" color="white" />
                </button>
            </div>

            <div className="mt-7 flex flex-col gap-5 text-white p-8">
                <div><Link href={'/'}>Home</Link></div>
                <div><Link href={'/dashboard'}>Dashboard</Link></div>
                <div className="flex items-center justify-between">
                    <span>Theme</span>
                    <button onClick={() => {
                        localStorage.myTheme = localStorage.myTheme == 'dark'? 'light': 'dark'
                        setTheme(localStorage.myTheme)
                    }}>
                        {theme == 'dark' ? (
                            <SunSvg color="white" height="25px" width="25px" />
                        ) : (
                            <MoonSvg color="white" height="25px" width="25px" />
                        )}
                    </button>
                </div>
            </div>
        </div>

    </nav>
}
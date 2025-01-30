import { Navbar } from "@/components/Navbar";

export default function Dashboard(){
    return <div className="bg-slate-200 dark:bg-slate-600 h-screen w-full overflow-hidden">
        <Navbar />
        <div className="text-8xl font-bold text-center">Hello how are you</div>
    </div>
}
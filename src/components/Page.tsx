import { ReactNode } from "react";
import Menu from "./Menu"

interface Props {
    children: ReactNode
}

export default function Page( { children }: Props ){
    return (
        <div className="w-screen h-screen">
            <header className="max-w-5xl mx-auto py-5 border-b border-zinc-600 text-3xl font-bold flex items-center">
                Aline
            </header>
            <div className="max-w-5xl mx-auto flex gap-4 items-start">
                <Menu />
                <main className="flex flex-1 p-4">
                    {children}
                </main>
            </div>            
        </div>
    )
}
import { ReactNode } from "react";
import { Work } from "../@types/Work";
import Menu from "./Menu"

interface Props {
    children: ReactNode
    works: Work[]
    slug: string
}

export default function Page( { children, works, slug }: Props ){
    return (
        <div className="w-screen h-full min-h-screen">
            <div className="max-w-5xl mx-auto flex gap-4 items-start">
                <Menu slug={slug} works={works} />
                <main className="flex flex-1 p-4">
                    {children}
                </main>
            </div>            
        </div>
    )
}
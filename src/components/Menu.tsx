import clsx from "clsx";
import Link from "next/link";
import { Work } from "../@types/Work";

interface Props {
  works: Work[]
  slug: string
}

export default function Menu( { works, slug }: Props ){
    return(
      <div className="flex flex-col">
        <h1 className="text-zinc-900 font-semibold text-lg flex items-center h-24">Aline</h1>
        <nav className="flex flex-col gap-4 font-light mt-5">
          <ul className="flex flex-col gap-4 text-zinc-800">
            {
              works.map((work, key) => (
                <li 
                  key={key} 
                  className={clsx(
                    "border-b hover:border-zinc-700",
                    {
                      "border-zinc-700": slug===work.slug,
                      "border-transparent": slug!==work.slug
                    }
                  )}
                >
                  <Link 
                    href={`/view/${work.slug}`}
                    
                  >
                    {work.title}
                  </Link>
                </li>
              ))
            }
          </ul>
          <Link className="border-b border-transparent text-zinc-800 font-medium hover:border-zinc-700" href="/about">Sobre</Link>
          <Link className="border-b border-transparent text-zinc-800 font-medium hover:border-zinc-700" href="/contact">Contato</Link>
        </nav>
      </div>
      
    )
}
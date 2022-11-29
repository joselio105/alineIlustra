import Link from "next/link";

export default function Menu(){
    return(
      <nav className="flex flex-col gap-4  font-light mt-5">
        <Link className="text-zinc-800 hover:border-b hover:border-zinc-700" href="/">Portfolio</Link>
        <Link className="text-zinc-800 hover:border-b hover:border-zinc-700" href="/about">Sobre</Link>
        <Link className="text-zinc-800 hover:border-b hover:border-zinc-700" href="/contact">Contato</Link>
      </nav>
    )
}
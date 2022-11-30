import Image from "next/image";
import Page from "../components/Page";

import Photo01 from "../../public/barba-azul/1.png"
import Photo02 from "../../public/barba-azul/2.png"
import Photo03 from "../../public/barba-azul/3.png"
import Link from "next/link";

export default function View () {
    return (
      <Page>
        <div className="flex flex-col">
            <div className="w-full flex flex-wrap gap-2">
            <Image src={Photo01} alt="" className="w-full object-cover rounded-xl" />
            <Image src={Photo02} alt="" className="w-full object-cover rounded-xl" />
            <Image src={Photo03} alt="" className="w-full object-cover rounded-xl" />
            </div>

            <Link 
                href="/" 
                className="bg-zinc-100 border-zinc-600 border hover:bg-zinc-300 text-zinc-600 font-light rounded-md flex items-center justify-center p-3 my-5"
            >
                Voltar
            </Link>
        </div>
        
      </Page>
    )    
}
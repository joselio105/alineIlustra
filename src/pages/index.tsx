import Image from "next/image";
import Page from "../components/Page";

import Photo01 from "../../public/barba-azul/1.png"
import Photo02 from "../../public/barba-azul/2.png"
import Photo03 from "../../public/barba-azul/3.png"
import Link from "next/link";

export default function Home() {
  return (
    <Page>
      <div className="w-full flex flex-wrap gap-2">
        <Link href="/view">
          <Image src={Photo01} alt="" className="w-64 h-64 object-cover rounded-xl" />
        </Link>
        <Link href="/view">
          <Image src={Photo02} alt="" className="w-64 h-64 object-cover rounded-xl" />
        </Link>
        <Link href="/view">
          <Image src={Photo03} alt="" className="w-64 h-64 object-cover rounded-xl" />
        </Link>
      </div>
    </Page>
  )
}
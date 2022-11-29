import Image from "next/image";
import Page from "../components/Page";

import Photo01 from "../../public/barba-azul/1.png"
import Photo02 from "../../public/barba-azul/2.png"
import Photo03 from "../../public/barba-azul/3.png"

export default function Home() {
  return (
    <Page>
      <div className="w-full flex flex-wrap gap-2">
        <Image src={Photo01} alt="" className="w-2/5" />
        <Image src={Photo02} alt="" className="w-2/5" />
        <Image src={Photo03} alt="" className="w-full" />
      </div>
    </Page>
  )
}
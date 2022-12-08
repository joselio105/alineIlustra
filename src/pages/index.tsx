import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Page from "../components/Page";
import { Works, getDir } from "../contents/works";
import works from "../../public/works.json"

const images = Object.keys(Works).map((key: string) => `/${getDir(key)}/1.png`);

export default function Home() {

  const router = useRouter();
  const id = router.query.id as string;

  return (
    <Page works={works} slug="">
      <div className="w-full flex flex-wrap gap-2">
        {
          works.map( ({ slug }) => (
            <Link href={`/view/${slug}`} key={slug}>
              <Image src={`/${slug}/1.png`} width={256} height={256} alt={slug} className="w-64 h-64 object-cover rounded-xl" />
          </Link>
          ))
        }
      </div>
    </Page>
  )
}
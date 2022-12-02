import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Page from "../components/Page";
import { Works, getDir } from "../contents/works";

const images = Object.keys(Works).map((key: string) => `/${getDir(key)}/1.png`);

export default function Home() {

  const router = useRouter();
  const id = router.query.id as string;

  return (
    <Page>
      <div className="w-full flex flex-wrap gap-2">
        {
          images.map( (image, key) => (
            <Link href={`/view/[pid]/${key}`} key={key}>
              <Image src={image} width={256} height={256} alt={image} className="w-64 h-64 object-cover rounded-xl" />
          </Link>
          ))
        }
      </div>
    </Page>
  )
}
import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths } from "next";

import Page from "../../components/Page";

interface Props {
  title: string
  slug: string
  content: string[]
}

const contentFile = "http://localhost:3000/works.json";

const Post = ( { content, slug, title }: Props ) => {
  
    return (
        <Page>
          <div className="flex flex-col">
              <div className="w-full flex flex-wrap gap-2">
                {
                  content.map(image => (
                    <Image 
                      key={image}
                      loader={()=>(`http://localhost:3000/${slug}/${image}`)}
                      src={`${image}`}
                      width={500}
                      height={500}
                      alt={image}
                      className="w-full object-cover rounded-xl"
                    />
                  ))
                }
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

export default Post;

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    const response = await fetch(contentFile)
    const works = await response.json()
  
    const paths = works.map(({ slug }: Props) => ({
      params: { slug },
    }));
  
    return { paths, fallback: false }
  }

interface ContextProps {
  params: {
    slug: string
  }
}

export const getStaticProps = async ( context: ContextProps ) => {
    const { slug } = context.params
    const response = await fetch(contentFile)
    const works = await response.json();
    const work = works.find((work: Props) => (work.slug === slug))
    return { props: work } 
  }
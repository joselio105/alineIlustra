import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths } from "next";

import fsPromises from 'fs/promises';
import path from 'path'

import Page from "../../components/Page";

import works from "../../../public/works.json";

interface Props {
  title: string
  slug: string
  content: string[]
}

const contentFile = `public/works.json`;

const Post = ( { content, slug, title }: Props ) => {
  
    return (
        <Page works={works} slug={slug}>
          <div className="flex flex-col">
              <h2 className="text-5xl text-zinc-900 font-light flex items-center justify-center h-24">{title}</h2>
              <div className="w-full flex flex-wrap gap-2">
                {
                  content.map(image => (
                    <Image 
                      key={image}
                      loader={()=>(`${process.cwd()}${slug}/${image}`)}
                      src={`${image}`}
                      width={500}
                      height={500}
                      alt={`${process.cwd()}${slug}/${image}`}
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
    const filePath = path.join(process.cwd(), contentFile);
    const jsonData = await fsPromises.readFile(filePath);
    const works = JSON.parse(String(jsonData));
  
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
    const { slug } = context.params;
    const filePath = path.join(process.cwd(), contentFile);
    const jsonData = await fsPromises.readFile(filePath);
    const works = JSON.parse(String(jsonData));

    return {
      props: works.find((work: Props) => (work.slug === slug))
    }
  }
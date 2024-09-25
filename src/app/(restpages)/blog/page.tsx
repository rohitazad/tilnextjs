import BlogCard from "@/components/BlogCard";
import { Metadata } from "next";
import { fnGenerateMetaData } from "../../../utils/utility";




export async function generateMetadata(): Promise<Metadata> {
    const meta = {
      title: "Blog Main Page",
      desc: "Here Blog Description ",
      keywords:
        "Blog Keywords",
      pathname: "/blog",
    };
    return fnGenerateMetaData(meta);
  }

const Blog = async ()=>{
    let blogData:any[] = [];
    try {
        const APIURL = `https://jsonplaceholder.typicode.com/posts`;
        const data = await fetch(APIURL);
        const resData = await data.json();
        blogData = resData

    } catch (error) {
        console.log("error page blog page api failed ")
    }

    return (
        <>
            <h1>Blog  Page</h1>
            {
                blogData && blogData.map((item:any, index:number)=>{
                    return (
                        <BlogCard key={`${index}-${item?.id}`} data={item} />
                    )
                })
            }
        </>
    )
}

export default Blog;
import Link from "next/link";
import { fnGenerateMetaData } from "../../../../utils/utility";

import { Metadata } from "next";

const fetchBlog = async (blogId:any)=>{
    try {
        const APIURL = `https://jsonplaceholder.typicode.com/posts/${blogId}`;
        const data = await fetch(APIURL);
        const resData = await data.json();
        return resData
    } catch (error) {
        console.log("error to blog data")
    }
}

export async function generateMetadata(props:any): Promise<Metadata> {
    const arr = props.params?.slug;
    const idString = arr.find((item:any) => item.startsWith("id-")); // "id-5"
    const value = idString.split('-')[1];
    let blogData:any = "";
    if(value && value !== ""){
        blogData = await fetchBlog(value);
    }
    const meta = {
      title: `${blogData?.title}`,
      desc: "Here Blog Description ",
      keywords:
        "Blog Keywords",
      pathname: "/blog",
    };
    return fnGenerateMetaData(meta);
  }




const Blog = async (props:any)=>{
    const slug = props.params.slug;

    const arr = props.params?.slug;
    const idString = arr.find((item:any) => item.startsWith("id-")); // "id-5"
    const value = idString.split('-')[1];
    let blogData:any = "";
    if(value && value !== ""){
        blogData = await fetchBlog(value);
    }

    return (
        <div>
            <h1>Blog Catch ALL Route: </h1>
            <h2>{`Title :- ${blogData?.title}`}</h2>
            <div className="">
                {blogData?.body}
            </div>
            <Link href={`/blog`}>Back to all Blogs</Link>
        </div>
    )
}

export default Blog;
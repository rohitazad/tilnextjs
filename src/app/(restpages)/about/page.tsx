import BlogCard from "@/components/BlogCard";



const AboutUs = async ()=>{
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
            
            <h1>About Us Page</h1>

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

export default AboutUs;
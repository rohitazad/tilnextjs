import styles from "./styles.module.scss";
import Link from "next/link";


const BlogCard = ({data}:any)=>{
    const text = data?.title ||  "";
    const seoName = text.toLowerCase().replace(/\s+/g, '-');
    return (
        <>
            <div className={styles.cardStyle}>
                <Link href={`/blog/${seoName}/id-${data?.id}`}>{data?.title}</Link>
            </div>
        </>
    )
}

export default BlogCard;
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

const Footer = ()=>{
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footerSec}>
                    <div className={styles.left}>
                        <Link href="/">
                            <Image
                                width={160}
                                height={46} 
                                src="/images/logo.svg" alt="TIL logo" />
                        </Link>
                        <h3>Everything . Everyday</h3>
                    </div>
                    <ul className={styles.menulist}>
                        <li>
                            <Link href={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link href={`/about`}>About</Link>
                        </li>
                        <li>
                            <Link href={`/product`}>Product</Link>
                        </li>
                        <li>
                            <Link href={`/blog`}>Blog</Link>
                        </li>
                        <li>
                            <Link href={`/contact`}>Contact</Link>
                        </li>
                    </ul>
                </div>
                
            </div>
        </>
    )
}

export default Footer;
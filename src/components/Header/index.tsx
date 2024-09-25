import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

const Header = ()=>{
    return (
        <>
            <div className={styles.header}>
                <Link href="/">
                    <Image
                        width={160}
                        height={46} 
                        src="/images/logo-blue-new.png" alt="TIL logo" />
                </Link>
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
        </>
    )
}

export default Header;
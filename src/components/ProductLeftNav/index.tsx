import styles from "./styles.module.scss";
import Link from "next/link";

const ProductLeftNav = ()=>{
    return (
        <>
            <ul className={styles.pleftNav}>
                <li>
                    <Link href={`/product/mobiles`}>Mobiles</Link>
                </li>
                <li>
                    <Link href={`/product/laptop`}>Laptop</Link>
                </li>
            </ul>
        </>
    )
}

export default ProductLeftNav;
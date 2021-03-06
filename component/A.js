import Link from "next/link";
import styles from  '../styles/A.module.sass'

export default  function A({href, text}) {
    return (
        <Link href={href}>
            <a className={styles.link}>{text}</a>
        </Link>
    )
}
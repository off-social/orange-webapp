import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>

                {/* Logo */}
                <Link
                    href="/"
                    className={styles.logo}
                >
                    <Image src="/ORANGE-LOGO.png" alt="Orange" width={173} height={50} className={styles.logoImage} />
                </Link>

                {/* Navigation */}
                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/products" className={styles.navLink}>Products</Link>
                    <Link href="/green-edge-series" className={styles.navLink}>Green Edge Series</Link>
                    <Link href="/about" className={styles.navLink}>About</Link>
                    <Link href="/insights" className={styles.navLink}>Insights</Link>
                </nav>

                {/* CTA */}
                <button className={styles.cta}>
                    Contact Us
                </button>
            </div>
        </header>
    );
}
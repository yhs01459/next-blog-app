'use client'
import Link from "next/link";
import classes from "./NavigationBar.module.css"
import Logo from "./Logo";
const NavigationBar = () => {
    return (
        <header className={classes.header} >
            <Link href="/"><Logo /></Link>
            <ul>
                <li><Link href='/posts'>Posts</Link></li>
                <li><Link href='/contect'>Contect</Link></li>
            </ul>
        </header>
    );
}

export default NavigationBar;
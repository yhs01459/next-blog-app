import Image from "next/image";
import classes from "./Hero.module.css";
const Hero = () => {
    return(
        <section className={classes.hero}>
            <div className={classes.Image}>
                <Image src="/images/site/test.png" alt="/images/site/noimg.png" width={300} height={300}/>
            </div>
            <h1>블로그</h1>
            <p>블로그 소개</p>
        </section>
    );
}
export default Hero;
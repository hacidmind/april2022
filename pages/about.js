import styles from '../styles/About.module.css';
import Image from 'next/image';

const About = () => {
    return (
        <div>
            <h1 className={styles.h1}>About Page</h1>

            <Image src="/Rectangle9.png" alt="Image" width={300} height={300} />
            <br />
            <Image src="/Rectangle10.png" alt="Image" width={300} height={300} />
        </div>
    );
}

export default About;

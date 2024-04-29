import Link from "next/link";
// import Image from "next/image";
import styles from "./page.module.css";
import PageHome from "./home/page";


export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello world</h1>
      <h2>Subtítulo</h2>
      <p>Paragrafo</p>
      <p>Mais um Paragrafo</p>
      <br />
      <div>
        Pudim
      </div>
      <p><Link href={'login'}>login</Link> </p>
      <p><Link href={'home'}>home</Link> </p>
      <div><PageHome /></div>
    </main>
  );
}

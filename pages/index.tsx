import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div>
    <Navbar/>
    <h1 className={styles.title}>Bienvenue sur le site de <strong>Vladimir larass</strong>
    </h1><p>je suis un developpeur web Full Stack</p>
    </div>
  ) 
}

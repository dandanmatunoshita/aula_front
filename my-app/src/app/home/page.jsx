import styles from './page.module.css';

export default function PageHome(){
    return(
        <div className={styles.container}>
            <h1>Home</h1>
            <span>Bem vindo a Home</span>
            <input type="text" />
        </div>
    )
}
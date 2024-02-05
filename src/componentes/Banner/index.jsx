import styles from './Banner.module.css';


export default function Banner() {
    
    return (
        <div className={styles.conteiner}>
            <div className={styles.bgEscuro}>
                <h1 className={styles.tituloP}>Super janeiro</h1>
                <p className={styles.paragrafo}>Produtos selecionados com 33% de desconto</p>
            </div>
            <a className={styles.btnAncora} href="#consoles">Ver Consoles</a>
        </div>
    )
}
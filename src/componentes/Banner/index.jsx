import BotaoPrincipal from '../Botao';
import styles from './Banner.module.css';

export default function Banner() {
    return (
        <div className={styles.conteiner}>
            <div className={styles.bgEscuro}>
                <h1 className={styles.tituloP}>Dezembro Promocional</h1>
                <p className={styles.paragrafo}>Produtos selecionados com 33% de desconto</p>
            </div>
            <BotaoPrincipal texto={'Ver Consoles'} />
        </div>
    )
}
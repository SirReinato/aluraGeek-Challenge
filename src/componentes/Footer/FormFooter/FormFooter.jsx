import BotaoPrincipal from 'src/componentes/Botao';
import styles from './FormFooter.module.scss';

const FormFooter = ({ }) => {
	return (
		<div className={styles.formfooter}>
			<div className={styles.divisao}>
				<label>Nome</label>
				<input className={styles.normal} type="text" placeholder='Digite seu nome' />
			</div>
			<input className={styles.inputMaior} type="text" name="msg" id="msg" />
			<BotaoPrincipal texto={'Enviar mensagem'}/>
		</div>
	);
};


export default FormFooter;
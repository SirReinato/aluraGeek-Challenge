import BotaoPrincipal from 'src/componentes/Botao';
import styles from './FormFooter.module.scss';

const FormFooter = ({ }) => {
	return (
		<div className={styles.formfooter}>
			<div className={styles.divisao}>
				<label>Nome</label>
				<input className={styles.normal} type="text" placeholder='Digite seu nome' />
			</div>
			<textarea id='msg' name='msg' rows='5' cols={'58'} placeholder='Escreva sua mensagem'>
			</textarea>
			<BotaoPrincipal texto={'Enviar mensagem'}/>
		</div>
	);
};


export default FormFooter;
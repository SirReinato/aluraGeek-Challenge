import styles from './Footer.module.scss';
import logo from '../../../public/logo.png'
import { FormFooter } from './FormFooter';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.bannerNav}>
				<img src={logo} alt="logo do nosso site" />
				<nav>
					<ul>
						<li>Quem somos nós</li>
						<li>Política de pirvacidade</li>
						<li>Programa fidelidade</li>
						<li>Nossas lojas</li>
						<li>Quero ser franqueado</li>
						<li>Anuncie aqui</li>
					</ul>
				</nav>
			</div>
			<form>
				<h3>Fale conosco</h3>
				<FormFooter/>
			</form>
			<div className={styles.dev}>
				<p>Desenvolvido por Fulana de Tal 2021</p>
			</div>
		</footer>
	);
};


export default Footer;
import styles from './Produtos.module.scss';
import TituloProdutos from './TituloProdutos/TituloProdutos';
import VerTudo from './VerTudo/VerTudo';
import produtosApi from '../../JSON/produtos.json';

const Produtos = ({ }) => {
	return (
		<section className={styles.conteiner}>
			{/* conjunto star wars */}
			<div className={styles.conjunto}>
				<div className={styles.top}>
					<TituloProdutos nome={'Star Wars'} />
					<VerTudo />
				</div>
				<div className={styles.produtos}>

				</div>
			</div>

			{/* conjunto consoles */}
			<div className={styles.conjunto}>
				<div className={styles.top}>
					<TituloProdutos nome={'Consoles'} />
					<VerTudo />
				</div>
				<div className={styles.produtos}>

				</div>
			</div>

			{/* conjunto diversos */}
			<div className={styles.conjunto}>
				<div className={styles.top}>
					<TituloProdutos nome={'Diversos'} />
					<VerTudo />

				</div>
				<div className={styles.produtos}>

				</div>
			</div>
		</section>
	);
};


export default Produtos;
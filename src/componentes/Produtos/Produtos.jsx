import styles from './Produtos.module.scss';
import TituloProdutos from './TituloProdutos/TituloProdutos';
import VerTudo from './VerTudo/VerTudo';
import produtosJson from '../../JSON/produtos.json';
import { Card } from '../Card';



const Produtos = () => {
	const produtosStar = produtosJson.StarWars;
	const produtosConsoles = produtosJson.Consoles;
	const produtosDiversos = produtosJson.Diversos;

	return (
		<section className={styles.conteiner}>
			{/* conjunto star wars */}
			<div className={styles.conjunto}>
				<div className={styles.top}>
					<TituloProdutos nome={'Star Wars'} />
					<VerTudo />
				</div>
				<div className={styles.produtos}>
					{produtosStar.map(dados =>{
						return (
							<Card {...dados} key={dados.id} />
						)
					})}
				</div>
			</div>

			{/* conjunto consoles */}
			<div className={styles.conjunto}>
				<div className={styles.top}>
					<TituloProdutos nome={'Consoles'} />
					<VerTudo />
				</div>
				<div className={styles.produtos}>
				{produtosConsoles.map(dados =>{
						return (
							<Card {...dados} key={dados.id} />
						)
					})}
				</div>
			</div>

			{/* conjunto diversos */}
			<div className={styles.conjunto}>
				<div className={styles.top}>
					<TituloProdutos nome={'Diversos'} />
					<VerTudo />

				</div>
				<div className={styles.produtos}>
				{produtosDiversos.map(dados =>{
						return (
							<Card {...dados} key={dados.id} />
						)
					})}
				</div>
			</div>
		</section>
	);
};


export default Produtos;
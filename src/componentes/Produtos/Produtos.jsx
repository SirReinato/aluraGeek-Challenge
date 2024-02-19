import styles from './Produtos.module.scss';
import TituloProdutos from './TituloProdutos/TituloProdutos';
import VerTudo from './VerTudo/VerTudo';
import produtosJson from '../../JSON/produtos.json';
import { Card } from '../Card';
import { useContext } from 'react';
import Service, { ApiContext } from 'src/Service/Service';



const Produtos = () => {
	const {starWars, consoles, diversos} = useContext(ApiContext)
	Service()

	return (
		<section className={styles.conteiner}>
			{/* conjunto star wars */}
			<article className={styles.conjunto}>
				<div className={styles.top}>
					<TituloProdutos nome={'Star Wars'} />
					<VerTudo />
				</div>
				<div className={styles.produtos}>
					{starWars.map(dados =>{
						return (
							<Card {...dados} key={dados.id} />
						)
					})}
				</div>
			</article>

			{/* conjunto consoles */}
			<article className={styles.conjunto} id='consoles'>
				<div className={styles.top}>
					<TituloProdutos nome={'Consoles'} />
					<VerTudo />
				</div>
				<div className={styles.produtos}>
				{consoles.map(dados =>{
						return (
							<Card {...dados} key={dados.id} />
						)
					})}
				</div>
			</article>

			{/* conjunto diversos */}
			<article className={styles.conjunto}>
				<div className={styles.top}>
					<TituloProdutos nome={'Diversos'} />
					<VerTudo />

				</div>
				<div className={styles.produtos}>
				{diversos.map(dados =>{
						return (
							<Card {...dados} key={dados.id} />
						)
					})}
				</div>
			</article>
		</section>
	);
};


export default Produtos;
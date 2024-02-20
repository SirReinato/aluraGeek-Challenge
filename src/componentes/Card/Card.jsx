import { DetalhesProduto } from '../DetalhesProduto';
import styles from './Card.module.scss';
import { useDetalhesContext } from 'src/hook/useDetalhesContext';

const Card = ({ path, alt, nome, preco }) => {
	const { handleClick, handleClickFechar } = useDetalhesContext();

	return (
		<figure className={styles.card}>
			<img src={path} alt={alt} />
			<figcaption>{nome}
				<span>{preco}</span>
					<button
						onClick={() => handleClick({nome, path, preco})}
					>
						Ver Produto
					</button>
					<DetalhesProduto funcao={handleClickFechar}/>

			</figcaption>
		</figure>
	);
};


export default Card;
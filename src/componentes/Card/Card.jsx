import styles from './Card.module.scss';
import { useDetalhesContext } from 'src/hook/useDetalhesContext';

const Card = ({ path, alt, nome, preco }) => {
	const {addProdutoAoDetalhe} = useDetalhesContext();

	return (
		<figure className={styles.card}>
			<img src={path} alt={alt} />
			<figcaption>{nome}
				<span>{preco}</span>
				<button onClick={() => addProdutoAoDetalhe({nome, path, preco})}>Ver Produto</button>
			</figcaption>
		</figure>
	);
};


export default Card;
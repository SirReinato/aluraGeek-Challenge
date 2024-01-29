import styles from './Card.module.scss';

const Card = ({ path, alt, nome, preco }) => {
	return (
		<figure className={styles.card}>
			<img src={path} alt={alt} />
			<figcaption>{nome}
				<span>{preco}</span>
				<button>Ver Produto</button>
			</figcaption>
		</figure>
	);
};


export default Card;
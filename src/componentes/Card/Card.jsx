import styles from './Card.module.scss';

const Card = ({path, alt, nome, preco}) => {
	return (
		<figure className={styles.card}>
			<img src={path} alt={alt} />
 			<figcaption>{nome}</figcaption>
			<span>{preco}</span>
			<button>Ver Produto</button>
 		</figure>
	);
};


export default Card;
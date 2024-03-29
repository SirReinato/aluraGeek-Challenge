import { Link } from 'react-router-dom';
import styles from './VerTudo.module.scss';

const VerTudo = () => {
	return (
		<Link to={'/addProduto'}>
			<p className={styles.vertudo}>
				Ver tudo
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
					<g clipPath="url(#clip0_166_2677)">
						<path d="M2.66634 8.66665L10.7797 8.66665L7.05301 12.3933L7.99967 13.3333L13.333 7.99998L7.99968 2.66665L7.05968 3.60665L10.7797 7.33331L2.66634 7.33331L2.66634 8.66665Z" fill="#2A7AE4" />
					</g>
					<defs>
						<clipPath id="clip0_166_2677">
							<rect width="16" height="16" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</p>
		</Link>
	);
};


export default VerTudo;
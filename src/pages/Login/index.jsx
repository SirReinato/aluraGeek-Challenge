import styles from './Login.module.scss';

export default function Login() {
    return (
        <section>
            <form action="">
                <h3>Inicie Sessão</h3>
                <input type="text" placeholder='Escreva seu email' />
                <input type='password' placeholder='Escreva sua senha' />
                <button>Entrar</button>
            </form>
        </section>
    )
}
import { Outlet } from 'react-router-dom';
import styles from './PaginaPadrao.module.css';
import Header from 'src/componentes/Header';

export default function PaginaPadrao() {
    return (
        <main className={styles.conteiner}>
            <Header/>
            <Outlet/>
        </main>
    )
}
import { Outlet } from 'react-router-dom';
import styles from './PaginaPadrao.module.css';
import Header from 'src/componentes/Header';
import Footer from 'src/componentes/Footer/Footer';

export default function PaginaPadrao() {
    return (
        <>
            <Header />
            <main className={styles.conteiner}>
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}
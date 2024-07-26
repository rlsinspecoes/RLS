import React from 'react';
import styles from '../css/Home.module.css';
import homeImage from '../images/home.jpg';

function Home() {
    return (
        
        <div className={styles.home}>
            <section className={styles.home} id="home">
                <div className={styles.blocoHome}>
                    <div className={styles.image}>
                        <img src={homeImage} alt="" />
                    </div>
                    <div className={styles.content}>
                        <h3>Seja Bem-Vindo(a)</h3>
                        <h2>RLS INSPEÇÕES</h2>
                        <p>
                            Nossos empreendimentos e serviços abrangem uma ampla gama de setores, desde energia e engenharia até tecnologia e construção. Valorizamos muito essas parcerias e estamos comprometidos em continuar oferecendo soluções inovadoras e eficazes para atender às necessidades dos nossos clientes.
                        </p>
                    </div>
                </div>
            </section>
            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </div>
    );
}

export default Home;

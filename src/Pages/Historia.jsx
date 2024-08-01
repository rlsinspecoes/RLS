import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import img1 from '../images/sobre1.jpg';
import img2 from '../images/sobre2.jpg';
import styles from '../css/Historia.module.css';

function Historia() {
    useScrollAnimation();
    return (
        <div className={styles.historia}>
            <section className={styles.sobre} id="sobre">
                <div  className={styles.bloco}>
                    <div data-animate="right" className={styles.image}>
                        <img src={img1} alt="Sobre a RLS" />
                    </div>
                    <div  data-animate="left" className={styles.content}>
                        <h3>Mais de Uma Década de Excelência</h3>
                        <h2>A História da RLS Inspeções</h2>
                        <p>Há 10 anos, a RLS Inspeções, liderada por Rogério Lima Dos Santos, com uma vasta experiência de 35 anos, trouxe inovação para a indústria brasileira. Nossa principal preocupação é garantir a segurança no ambiente de trabalho. Buscamos constantemente a excelência, focando em soluções seguras e satisfatórias para nossos clientes. <br /> Cada projeto que realizamos reflete nosso compromisso com a qualidade e segurança. Não nos limitamos apenas ao sucesso comercial; também buscamos promover o desenvolvimento social e profissional, capacitando nossa equipe para atender melhor às necessidades dos clientes, fortalecer parcerias com nossos colaboradores e contribuir positivamente para a sociedade como um todo.</p>
                    </div>
                </div>
            </section>

            <section  className={styles.sobre2} id="sobre2">
                <div  className={styles.bloco} id='bloco2'> 
                    <div data-animate="left" className={styles.image}>
                        <img src={img2} alt="Satisfação Garantida" />
                    </div>
                    <div data-animate="right" className={styles.content}>
                        <h2>SATISFAÇÃO GARANTIDA</h2>
                        <p>Não nos limitamos apenas ao sucesso comercial; também buscamos promover o desenvolvimento social e profissional, capacitando nossa equipe para atender melhor às necessidades dos clientes, fortalecer parcerias com nossos colaboradores e contribuir positivamente para a sociedade como um todo. <br /> A mais de uma década de sucesso marcada por um ambiente de trabalho seguro e soluções excepcionais que superam as expectativas dos nossos clientes, impulsionando o progresso da indústria brasileira.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Historia;

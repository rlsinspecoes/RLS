import React from 'react';
import img3 from '../images/portfolio.jpg';
import styles from '../css/Portfolio.module.css'; // Crie um módulo CSS específico para o Portfolio

function Portfolio() {
    return (
        <div className={styles.principal}>
            <section className={styles.portfolio} id="portfolio">
                <div className={styles.portContent}>
                    <h2>NOSSO PORTIFÓLIO</h2>
                    <p>Temos uma longa história de parcerias bem-sucedidas com diversas empresas e organizações de renome, o que reflete nosso compromisso com a excelência e a prestação de serviços de alta qualidade. Algumas das empresas com as quais tivemos o privilégio de colaborar incluem:</p>
                    
                    <div className={styles.meio}>
                        <div className={styles.image}>
                            <img src={img3} alt="Portfólio" />
                        </div>
                        <ul>
                            <li>Construtora CPL</li>
                            <li>DAX Energy</li>
                            <li>Enel Brasil</li>
                            <li>ENIND Engenharia</li>
                            <li>Furukawa Electric LatAM</li>
                            <li>Inova Energy</li>
                            <li>Jock Woerner - Lubrificação Centralizada</li>
                            <li>John Zink Hamworthy Combustion</li>
                            <li>Laury Engenharia</li>
                            <li>SAIPEM</li>
                            <li>Tequaly</li>
                            <li>Texpi Equipamentos</li>
                            <li>Além das empresas mencionadas, nosso portfólio de clientes inclui muitos outros parceiros valiosos.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;

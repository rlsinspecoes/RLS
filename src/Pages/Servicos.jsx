import React from 'react';
import styles from '../css/Servicos.module.css'; // Importa o módulo CSS

function Servicos() {
    return (
        <div className={styles.servicos}>
            <section className={styles.home2} id="home2">
                <div className={styles.title2}>
                    <h2>NOSSOS SERVIÇOS</h2>
                    <p>A <span>RLS INSPEÇÕES LTDA</span> é composta por uma equipe técnica experiente e capacitada, dedicada a superar as expectativas dos clientes. Oferecemos soluções eficazes para melhorar processos produtivos e infraestrutura, com agilidade, qualidade, seriedade, ética e transparência em diversas áreas, tais como:</p>
                    <ul className={styles.serviços}>
                        <li>Instalações de Caldeiras</li>
                        <li>Inspeções de Fabricação</li>
                        <li>Inspeções Dimensionais</li>
                        <li>Inspeção de Pintura e Revestimentos</li>
                        <li>Inspeções de END (Ensaios Não Destrutivos)</li>
                        <li>Projetos e Instalações de Sistemas Contra Incêndio</li>
                        <li>Hidrantes e Sprinkler</li>
                        <li>Tubulações Industriais</li>
                        <li>Instalações de Aquecedores de Fluidos Térmicos</li>
                        <li>Fabricação e Instalação de Evaporadores e Secadores</li>
                        <li>Instalações Elétricas</li>
                        <li>Instalações de Equipamentos</li>
                        <li>Instalações de Utilidades</li>
                        <li>Isolamento Térmico</li>
                        <li>Fabricação e Instalação de Estruturas Metálicas</li>
                        <li>Equipe Especializada em Tubulação de Aço Inox OD</li>
                        <li>Inspeção de Solda em Geral</li>
                        <li>Controle de Qualidade em Todos os Processos Fabris (por exemplo, materiais, instrumentos, recebimento, acompanhamento, condicionamento, ensaio, avaliação e validação)</li>
                    </ul>
                    <a href="https://api.whatsapp.com/send/?phone=%2B5541999911928&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">FAZER ORÇAMENTO</a>
                </div>
            </section>
        </div>
    );
}

export default Servicos;

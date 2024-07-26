import React from 'react';
import '../css/Mediaquery.module.css';
import img_avatar from '../images/avatar2.1.jpg';
import img_avatar2 from '../images/contato.jpg';
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import styles from '../css/Contatos.module.css';

function Contatos() {
    return (
        <div className={styles.principal}>
            <section className={styles.hambiente}>
                <div className={styles.contato}>
                    <h1 className={styles.tituloContato}>CONTATOS</h1>
                    
                    <div className={styles.contact}> 
                        <div className={styles.leftSide}>
                            <div className={styles.adress}>
                                <MdOutlineMailOutline size={28} color='white'/>
                                <div className={styles.texto}>contato@rlsinspecoes.com.br</div>
                            </div>
                            <div className={styles.adress}>
                                <LuPhone size={28} color='white'/>          
                                <div className={styles.texto}>+55 (41) 99991-1928</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contact}>
                        <div className={styles.leftSide2}>
                            <div className={styles.adress}>
                                <img src={img_avatar} alt="" />
                                <div className={styles.topic}>Direção </div>
                                <div className={styles.texto}>
                                    <h3> Rogério Lima</h3>
                                    <div>rogerio@rlsinspecoes.com.br</div>
                                </div>
                            </div>
                            <div className={styles.adress}>
                                <img src={img_avatar2} alt="" />
                                <div className={styles.topic}>Comercial </div>
                                <div className={styles.texto}>
                                    <h3> Joseph Nixon</h3>
                                    <div>joseph@rlsinspecoes.com.br</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul className={styles.linksContato}>         
                        <a href="https://linkedin.com/rlsinspeçoes" target="_blank" rel="noopener noreferrer">
                            <li>LINKEDIN</li> 
                        </a>
                        <a href="mailto:contato@rlsinspecoes.com.br">
                            <li>EMAIL</li>    
                        </a>
                        <a href="https://instagram.com/rlsinspeçoes" target="_blank" rel="noopener noreferrer">
                            <li>INSTAGRAM</li>
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=%2B5541999911928&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                            <li className={styles.ultimo}>WHATSAPP</li>   
                        </a>
                    </ul>
                </div>
                <div className={styles.trabalheConosco}>
                    <h1 className={styles.titulo}>TRABALHE CONOSCO</h1>
                    <h2>ENVIE SEU CURRÍCULO:</h2>
                    <div className={styles.bloco}>
                        <span className={styles.assunto}>ASSUNTO: CV+NOME+PROFISSÃO</span>
                        <span className={styles.mensagem}>TEXTO: *BREVE APRESENTAÇÃO PROFISSIONAL ATUAL*</span>
                        <p>Anexar currículo em PDF.</p>
                    </div>
                    <a href="mailto:rh@rlsinspecoes.com.br" target="_blank" rel="noopener noreferrer">
                        <MdOutlineMailOutline size={30} color='white' />
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Contatos;

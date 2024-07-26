import React from 'react';
import { MdEmail } from "react-icons/md";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className="share">
                <a href="mailto:contato@rlsinspecoes.com.br" target="_blank" rel="noopener noreferrer">
                    <MdEmail className="icon"/>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <SiInstagram className="icon" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon" />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=%2B5541999911928&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="icon"/>
                </a>
            </div>
            <div className="credit">&copy; RLS | Todos os direitos reservados.</div>
        </footer>
    );
}

export default Footer;

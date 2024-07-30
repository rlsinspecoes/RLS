import React, { useEffect } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Nav() {
  useEffect(() => {
    const btnMenu = document.getElementById('btn-menu');
    const btnClose = document.getElementById('btn-close');
    const menu = document.getElementById('menu-mobile');
    const overlay = document.getElementById('overlay-menu');

    const openMenu = () => {
      menu.classList.add('abrir-menu');
    };

    const closeMenu = () => {
      menu.classList.remove('abrir-menu');
    };

    btnMenu.addEventListener('click', openMenu);
    btnClose.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    return () => {
      btnMenu.removeEventListener('click', openMenu);
      btnClose.removeEventListener('click', closeMenu);
      overlay.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/">
          <h1>RLS</h1>
        </Link>
      </div>
      
      <ul className="lista-desktop">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/serviços">SERVIÇOS</Link></li>
        <li><Link to="/historia">HISTÓRIA</Link></li>
        <li><Link to="/portfolio">PORTFÓLIO</Link></li>
        <li><Link to="/contatos">CONTATOS</Link></li>
      </ul>
      
      <div className="btn-abrir-menu" id="btn-menu">
        <VscThreeBars size={45}/>
      </div>

      <div className="menu-mobile" id="menu-mobile">
        <div className="btn-fechar" id="btn-close">
          <IoClose />
        </div>

        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/serviços">SERVIÇOS</Link></li>
            <li><Link to="/historia">HISTÓRIA</Link></li>
            <li><Link to="/portfolio">PORTFÓLIO</Link></li>
            <li><Link to="/contatos">CONTATOS</Link></li>
          </ul>
        </nav>
      </div>

      <div className="overlay-menu" id="overlay-menu"></div>
    </nav>
  );
}

export default Nav;

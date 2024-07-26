import React, { useEffect } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";

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
        <a href="index.html">
          <h1>RLS</h1>
        </a>
      </div>
      
      <ul className="lista-desktop">
        <li><a href="/">HOME</a></li>
        <li><a href="/serviços">SERVIÇOS</a></li>
        <li><a href="/historia">HISTÓRIA</a></li>
        <li><a href="/portfolio">PORTFÓLIO</a></li>
        <li><a href="/contatos">CONTATOS</a></li>
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
            <li><a href="/">HOME</a></li>
            <li><a href="/serviços">SERVIÇOS</a></li>
            <li><a href="/historia">HISTÓRIA</a></li>
            <li><a href="/portfolio">PORTFÓLIO</a></li>
            <li><a href="/contatos">CONTATOS</a></li>
          </ul>
        </nav>
      </div>

      <div className="overlay-menu" id="overlay-menu"></div>
    </nav>
  );
}

export default Nav;

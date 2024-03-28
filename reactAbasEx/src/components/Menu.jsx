import { useState, useEffect } from 'react';
import style from './Menu.module.css';

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = (event) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };

    const closeMenu = (event) => {
        if (!event.target.closest(`.${style['wrap-menu']}`) && !event.target.closest(`.${style['menu-button']}`)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        // Adicione o evento de clique ao documento, para que o menu possa ser fechado ao clicar fora
        document.addEventListener('click', closeMenu);

        // Limpe o evento quando o componente for desmontado
        return () => document.removeEventListener('click', closeMenu);
    }, []); // Removemos o isOpen das dependências para evitar adicionar/remover os eventos desnecessariamente

    return(
        <div>
            <div className={style['menu-button']} onClick={toggleMenu}>
                <div className={`${style.bar} ${isOpen ? style['change-bar1'] : ''}`}></div>
                <div className={`${style.bar} ${isOpen ? style['change-bar2'] : ''}`}></div>
                <div className={`${style.bar} ${isOpen ? style['change-bar3'] : ''}`}></div>
            </div>
            <div className={`${style['wrap-menu']} ${isOpen ? style['open'] : ''}`}>
                <p><a href={'/'}>Menu</a></p>
                <p><a href={'/'}>Tecnologias</a></p>
                <p><a href={'/media'}>Média</a></p>
                <p><a href={'/zap'}>Zap</a></p>
                <p><a href={'/ReB'}>Poké</a></p>
            </div>
        </div>
    );
}

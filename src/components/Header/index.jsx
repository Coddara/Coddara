import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import logo from '../../assets/logo.svg';

export default function Header() {
    const [tiltX, setTiltX] = useState(0);
    const [tiltY, setTiltY] = useState(0);

    useEffect(() => {
        const handleOrientation = (event) => {
            const { beta, gamma } = event; // Inclinação de frente para trás e lateral
            setTiltX(gamma); // Atualiza o estado com a inclinação lateral
            setTiltY(beta);  // Atualiza o estado com a inclinação de frente para trás
        };

        window.addEventListener('deviceorientation', handleOrientation);

        return () => {
            window.removeEventListener('deviceorientation', handleOrientation);
        };
    }, []);

    // Calcula o estilo do background com base na inclinação
    const backgroundStyle = {
        transform: `rotateX(${tiltY}deg) rotateY(${tiltX}deg)`,
        // Adicione mais estilos conforme necessário para criar o efeito de líquido
    };

    return (
        <header>
            <img src={logo} alt="logo" className={styles.logo} style={backgroundStyle}/>
        </header>
    );
}
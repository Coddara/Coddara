import React, { useRef, useEffect } from 'react';
import styles from './styles.module.css';


const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Ajusta o tamanho do canvas para cobrir a tela
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let painting = false;

    const startPosition = (e) => {
      painting = true;
      draw(e);
    };

    const finishedPosition = () => {
      painting = false;
      context.beginPath();
    };

    const draw = (e) => {
      if (!painting) return;
      context.lineWidth = 2;
      context.lineCap = 'round';

      // Desenha no canvas
      context.lineTo(e.clientX, e.clientY);
      context.stroke();
      context.beginPath();
      context.moveTo(e.clientX, e.clientY);
    };

    // Eventos para desenhar
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);

    // Limpa os event listeners no cleanup
    return () => {
      canvas.removeEventListener('mousedown', startPosition);
      canvas.removeEventListener('mouseup', finishedPosition);
      canvas.removeEventListener('mousemove', draw);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canv}/>;
};

export default Canvas;
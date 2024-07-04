import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFlip, EffectCards} from 'swiper/modules';
import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { InView, useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/bundle';

import reactLogo from '../../assets/reactLogo.svg';
import figmaLogo from '../../assets/figmaLogo.svg';
import vercelLogo from '../../assets/vercelLogo.svg';

import styles from './styles.module.css'



export default function Main() {
    const [ref0, inView0] = useInView({
        triggerOnce: false,
        threshold: 0
    });
    const [ref1, inView] = useInView({
        triggerOnce: false,
        threshold: 0 
    });
    const [ref2, inView2] = useInView({
        triggerOnce: false,
        threshold: 0.5
    });
    const [ref3, inView3] = useInView({
        triggerOnce: false,
        threshold: 0.5
    });
    const [ref4, inView4] = useInView({
        triggerOnce: false,
        threshold: 0.5
    });
    const [refLine1, inViewLine1] = useInView({
        triggerOnce: false,
        threshold: 0.5
    });
    const [refLine2, inViewLine2] = useInView({
        triggerOnce: false,
        threshold: 0.5
    });
    const [refLine3, inViewLine3] = useInView({
        triggerOnce: false,
        threshold: 0.5
    });
    const props = useSpring({
        opacity: inView ? 1 : 0,
  
        config: { duration: 1000 },
    });
    const propsTitle1 = useSpring({
        color: inView2? '#fff' : '#1e1e1e',
        opacity: inView2 ? 1 : 0,
        transform: inView2 ? 'translateX(0)' : 'translateX(-149px)',
        config: { duration: 500 },
    });
    const propsTitle2 = useSpring({
        color: inView3 ? '#fff' : '#1e1e1e',
        opacity: inView3 ? 1 : 0,
        transform: inView3 ? 'translateX(0)' : 'translateX(-149px)',
        config: { duration: 500 },
    });
    const propsTitle3 = useSpring({
        color: inView4 ? '#fff' : '#1e1e1e',
        opacity: inView4 ? 1 : 0,
        transform: inView4 ? 'translateX(0)' : 'translateX(-149px)',
        config: { duration: 500 },
    });
    const propsLine1 = useSpring({
        width: inViewLine1 ? '1px' : '0px',
        height: inViewLine1 ? '37rem' : '0rem',
        backgroundColor: inViewLine1 ? '#1e1e1e' : '#949494',
        config: { duration: 500 },
    });
    const propsLineAux = useSpring({
        width: inViewLine1 ? '1px' : '0px',
        height: inViewLine1 ? '37rem' : '0rem',
        backgroundColor: inViewLine1 ? '#1e1e1e' : '#949494',
        config: { duration: 1000 },
    });
    const propsLine2 = useSpring({
        width: inViewLine2 ? '1px' : '0px',
        height: inViewLine2 ? '37rem' : '0rem',
        config: { duration: 500 },
    });
    const propsLine3 = useSpring({
        width: inViewLine3 ? '1px' : '0px',
        height: inViewLine3 ? '37rem' : '0rem',
        config: { duration: 500 },
    });

    const propsContent1 = useSpring({
        opacity: inView2 ? 1 : 0,
        transform: inView2 ? 'translateX(0)' : 'translateX(-75px)',
        width: inView2 ? '100%' : '0%',
        borderRight: inView2 ? '1px solid #1e1e1e' : '0px solid #1e1e1e',
        config: { duration: 500 },
    });
    const propsContent2 = useSpring({
        opacity: inView3 ? 1 : 0,
        transform: inView3 ? 'translateX(0)' : 'translateX(-75px)',
        width: inView3 ? '100%' : '0%',
        borderRight: inView3 ? '1px solid #1e1e1e' : '0px solid #1e1e1e',
        config: { duration: 500 },
    });
    const propsContent3 = useSpring({
        opacity: inView4 ? 1 : 0,
        transform: inView4 ? 'translateX(0)' : 'translateX(-75px)',
        width: inView4 ? '100%' : '0%',
        borderRight: inView4 ? '1px solid #1e1e1e' : '0px solid #1e1e1e',
        config: { duration: 500 },
    });


    const backgroundC0 = useSpring({
        backgroundColor: inView4 ? '#1e1e1e' : '#fff',
        color: inView4 ? '#fff' : '#1e1e1e',
        config: { duration: 500 },
    })

    const backgroundC1 = useSpring({
        backgroundColor: inView2 ? '#1e1e1e' : '#fff',
        color: inView2 ? '#fff' : '#1e1e1e',
        config: { duration: 500 },
    }) 
    const backgroundC2 = useSpring({
        backgroundColor: inView3 ? '#1e1e1e' : '#fff',
        color: inView3 ? '#fff' : '#1e1e1e',
        config: { duration: 500 },
    })
    const backgroundC3 = useSpring({
        backgroundColor: inView4 ? '#1e1e1e' : '#fff',
        color: inView4 ? '#fff' : '#1e1e1e',
        config: { duration: 500 },
    })

    const [flipped0, set0] = useState(false);
    const [flipped1, set1] = useState(false);
    const [flipped2, set2] = useState(false);
    const [flipped3, set3] = useState(false);
    const [flipped4, set4] = useState(false);

    const { transform: transform0, opacity: opacity0 } = useSpring({
        opacity: flipped0 ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped0 ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });
    const { transform: transform1, opacity: opacity1 } = useSpring({
        opacity: flipped1 ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped1 ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });
    const { transform: transform2, opacity: opacity2 } = useSpring({
        opacity: flipped2 ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped2 ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });
    const { transform: transform3, opacity: opacity3 } = useSpring({
        opacity: flipped3 ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped3 ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });
    const { transform: transform4, opacity: opacity4 } = useSpring({
        opacity: flipped4 ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped4 ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });
    return (
        
        <div className={styles.mainPage}>
        <div className={styles.mCon}>
        <animated.div className={styles.sectionMenu}>
                <animated.div className={styles.menuCard1} ref={ref0} style={props}>
                <div className={styles.card0} onClick={() => set0(state => !state)}>
                        <animated.div
                            className={`${styles.cc} ${styles.back}`}
                            style={{ opacity: opacity0.to(o => 1 - o), transform: transform0 }}

                        />
                        <animated.div
                            className={`${styles.cc} ${styles.front}`}
                            style={{
                    
                            }}
                        />
                    </div>
                    
                </animated.div>

                <animated.div className={styles.menuCardsStyle} ref={ref1} style={props}>

                    <div className={styles.card1} onClick={() => set1(state => !state)}>
                        <animated.div
                            className={`${styles.c1} ${styles.back1}`}
                            style={{ opacity: opacity1.to(o => 1 - o), transform: transform1 }}
                        />
                        <animated.div
                            className={`${styles.c1} ${styles.front1}`}
                            style={{
                    
                            
                            
                            }}
                        />
                        
                    </div>
                    <animated.div className={styles.line} ref={ref1} style={props}></animated.div>
                    <div className={styles.card2} onClick={() => set2(state => !state)}>
                        <animated.div
                            className={`${styles.c2} ${styles.back2}`}
                            style={{ opacity: opacity2.to(o => 1 - o), transform: transform2 }}
                        />
                        <animated.div
                            className={`${styles.c2} ${styles.front2}`}
                            style={{
                    
                            
                            rotateX: '180deg',
                            }}
                        />
                    </div>
                    <animated.div className={styles.line} ref={ref1} style={props}></animated.div>
                    <div className={styles.card3} onClick={() => set3(state => !state)}>
                        <animated.div
                            className={`${styles.c3} ${styles.back3}`}
                            style={{ opacity: opacity3.to(o => 1 - o), transform: transform3}}
                        />
                        <animated.div
                            className={`${styles.c3} ${styles.front3}`}
                            style={{
                    
                            
                            rotateX: '180deg',
                            }}
                        />
                    </div>
                    <animated.div className={styles.line} ref={ref1} style={props}></animated.div>
                    <div className={styles.card4} onClick={() => set4(state => !state)}>
                        <animated.div
                            className={`${styles.c4} ${styles.back4}`}
                            style={{ opacity: opacity4.to(o => 1 - o), transform: transform4}}
                        />
                        <animated.div
                            className={`${styles.c4} ${styles.front4}`}
                            style={{
                    
                            
                            rotateX: '180deg',
                            }}
                        />
                    </div>


                </animated.div>

            </animated.div>
        </div>
        <animated.div  className={styles.mainContainer}>
            <animated.div className={styles.sectionTitle}>
                <animated.div style={backgroundC1} className={styles.projetar}>Projetar</animated.div>

                <animated.div style={backgroundC2} className={styles.construir}>construir</animated.div>

                <animated.div style={backgroundC3} className={styles.publicar}>publicar</animated.div>
            </animated.div>
            <div className={styles.sectionStep}>
                <div className={styles.step1}>
                    <div className={styles.step1Grid}>
                        <div className={styles.step1Img}><img src={figmaLogo} alt="" className={styles.imgSteps}/></div>
                        <animated.div ref={ref2} style={propsTitle1} className={styles.step1Text}>Com ferramentas para web design como o figma, são criados alguns templates, levando em consideração diferentes telas, dispositivos e requisitos estabelecidos pelo usuário final.</animated.div>
                        <animated.div ref={refLine1} style={propsLine1} className={styles.step1Line}>

                        </animated.div>
                        <animated.div style={propsContent1} className={styles.step1Content}></animated.div>
                    </div>
                    
                </div>
                <div className={styles.step2}>
                    <div className={styles.step2Grid}>
                        <div className={styles.step2Img}><img src={reactLogo} alt="" className={styles.imgSteps}/></div>
                        <animated.div ref={ref3} style={propsTitle2} className={styles.step2Text}>Desenvolvimento  de landpages de forma escalável, garantido a adição de novas funcionalidades de forma ágil e organizada com frameworks.</animated.div>
                        <animated.div ref={refLine2} style={propsLine2} className={styles.step2Line}>
                
                        </animated.div>
                        
                        <animated.div style={propsContent2} className={styles.step2Content}></animated.div>
                    </div>

                </div>
                <div className={styles.step3}>
                    <div className={styles.step3Grid}>
                        <div className={styles.step3Img}><img src={vercelLogo} alt="" className={styles.imgSteps}/></div>
                        <animated.div ref={ref4} style={propsTitle3} className={styles.step3Text}>Uma vez publicada, a pagina é monitorada com ferramentas que visam rastrear movimentações e o desempenho em situações adversas.</animated.div>
                        <animated.div ref={refLine3} style={propsLine3} className={styles.step3Line}>
                
                        </animated.div>
                        
                        <animated.div style={propsContent3} className={styles.step3Content}></animated.div>
                    </div>

                </div>
            </div>
        </animated.div>
        </div>

    )
}
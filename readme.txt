//Instalar o vite

npm install vite@latest
npm create vite@latest
cd vite-project
npm install
npm run dev

            <Swiper
            className={styles.swiper}
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFlip, EffectCards]}
                effect='cards'
                loop={true}
            >
                <main className={styles.main}>
                <SwiperSlide className={styles.a}>
                    <div className={styles.mainContainer1}>
                        <div className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad eos delectus.</div>
                        <button className={styles.btnMain1}>GITHUB</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.a}>
                    <div className={styles.mainContainer2}>
                        <div className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad eos delectus.</div>
                        <button className={styles.btnMain2}>GITHUB</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.a}>
                    <div className={styles.mainContainer3}>
                        <div className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad eos delectus.</div>
                        <button className={styles.btnMain3}>GITHUB</button>
                    </div>
                </SwiperSlide>
                </main> 
            </Swiper>
            <div className={styles.div2}>a</div>
"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
} from "../utils/motion";
import { TypingText } from "../components";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initiali="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
      <TypingText title="| A propos de Reactverse" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-[#C7C7C780]">
        Le <span className="font-extrabold text-white">Métaverse</span> est une
        nouveauté de l'avenir, où vous pourrez profiter du monde virtuel en vous
        sentant comme s'il était vraiment réel, vous pourrez ressentir ce que
        vous ressentez dans ce monde de métaverse, car c'est vraiment la{" "}
        <span className="font-extrabold text-white">folie du métaverse</span>{" "}
        d'aujourd'hui, en utilisant simplement des dispositifs de{" "}
        <span className="font-extrabold text-white">VR</span>, vous pourrez
        facilement explorer le monde du métaverse que vous voulez, transformer
        vos rêves en réalité.{" "}
        <span className="font-extrabold text-white">Explorez</span> la folie du
        métaverse en faisant défiler vers le bas.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;

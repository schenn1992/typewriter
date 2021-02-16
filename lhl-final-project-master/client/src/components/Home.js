import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Mars from '../images/mars.svg';
import Saturn from '../images/saturn.svg';
import Uranus from '../images/uranus.svg';

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222629;
`;

const Homepage = styled.div`
  display: grid;
  border: 2px solid #474b4f;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const Intro = styled.div`
  display: flex;
  border: 1px solid #474b4f;
  border-radius: 50px;
  color: #61892f;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;

  h1 {
    margin-bottom: 0.2rem;
    font-size: 2.2rem;
  }

  p {
    color: #fff;
    margin: 1.5rem 0;
    font-size: 4rem;
  }
`;

const Button = styled(motion.button)`
  padding: 0.8rem 3rem;
  color: #fff;
  font-size: 1.5rem;
  border: 1.5px solid #86c232;
  border-radius: 50px;
  background-color: #86c232;
  outline: none;
  cursor: pointer;
`;

const Image = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  max-width: 150px;
  max-height: 150px;
  animation: rotation 2s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

// container holding all images
const Images = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  ${Image}: nth-child(1) {
    top: 100px;
    left: 200px;
  }

  ${Image}: nth-child(2) {
    top: 400px;
    left: 100px;
  }

  ${Image}: nth-child(3) {
    bottom: 100px;
    left: 400px;
  }
`;

export default function Home() {
  const fade = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Section>
      <Homepage>
        <Intro>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Weather App
          </motion.h1>
          <motion.p
            variants={fade}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1.5 }}
          >
            JOURNEY TO THE UNKNOWN
          </motion.p>
          <Button
            whileHover={{ scale: 1.3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            Explore Here
          </Button>
        </Intro>
        <Images>
          <Image src={Mars} alt='Mars' />
          <Image src={Saturn} alt='Saturn' />
          <Image src={Uranus} alt='Uranus' />
        </Images>
      </Homepage>
    </Section>
  );
}

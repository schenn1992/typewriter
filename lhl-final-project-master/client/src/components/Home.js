import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Mars from '../images/mars.svg';
import Satellite from '../images/satellite.svg';
import Saturn from '../images/saturn.svg';
import Uranus from '../images/uranus.svg';

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222629;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #61892f;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;

  h1 {
    margin-bottom: 0.2rem;
    font-size: 2rem;
  }

  p {
    color: #fff;
    margin: 2rem 0;
    font-size: 4rem;
    ling-height: 1.1;
  }
`;

const Button = styled.div`
  padding: 0.9rem 2rem;
  color: #fff;
  font-size: 1.5rem;
  border: 2px solid #86c232;
  border-radius: 50px;
  background-color: #86c232;
  outline: none;
  cursor: pointer;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`;

// container holding all images
const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  ${Image}: nth-child(1) {
    top: 10px;
    left: 10px;
  }

  ${Image}: nth-child(2) {
    top: 180px;
    left: 260px;
  }

  ${Image}: nth-child(3) {
    top: 400px;
    left: 10px;
  }

  ${Image}: nth-child(4) {
    bottom: 50px;
    left: 250px;
  }
`;

export default function Home() {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>Weather App</h1>
          <p>JOURNEY TO THE UNKNOWN</p>
          <Button>Press Enter</Button>
        </ColumnLeft>
        <ColumnRight>
          <Image src={Mars} alt='Mars' />
          <Image src={Satellite} alt='Satellite' />
          <Image src={Saturn} alt='Saturn' />
          <Image src={Uranus} alt='Uranus' />
        </ColumnRight>
      </Container>
    </Section>
  );
}

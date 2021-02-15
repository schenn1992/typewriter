import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #25274d;
`;

const Container = styled.div`
  display: grid;
  grid-tempplate-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem;
`;

export default function Hero() {
  return (
    <Section>
      <Container>Hello</Container>
    </Section>
  );
}

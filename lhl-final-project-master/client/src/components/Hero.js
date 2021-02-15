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

export default function Hero() {
  return (
    <Section>
      <Container></Container>
    </Section>
  );
}

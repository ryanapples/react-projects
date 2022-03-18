import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 300px;
  background-color: var(--black);
`;

const SectionHeader = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--white);
  margin: 0;
  font-size: 40px;
`;

function Hero() {
  return (
    <Section>
      <SectionHeader>React Projects</SectionHeader>
    </Section>
  );
}

export default Hero;

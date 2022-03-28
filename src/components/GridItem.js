import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  text-align: center;
  padding: 80px 20px;
  border: 1px solid var(--black);
  border-radius: 5px;
`;

function GridItem({ project }) {
  return <Item>{project.title}</Item>;
}

export default GridItem;

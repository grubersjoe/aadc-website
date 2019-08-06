import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.25rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
  }
`;

const ImageGrid = props => <Grid {...props}>{props.children}</Grid>;

export default ImageGrid;

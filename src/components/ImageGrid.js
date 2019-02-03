import React from 'react';
import PropTypes from 'prop-types';
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

const ImageGrid = props => (
  <Grid {...props}>
    {props.children}
  </Grid>
);

ImageGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ImageGrid;

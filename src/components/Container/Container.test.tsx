import React from 'react'
import { render, screen } from '@testing-library/react'
import Container from './index';

describe('<Container />', () => {
  it('shows children', () => {
    render(<Container>test</Container>);
    expect(screen.getByText('test')).toBeInTheDocument()
    
  });
});

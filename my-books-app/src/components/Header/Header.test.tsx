import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react'
import Header from '.';

test('Header should be rendered', () => {
    render(<Header>test</Header>)

    expect(screen.getByText('test')).toBeInTheDocument();
})
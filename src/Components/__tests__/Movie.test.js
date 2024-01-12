import {render, screen, cleanup} from '@testing-library/react';
import Movie from '../Movie';


test('Should render Movie Component', () => {
    render(<Movie/>);
    const MovieElement = screen.getByTestId('movie-1');
    expect(MovieElement).toBeInTheDocument();
})
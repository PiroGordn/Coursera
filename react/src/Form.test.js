import { getByText, getbyLabelText, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from 'react-router-dom';
import BookForm from './Form.js';

test('testing the form', () => {
    render(<BookForm/>)
    const fname = screen.getByTestId("fname");
})
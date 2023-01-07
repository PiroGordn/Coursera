import { getByText, getbyLabelText, render, screen, fireEvent, getByRole} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from 'react-router-dom';
import BookForm from './Form.js';

test('testing first name', () => {
    render(<BookForm/>)
    const fname = screen.getByTestId("fname");
})
test('testing last name', () => {
    render(<BookForm/>)
    const lname = screen.getByTestId("lname");
})
test('testing email', () => {
    render(<BookForm/>)
    const email = screen.getByTestId("email");
})
test('testing date', () => {
    render(<BookForm/>)
    const date = screen.getByTestId("date");
})
test('testing time', () => {
    render(<BookForm/>)
    const time = screen.getByTestId("time");
})

test('testing button', () => {
    render(<BookForm/>)
    const btn = screen.getByTestId("button");
    fireEvent.click(btn);
})

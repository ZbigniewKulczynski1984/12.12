import { render, screen } from '@testing-library/react';
import { TodoList } from './todoList';

const setup = () => render(<TodoList text="mockTest" />);

describe('TodoList.tsx', () => {
    
	test('title is rendered', () => {
		//component render
		setup()

		//logic test
		const title = screen.getByText(/todo list/i);

		//test check
		expect(title.innerHTML).toEqual('Todo List');
	});

	test('testProp is rendered', () => {
		setup()

		const textProp = screen.getByText('mockTest');

		expect(textProp.innerHTML).toEqual('mockTest');
	});

	test('click me button is rendered', () => {
		setup()

		const button = screen.getAllByRole('button');

		expect(button.length).toEqual(3);
	});

	test('clickMe button is rendered', () => {
		setup()

		const clickMeButton = screen.getByTestId('clickMe');

		expect(clickMeButton).toBeInTheDocument();
	});
});

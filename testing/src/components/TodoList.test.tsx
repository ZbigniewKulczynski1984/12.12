import { render, screen } from '@testing-library/react';
import { TodoList } from './todoList';

const setup = (text: string) => render(<TodoList text={text} />);

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
		setup('mockTest2')

		const textProp = screen.getByText('mockTest');

		expect(textProp.innerHTML).toEqual('mockTest');
	});

	test('click me button is rendered', () => {
		setup('mockTest')

		const button = screen.getAllByRole('button');

		expect(button.length).toEqual(3);
	});

	test('clickMe button is rendered', () => {
		setup('mockTest')

		const clickMeButton = screen.getByTestId('clickMe');

		expect(clickMeButton).toBeInTheDocument();
	});
});

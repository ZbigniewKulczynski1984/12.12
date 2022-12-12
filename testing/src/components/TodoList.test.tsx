import { fireEvent, render, screen } from '@testing-library/react';
import { TodoList } from './todoList';

const setup = (text: string) => render(<TodoList text={text} />);

describe('TodoList.tsx', () => {
    
	test('title is rendered', () => {

		//component render
		setup('mockTest')

		//logic test
		const title = screen.getByText(/todo list/i);

		//test check
		expect(title.innerHTML).toEqual('Todo List');
	});

	test('testProp is rendered', () => {
		setup('mockTest2')

		const textProp = screen.getByText('mockTest2');

		expect(textProp.innerHTML).toEqual('mockTest2');
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

    test('is lorem is visible after click', ()=> {
        setup('mockTest')
        
        const lorem =  screen.getByTestId('lorem')
        fireEvent.click(screen.getByTestId('clickMe'))

    expect(lorem).toBeInTheDocument()
    })
});

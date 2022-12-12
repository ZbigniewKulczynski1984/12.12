import { render, screen } from "@testing-library/react"
import { TodoList } from "./todoList"

describe('TodoList.tsx', () => {
    
    test('title is rendered', () => {


        render(<TodoList text='mocktest' />)

        //logic test
        const title = screen.getByText(/todo list/i);

        //test check
        expect(title.innerHTML).toEqual('Todo List');
    })

    test('testProp is rendered', () => {
        render(<TodoList text='mockTest' />)

        const textProp = screen.getByText('mockTest')

        expect(textProp.innerHTML).toEqual('mockTest')
    })

    test('click me button is rendered', () => {
        render(<TodoList text='mocktest' />)

        const button = screen.getAllByRole('button');

        expect(button.length).toEqual(2);
    })
})
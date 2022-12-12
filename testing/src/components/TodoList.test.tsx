import { render, screen } from "@testing-library/react"
import { TodoList } from "./todoList"

describe('TodoList.tsx', () => {
    
    test('title is rendered', () => {
        render(<TodoList />)

        const title = screen.getByText(/todo list/i);
        
        expect(title.innerHTML).toEqual('Todo List');
    })

    test('testProp is rendered', () => {
        render(<TodoList text='mockTest' />)

        const textProp = screen.getByText('mockTest')

        expect(textProp.innerHTML).toEqual('mockTest')
    })
})
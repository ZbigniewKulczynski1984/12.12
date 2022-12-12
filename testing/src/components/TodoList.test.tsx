import { render } from "@testing-library/react"
import { TodoList } from "./todoList"

describe('TodoList.tsx', () => {
    test('title is rendered', () => {
        render(<TodoList />)

    })
})
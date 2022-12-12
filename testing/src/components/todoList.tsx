import { useState } from "react"

interface TodoListProps {
    text: string
}

export const TodoList = ({ text}: TodoListProps) => {
    const [isVisible, setIsVisible] = useState(false)
    //handle Click
    const handleClick = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div>
            <p>Todo List</p>
            <p>{text}</p>
            <button>Click me</button>
            <button data-testid="clickMe" onClick={handleClick}>Click me</button>
            <button>Click me</button>
            {isVisible && (
            <p data-testid="clickMe">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore omnis, soluta tempora inventore minus voluptas voluptate ratione qui quis rem, ipsam asperiores enim nemo voluptatem nesciunt quas eveniet vero. Blanditiis!</p>
            )}
            
        </div>
    )
}
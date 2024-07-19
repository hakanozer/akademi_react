export const validateInput = (inputRef: React.RefObject<HTMLInputElement>) => {
    if (inputRef !== null && inputRef.current !== null) {
        inputRef.current.focus()
        //inputRef.current.style.backgroundColor = 'red'
        //inputRef.current.style.borderColor = 'red'
        //inputRef.current.insertAdjacentHTML("afterend", '<p>Empty!</p>')
    }
}
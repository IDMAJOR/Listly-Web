import { FormContainer, Input, Button } from "./style"

function Form({input, setInput, addTodo}){
    function handleOnChange(e){
        setInput(e.target.value);
    }
    function onSubmit(e){
        addTodo(e);
    }
    return(
        <FormContainer>
            <Input 
                onChange={handleOnChange}
                value={input}
                type="text"
                role="input"
            />
            <Button type="submit" onClick={onSubmit} >Add</Button>
        </FormContainer>
    )
}

export default Form
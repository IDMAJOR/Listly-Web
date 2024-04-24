import { FormContainer, Input, Button } from "./style"

function Form({input, setInput}){
    function handleOnChange(e){
        setInput(e.target.value);
    }
    return(
        <FormContainer>
            <Input 
                onChange={handleOnChange}
                value={input}
                type="text"
                role="input"
            />
            <Button type="submit">Add</Button>
        </FormContainer>
    )
}

export default Form
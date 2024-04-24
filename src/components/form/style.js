import style from 'styled-components'

export const FormContainer = style.form`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 0px;
    @media (max-width: 420px){
        flex-direction: column;
    }
`;

export const Input = style.input`
    background-color: whitesmoke;
    width: 100%;
    padding: 8px;
    border: 1px solid rgba(245, 245, 245, 0.24);
    border-radius: 8px;
    outline: none;

    &:focus{
        border: 3px solid whitesmoke;
        background-color: black;
        color: whitesmoke;
    }
`;

export const Button = style.button`
    background: whitesmoke;
    border-radius: 15px;
    border: 2px solid black;
    margin-left: 1em;
    cursor: pointer;
    padding: 8px 20px;
    font-size: 0.8rem;
    font-weight: 600;
    @media (max-width: 420px){
        margin-top: 10px;
        margin-left: 0;
        width: 100%
    }
`;
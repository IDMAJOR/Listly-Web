import style from 'styled-components'

export const ListContainer = style.ul`
    padding: 0;
    cursor: pointer;
`

export const List = style.li`
    display: flex;
    align-items: ceneter;
    justify-content: space-between;
    padding: 8px 0;
    font-size: 1rem;
`

export const Text = style.span`
    color: whitesmoke;
    &::first-letter {
        text-transform: capitalize;
    }
    color: ${ (props) => props.isCompleted ? 'green' : null};
    text-decoration: ${(props) => props.isCompleted ? 'line-through' : 'none'};
`

export const Delete = style(Text)``
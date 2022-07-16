import styled from "styled-components";

export const StyledButton = styled.button`
    margin: auto;
    margin-top: 5px;
    display: block;
    color: white;
    background-color: rgb(95, 0, 0);
    padding: 5px;
    width: 100px;
    border-radius: 10px;
    border: none;

    &:hover{
        background-color: rgba(95, 0, 0, 0.705);
    }

    &:active{
        background-color: rgba(95, 0, 0, 0.466);
    }
`;

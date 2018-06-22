import styled from "styled-components";


export default styled.button`
    &:hover {
        background: #34b372;
        color: #fff;
    }
    &:focus {
        outline: none;
    }
    width: 50%;
    height: 60px;
    color: #34b372;
    background: #fff;
    align-self: center;
    transition: .2s;
    border: 2px solid #34b372;
`
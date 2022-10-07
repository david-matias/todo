import styled from "styled-components";

export const Conteiner = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;

    .image{
        margin-right: 5px;
        font-size: 16pt;
        font-weight: 600;
        color: #fff;
    }

    input{
        border: 0px;
        background: transparent;
        outline: 0;
        color: #fff;
        font-size: 18px;
        flex: 1;
    }
`;
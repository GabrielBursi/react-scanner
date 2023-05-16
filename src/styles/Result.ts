import { styled } from "styled-components";

export const ContainerResult = styled.div`
    position: fixed;
    bottom: 20px;
    left: 20px;
    right: 20px;

    background-color: #fff;
    border-radius: 12px;

    a{
        display: block;
        text-decoration: none;
        color: #000;
        padding: 20px;
    }

    @media (min-width: 320px) and (max-width: 480px){
        a{
            padding: 10px;
        }
    }
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

export const Cover = styled.img`
    height: 115px;
    margin-right: 15px;

    @media (min-width: 320px) and (max-width: 480px) {
        height: 90px;
        margin-right: 10px;
    }
`

export const Info = styled.img`
    flex: 1;
    display: flex;
    flex-direction: column;

    .name{
        font-size: 18px;
        margin-bottom: 10px;
    }
    
    .discount{
        text-decoration: line-through;
        color: #7f8c8d;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        .name{
            font-size: 12px;
            margin-bottom: 5px;
        }

        .book-rating{
            font-size: 12px;
        }

        .price{
            font-size: 12px;
        }
    }
`

export const ActionsButtons = styled.div`
    margin-left: 5px;
    padding: 0;

    .button {
        display: block;
        background-color: #2ecc71;
        border-radius: 5px;
        line-height: 0;
    }
`
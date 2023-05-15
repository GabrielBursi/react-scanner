import { styled } from "styled-components";

export const Video = styled.div`
    video {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;

        canvas {
            display: none;
        }
    }
`

export const ScanMarker = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .label{
        color: #fff;
        font-size: 14px;
        font-style: italic;
        margin-top: 20px;
    }
`
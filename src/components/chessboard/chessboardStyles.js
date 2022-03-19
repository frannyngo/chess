import styled from "styled-components";

export const ChessboardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 85px);
    grid-template-rows: repeat(8, 85px);
    margin: 20px;
    border: 25px solid #333;
`

export const DarkTile = styled.div`
    background-color: #999;
`

export const WhiteTile = styled.div`
    background-color: #fff;
`
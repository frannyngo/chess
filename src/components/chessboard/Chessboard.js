import React from "react";
import {
    ChessboardContainer,
    DarkTile,
    WhiteTile,
} from './chessboardStyles'
import Tile from "./Tile";

const verticalAxis = ['8', '7', '6', '5', '4', '3', '2', '1']
const horizontalAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

export default function Chessboard() {
    let board = []
    
    verticalAxis.forEach((piece, i) => {
        horizontalAxis.forEach((pce, index) => {
            const count = i + index + 2;
            const value = piece + pce
            if (count % 2 === 0) {
                board.push(
                    <Tile value={value} isWhite={false}/>
                )
            } else {
                board.push(
                    <Tile value={value} isWhite={true}/>
                )
            }
        });
    });

    return (
        <ChessboardContainer>{board}</ChessboardContainer>
    );
}
import React from "react";
import {
    ChessboardContainer,
} from './chessboardStyles'
import Tile from "./Tile";
import renderPieces from "../../services/functions/renderPieces";
import Piece from "../chessPiece/Piece";

const verticalAxis = ['8', '7', '6', '5', '4', '3', '2', '1']
const horizontalAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

export default function Chessboard() {
    let board = []
    const pieces = renderPieces()

    function onClick(value, x, y) {
        console.log('name:', value, 'y:', y, 'x:', x)
    }

    verticalAxis.forEach((piece, i) => {
        horizontalAxis.forEach((pce, index) => {
            const count = i + index + 2;
            const value = piece + pce
            const chessPiece = pieces.find((piece) => {
                return piece.x === index + 1 && piece.y === i + 1
            })
            if (count % 2 === 0) {
                board.push(
                    <Tile 
                        key={value} 
                        onClick={onClick} 
                        data={{
                            value, 
                            isWhite: false, 
                            spotTaken: chessPiece? true : false, 
                            x: index + 1, 
                            y: i + 1,
                            image: chessPiece? <Piece data={{
                                name: chessPiece.name, 
                                isWhite: chessPiece.isWhite, 
                                x: chessPiece.x, 
                                y: chessPiece.y
                            }} onClick={onClick}
                            /> : undefined,
                        }}
                    />
                );
            } else {
                board.push(
                    <Tile 
                        key={value} 
                        onClick={onClick} 
                        data={{
                            value, 
                            isWhite: true, 
                            spotTaken: chessPiece? true : false, 
                            x: index + 1, 
                            y: i + 1,
                            image: chessPiece? <Piece data={{
                                name: chessPiece.name, 
                                isWhite: chessPiece.isWhite, 
                                x: chessPiece.x, 
                                y: chessPiece.y
                            }} onClick={onClick}
                            /> : undefined,
                        }}
                    />
                );
            }
        });
    });

    return (
        <ChessboardContainer>{board}</ChessboardContainer>
    );
}
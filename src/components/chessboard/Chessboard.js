import React, { useEffect } from "react";
import {
    ChessboardContainer,
} from './chessboardStyles'
import Tile from "./Tile";

const verticalAxis = ['8', '7', '6', '5', '4', '3', '2', '1']
const horizontalAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']


export default function Chessboard() {
    let board = []

    function onClick(value, x, y) {
        console.log('tile:', value, 'x:', x, 'y:', y)
    }

    verticalAxis.forEach((piece, i) => {
        horizontalAxis.forEach((pce, index) => {
            const count = i + index + 2;
            const value = piece + pce
            if (count % 2 === 0) {
                board.push(
                    <Tile 
                        key={value} 
                        onClick={onClick} 
                        data={{
                            value, 
                            isWhite: false, 
                            spotTaken: false, 
                            x: 0, 
                            y: 0
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
                            spotTaken: false, 
                            x: 0, 
                            y: 0
                        }}
                    />
                );
            }
        });
    });

    useEffect(() => {
        // const find = board.find((tile) => {
        //     return tile.props.spotTaken === false
        // })
        // console.log(board[0].props.data.x)
    }, [])

    return (
        <ChessboardContainer>{board}</ChessboardContainer>
    );
}
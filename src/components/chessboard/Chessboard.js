import React, { useEffect, useState } from "react";
import {
    ChessboardContainer,
} from './chessboardStyles'
import Tile from "./Tile";
import renderPieces from "../../services/functions/renderPieces";
import Piece from "../chessPiece/Piece";
import movePiece from "../../services/functions/movePiece";
import findPiece from "../../services/functions/findPiece";
import findTile from "../../services/functions/findTile";

const verticalAxis = ['8', '7', '6', '5', '4', '3', '2', '1']
const horizontalAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

export default function Chessboard() {
    const [selectedPiece, setSelectedPiece] = useState()
    const [selectedTile, setSelectedTile] = useState()
    const [chessboard, setChessboard] = useState()
    let board = []
    const pieces = renderPieces()

    function onClick(data) {
        if (data.name) {
            setSelectedPiece(data)
        } else if (selectedPiece && data.tile) {
            setSelectedTile(data)
        } else {}
    }

    verticalAxis.forEach((piece, i) => {
        horizontalAxis.forEach((pce, index) => {
            const count = i + index + 2;
            const tile = piece + pce
            const chessPiece = findPiece(pieces, i + 1, index + 1)

            if (count % 2 === 0) {
                board.push(
                    <Tile 
                        key={tile} 
                        onClick={onClick} 
                        data={{
                            tile, 
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
                        key={tile} 
                        onClick={onClick} 
                        data={{
                            tile, 
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

    // board array is changing, image is being removed. but screen not updating?
    useEffect(() => {
        // if (selectedPiece && selectedTile) { console.log(selectedPiece, 'to', selectedTile)}
        if (selectedPiece && selectedTile) {
            const currentTile = findTile(board, selectedPiece.y, selectedPiece.x)
            console.log('image before: ', currentTile.props.data.image)
            board = movePiece(selectedPiece, selectedTile, board)
            const oldTile = findTile(board, selectedPiece.y, selectedPiece.x)
            console.log('image after: ', oldTile.props.data.image)

            setSelectedPiece(undefined)
            setSelectedTile(undefined)
        }
    }, [selectedPiece, selectedTile])
    
    return (
        <ChessboardContainer>{board}</ChessboardContainer>
    );
}

    //     newBoard.find((t) => {
    //        if (t.props.data.x === selectedPiece.x && t.props.data.y === selectedPiece.y) {
    //             console.log('found')
    //             console.log(t)
    //        }
    //    })
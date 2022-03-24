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
    let selectedPiecesPot = []

    function onClick(data) {
        if (data.name) {
            selectedPiecesPot.push(data)
        } else if (selectedPiecesPot.length === 1 && data.tile && data.spotTaken === false) {
            selectedPiecesPot.push(data)
        } else {}
        if (selectedPiecesPot.length === 2) {
            setSelectedPiece(selectedPiecesPot[0])
            setSelectedTile(selectedPiecesPot[1])
        }
    }

    function startGame() {
        let board = []
        const pieces = renderPieces()
        
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
        setChessboard(board)
    };

    useEffect(() => {
        if (!chessboard) {
            console.log('starting game...')
            startGame()
        } else {
            console.log(chessboard)
        }
    }, [chessboard])

    // board array is changing, image is being removed. but screen not updating?
    useEffect(() => {
        if (selectedPiece && selectedTile) { console.log(selectedPiece, 'to', selectedTile)}
        if (chessboard && selectedPiece && selectedTile) {
            const currentTile = findTile(chessboard, selectedPiece.y, selectedPiece.x)
            console.log('image before: ', currentTile.props.data.image)
            setChessboard(movePiece(selectedPiece, selectedTile, chessboard))
            const oldTile = findTile(chessboard, selectedPiece.y, selectedPiece.x)
            console.log('image after: ', oldTile.props.data.image)

            setSelectedPiece(undefined)
            setSelectedTile(undefined)
        }
    }, [selectedPiece, selectedTile])

    
    return (
        <ChessboardContainer>{chessboard}</ChessboardContainer>
    );
}

    //     newBoard.find((t) => {
    //        if (t.props.data.x === selectedPiece.x && t.props.data.y === selectedPiece.y) {
    //             console.log('found')
    //             console.log(t)
    //        }
    //    })
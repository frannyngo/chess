import React, { useEffect, useState } from "react";
import { ChessboardContainer } from "./chessboardStyles";
import Tile from "./Tile";
import renderPieces from "../../services/functions/renderPieces";
import Piece from "../chessPiece/Piece";
import movePiece from "../../services/functions/movePiece";
import findPiece from "../../services/functions/findPiece";
const verticalAxis = ["8", "7", "6", "5", "4", "3", "2", "1"];
const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];

export default function Chessboard() {
  const [selectedPiece, setSelectedPiece] = useState();
  const [selectedTile, setSelectedTile] = useState();
  const [chessboard, setChessboard] = useState();
  let selectedPiecesPot = [];

  // moving an already moved piece does nothing..
  // selectedPiecesPot resets for some reason.
  function onClick(data) {
    console.log("===================>");
    console.log(data.tile ? data.tile : data.name);
    console.log(data);
    console.log("spot taken: ", data.spotTaken);
    console.log("pot length: ", selectedPiecesPot.length);
    if (data.name && selectedPiecesPot.length === 0) {
      console.log("found piece, pushing.");
      selectedPiecesPot.push(data);
    } else if (
      selectedPiecesPot.length === 1 &&
      data.tile &&
      data.spotTaken === false
    ) {
      console.log("found tile, pushing.");
      selectedPiecesPot.push(data);
    } else {
    }
    console.log("pot length after: ", selectedPiecesPot.length);

    if (selectedPiecesPot.length === 2) {
      console.log("pot length is 2");
      setSelectedPiece(selectedPiecesPot[0]);
      setSelectedTile(selectedPiecesPot[1]);
      selectedPiecesPot = [];
    }
  }

  function startGame() {
    let board = [];
    const pieces = renderPieces();

    verticalAxis.forEach((piece, i) => {
      horizontalAxis.forEach((pce, index) => {
        const count = i + index + 2;
        const tile = piece + pce;
        const chessPiece = findPiece(pieces, i + 1, index + 1);

        if (count % 2 === 0) {
          board.push(
            <Tile
              key={tile}
              onClick={onClick}
              data={{
                tile,
                isWhite: false,
                spotTaken: chessPiece ? true : false,
                x: index + 1,
                y: i + 1,
                image: chessPiece ? (
                  <Piece
                    data={{
                      name: chessPiece.name,
                      isWhite: chessPiece.isWhite,
                      x: chessPiece.x,
                      y: chessPiece.y,
                    }}
                    onClick={onClick}
                  />
                ) : undefined,
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
                spotTaken: chessPiece ? true : false,
                x: index + 1,
                y: i + 1,
                image: chessPiece ? (
                  <Piece
                    data={{
                      name: chessPiece.name,
                      isWhite: chessPiece.isWhite,
                      x: chessPiece.x,
                      y: chessPiece.y,
                    }}
                    onClick={onClick}
                  />
                ) : undefined,
              }}
            />
          );
        }
      });
    });
    setChessboard(board);
  }

  useEffect(() => {
    if (!chessboard) {
      startGame();
    }
  }, [chessboard]);

  // board array is changing, image is being removed. but screen not updating?
  useEffect(() => {
    if (chessboard && selectedPiece && selectedTile) {
      setChessboard(
        movePiece(selectedPiece, selectedTile, chessboard, onClick)
      );
      setSelectedPiece();
      setSelectedTile();
    }
  }, [selectedPiece, selectedTile, chessboard]);

  return <ChessboardContainer>{chessboard}</ChessboardContainer>;
}

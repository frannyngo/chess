import React from "react";
import findTile from "./findTile";
import Piece from "../../components/chessPiece/Piece";
import Tile from "../../components/chessboard/Tile";

export default function movePiece(piece, tile, board, onClick) {
  const tileToMove = findTile(board, tile.y, tile.x);
  const currentTile = findTile(board, piece.y, piece.x);

  if (!tileToMove.props.data.spotTaken) {
    const newBoard = board.map((tile) => {
      if (tile === currentTile) {
        return (
          <Tile
            key={tile.key}
            onClick={onClick}
            data={{
              tile: tile.props.data.tile,
              isWhite: tile.props.data.isWhite,
              spotTaken: false,
              y: tile.props.data.y,
              x: tile.props.data.x,
              image: undefined,
            }}
          />
        );
      }
      return tile;
    });

    const newPieceOnBoard = newBoard.map((tile) => {
      if (tile === tileToMove) {
        return (
          <Tile
            key={tile.key}
            onClick={onClick}
            data={{
              tile: tile.props.data.tile,
              isWhite: tile.props.data.isWhite,
              spotTaken: true,
              y: tile.props.data.y,
              x: tile.props.data.x,
              image: (
                <Piece
                  data={{
                    name: piece.name,
                    isWhite: piece.isWhite,
                    y: tileToMove.props.data.y,
                    x: tileToMove.props.data.x,
                  }}
                  onClick={onClick}
                />
              ),
            }}
          />
        );
      }
      return tile;
    });

    return newPieceOnBoard;
  }
  return false;
}

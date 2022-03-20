import React from "react";
import {
    DarkTile,
    WhiteTile,
} from './chessboardStyles'

// data: {
//     isWhite: false, 
//     spotTaken: chessPiece? true : false, 
//     x: index + 1, 
//     y: i + 1,
//     image: chessPiece? <Piece data={{
//         name: chessPiece.name, 
//         isWhite: chessPiece.isWhite, 
//         x: chessPiece.x, 
//         y: chessPiece.y
//     }

export default function Tile({data, onClick}) {
    if (data.isWhite) {
        return (
            <WhiteTile x={data.x} y={data.y}
                onClick={() => {onClick(data)}}
            >
                {data.image}
            </WhiteTile>
        );
    } else {
        return (
            <DarkTile x={data.x} y={data.y}
                onClick={() => {onClick(data)}}
            >
                {data.image}
            </DarkTile>
        );
    }
}
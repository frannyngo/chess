import React from "react";
import {
    DarkTile,
    WhiteTile,
} from './chessboardStyles'

export default function Tile({data, onClick}) {
    if (data.isWhite) {
        return (
            <WhiteTile x={data.x} y={data.y}
                onClick={() => {onClick(data.value, data.x, data.y)}}
            >
                {data.image}
            </WhiteTile>
        );
    } else {
        return (
            <DarkTile x={data.x} y={data.y}
                onClick={() => {onClick(data.value, data.x, data.y)}}
            >
                {data.image}
            </DarkTile>
        );
    }
}
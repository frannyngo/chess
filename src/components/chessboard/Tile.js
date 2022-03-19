import React from "react";
import {
    DarkTile,
    WhiteTile,
} from './chessboardStyles'


export default function Tile({value, isWhite}) {
    if (isWhite) {
        return <WhiteTile>{value}</WhiteTile>
    } else {
        return <DarkTile>{value}</DarkTile>
    }
}
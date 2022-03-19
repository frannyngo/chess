import React from "react";
import {
    DarkTile,
    WhiteTile,
} from './chessboardStyles'

export default function Tile({data, onClick}) {
    if (data.isWhite) {
        return (
            <WhiteTile 
            onClick={() => {onClick(data.value, data.x, data.y)}}
            ref={element => {
                if (!element) return; 
                data.x = element.getBoundingClientRect().x
                data.y = element.getBoundingClientRect().y
            }}/>
        );
    } else {
        return (
            <DarkTile 
            onClick={() => {onClick(data.value, data.x, data.y)}}
            ref={element => {
                if (!element) return; 
                data.x = element.getBoundingClientRect().x
                data.y = element.getBoundingClientRect().y
            }}/>
        );
    }
}
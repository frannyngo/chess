import React from 'react'
import DarkKing from '../../assets/images/DarkKing.svg'
import WhiteKing from '../../assets/images/WhiteKing.svg'
import WhiteQueen from '../../assets/images/LightQueen.svg'
import DarkQueen from '../../assets/images/DarkQueen.svg'
import WhiteRook from '../../assets/images/LightRook.svg'
import DarkRook from '../../assets/images/DarkRook.svg'
import DarkBishop from '../../assets/images/DarkBishop.svg'
import WhiteBishop from '../../assets/images/WhiteBishop.svg'
import DarkKnight from '../../assets/images/DarkKnight.svg'
import WhiteKnight from '../../assets/images/WhiteKnight.svg'
import DarkPawn from '../../assets/images/DarkPawn.svg'
import WhitePawn from '../../assets/images/WhitePawn.svg'
import { PieceContainer } from './pieceStyles'

export default function Piece({data, onClick}) {
    switch(data.name) {
        case 'king': 
            if (data.isWhite) {
                return (
                    <PieceContainer x={data.x} y={data.y} onClick={() => {onClick(data.name, data.x, data.y)}}>
                        <img src={WhiteKing} height={80} width={84} alt={data.name} />
                    </PieceContainer>
                );
            } 
            return (
                <PieceContainer x={data.x} y={data.y} onClick={() => {onClick(data.name, data.x, data.y)}}>
                    <img src={DarkKing} height={80} width={84} alt={data.name} />
                </PieceContainer>
            );
        case 'queen': 
            if (data.isWhite) {
                return (
                    <PieceContainer x={data.x} y={data.y} onClick={() => {onClick(data.name, data.x, data.y)}}>
                        <img src={WhiteQueen} height={80} width={84} alt={data.name} />
                    </PieceContainer>
                );
            } 
            return (
                <PieceContainer x={data.x} y={data.y} onClick={() => {onClick(data.name, data.x, data.y)}}>
                    <img src={DarkQueen} height={80} width={84} alt={data.name} />
                </PieceContainer>
            );
        case 'rook': 
            if (data.isWhite) {
                return (
                    <PieceContainer x={data.x} y={data.y} onClick={() => {onClick(data.name, data.x, data.y)}}>
                        <img src={WhiteRook} height={80} width={84} alt={data.name} />
                    </PieceContainer>
                );
            } 
            return (
                <PieceContainer x={data.x} y={data.y} onClick={() => {onClick(data.name, data.x, data.y)}}>
                    <img src={DarkRook} height={80} width={84} alt={data.name} />
                </PieceContainer>
            );
        case 'bishop': 
            if (data.isWhite) {
                return (
                    <PieceContainer x={data.x} y={data.y} onClick={() => {onClick(data.name, data.x, data.y)}}>
                        <img src={WhiteBishop} height={80} width={84} alt={data.name} />
                    </PieceContainer>
                );
            } 
            return (
                <PieceContainer x={data.x} y={data.y} onClick={() => {onClick(data.name, data.x, data.y)}}>
                    <img src={DarkBishop} height={80} width={84} alt={data.name} />
                </PieceContainer>
            );
        case 'knight': 
            if (data.isWhite) {
                return (
                    <PieceContainer x={data.x} y={data.y} onClick={() => {onClick(data.name, data.x, data.y)}}>
                        <img src={WhiteKnight} height={80} width={84} alt={data.name} />
                    </PieceContainer>
                );
            } 
            return (
                <PieceContainer x={data.x} y={data.y} onClick={() => {onClick(data.name, data.x, data.y)}}>
                    <img src={DarkKnight} height={80} width={84} alt={data.name} />
                </PieceContainer>
                );
        default:
            if (data.isWhite) {
                return (
                    <PieceContainer x={data.x} y={data.y} onClick={() => {onClick(data.name, data.x, data.y)}}>
                        <img src={WhitePawn} height={80} width={84} alt={data.name} />
                    </PieceContainer>
                );
            } 
            return (
                <PieceContainer x={data.x} y={data.y} onClick={() => {onClick(data.name, data.x, data.y)}}>
                    <img src={DarkPawn} height={80} width={84} alt={data.name} />
                </PieceContainer>
            );
    }
}
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

    // if (value[0] === '7') {
//     image = DarkPawn
// } else if (value[0] === '2') {
//     image = WhitePawn
// } else if (value === '8A') {
//     image = DarkRook
// } else if (value === '8G') {
//     image = DarkKnight
// } else if (value === '8C') {
//     image = DarkBishop
// } else if (value === '8E') {
//     image = DarkKing
// } else if (value === '1B') {
//     image = WhiteKnight
// } else if (value === '1D') {
//     image = WhiteQueen
// } else if (value === '1F') {
//     image = WhiteBishop
// } else if (value === '1H') {
//     image = WhiteRook
// } else {
// if (value[0] === '7') {
//     image = DarkPawn
// } else if (value[0] === '2') {
//     image = WhitePawn
// } else if (value === '8H') {
//     image = DarkRook
// } else if (value === '8B') {
//     image = DarkKnight
// } else if (value === '8F') {
//     image = DarkBishop
// } else if (value === '8D') {
//     image = DarkQueen
// } else if (value === '1A') {
//     image = WhiteRook
// } else if (value === '1C') {
//     image = WhiteBishop
// } else if (value === '1E') {
//     image = WhiteKing
// } else if (value === '1G') {
//     image = WhiteKnight
// }

export default function Piece({name, isWhite, x, y}) {
    switch(name) {
        case 'king': 
            if (isWhite) {
                return <img src={WhiteKing} height={65} width={65} />
            } 
            return <img src={DarkKing} height={65} width={65} />
        case 'queen': 
            if (isWhite) {
                return <img src={WhiteQueen} height={65} width={65} />
            } 
            return <img src={DarkQueen} height={65} width={65} />
        case 'rook': 
            if (isWhite) {
                return <img src={WhiteRook} height={65} width={65} />
            } 
            return <img src={DarkRook} height={65} width={65} />
        case 'bishop': 
            if (isWhite) {
                return <img src={WhiteBishop} height={65} width={65} />
            } 
            return <img src={DarkBishop} height={65} width={65} />
        case 'knight': 
            if (isWhite) {
                return <img src={WhiteKnight} height={65} width={65} />
            } 
            return <img src={DarkKnight} height={65} width={65} />
        case 'pawn':
            if (isWhite) {
                return <img src={WhitePawn} height={65} width={65} />
            } 
            return <img src={DarkPawn} height={65} width={65} />
    }
}
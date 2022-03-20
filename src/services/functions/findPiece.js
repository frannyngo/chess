export default function findPiece(pileOfPieces, verticalY, horizontalX) {
    const piece = pileOfPieces.find((piece) => {
        return piece.y === verticalY && piece.x === horizontalX
    })
    return piece
}
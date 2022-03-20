import findPiece from "./findPiece"
import findTile from "./findTile"

export default function movePiece(pawn, tile, board) {
    const tileToMove = findTile(board, tile.y, tile.x)
    const currentTile = findTile(board, pawn.y, pawn.x)

    if (!tileToMove.props.data.spotTaken) {
        // currentTile.props.data.image = undefined
        board.map((tile) => {
            if (tile === currentTile) {
                tile.props.data.image = undefined
            }
        });

    }
    return board
}

    //    board.find((t) => {
    //        if (t.props.data.x === currentTile.props.data.x && t.props.data.y === currentTile.props.data.y) {
    //             console.log('found')
    //             console.log(t)
    //        }
    //    })
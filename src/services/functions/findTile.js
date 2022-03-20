export default function findTile(board, verticalY, horizontalX) {
    const tile = board.find((tile) => {
        return tile.props.data.y === verticalY && tile.props.data.x === horizontalX
    })
    return tile
}
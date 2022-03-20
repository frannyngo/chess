const chessPieces = [
    {
        name: 'king',
        isWhite: false,
        x: 4,
        y: 1,
    },
    {
        name: 'king',
        isWhite: true,
        x: 4,
        y: 8,
    },
    {
        name: 'queen',
        isWhite: false,
        x: 5,
        y: 1,
    },
    {
        name: 'queen',
        isWhite: true,
        x: 5,
        y: 8,
    },
    {
        name: 'bishop',
        isWhite: false,
        x: 6,
        y: 1,
    },
    {
        name: 'bishop',
        isWhite: false,
        x: 3,
        y: 1,
    },
    {
        name: 'bishop',
        isWhite: true,
        x: 6,
        y: 8,
    },
    {
        name: 'bishop',
        isWhite: true,
        x: 3,
        y: 8,
    },
    {
        name: 'knight',
        isWhite: false,
        x: 2,
        y: 1,
    },
    {
        name: 'knight',
        isWhite: false,
        x: 7,
        y: 1,
    },
    {
        name: 'knight',
        isWhite: true,
        x: 7,
        y: 8,
    },
    {
        name: 'knight',
        isWhite: true,
        x: 2,
        y: 8,
    },
    {
        name: 'rook',
        isWhite: false,
        x: 1,
        y: 1,
    },
    {
        name: 'rook',
        isWhite: false,
        x: 8,
        y: 1,
    },
    {
        name: 'rook',
        isWhite: true,
        x: 1,
        y: 8,
    },
    {
        name: 'rook',
        isWhite: true,
        x: 8,
        y: 8,
    },
    {
        name: 'pawn',
        isWhite: false,
        x: 1,
        y: 2,
    },
    {
        name: 'pawn',
        isWhite: false,
        x: 2,
        y: 2,
    },
    {
        name: 'pawn',
        isWhite: false,
        x: 3,
        y: 2,
    },
    {
        name: 'pawn',
        isWhite: false,
        x: 4,
        y: 2,
    },
    {
        name: 'pawn',
        isWhite: false,
        x: 5,
        y: 2,
    },
    {
        name: 'pawn',
        isWhite: false,
        x: 6,
        y: 2,
    },
    {
        name: 'pawn',
        isWhite: false,
        x: 7,
        y: 2,
    },
    {
        name: 'pawn',
        isWhite: false,
        x: 8,
        y: 2,
    },
    {
        name: 'pawn',
        isWhite: true,
        x: 1,
        y: 7,
    },
    {
        name: 'pawn',
        isWhite: true,
        x: 2,
        y: 7,
    },
    {
        name: 'pawn',
        isWhite: true,
        x: 3,
        y: 7,
    },
    {
        name: 'pawn',
        isWhite: true,
        x: 4,
        y: 7,
    },
    {
        name: 'pawn',
        isWhite: true,
        x: 5,
        y: 7,
    },
    {
        name: 'pawn',
        isWhite: true,
        x: 6,
        y: 7,
    },
    {
        name: 'pawn',
        isWhite: true,
        x: 7,
        y: 7,
    },
    {
        name: 'pawn',
        isWhite: true,
        x: 8,
        y: 7,
    },

]

export default function renderPieces() {
    return chessPieces
}
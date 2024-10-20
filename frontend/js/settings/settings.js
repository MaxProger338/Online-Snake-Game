const width = 600;
const height = 600;

const cellWidth = 30;
const cellHeight = 30;

const cellMarginOnX = 0;
const cellMarginOnY = 0;

const colors = {
    snakeBody: '#00dd00',
    snakeHead: '#00aa00',
    food: '#ff0000',
    backgroundCell: '#2a3953',
    wall: '#425870'
};

const settings = {
    width: width,
    heigth: height,
    cellWidth: cellWidth,
    cellHeight: cellHeight,
    rowAmount: width / cellWidth,
    colAmount: height / cellHeight,
    colors: colors,
    cellMarginOnX: cellMarginOnX,
    cellMarginOnY: cellMarginOnY,
};
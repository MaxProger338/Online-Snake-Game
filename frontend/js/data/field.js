const fieldGlobal = new Field(
    document.getElementById('canvas'), 
    settings.width, 
    settings.heigth, 
    settings.cellWidth, 
    settings.cellHeight, 
    settings.cellMarginOnX,  
    settings.cellMarginOnY,
    {
        tailColor: settings.colors.snakeBody,
        headColor: settings.colors.snakeHead,
        foodColor: settings.colors.food,
        backgroundCellColor: settings.colors.backgroundCell,
        wallColor: settings.colors.wall
    }
);
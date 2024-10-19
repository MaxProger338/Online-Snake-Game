'use strict';

function onload() 
{
    console.log('Game loaded');

    const game = new Game(
        new Field(
            document.getElementById('canvas'), 
            settings.width, 
            settings.heigth, 
            settings.cellWidth, 
            settings.cellHeight, 
            settings.cellMarginOnX,  
            settings.cellMarginOnY
        ),
        {
            tailColor: settings.colors.snakeBody,
            headColor: settings.colors.snakeHead,
            foodColor: settings.colors.food,
            backgroundCellColor: settings.colors.backgroundCell,
            wallColor: settings.colors.wall
        }
    );

    let state = stateGlobal;

    game.renderGame(state);

    let startTime   = 0,
        currentTime = 0;

    animateRAFInterval.start(() => {
        if (startTime === 0)
            startTime = Date.now();

        currentTime = Date.now();

        if (currentTime - startTime > 100)
        {
            startTime = currentTime;
            game.moveSnake(state.snake);
            game.renderGame(state);
        }
    });

    window.addEventListener('keydown', event => {
        let direction;
        switch (event.code)
        {
            case 'ArrowUp':
                direction = 'up';
                break;

            case 'ArrowRight':
                direction = 'right';
                break;

            case 'ArrowDown':
                direction = 'down';
                break;

             case 'ArrowLeft':
                direction = 'left';
                break;

            default:
                return;
        }

        game.moveSnake(state.snake, direction, false);
    });
}

window.addEventListener('load', onload);
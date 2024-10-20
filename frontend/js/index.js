'use strict';

function onload() 
{
    console.log('Game loaded');
    
    let state = stateGlobal;
    let field = fieldGlobal;

    const game = new Game(field);
    game.renderGame(state);

    let startTime   = 0,
        currentTime = 0;

    animateRAFInterval.start(() => {
        if (startTime === 0)
            startTime = Date.now();

        currentTime = Date.now();

        if (currentTime - startTime > state.speed)
        {
            startTime = currentTime;
            if (game.moveSnake(state) === true)
            {
                console.log('Game over');
                game.renderGame(state);
                return;
            }
            game.addNewFood(state);
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

        game.moveSnake(state, direction, false);
    });
}

window.addEventListener('load', onload);
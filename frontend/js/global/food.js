function getRandomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min) + min);
}

function getFreeSpace(state, field)
{
    const {snake, food, level, maps} = state;
    const tail = snake.getTail();
    const {did} = food;
    
    if (did === false)
        return false;

    let isNewFood = true;
    while (isNewFood)
    {
        let row = field.getHeigthCell() / field.getHeigthCell(),
            col = field.getWidthCell() / field.getWidthCell(); 
    }
}

getFreeSpace(stateGlobal, fieldGlobal);
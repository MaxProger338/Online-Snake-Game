function getRandomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min) + min);
}

function getFreeSpace(state, field)
{
    const {snake, level, maps} = state;
    const tail                       = snake.getTail();
    const amountCellsOnX             = field.getAmountCellsOnX(),
          amountCellsOnY             = field.getAmountCellsOnY();

    let isNewFood = true;
    let xRand, yRand;
    while (isNewFood)
    {
        xRand = getRandomInt(0, amountCellsOnX);
        yRand = getRandomInt(0, amountCellsOnY);

        for (let i = 0; i < tail.length; i++)
        {
            if (xRand === tail[i].x && yRand === tail[i].y)
            {
                isNewFood = true;
                break;
            }
            isNewFood = false;
        }

        if (isNewFood === true)
            continue;

        for (let i = 0; i < maps[`map${level}`].coords.length; i++)
        {
            if (xRand === maps[`map${level}`].coords[i].x && yRand === maps[`map${level}`].coords[i].y)
            {
                isNewFood = true;
                break;
            }
            isNewFood = false;
        }
    }

    return {x: xRand, y: yRand};
}

function addNewFood(state, field, ignoreFoodDid = false)
{
    if (state.food.did === false && ignoreFoodDid === false)
        return false;

    const coords = getFreeSpace(state, field);

    if (coords === false)
        return false;

    state.food.did = false;
    state.food.coords = coords;

    return true;
}
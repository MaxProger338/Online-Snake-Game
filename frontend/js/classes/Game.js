'use strict';

class Game
{
    _field  = null;

    constructor(field)
    {
        if (typeof field !== 'object')
            throw new TypeError('Invalid arguments types');

        this._field  = field;
    }

    renderCell(x, y, color)
    {
        this._field.getCtx().fillStyle = color;
        this._field.getCtx().fillRect(
            x * this._field.getWidthCell(), 
            y * this._field.getHeigthCell(), 
            this._field.getWidthCell()  - this._field.getMarginOnX(), 
            this._field.getHeigthCell() - this._field.getMarginOnY()
        );
    }

    // Рендерим игру
    renderGame(state)
    {        
        if (typeof state !== 'object')
            throw new TypeError('Invalid argument type');

        // Рисуем
        for (let y = 0; y < this._field.getAmountCellsOnY(); y++)
        {
            for (let x = 0; x < this._field.getAmountCellsOnX(); x++)
            {
                // Рисуем фон
                let color = this._field.getColors().backgroundCellColor;
                
                // Рисуем еду
                if (state.food.coords.x == x && state.food.coords.y == y)
                    color = this._field.getColors().foodColor;
                    
                // Рисуем Змейку
                state.snake.getTail().forEach(tail => {
                    if (tail.x === x && tail.y === y)
                        color = tail.head === true ? 
                            this._field.getColors().headColor : 
                            this._field.getColors().tailColor;
                });
                    
                // Рисуем Стену
                state.maps[`map${state.level}`].coords.forEach((coords) => {
                    if (coords.x === x && coords.y === y)
                        color = this._field.getColors().wallColor;
                });

                this.renderCell(x, y, color);
            }
        }
    }

    // Если змейка переходит за границы, перемещаем её в противоположную сторону
    _setTeleportSnake(snake, newHeadSnake)
    {
        if (
            typeof snake !== 'object' || 
            typeof newHeadSnake !== 'object'
        )
            throw new TypeError('Invalid arguments types');

        // Получаем основное направление змейки
        const direction = snake.getDirection();

        // Границы игрового поля
        const rowEdge = this._field.getAmountCellsOnY() - 1;
        const colEdge = this._field.getAmountCellsOnX() - 1;

        // Если змейка переходит за границы, то перемещаем её в противоположную сторону
        if (newHeadSnake.y < 0       && direction == 'up')
            return {...newHeadSnake, y: rowEdge};
        
        if (newHeadSnake.x > colEdge && direction == 'right')
            return {...newHeadSnake, x: 0};

        if (newHeadSnake.y > rowEdge && direction == 'down')
            return {...newHeadSnake, y: 0};
        
        if (newHeadSnake.x < 0       && direction == 'left')
            return {...newHeadSnake, x: colEdge};
        
        // Если змейка не переходит за границы, то оставляем её без изменений
        return newHeadSnake;
    }

    // Проверка на самопересечение
    _isSelfIntersection(snake, direction)
    {
        if (
            typeof snake !== 'object' || 
            typeof direction !== 'string'
        )
            throw new TypeError('Invalid arguments types');

        if (!['up', 'down', 'left', 'right'].includes(direction))
            throw new Error('Invalid direction');

        // Если движение змейки противоположно направлению по любой из сторон
        if (snake.getDirection() === 'up'    && direction === 'down')
            return true;

        if (snake.getDirection() === 'down'  && direction === 'up')
            return true;

        if (snake.getDirection() === 'left'  && direction === 'right')
            return true;

        if (snake.getDirection() === 'right' && direction === 'left')
            return true;

        return false;
    }

    // Перемещаем змейку
    moveSnake(state, direction=state.snake.getDirection(), moveSnake = true,teleport = true, selfIntersection = true)
    {
        let snake = state.snake;

        // Если включина опция проверки самопересечение 
        if (selfIntersection == true)
            // Проверка на самопересечение
            if (this._isSelfIntersection(snake, direction))
                return;

        // Меняем змейки направление
        snake.setDirection(direction);

        /* 
            Если не включина опция перемещения змейки, выходим
            (Это не включина, то мы только поменяем направление змейки праверев его конечно же на самопересечение) 
        */
        if (moveSnake === false)
            return;

        // Получаем голову
        const headSnake = snake.getHead();

        // Создаем новый перемещённый элемент змейки 
        let newHead;
        switch (direction) {
            case 'up':
                newHead = {x: headSnake.x, y: headSnake.y - 1, direction: direction, head: true};
                break;
            case 'down':
                newHead = {x: headSnake.x, y: headSnake.y + 1, direction: direction, head: true};
                break;
            case 'left':
                newHead = {x: headSnake.x - 1, y: headSnake.y, direction: direction, head: true};
                break;
            case 'right':
                newHead = {x: headSnake.x + 1, y: headSnake.y, direction: direction, head: true};
                break;    
        }

        // Если включина опция проверки телепорта
        if (teleport === true)
            // Если выходит за границы, то телепортируем соответственно в начало или конец
            newHead = this._setTeleportSnake(snake, newHead);
    
        snake.shiftTail();       // Удаляем первый элемент змейки
        snake.pushTail(newHead); // Добавляем новый элемент змейке
        this._checkGrowth(state);
    }

    addNewFood(state)
    {
        return addNewFood(state, this._field);
    }

    _checkGrowth(state)
    {
        const {snake, food: {coords}} = state;
        const headSnake  = snake.getHead();

        if (coords.x === headSnake.x && coords.y === headSnake.y)
        {
            state.food.did = true;
        }
    }
};
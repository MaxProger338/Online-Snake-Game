class Snake
{
    _tail      = [];
    _direction = null;
    
    constructor(tail, direction)
    {
        if (
            typeof tail      !== 'object' ||
            typeof direction !== 'string'
        )
            throw new TypeError('Invalid arguments types');

        this._tail      = tail;
        this._direction = direction;
    }

    getHead()
    {
        return this._tail[this._tail.length - 1];
    }

    getTail()
    {
        return this._tail;
    }

    setTail(tail)
    {
        if (typeof tail !== 'object')
            throw new TypeError('Invalid argument type');

        this._tail = tail;
    }

    updateTailOnIndex(index, tail)
    {
        if (
            typeof tail  !== 'object' ||
            typeof index !== 'number'
        )
            throw new TypeError('Invalid argument type');

        if (index < 0 || index >= this._tail.length)
            throw new RangeError('Invalid index');

        this._tail[index] = tail;
    }

    getDirection()
    {
        return this._direction;
    }

    setDirection(direction)
    {
        if (typeof direction !== 'string')
            throw new TypeError('Invalid argument type');

        if (!['up', 'down', 'left', 'right'].includes(direction))
            throw new Error('Invalid direction');

        this._direction = direction;
    }

    shiftTail()
    {
        return this._tail.shift();
    }
    
    pushTail(tail)
    {
        if (typeof tail !== 'object')
            throw new TypeError('Invalid argument type');

        // Получаем текущую голову змейки
        let currentHead = this.getHead();
        // Говорим, что: это уже не голова
        currentHead.head = false;

        // Обновляем голову
        this.updateTailOnIndex(this._tail.length - 1, currentHead);

        // На всякий случай говорим что новая клеточка будет головой
        tail.head = true;
        // Добавляем новую голову
        this._tail.push(tail);
    }

    unshiftTail(tail)
    {
        if (typeof tail !== 'object')
            throw new TypeError('Invalid argument type');

        this._tail.unshift(tail);
    }
}
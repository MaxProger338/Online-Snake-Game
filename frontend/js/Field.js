class Field
{
    _ctx = null;
    _width = null;
    _heigth = null;
    _widthCell = null;
    _heigthCell = null;
    _marginOnX = null;
    _marginOnY = null;

    constructor(canvas, width, heigth, widthCell, heigthCell, marginOnX, marginOnY)
    {
        // Проверяем типы аргументов
        if (
            typeof canvas     !== 'object' ||
            typeof width      !== 'number' ||
            typeof heigth     !== 'number' ||
            typeof widthCell  !== 'number' ||
            typeof heigthCell !== 'number' ||
            typeof marginOnX  !== 'number' ||
            typeof marginOnY  !== 'number'
        )
            throw new TypeError('Invalid arguments types');

        // Принимаем значения аргументов
        this._ctx        = canvas.getContext('2d');
        this._width      = width;
        this._heigth     = heigth;
        this._widthCell  = widthCell;
        this._heigthCell = heigthCell;
        this._marginOnX  = marginOnX;
        this._marginOnY  = marginOnY;

        // Устанавливаем размеры canvas
        canvas.width = width;
        canvas.height = heigth;    
    }

    getCtx()
    {
        return this._ctx;
    }

    getWidth()
    {
        return this._width;
    }

    getHeigth()
    {
        return this._heigth;
    }

    getWidthCell()
    {
        return this._widthCell;
    }

    getHeigthCell()
    {
        return this._heigthCell;
    }

    getMarginOnX()
    {
        return this._marginOnX;
    }

    getMarginOnY()
    {
        return this._marginOnY;
    }
};
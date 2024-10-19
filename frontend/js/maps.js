let map1 = {
    coords: [],
    completed: 394
};

let map2 = {
    coords: [],
    completed: 394
};

let map3 = {
    coords: [],
    completed: 394
};

let map4 = {
    coords: [],
    completed: 394
};

generateMap(map2, 5, 4, 14, 4);
generateMap(map2, 3, 9, 16, 9);
generateMap(map2, 3, 10, 16, 10);
generateMap(map2, 5, 15, 14, 15);

generateMap(map3, 0, 0, 19, 0);
generateMap(map3, 0, 19, 19, 19);
generateMap(map3, 0, 0, 0, 19);
generateMap(map3, 19, 0, 19, 19);
generateMap(map3, 2, 2, 4, 2);
generateMap(map3, 2, 3, 4, 3);
generateMap(map3, 2, 4, 4, 4);
generateMap(map3, 2, 15, 4, 15);
generateMap(map3, 2, 16, 4, 16);
generateMap(map3, 2, 17, 4, 17);
generateMap(map3, 15, 15, 17, 15);
generateMap(map3, 15, 16,17, 16);
generateMap(map3, 15, 17, 17, 17);
generateMap(map3, 15, 2, 17, 2);
generateMap(map3, 15, 3, 17, 3);
generateMap(map3, 15, 4, 17, 4);

generateMap(map4, 0, 0, 19, 0);
generateMap(map4, 0, 19, 19, 19);
generateMap(map4, 0, 0, 0, 19);
generateMap(map4, 19, 0, 19, 19);
generateMap(map4, 7, 3, 12, 4);
generateMap(map4, 7, 15, 12, 16);
generateMap(map4, 3, 7, 4, 12);
generateMap(map4, 15, 7, 16, 12);
generateMap(map4, 7, 7, 12, 12);

function generateMap(map, fromX, fromY, toX, toY)
{
    let countItereations = 0;
    for (let x = fromX; x < toX + 1; x++)
    {
        for (let y = fromY; y < toY + 1; y++)
        {
            map.coords.push({x: x, y: y});
            countItereations++;
        }
    }
    return countItereations;
}
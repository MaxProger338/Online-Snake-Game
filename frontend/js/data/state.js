const stateGlobal = {
    snake: new Snake(
        [
            {x: 1, y: 1, direction: 'right', head: false},        
            {x: 2, y: 1, direction: 'right', head: false},        
            {x: 3, y: 1, direction: 'right', head: false},        
            {x: 3, y: 2, direction: 'down', head: true},        
        ],
        'down'
    ),
    speed: 200,
    lastTailPosition: {},
    food: {
        did: true,
        coords: {}
    },
    level: 4,
    maps: {
        'map1': map1,
        'map2': map2,
        'map3': map3,
        'map4': map4
    }
};
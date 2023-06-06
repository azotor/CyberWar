module.exports.Colors = {
    black : `30`,
    red : `31`,
    green : `32`,
    yellow : `33`,
    blue : `34`,
    magenta : `35`,
    cyan : `36`,
    white : `37`,
    gray : `30`,
};

module.exports.ColorConsole = ( color, message ) =>  console.log( `\x1b[${ color }m`, message ,`\x1b[0m` );
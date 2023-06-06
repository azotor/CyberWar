const { WebSocketServer } = require( `ws` );
const NowDate = require( `./nowDate` );
const { Colors, ColorConsole } = require( `./colorConsole` );

const port = 3300;
const server = new WebSocketServer( { port : port } );

ColorConsole( Colors.blue, `${ NowDate() } :: Listening on port ${ port }` );

server.on( `connection`, client => {

    ColorConsole( Colors.green, `${ NowDate() } :: Client connected...` );

    client.on( `message`, stream => {

    } );
    
    client.on( `close`, () => ColorConsole( Colors.magenta, `${ NowDate() } :: Client disconnected...` ) )

} );
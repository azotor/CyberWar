export default class Socket {


    constructor( address ) {

        this.server = new WebSocket( address );

        this.server.addEventListener( `open`, () => {

            this.open();

            this.server.addEventListener( `message`, stream => this.message( JSON.parser( stream.data ) ) );

            this.server.addEventListener( `close`, () => this.close() );
        
        } );

        this.server.addEventListener( `error`, e => this.error( e ) );

    }

    open = () => console.log( `${ this.nowDate() } :: Connected...` );

    message = stream => console.log( `${ this.nowDate() } :: Message from server : ${ stream }` );
    
    close = () => console.log( `${ this.nowDate() } :: Server closed!` );

    error = e => {
        console.log( `WebSocket error!!!` );
        console.log( e );
    };

    send = data => this.server.send( JSON.stringify( data ) );

    nowDate = () => {
        const now = new Date();
        return `${ now.getFullYear() }-${ now.getMonth() + 1 < 10 ? 0 : `` }${ now.getMonth() + 1 }-${ now.getDate() + 1 < 10 ? 0 : `` }${ now.getDate() } ${ now.getHours() + 1 < 10 ? 0 : `` }${ now.getHours() }:${ now.getMinutes() + 1 < 10 ? 0 : `` }${ now.getMinutes() }:${ now.getSeconds() + 1 < 10 ? 0 : `` }${ now.getSeconds() }`;
    }

}
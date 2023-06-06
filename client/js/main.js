import Socket from './socket.js';

const socket = new Socket( `ws://localhost:3300` );

socket.send( `Test` );
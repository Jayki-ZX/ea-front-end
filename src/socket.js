import * as io from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = 'ws://localhost:3000';
console.log("System connected to ", URL);

export const socket = io(URL);
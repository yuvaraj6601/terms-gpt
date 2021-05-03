declare var process;

import socketIOClient from "socket.io-client";

const connectSocket = () => {
  const endpoint = process.env.REACT_APP_NODE_ENV === 'development' ? 'http://localhost:8001' : process.env.REACT_APP_NODE_ENV === 'stage' ? 'https://stage.baeroad.com' : 'http://localhost:8001';

  const socket = socketIOClient.connect(endpoint, { transports: ['websocket'], timeout: 2000 })
  socket.on('connect', (message: any) => {
    console.log(`socket connected${message}`); // eslint-disable-line
  });
  return socket
}

export default connectSocket

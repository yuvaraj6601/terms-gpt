import socketIOClient from "socket.io-client";


export const connectSocket = () => {
  let endpoint = process.env.REACT_APP_NODE_ENV === 'development' ? 'http://localhost:8001' : process.env.REACT_APP_NODE_ENV === 'stage' ? 'https://stage.baeroad.com' : 'http://localhost:8001',

  socket = socketIOClient.connect(endpoint, { transports: ['websocket'], timeout: 2000 })
  socket.on('connect', (message: any) => {
    console.log("socket connected" + message);
  });
  return socket
}

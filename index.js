import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('handshake complete');

  ws.on('message', (message) => {
    console.log('received: %s', message);
    ws.send(`something ${Date.now()}`);
  });

  // setInterval(() => ws.send(`something ${Date.now()}`), 5000)
});

wss.on('error', (error) => {
  console.log('error', error);
});

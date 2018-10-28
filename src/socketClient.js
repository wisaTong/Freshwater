export function connect(url) {
  let ws = new WebSocket(url);

  ws.onopen = () => {
    console.log('[info] successfully connected');
    ws.send('Ping');
  }

  ws.onclose = () => {
    console.log('[info] socket closed');
  }

  ws.onerror = (error) => {
    console.log(`[error] ${error}`);
  }

  ws.onmessage = (msg) => {
    console.log(`[info] receive message: ${msg.data}`);
  }
}

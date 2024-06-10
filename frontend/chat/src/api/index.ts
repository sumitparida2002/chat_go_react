export const socket = new WebSocket("ws://localhost:8080/ws");

export const connect = (cb) => {
  console.log("Attempting Connection ...");

  socket.onopen = () => {
    console.log("Successfully Connected");
  };

  socket.onmessage = (msg) => {
    console.log(msg);
    cb(msg);
  };

  socket.onclose = (event) => {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = (error) => {
    console.log("Socket Error: ", error);
  };
};

export const sendMsg = (msg: string) => {
  console.log("sending msg: ", msg);
  socket.send(msg);
};

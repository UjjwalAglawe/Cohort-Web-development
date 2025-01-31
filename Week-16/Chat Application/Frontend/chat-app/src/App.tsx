import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState(["hi there"]); // Renamed to `messages`
  const wsRef = useRef();

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080"); // Use `ws://` for WebSocket connection

    ws.onmessage = (event) => {
      setMessages((m) => [...m, event.data]); // Update messages on new message
    };

    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: "red",
          },
        })
      );
    };

    return () => {
      ws.close(); // Clean up WebSocket on component unmount
    };
  }, []);

  const sendMessage = () => {
    const messageInput = document.getElementById("message");
    const message = messageInput?.value;

    if (message && wsRef.current) {
      wsRef.current.send(
        JSON.stringify({
          type: "message", // Updated type for sending messages
          payload: {
            message: message,
          },
        })
      );
      // messageInput.value = ""; // Clear input after sending
    }
  };

  return (
    <div className="h-screen bg-black flex flex-col text-white">
      {/* Chat Messages Section */}
      <div className="h-[90vh] overflow-y-auto p-4 space-y-4 bg-gray-900">
        {messages.map((msg, index) => (
          <div
            key={index} // Use a key for list rendering
            className="bg-gray-600 p-3 rounded-lg max-w-[70%] self-start"
          >
            {msg}
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="w-full bg-gray-800 flex p-4 items-center gap-2">
        <input
          type="text"
          className="flex-1 bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Type your message..."
          id="message"
        />
        <button
          onClick={sendMessage}
          className="bg-purple-600 text-white px-4 py-3 rounded-md hover:bg-purple-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;

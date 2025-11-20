import websocket
import time
import random
import json



SERVER_URL = "ws://localhost:8080"

def on_open(ws):
    print("Connecting to server...")
    print("Server is connected")

    while True:
        data = {
            "temperature" : random.uniform(20.0, 30.0),
            "voltage" : random.uniform(3.0, 4.2),
            "timestamp" : time.time(),
            "status": "active"
        }


        ws.send(json.dumps(data))
        time.sleep(1)

def on_message(ws, message):
    print("Received from server: ", message)

ws = websocket.WebSocketApp(SERVER_URL,
                            on_open=on_open,
                            on_message=on_message)
ws.run_forever()
import { useEffect } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

export default function WebSocketListener() {
    useEffect(() => {
        const socket = new SockJS("http://localhost:8080/ws");
        const client = new Client({
            webSocketFactory: () => socket,
            onConnect: () => {
                console.log("✅ Connected to WebSocket");
                client.subscribe("/topic/match/123", (msg) => {
                    console.log("📩 Message:", msg.body);
                    alert("Match update: " + msg.body);
                });
            },
        });
        client.activate();

        return () => client.deactivate();
    }, []);

    return null;
}

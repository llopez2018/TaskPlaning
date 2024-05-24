import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:8080/ws');

const NotificationComponent = () => {
    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to WebSocket');
        });

        socket.on('notification', (message) => {
            console.log('Notification received:', message);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div>
            <h1>Notifications</h1>
        </div>
    );
};

export default NotificationComponent;

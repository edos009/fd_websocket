import { io } from "socket.io-client";
import axios from "axios";

import { SOCKET_EVENTS } from "../configs";

const baseUrl = `localhost:5000`;

const httpClient = axios.create({
  baseURL: `http://${baseUrl}`,
});

const socket = io(`ws://${baseUrl}`, { transports: ["websocket"] });

export const getAllMessages = () => httpClient.get("/");

export const createMessage = (message) => socket.emit(SOCKET_EVENTS.NEW_MESSAGE, message)

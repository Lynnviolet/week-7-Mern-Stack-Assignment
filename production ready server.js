// server/server.js
import http from 'http';
import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`🚀 Server running in ${process.env.NODE_ENV} on port ${PORT}`);
});

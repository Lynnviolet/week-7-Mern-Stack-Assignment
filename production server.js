// server/app.js
import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import healthRouter from './routes/health.js';

dotenv.config();

const app = express();
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(morgan('combined'));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/health', healthRouter);
// ...other routers here...

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

export default app;

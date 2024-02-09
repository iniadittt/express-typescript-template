import app from './api/server';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`[SERVER RUNNING] : at http://localhost:${PORT}`);
});

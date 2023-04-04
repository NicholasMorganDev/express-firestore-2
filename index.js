import express from 'express';
import cors from 'cors';
import { addNewShow, getAllShows, updateShow, deleteShow } from './src/shows.js';

const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.get('/shows', getAllShows)

app.post('/shows', addNewShow)

app.patch('/shows/:showId', updateShow)

app.delete('/shows/:showId', deleteShow)

app.listen(PORT, () => {
  console.log('Listening on http:localhost:3000');
});

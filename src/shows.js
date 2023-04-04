import { db } from './dbConnect.js';

// export async function addNewShow (req, res) {
//   const newShow = req.body;
//   await db.collection('TV Shows').add(newShow)
//     .catch(err => res.status(500).send(err))
//   doc => res.status(201).send('New TV Show Added: ' + doc.id)
// }

export function addNewShow (req, res) {
  const newShow = req.body;
  db.collection('TV Shows').add(newShow)
    .then(doc => res.status(201).send('New TV Show Added: ' + doc.id))
    .catch(err => res.status(500).send(err))
}

export async function getAllShows (req, res) {
  const collection = await db.collection('TV Shows').get()
    .catch(err => res.status(500).send(err))
  const showList = collection.docs.map(animal => animal.data())
  res.send(showList)
}

export async function updateShow (req, res) {
  const { showId } = req.params
  const updatedShow = await db.collection('TV Shows').doc(showId).update(req.body)
    .catch(err => res.status(500).send(err))
    // get the doc and return it..
    // res.send(updatedShow) 
    getAllShows (req, res)
} 

export async function deleteShow (req, res) {
  const { showId } = req.params
  try {
    await db.collection('TV Shows').doc(showId).delete() //can insert showId into doc
  } catch (error) {
      err => res.status(500).send(err)
  } finally {
      res.status(201).send('Show Deleted: ', showId)
  }
}

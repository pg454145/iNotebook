const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');   // ✅ correct

connectToMongo();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const authRouter = require('./routes/auth');
const notesRouter = require('./routes/notes');

app.use('/api/auth', authRouter);
app.use('/api/notes', notesRouter);

// Port define karo
const port = 5000;
app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
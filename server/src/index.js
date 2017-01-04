import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import users from './routes/users';
import auth from './routes/auth';
import events from './routes/events';

const app = express();

app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/events', events);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Running on localhost:${PORT}`));

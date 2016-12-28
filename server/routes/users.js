import express from 'express';
import bcrypt from 'bcrypt';
import validateInput from '../../shared/validations/signup';
import User from '../models/user';

let router = express.Router();

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  if(isValid) {
    const { username, password, timezone, email } = req.body;
    const password_digest = bcrypt.hashSync(password, 10);

    User.forge({
      username, timezone, email, password_digest
    }, { hasTimestamps: true }).save()
      .then(user => res.json({ success: true }))
      .catch(error => res.status(500).json({ error }));
    res.json({ success: true });
  } else {
    res.status(400).json(errors);
  }
});

export default router;

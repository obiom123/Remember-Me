const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Contact } = require('./models');

const PORT = process.env.PORT || 5678;
const jwtSecret = 'remembermesos757'

const app = express();

app.use(bodyParser.json());

app.post('/api/register', async(request, response) => {
  if (!request.body.userEmail || !request.body.password) {
    response.status(400).send('Both user email and password should be filled in.')
    return
  }

  const checkUserEmail = await User.findOne({
    where: {
      userEmail: request.body.userEmail
    }
  })

  if (checkUserEmail) {
    response.status(409).send('The user email has been used.')
    return
  }

  const saltRounds = 12;
  const hashPassword = await bcrypt.hash(
    request.body.password,
    saltRounds
  );

  const newUser = await User.create({
    userEmail: request.body.userEmail,
    passwordDigest: hashPassword
  })

  const jwtToken = jwt.sign({userId: newUser.id}, jwtSecret);
  response.status(200).json(jwtToken);
})

app.get('/api/current-user', async(request, response) => {
  const token = request.headers['jwt-token'];
  const verify = await jwt.verify(token, jwtSecret);
  const currentUser = await User.findOne({
    where: {
        id: verify.userId
    }
  })
  response.json({
    userId: currentUser.id
  })
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

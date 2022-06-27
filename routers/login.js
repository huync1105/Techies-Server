const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const users = [
  {
    name: 'Nguyễn Công Huy',
    age: 23,
    username: 'admin',
    password: '123',
  }
]

router.post('', (req, res) => {
  const userInfo = req.body;
  users.forEach(user => {
    if (user.username === userInfo.username) {
      if (user.password === userInfo.password) {
        const accessToken = jwt.sign(
          userInfo,
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: '10s',
          }
        )
        res.send({
          message: 'Đăng nhập thành công',
          data: {
            username: userInfo.username,
            accessToken: accessToken
          },
          status: 200
        })
      } else {
        res.send({ 
          message: 'Sai password', 
          status: 500
        })
      }
    } else {
      res.send({ 
        message: 'Sai user',
        status: 500
      })
    }
  })
})

module.exports = router;
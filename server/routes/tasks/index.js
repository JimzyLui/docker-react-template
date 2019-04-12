const express = require('express');
const router = express.Router();
const moment = require('moment');

router.route('/')
.get((req, res) => {
  // console.log('GET tasks route', moment().format('YYYYMMDD h:mm:ss'));
  return new req.database.Task().fetchAll()
    .then((tasks) => {
      // console.log('tasks',tasks.length());

      return res.json(tasks);
    })
    .catch((err) => {
      console.log('task route error....');
      console.log(err);
      res.sendStatus(500);
    });
})
.post((req, res) => {
  // const title = req.body.title;
  return new req.database.Task( req.body ).save()
    .then((task) => {
      return res.json({ success: true });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;

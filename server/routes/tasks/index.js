const express = require("express");
const router = express.Router();
const moment = require("moment");

router.route("/delete/:id").post((req, res) => {
  console.log("DELETE called on ", req.params.id);
  return new req.database.Task()
    .where("id", req.params.id)
    .destroy()
    .then(card => {
      console.log("card has been deleted", card);
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.route("/update/:id").post((req, res) => {
  // const title = req.body.title;
  console.log("/POST Update called.");
  // console.log("req: ", req);
  console.log("req.body: ", req.body);
  return (
    new req.database.Task({ id: req.params.id })
      // .save(
      //   {
      //     title: req.body.title,
      //     priority: req.body.priority
      //   },
      //   { patch: true }
      // )
      .save({
        title: req.body.title,
        task: req.body.task,
        priority: req.body.priority,
        createdBy: req.body.createdBy,
        assignedTo: req.body.assignedTo
      })
      .then(task => {
        // return res.json({ success: true });
        console.log("task updated...", task);
        res.redirect("/");
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      })
  );
});

router
  .route("/")
  .get((req, res) => {
    // console.log('GET tasks route', moment().format('YYYYMMDD h:mm:ss'));
    return new req.database.Task()
      .fetchAll()
      .then(tasks => {
        // console.log('tasks',tasks.length());

        return res.json(tasks);
      })
      .catch(err => {
        console.log("task route error....");
        console.log(err);
        res.sendStatus(500);
      });
  })
  .post((req, res) => {
    // const title = req.body.title;
    console.log("/POST add called.");
    return new req.database.Task(req.body)
      .save()
      .then(task => {
        // return res.json({ success: true });
        console.log("task saved...", task);
        res.redirect("/");
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  });

module.exports = router;

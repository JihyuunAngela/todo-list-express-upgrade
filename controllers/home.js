const List = require("../models/List");
const SecondaryList = require("../models/SecondaryList");

module.exports = {
    getIndex: async (req, res) => {
        try {
            const items = await List.find().lean()
            const secondaryItems = await SecondaryList.find().lean()
            const itemsLeft = await List.countDocuments({completed: false})

            res.render('index.ejs', { items: items, secondaryItems: secondaryItems, left: itemsLeft })
        } catch (err) {
            console.log(err);
          }
    },
    createItem: async (req, res) => {
        try {
          await List.create({
            thing: req.body.todoItem,
            completed: false,
          });
          console.log("List has been added!");
          res.redirect("/");
        } catch (err) {
          console.log(err);
        }
      },
      createSecondaryItem: async (req, res) => {
        try {
          await SecondaryList.create({
            thing: req.body.secondaryTodoItem,
            listID: req.params.id,
            completed: false,
          });
          console.log("List has been added!");
          res.redirect("/");
        } catch (err) {
          console.log(err);
        }
      },
      markComplete: async (req, res) => {
        try {
          await List.findOneAndUpdate( // mongoose method
            { _id: req.params.id }, // find id
            { completed: true }, // request what to replace
          );
          await SecondaryList.findOneAndUpdate( // mongoose method
          { _id: req.params.id }, // find id
          { completed: true }, // request what to replace
        );
          console.log("Likes +1");
          res.redirect('/'); 
        } catch (err) {
          console.log(err);
        }
    },
        markUncomplete: async (req, res) => {
          try {
            await List.findOneAndUpdate( // mongoose method
              { _id: req.params.id }, // find id
              { completed: false }, // request what to replace
            );
            await SecondaryList.findOneAndUpdate( // mongoose method
              { _id: req.params.id }, // find id
              { completed: false }, // request what to replace
            );
            console.log("Likes -1");
            res.redirect('/'); 
          } catch (err) {
            console.log(err);
          }
      },
      deleteItem: async (req, res) => {
        try {
          await List.remove({ _id: req.params.id });``
          await SecondaryList.remove({ _id: req.params.id });``
          console.log("Deleted Item");
          res.redirect("/");
        } catch (err) {
          res.redirect("/");
        }
      },
  };
  

'use strict';

// const mongoose = require('mongoose');
// const post = mongoose.model('posts');

module.exports = (app) => {

  var post = require('../controllers/postController');
  app.route('/api/posts')
  .get(post.list_all_posts)
  .post(post.create_a_post);


  app.route('/api/posts/:section')
  .get(post.read_a_post)
  .put(post.update_a_post)
  .delete(post.delete_a_post);

  app.route('/api/post/:username')
  .post(post.addpost)
  .get(post.list_a_post);

  app.route('/api/post/deletepost/:username')
  .post(post.deletepost);

};

//   app.get('/api/post', async (req, res) => {
//     let posts = await post.find();
//     return res.status(200).send(posts);
//   });

//   app.post(`/api/post`, async (req, res) => {
//     // const user = new post();
//     // user.name = req.body.name;
//     // user.number = req.body.number;
//     // // user.email = req.body.email;
//     // user.save();
//     // let post = await post.create(req.body);

//     var post= new post(req.body);
//     post.save(function(err, cartItem) {
//       if (err)
//         res.send(err);
//       res.json(cartItem);
//     });
//     // return res.status(201).send({
//     //   error: false,
//     //   user
//     // })
//   })

//   app.put('/api/post/:id', async (req, res) => {
//     const {id} = req.params;

//     let post = await post.findByIdAndUpdate(id, req.body);

//     return res.status(202).send({
//       error: false,
//       post
//     })

//   });

//   app.delete('/api/post/:id', async (req, res) => {
//     const {id} = req.params;

//     let post = await post.findByIdAndDelete(id);

//     return res.status(202).send({
//       error: false,
//       post
//     })

//   })

// }
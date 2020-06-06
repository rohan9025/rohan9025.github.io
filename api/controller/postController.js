

'use strict';
var mongoose = require('mongoose'),


Post = mongoose.model('Posts');

exports.list_all_posts = function(req, res) {
    Post.find({}, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };
  
  
  
  
  exports.create_a_post = function(req, res) {
    var new_post = new Post(req.body);
    new_post.save(function(err, post) {
      if (err)
        res.send(err);
      res.json(post);
    });
  };
  
  
  exports.read_a_post = function(req, res) {
    post.find({username:req.params.username,password:req.params.password}, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };
  
  exports.list_a_post = function(req, res) {
    Post.find({username:req.params.username}, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };
  
  
  exports.update_a_post = function(req, res) {
    Post.findOneAndUpdate({productId: req.params.username}, req.body, {new: true}, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };
  
  
  exports.delete_a_post = function(req, res) {
  
  
    post.remove({
      username: req.params.username
    }, function(err, user) {
      if (err)
        res.send(err);
      res.json({ message: 'post successfully deleted' });
    });
  };
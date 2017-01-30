const Joi = require('joi');

module.exports ={
  // POST /api/posts
  createpost: {
    body: {
      Title: Joi.string().required(),
      Description: Joi.string().required()
    }
  },

  // UPDATE /api/posts/:postId
  updatepost: {
    body: {
      Title: Joi.string().required(),
      Description: Joi.string().required()
    },
    params: {
      postId: Joi.string().hex().required()
    }
  }
  // POST /api/auth/login
 
};

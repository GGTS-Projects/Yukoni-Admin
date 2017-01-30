const post = require('../models/post.js');

/**
 * Load post and append to req.
 */
function load(req, res, next, id) {
  post.get(id)
    .then((post) => {
      req.post = post; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get post
 * @returns {post}
 */
function get(req, res) {
  return res.json(req.post);
}

/**
 * Create new post
 * @property {string} req.body.Title - The Title of post.
 * @property {string} req.body.Description - The Description of post.
 * @returns {post}
 */
function create(req, res, next) {
  const post = new post({
    Title: req.body.Title,
    Description: req.body.Description
  });

  post.save()
    .then(savedpost => res.json(savedpost))
    .catch(e => next(e));
}

/**
 * Update existing post
 * @property {string} req.body.Title - The Title of post.
 * @property {string} req.body.Description - The Description of post.
 * @returns {post}
 */
function update(req, res, next) {
  const post = req.post;
  post.Title = req.body.Title;
  post.Description = req.body.Description;

  post.save()
    .then(savedpost => res.json(savedpost))
    .catch(e => next(e));
}

/**
 * Get post list.
 * @property {number} req.query.skip - Number of posts to be skipped.
 * @property {number} req.query.limit - Limit number of posts to be returned.
 * @returns {post[]}
 */
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  post.list({ limit, skip })
    .then(posts => res.json(posts))
    .catch(e => next(e));
}

/**
 * Delete post.
 * @returns {post}
 */
function remove(req, res, next) {
  const post = req.post;
  post.remove()
    .then(deletedpost => res.json(deletedpost))
    .catch(e => next(e));
}

module.exports = { load, get, create, update, list, remove };
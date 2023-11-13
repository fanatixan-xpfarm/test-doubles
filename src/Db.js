export default class Db {
  constructor() {
    this.posts = {};
  }

  findById(id) {
    return this.posts[id];
  }

  add(post) {
    this.posts[post.id] = post;
  }
}

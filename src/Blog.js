export default class Blog {
  constructor(db) {
    this.db = db;
  }

  createPost() {
    const post = {
      id: 'foo',
      title: 'Hello World',
      content: 'This is my first post',
    };

    this.db.add(post);
  }
}

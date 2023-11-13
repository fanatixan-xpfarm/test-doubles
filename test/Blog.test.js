import { jest } from '@jest/globals';
import Blog from '../src/Blog';
import Db from '../src/Db';

describe('Creating a new post', () => {
  test('should store it in the database - original', () => {
    const db = new Db();
    const blog = new Blog(db);
    blog.createPost();
    expect(db.findById('foo').title).toBe('Hello World');
  });

  test('should store it in the database - dummy', () => {
    const db = {
      add() {},
      findById() {
        return null;
      },
    };
    const blog = new Blog(db);
    blog.createPost();
    expect(db.findById('foo')).toBeNull();
  });

  test('should store it in the database - stub', () => {
    const db = {
      add() {},
      findById() {
        return {
          title: 'Hello World',
        };
      },
    };
    const blog = new Blog(db);
    blog.createPost();
    expect(db.findById('foo').title).toBe('Hello World');
  });

  test('should store it in the database - spy', () => {
    const db = new Db();
    const dbSpy = {
      addWasCalled: false,
      findByIdWasCalled: false,
      add(post) {
        this.addWasCalled = true;
        db.add(post);
      },
      findById(id) {
        this.findByIdWasCalled = true;

        return db.findById(id);
      },
    };
    const blog = new Blog(dbSpy);
    blog.createPost();
    expect(dbSpy.addWasCalled).toBe(true);
    expect(dbSpy.findById('foo').title).toBe('Hello World');
  });

  test('should store it in the database - jest spy', () => {
    const db = new Db();
    jest.spyOn(db, 'add');
    const blog = new Blog(db);
    blog.createPost();
    expect(db.add).toHaveBeenCalledTimes(1);
    expect(db.findById('foo').title).toBe('Hello World');
  });

  test('should store it in the database - mock', () => {
    const dbMock = {
      addWasCalled: 0,
      postToAdd: [],
      add(post) {
        this.addWasCalled += 1;
        this.postToAdd.push(post);
      },
    };
    const blog = new Blog(dbMock);
    blog.createPost();
    expect(dbMock.addWasCalled).toBe(1);
    // note that we're asserting the title on the db but the mock
    expect(dbMock.postToAdd[0].title).toBe('Hello World');
  });

  test('should store it in the database - jest mock', () => {
    const db = new Db();
    // note that the add function now isn't a spy (a real implementation),
    // but a mocked function that does nothing
    const addMock = jest.spyOn(db, 'add').mockImplementation(() => undefined);
    const blog = new Blog(db);
    blog.createPost();
    expect(db.add).toHaveBeenCalledTimes(1);
    expect(addMock.mock.calls[0][0].title).toBe('Hello World');
  });

  test('should store it in the database - fake', () => {
    const db = {
      post: null,
      add(post) {
        this.post = post;
      },
      findById() {
        return this.post;
      },
    };
    const blog = new Blog(db);
    blog.createPost();
    expect(db.findById('foo').title).toBe('Hello World');
  });
});

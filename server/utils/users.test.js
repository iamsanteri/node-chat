const expect = require("expect");

const {Users} = require("./users");

describe("Users", () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: "1",
      name: "Santeri",
      room: "Developers"
    }, {
      id: "2",
      name: "Mike",
      room: "Designers"
    }, {
      id: "3",
      name: "John",
      room: "Developers"
    }];
  });

  it("should add new user", () => {
    var users = new Users();
    var user = {
      id: "123",
      name: "Santeri",
      room: "Developers"
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it("should remove a user", () => {
    var userId = "1";
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it("should not remove user", () => {
    var userId = "999";
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it("should find user", () => {
    var userId = "2";
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it("should not find user", () => {
    var userId = "999";
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it("should return names for Developers", () => {
    var userList = users.getUserList("Developers");

    expect(userList).toEqual(["Santeri", "John"]);
  });
  it("should return names for Designers", () => {
    var userList = users.getUserList("Designers");

    expect(userList).toEqual(["Mike"]);
  });
});

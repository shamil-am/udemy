/* let users = ["Shamil", "Emil", "Ayxan"];

function addNewUser(user, callback) {
  setTimeout(() => {
    users.push(user);
    console.log("elave edildi");
    callback();
  }, 3000);
}

function showAllUser() {
  setTimeout(() => {
    users.forEach((user) => {
      console.log(user);
    });
  }, 2000);
}

addNewUser("Aylin",showAllUser);
 */

/* function showThis() {
  console.log(this);
}

const user = {
  name: "Shamil",
  tellAge: function () {
    console.log(this.name);
  },
  tellAge2: () => {
    console.log(this.name);
  },
};

showThis();
user.tellAge();
user.tellAge2(); */

// ---------------------------------------------

/* class Request {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }

  get(url, callback) {
    this.xhr.open("GET", url);
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText);
      } else {
        callback("Xeta bas verdi", null);
      }
    };
    this.xhr.send();
  }

  post(url, data, callback) {
    this.xhr.open("POST", url);
    this.xhr.setRequestHeader("Content-Type", "application/json");
    this.xhr.onload = () => {
      if (this.xhr.status === 201) {
        callback(null, this.xhr.responseText);
      } else {
        callback("Xeta bas verdi", null);
      }
    };

    this.xhr.send(JSON.stringify(data));
  }

  put(url, data, callback) {
    this.xhr.open("PUT", url);
    this.xhr.setRequestHeader("Content-Type", "application/json");
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText);
      } else {
        callback("Xeta bas verdi", null);
      }
    };

    this.xhr.send(JSON.stringify(data));
  }

  delete(url, callback) {
    this.xhr.open("DELETE", url);
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, "Melumat silindi");
      } else {
        callback("Xeta bas verdi", null);
      }
    };
    this.xhr.send();
  }
} */

/* const request = new Request();
request.get("https://jsonplaceholder.typicode.com/posts/1/comments",(err, response) => {
    if (err == null) {
      let arr = JSON.parse(response);
      arr.forEach((element) => {
        console.log(element);
      });
    }
  }
);
 */

//  --------------------

/*  const request = new Request();
 
 const data = {
  "userId": 15,
  "title": "Shamil Mammadov",
  "body": "Web Developer Frontend"
}

request.post("https://jsonplaceholder.typicode.com/posts",data,(err,response) => {
  if (err == null) {
    console.log(response);
  } else {
    console.log(err);
  }
}) */

/* const request = new Request();
const data = {
  userId: 15,
  title: "Shamil Mammadov",
  body: "Web Developer Frontend",
};

request.put("https://jsonplaceholder.typicode.com/posts/7",data,(err, response) => {
    if (err == null) {
      console.log(response);
    } else {
      console.log(err);
    }
  }
); */


/* const request = new Request();
request.delete("https://jsonplaceholder.typicode.com/posts/11",(err, response) => {
    if (err == null) {
      console.log(response);
    }else{
      console.log(err);
    }
  }
); */

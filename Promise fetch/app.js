/* function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof data === "string") {
        resolve("Duzgun mezmun");
      } else {
        reject("Yalnis tip");
      }
    }, 4000);
  });
}

getData("14")
  .then((response) => console.log(response))
  .catch((err) => alert(err));
 */

/* function addTwo(data) {
  return new Promise((resolve, reject) => {
    typeof data === "number" ? resolve(data + 2) : reject("Reqem daxil edin");
  });
}

addTwo(14)
  .then((response) => {
    return response + 3;
  })
  .then((response2) => console.log(response2))
  .catch((err) => console.error(err));
 */

/* fetch("internal.txt")
  .then((response) => response.text())
  .then((proms) => console.log(proms))
  .catch((err) => console.error(err));
 */

/* fetch("https://api.exchangeratesapi.io/latest")
  .then((response) => response.json())
  .then(rateArr => console.log(rateArr.rates.TRY))
  .catch((err) => console.log(err));
 */

// https://jsonplaceholder.typicode.com/albums
/* 
class Request {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => resolve(response.json()))
        .catch((err) => reject(err));
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => resolve(response.json()))
        .catch((err) => reject(err));
    });
  }

  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => resolve(response.json()))
        .catch((err) => reject(err));
    });
  }

  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => resolve("Silindi"))
        .catch((err) => console.error(err));
    });
  }
} */

/* const request = new Request();
request
  .get("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.forEach((el) => console.log(el)))
  .catch((err) => console.log(err));
 */
/* 
const data = new Object();
data.userID = 15;
data.title = "Shamil";
data.body = "Web Developer";
 */
/* fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((response2) => console.log(response2))
  .catch((err) => console.log(err));
 */

/* const request = new Request();
request
  .post("https://jsonplaceholder.typicode.com/albums", data)
  .then((response) => console.log(response))
  .catch((err) => console.error(err)); */

/* const request = new Request();
request
  .put("https://jsonplaceholder.typicode.com/posts/10", data)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
 */

/* const request = new Request();
request
  .delete("https://jsonplaceholder.typicode.com/posts/5")
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
 */
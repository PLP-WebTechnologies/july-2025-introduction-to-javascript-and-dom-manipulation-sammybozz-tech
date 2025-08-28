// Part 1: Variables & Conditionals
let hour = new Date().getHours();
let greeting = "Hello";

if (hour < 12) {
  greeting = "Good morning!";
} else if (hour < 18) {
  greeting = "Good afternoon!";
} else {
  greeting = "Good evening!";
}
document.getElementById("greeting").textContent = greeting;

// Posts array to store blog posts
let posts = [];

// Part 2: Functions
function addPost(title, content) {
  posts.push({ title, content }); // Add new post
  renderPosts(); // Show posts again
}

function renderPosts() {
  let list = document.getElementById("postList");
  list.innerHTML = "";

  // Part 3: Loop
  for (let post of posts) {
    let li = document.createElement("li");
    li.innerHTML = "<h3>${post.title}</h3><p>${post.content}</p>";
    list.appendChild(li);
  }
}

// Part 4: DOM interactions
document.getElementById("postForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;

  addPost(title, content);

  // clear form
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
});
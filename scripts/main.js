
let portfolio = document.querySelector('.container');
function reqListener() {
  // Make sure you define youre variabe(in this case data..) outside your loop"
 let data = JSON.parse(this.responseText)
    portfolio.innerHTML += `
    <article class="user-info">
      <h2>The Basics</h2>
      <ul>
        <li><span>Name:</span> ${data.name}</li>
        <li><span>Github URL:</span> <a href=${data.html_url}>${data.html_url}</a></li>
        <li><span>Email:</span> <a href="mailto:${data.email} target="_top"">${data.email}</a></li>
        <li><span>Company:</span> ${data.company}</li>
        <li><span>Website:</span> <a href=${data.blog}>${data.blog}</a></li>
      </ul>
  </article>
  <article class="user-story">
    <h2>The Story</h2>
    <p>${data.bio}</p>
  </article>
  <article class="user-avatar">
    <img src=${data.avatar_url}>
  </article>
  `
}
let req = new XMLHttpRequest();
// req.open('GET', 'http://192.168.1.12:8000/octocat');
req.open('GET', 'https://api.github.com/users/crmiller10');
req.addEventListener('load', reqListener);
req.send();

// A function to generate  random numbers
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

//Display the blog with the pre selected random index on the home page

function renderRandomBlog(selectedBlog){
  var indexBlogH2 = document.getElementById('indexRandomBlogTitle');
  indexBlogH2.textContent = selectedBlog.blogName;


  var indexBlogCategory = document.getElementById('indexRandomBlogCat');
  indexBlogCategory.textContent = selectedBlog.blogCategory;


  var indexBlogBlogger = document.getElementById('indexRandomBlogBlogger');
  indexBlogBlogger.textContent = selectedBlog.bloggerName;


  var indexBlogContent = document.getElementById('indexBlogPost');
  var indexBlogContentP = document.createElement('p');

  indexBlogContentP.innerHTML = selectedBlog.blogContent;
  indexBlogContent.appendChild(indexBlogContentP);
}


// Picks a random number from 0 to the lengeth of the array that has all the blogs

var indexContinuteReading;
function chooseRandomBlog(){
  var randomBlogIndex = getRndInteger(0, Blog.all.length);
  renderRandomBlog(Blog.all[randomBlogIndex]);

  // assigns the random selected index to this button so the blog can be viewed on its own page
  indexContinuteReading = document.getElementById('indexContinuteReading');
  indexContinuteReading.setAttribute('id',randomBlogIndex);
  indexContinuteReading.addEventListener('click', saveIdLs);
}
chooseRandomBlog();

// Saves the the id of the blog to the local storage
function saveIdLs(event) {
  var selectedId = event.target.id;
  localStorage.setItem('BlogId', JSON.stringify(selectedId));
  window.location.replace('blog-page.html');

}
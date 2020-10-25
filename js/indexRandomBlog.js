function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

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

function chooseRandomBlog(){
  var randomBlogIndex = getRndInteger(0, Blog.all.length);
  renderRandomBlog(Blog.all[randomBlogIndex]);
}
chooseRandomBlog();

// Gets the id of the desired blog from local storage to display it on it's own page
var savedBlogId = parseInt(JSON.parse(localStorage.getItem('BlogId')));

// Displys the desired blog on its own page
function renderSingleBlog(singleBlog) {
  var singleBlogName = document.getElementById('singleBlogName');
  var singleBlogCat = document.getElementById('singleBlogCat');
  var singleBloggerName = document.getElementById('singleBloggerName');
  var singleBlogContent = document.getElementById('singleBlogContent');
  var singleBlogP = document.createElement('p');
  var singleBlogImage = document.getElementById('singleBlogImage');
  singleBlogName.textContent = Blog.all[singleBlog].blogName;
  singleBlogCat.textContent = Blog.all[singleBlog].blogCategory;
  singleBloggerName.textContent = Blog.all[singleBlog].bloggerName;
  singleBlogP.innerHTML = Blog.all[singleBlog].blogContent;
  singleBlogContent.appendChild(singleBlogP);
  singleBlogImage.setAttribute('src', Blog.all[singleBlog].blogImg);
  toggleReadLater();
}


var favBtn = document.getElementById('readLaterBtn');
favBtn.addEventListener('click', addToRL);
var rmvReadLaterBtn = document.getElementById('rmvReadLaterBtn');
rmvReadLaterBtn.addEventListener('click', removeFromRL);
renderSingleBlog(savedBlogId);

// Adds blog to Read Later
function addToRL() {
  if (!favToLater.includes(savedBlogId)) {
    favToLater.push(parseInt(savedBlogId));
    localStorage.setItem('favBlog', JSON.stringify(favToLater));
    alert('You have added this blog to your Read Later');
    toggleReadLater();
  }
}

// Remove from Read Later
function removeFromRL() {
  if (favToLater.includes(savedBlogId)) {
    console.log(favToLater.indexOf(parseInt(savedBlogId)));
    favToLater.splice(favToLater.indexOf(parseInt(savedBlogId)), 1);
    localStorage.setItem('favBlog', JSON.stringify(favToLater));
    alert('You have finished reading this.');
    toggleReadLater();
  }
}

// Switches between buttons
function toggleReadLater() {

  if (!favToLater.includes(savedBlogId)) {
    rmvReadLaterBtn.classList.add('hidden');
    favBtn.classList.remove('hidden');
  } else {
    rmvReadLaterBtn.classList.remove('hidden');
    favBtn.classList.add('hidden');
  }

}
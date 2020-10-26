
function getBlogPosts() {
  for (var i = 0; i < Blog.all.length; i++) {
    if(favToLater.includes(i)){

      var bloggerName = document.createElement('h6');
      var blogContent = document.createElement('p');
      var blogTitle = document.createElement('h3');
      var blogCat = document.createElement('h6');
      var readBtn = document.createElement('button');
      var bloggerNameDiv = document.createElement('div');
      var blogContentDiv = document.createElement('div');
      var blogTitleDiv = document.createElement('div');
      var blogCatDiv = document.createElement('div');
      var readBtnDiv = document.createElement('div');
      bloggerNameDiv.appendChild(bloggerName);
      blogContentDiv.appendChild(blogContent);
      blogTitleDiv.appendChild(blogTitle);
      blogCatDiv.appendChild(blogCat);
      readBtnDiv.appendChild(readBtn);

      bloggerName.textContent = Blog.all[i].bloggerName;
      blogContent.innerHTML = Blog.all[i].blogContent;
      blogTitle.textContent = Blog.all[i].blogName;
      blogCat.textContent = Blog.all[i].blogCat;
      readBtn.textContent = 'view Blog';
      readBtn.setAttribute('id', i);
      readBtn.addEventListener('click',saveIdLs);

      var blogInfoDiv = document.createElement('div');
      var blogImgDiv = document.createElement('div');
      blogInfoDiv.appendChild(blogTitleDiv);
      blogInfoDiv.appendChild(bloggerNameDiv);
      blogInfoDiv.appendChild(blogCatDiv);
      blogInfoDiv.appendChild(blogContentDiv);
      blogInfoDiv.appendChild(readBtnDiv);

      var blogImg = document.createElement('img');
      blogImg.setAttribute('src', Blog.all[i].imgURL);
      blogImgDiv.appendChild(blogImg);
      var blogEverything = document.createElement('section');
      blogEverything.appendChild(blogInfoDiv);
      blogEverything.appendChild(blogImgDiv);
      var mainSection = document.getElementById('favoriteBlogs');
      mainSection.appendChild(blogEverything);


      // Remove from favorite button creation

      var removeFavoriteBtn = document.createElement('button');
      removeFavoriteBtn.textContent = 'Remove from Favorite';
      removeFavoriteBtn.setAttribute('data-dataBlogId', i);
      blogInfoDiv.appendChild(removeFavoriteBtn);
      removeFavoriteBtn.addEventListener('click', removeFromFavorite);
    }

  }
}
function saveIdLs (event){
  var selectedId= event.target.id;
  localStorage.setItem('BlogId',JSON.stringify(selectedId));
  window.location.replace('blog-page.html');

}
function removeFromFavorite(event){
  var elementToRemove = event.target.getAttribute('data-dataBlogId');
  var indexOfElement = favToLater.indexOf(parseInt(elementToRemove));
  favToLater.splice(indexOfElement, 1);
  localStorage.setItem('favBlog',JSON.stringify(favToLater));
  var mainSection = document.getElementById('favoriteBlogs');
  mainSection.innerHTML = '';
  getBlogPosts();
}
getBlogPosts();


function getBlogPosts() {
  if (favToLater.length === 0) {
var newPara = document.createElement('p');
newPara.textContent='Read Later is empty.';
newPara.classList.add('empty-message');
var mainSection = document.getElementById('favoriteBlogs');
mainSection.appendChild(newPara);
  }
  else {
    for (var i = 0; i < Blog.all.length; i++) {
      if (favToLater.includes(i)) {
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
        var blogCatAndBlogger = document.createElement('div');
        var bloggerNamePrefix = document.createElement('span');
        var blogCatPrefix = document.createElement('span');
        readBtnDiv.classList.add('readMoreButton');
        bloggerNamePrefix.textContent = 'Written by ';
        blogCatPrefix.textContent = 'Category: ';
        bloggerNameDiv.appendChild(bloggerNamePrefix);
        blogCatDiv.appendChild(blogCatPrefix);
        bloggerNameDiv.appendChild(bloggerName);
        blogContentDiv.appendChild(blogContent);
        blogTitleDiv.appendChild(blogTitle);
        blogCatDiv.appendChild(blogCat);
        readBtnDiv.appendChild(readBtn);


        bloggerName.textContent = Blog.all[i].bloggerName;
        blogContent.innerHTML = Blog.all[i].blogContent;
        blogTitle.textContent = Blog.all[i].blogName;
        blogCat.textContent = Blog.all[i].blogCategory;
        console.log(Blog.all[i].blogCategory);
        readBtn.textContent = 'View Blog';
        readBtn.setAttribute('id', i);
        readBtn.addEventListener('click', saveIdLs);

        var blogInfoDiv = document.createElement('div');
        var blogImgDiv = document.createElement('div');
        blogInfoDiv.appendChild(blogTitleDiv);
        blogCatAndBlogger.appendChild(bloggerNameDiv);
        blogCatAndBlogger.appendChild(blogCatDiv);
        blogInfoDiv.appendChild(blogCatAndBlogger);
        blogInfoDiv.appendChild(blogContentDiv);
        blogInfoDiv.appendChild(readBtnDiv);
        blogInfoDiv.classList.add('blogLeftDiv');
        blogContentDiv.classList.add('blogContentDiv');
        bloggerNameDiv.classList.add('bloggerNameDiv');
        blogTitleDiv.classList.add('blogTitleDiv');
        blogCatDiv.classList.add('blogCatDiv');
        blogCatAndBlogger.classList.add('blogCatAndBlogger');

        var blogImg = document.createElement('img');
        blogImg.setAttribute('src', Blog.all[i].blogImg);
        blogImgDiv.appendChild(blogImg);
        var blogEverything = document.createElement('section');
        blogEverything.appendChild(blogInfoDiv);
        blogEverything.appendChild(blogImgDiv);
        var mainSection = document.getElementById('favoriteBlogs');
        mainSection.appendChild(blogEverything);
        blogImgDiv.classList.add('blogRightDiv');
        blogEverything.classList.add('blogContentRow');

        // Remove from favorite button creation

        var removeFavoriteBtn = document.createElement('button');
        removeFavoriteBtn.textContent = 'Finished Reading';
        removeFavoriteBtn.setAttribute('data-dataBlogId', i);
        readBtnDiv.appendChild(removeFavoriteBtn);
        removeFavoriteBtn.addEventListener('click', removeFromFavorite);
      }

    }
  }

}


function saveIdLs(event) {
  var selectedId = event.target.id;
  localStorage.setItem('BlogId', JSON.stringify(selectedId));
  window.location.replace('blog-page.html');

}
function removeFromFavorite(event) {
  var confirmResult = confirm('Did you finsish reading this blog?');
  if (confirmResult) {
    var elementToRemove = event.target.getAttribute('data-dataBlogId');
    var indexOfElement = favToLater.indexOf(parseInt(elementToRemove));
    favToLater.splice(indexOfElement, 1);
    localStorage.setItem('favBlog', JSON.stringify(favToLater));
    var mainSection = document.getElementById('favoriteBlogs');
    mainSection.innerHTML = '';
    getBlogPosts();
  }
}
getBlogPosts();

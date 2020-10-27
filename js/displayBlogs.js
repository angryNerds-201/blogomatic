var categoriesArray = ['all', 'books', 'buisness', 'cars', 'diary', 'funny', 'food', 'medical', 'motherHood', 'petPeeve'];
// to give the drop down list a values of catigoris
var categoriesDropDownList = document.getElementById('selectCat');
for (var i = 0; i < Blog.all.length; i++) {

  categoriesArray.push(Blog.all[i].blogCategory);
}
console.log(categoriesArray);
for (var i = 0; i < categoriesArray.length; i++) {
  var option = document.createElement('option');
  categoriesDropDownList.append(option);
  option.textContent = categoriesArray[i];
}
console.log(Blog.all.length);
function getBlogPosts() {
  var mainSection = document.getElementById('blogEverything');
  mainSection.innerHTML = '';
  for (var i = 0; i < Blog.all.length; i++) {
    console.log(Blog.all[i]);
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
    bloggerNamePrefix.textContent= 'Written by ';
    blogCatPrefix.textContent= 'Category: ';
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
    var mainSection = document.getElementById('blogEverything');
    mainSection.appendChild(blogEverything);
    blogImgDiv.classList.add('blogRightDiv');
    blogEverything.classList.add('blogContentRow');

  }

}
function saveIdLs(event) {
  var selectedId = event.target.id;
  localStorage.setItem('BlogId', JSON.stringify(selectedId));
  window.location.replace('blog-page.html');

}

getBlogPosts();

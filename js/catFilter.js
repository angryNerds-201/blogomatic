// Add event listener to the form of filtering
var catForm = document.getElementById('categoryForm');
catForm.addEventListener('submit', changeCatHandler);

// The function that is responsible of filtering blogs by category
function changeCatHandler(event) {
  event.preventDefault();
  var valueDropDown = event.target.selectCat.value;
  var mainSection = document.getElementById('blogEverything');
  mainSection.innerHTML='';
  for (var i = 0; i < Blog.all.length; i++) {
    if (valueDropDown==='all'){

      getBlogPosts();

    }
    else if (valueDropDown === Blog.all[i].blogCategory) {
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
      var mainSection = document.getElementById('blogEverything');

      var blogMainContainer = document.createElement('div');
      blogMainContainer.classList.add('blogMainContainer');
      var blodDivider = document.createElement('hr');
      blodDivider.classList.add('blodDivider');
      blogMainContainer.appendChild(blogInfoDiv);
      blogMainContainer.appendChild(blogImgDiv);
      blogEverything.appendChild(blogMainContainer);
      blogEverything.appendChild(blodDivider);
      mainSection.appendChild(blogEverything);
      blogImgDiv.classList.add('blogRightDiv');
      blogEverything.classList.add('blogContentRow');
    }

  }
}


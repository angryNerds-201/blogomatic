var catForm = document.getElementById('categoryForm');
catForm.addEventListener('submit', changeCatHandler);

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
            readBtn.addEventListener('click', saveIdLs);

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
            var mainSection = document.getElementById('blogEverything');
            mainSection.appendChild(blogEverything);
        }

    }
}


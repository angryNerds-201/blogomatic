
// Categories array
var categoriesArray=['books','buisness','cars','diary','funny','food','medical','motherHood','petPeeve'];

// To fill up the select list with categories
var categoriesDropDownList=document.getElementById('categoryOptions');
for (var i =0;i<Blog.all.length;i++) {

  categoriesArray.push(Blog.all[i].blogCategory);
}


var imgFile64 ;
console.log(categoriesArray);
for (var i =0;i<categoriesArray.length;i++) {
  var option=document.createElement('option');
  categoriesDropDownList.append(option);
  option.textContent=categoriesArray[i];
}

var submitBtn= document.getElementById('createForm');
submitBtn.addEventListener('submit',createBlog);

// Collects the data from form inputs, create a blog using the object constructor, and transform the image using canvas element to store it in the local storage
function createBlog(event){
  var createForm= document.getElementById('createForm');
  
  // var bloggerName= document.getElementById('YourName');
  // var blogTitle= document.getElementById('blogTitle');
  // var imgFile= document.getElementById('image');
  // var BlogContentFromForm= document.getElementById('blogContent');
  event.preventDefault();
  var name=event.target.YourName.value;
  var title=event.target.blogTitle.value;
  // var url=this.target.imgFile64.value;
  var content=event.target.blogContent.value;
  var url = imgFile64;
  /*event.target.image.value;*/
  var list=event.target.categoryOptions.value;
  var newObj =new Blog(title,name,content,list);
  newObj.setBlogImg(url);
  console.log(url);
  newObj.storeToLocalStorage();
  createForm.reset();
  var newBlogId=Blog.all.length-1;
  localStorage.setItem('BlogId',JSON.stringify(newBlogId));
  window.location.replace('blog-page.html');
}


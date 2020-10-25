
var categoriesArray=['books','buisness','cars','diary','funny','food','medical','motherHood','petPeeve'];
// to give the drop down list a values of catigoris 
var categoriesDropDownList=document.getElementById('categoryOptions');
for (var i =0;i<Blog.all.length;i++) {
    
    categoriesArray.push(Blog.all[i].blogCategory);
}

console.log(categoriesArray)
for (var i =0;i<categoriesArray.length;i++) {
    var option=document.createElement('option');
    categoriesDropDownList.append(option);
    option.textContent=categoriesArray[i];
}
var createForm= document.getElementById('createForm');

var bloggerName= document.getElementById('YourName');
var blogTitle= document.getElementById('blogTitle');
var imgURL= document.getElementById('image');
var BlogContentFromForm= document.getElementById('blogContent');

var submitBtn= document.getElementById('submit');
submitBtn.addEventListener('click',createBlog);
function createBlog(event){
    event.preventDefault();
     var name=bloggerName.value;
    var title=blogTitle.value;
    var url=imgURL.value;
   var content=BlogContentFromForm.value;
    var list=categoriesDropDownList.value;

   var newObj =new Blog(title,name,content,list);
   newObj.setBlogImg(url);
   newObj.storeToLocalStorage();
    createForm.reset();
}

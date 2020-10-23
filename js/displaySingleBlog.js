var savedBlogId= JSON.parse(localStorage.getItem('BlogId'));
function renderSingleBlog(singleBlog){
var singleBlogName= document.getElementById('singleBlogName');
var singleBlogCat= document.getElementById('singleBlogCat');
var singleBloggerName= document.getElementById('singleBloggerName');
var singleBlogContent= document.getElementById('singleBlogContent');
var singleBlogP= document.createElement('p');
singleBlogName.textContent=Blog.all[singleBlog].blogName;
singleBlogCat.textContent=Blog.all[singleBlog].blogCategory;
singleBloggerName.textContent=Blog.all[singleBlog].bloggerName;
singleBlogP.innerHTML=Blog.all[singleBlog].blogContent;
singleBlogContent.appendChild(singleBlogP);
}
renderSingleBlog(savedBlogId);


var favBtn=document.getElementById('readLaterBtn');
favBtn.addEventListener('click',addToFav);

function addToFav(){
    if(!favToLater.includes(savedBlogId)){
        favToLater.push(savedBlogId);
        localStorage.setItem('favBlog',JSON.stringify(favToLater));
    }
  
}
// single blog constructor

var Blog = function(blogName, bloggerName,blogContent, category){
  this.blogName = blogName.toLowerCase();
  this.bloggerName = bloggerName.toLowerCase();
  this.blogContent = blogContent;
  this.blogCategory = category;
  this.blogImg = '';
  Blog.all.push(this);
};
Blog.prototype.setBlogImg = function(blogImgURL){
  this.blogImg = blogImgURL;
};
Blog.prototype.storeToLocalStorage = function(){
  console.log(Blog.all);
  localStorage.setItem('allBlogs', JSON.stringify(Blog.all));
};

// all blogs constructor
/*var allBlogs = function(items){
  this.items = items;
};
*/
Blog.all = [];
var getBlogsFromLS = JSON.parse(localStorage.getItem('allBlogs'));
if(getBlogsFromLS){
  Blog.all = getBlogsFromLS;
}
// var categories = [];
var favToLater=[];
var getFavBlogs=JSON.parse(localStorage.getItem('favBlog'));
if(getFavBlogs){
favToLater=getFavBlogs;
}
for (var i=0;i<favToLater.length;i++){
  favToLater[i]=parseInt(favToLater[i]);
}

if(Blog.all.length === 0){
  var blog1Content = 'Whether you are a public figure or not, you’re always going to have to deal with people’s opinions of your work. Sometimes, it will be valid; other times, it won’t. Judge the judger, before you let their opinion get to you. Regardless of who is giving you the praise, or the criticism,  you should never allow someone else’s opinion to make you sad. I had a conversation with a caller on Tea With GaryVee about this very topic. I hope it resonates with you. 1. REALIZE THAT THEY DON’T KNOW YOU Whoever is leaving mean comments on your content most likely has no idea who you are. Michelle: I get really put down by people’s comments and I’ve been watching what you say about not listening to them…but I’m just a really soft person. I’m really sensitive, so I have a really hard time. Gary: Let me try to help.The biggest thing that you need to realize is they don’t know you. People criticize me all the time but they have no idea who I am or what I do. They read one quote or look at one clip, out of context, and they think they know me. I’m not too big on constructive criticism when it comes from people who have no idea what they’re talking about. Judge the judger who’s judging you. 2. EMPATHIZE WITH THEM Do you know how sad someone must be to take the time and leave a mean comment? Second, you have to be empathetic and feel compassion for them. Michelle, listen to me, do you know how sad of a place somebody has to be in for them to take the time to watch your video and say something to make you feel bad? Just so that you feel bad with them. Do you understand how sad they must feel?  I’m not joking, and I think people think i’m just trying to cheer you up, but I’m not joking. When people say shit about you like: you’re ugly, that’s stupid, you’re not funny, you’re dumb, that’s wrong– I don’t know how to do anything other than feel really bad for them.';
  var blog2Content = 'Life before blogging<br>I’m originally from Quebec, Canada. Back in the days, I used to be a social worker. I used to travel once a year for about a month and I was always spending my summers in Europe since I was 20 years old. In June 2014, I started my journey around the world at the age of 25.<br>Life on the road<br>I first started my journey in the Canadian Rockies where I hitch-hiked my way around. Then, I moved to Australia for two years. I started A Broken Backpack in July 2015. Back at the time, I was working on a farm in Australia, and I needed something to stay entertained. Quickly, A Broken Backpack became popular.<br>After Australia, I decided to go on a backpacking trip to Southeast Asia. Later on, I moved to the UK for a bit less than a year.<br>In October 2017, I decided to move to Southeast Asia. Bali became my home for about one and a half years.<br>Since 2019, I’ve been based mostly in Thailand. I spend about 2-3 months in a destination every time.<br>Of course, I do plan some occasional trips in and there, but since I’m running an online business and a few successful blogs, I prefer slow travel.<br>And… I still spend my summers in Europe.<br>Which brings me to you<br>A Broken Backpack offers great travel tips to help you stay on the road longer. I left Canada with less than CAD 2,000 on my name (and a bunch of student debts).<br>I’m living proof that you don’t need tons of savings to make your travel dreams come true.<br>I learned how to travel on the very cheap, volunteered when I needed to, and created an online business to support myself abroad. I share all these tips here on A Broken Backpack.';

  var blog3Content = 'Very recently, I used our social media channels to share some alarming statistics about the dangers of ‘silent’ heart attacks – cardiac episodes so mild that they go unnoticed until the patient requires an ECG.<br>The statistics themselves are sobering enough – around 45% of all heart attacks are silent and their long-term effect on heart health can be significant, with a major and possibly fatal cardiac event more likely with each episode.<br>But they become alarming when you add in other considerations.<br>For example, four in every ten people admit they either avoid making an appointment with their GP to have a heart check-up, or make the appointment but then cancel it at the last minute.<br>Add to this the fact that heart checks aren’t a standard element of a routine NHS or GP check and you begin to see an emerging picture of increasing risk.<br>One of the statistics that surprises most of the clients we see at The Natural Doctor® is that 50% of all heart attack victims havenormal cholesterol levels. No-one is going to tell you that lowering cholesterol is a bad thing; but if you’re someone who thinks lowering cholesterol is the whole answer to tackling the health of your heart then you could be in for a nasty surprise.<br>For a great many people – and especially for men who are more naturally predisposed to heart conditions – what stops them going through with an appointment is that age-old process of knowledge breeding fear.<br>Knowledge in the sense that they might recognise their lifestyle puts them at exponentially greater risk or, perhaps, that there is a history of heart disease in their family. Fear in the sense of having their worst suspicions confirmed.<br>Perversely, for those people, not knowing they have a problem means there’s no problem to deal with. Which works – but only until their heart doesn’t.<br>In reality, of course, we’d all logically agree that knowing is the better option, whether there is an identified risk or not, because it gives us time to take the necessary steps to make the changes that need to be made to protect our hearts.<br>Here at The Natural Doctor®, our PULs cardiovascular risk assessment is designed to do exactly that: assess your risk of a serious cardiac event and then beginning the process of giving you and/or your GP the information you need to stop it from ever happening.';

  var blog4Content = 'Every day you don’t make your textile art a priority is a day further away from ownership of your techniques. A day further away from developing an artistic voice that is clear, strong and original. A day further away from adding beauty, creativity and connection in the world. <br>Deep breath. The first step on the road to recovery is to forgive yourself. You are not alone. In all walks of life there are talented people with untapped creative potential resisting a regular, disciplined practice. <br>It’s hard to believe that multi-award winning fiber artist Susan Lenz, who now has a string of successful solo shows to her name, was one of those people. But back in 2002, Susan was utterly miserable. <br>She longed for a more productive practice. Actually, she longed for any kind of practice. But with bills to pay, giving up her “day job” to focus on her art was not an option. <br>She wasted a lot of time feeling sorry for herself. Feeling jealous of artists who had freedom and money. Feeling guilty that she wasn’t in the studio. <br>Whenever she tried to be creative, instinct was overpowered by negativity. What was the point? <br>The revelation came one day at an event held by another artist. An artist who had the “luxury” of dedicating herself exclusively to a full-time practice. <br> “It happened to be during some ritual, a bonfire set ablaze by the artist, which was supposed to carry personal dreams and prayers to heaven.<br> I wasn’t particularly thrilled with the notion. Almost in silent defiance, I said to myself, “Okay, God… Hear my prayer. I want to be an artist”.<br> Bam! A thought hit me like a lightening bolt, a true moment of epiphany”.<br> Susan suddenly realised why she was feeling such resentment and envy. She couldn’t stand that the bonfire artist was living an authentic life. And she was not.<br> “I got a time card. I kept track. With the help and support of my husband who started doing his share of the household chores, I gradually increased my studio time. Eventually, this new schedule became a habit”.<br> Not only did Susan overcome her aversion to getting down to work, nowadays she enjoys a disciplined, fruitful studio practice and a rewarding artistic career that has enabled her to ditch the “day job”.';

  var blog5Content = 'I’m dedicating this space to anything and everything about learning. Having been involved with a wonderful organization called Outward Bound throughout my life gave me the inclination towards learning and development. I am delving into this area more and more – and the more I learn about it, the more interesting it becomes. The defining moment for me was year 2010 when I was going through a personal turmoil, during which I had to push myself beyond my limits to be strong. It was a personal triumph for me to see how powerful my mind really was, and how it was able to overcome anything I used to think impossible.<br>I’ve been documenting my personal journey ever since, and now into my blog. My motto is to turn our life experiences into life skills. Everyone of us goes through life, which means we’ve experienced good things as well as bad things. We all grow old. But we can only gain wisdom, maturity and true growth by consciously learning from those experiences, by asking ourselves “What did I learn from that experience?” and finding the answers for ourselves. That’s how we get better overtime.<br>I enjoy the outdoors, I l.o.v.e traveling where I always take my darling camera with me. With these three combined it’s quite natural to be a travel writer. So I’m also a freelance writer (for travel as well as business professional). I enjoy painting – and I’ve been told that I’m quite the artist and that I should do it more often!, I’m crazy about music. One of my biggest passions in life is to help others grow and find their potential. Hence I coach <br>I hope you enjoy reading my blogs. But most importantly, I hope that my life journey can serve as a morsel of inspiration to yours. <br>My Best,';

  var blog1 = new Blog('HOW TO HANDLE NEGATIVE COMMENTS','GARY VAYNERCHUK', blog1Content, 'life coaching');
  var blog2 = new Blog('HELLO, I’M MEL A CANADIAN TRAVEL BLOGGER','Mel', blog2Content, 'travel');
  var blog3 = new Blog('DON’T BE AN OSTRICH WHEN IT COMES TO HEART HEALTH, BY DR.ECCLES','DR. NYJON ECCLES', blog3Content, 'health');
  var blog4 = new Blog('Diagnosis: Artistic paralysis','Joe', blog4Content, 'art');
  var blog5 = new Blog('My Life, My Experience!','Wendy Kusumowidagdo', blog5Content, 'experience');
  blog1.setBlogImg('img/slack-imgs.jpg');
  blog2.setBlogImg('img/slack-canada.jpg');
  blog3.setBlogImg('img/slack-imgs.png');
  blog4.setBlogImg('img/slack-art.jpg');
  blog5.setBlogImg('img/slack-imgs-1.jpg');
  blog2.storeToLocalStorage();
}

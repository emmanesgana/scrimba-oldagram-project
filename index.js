const posts = [
{
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21
},
{
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4
},
    {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152
}
]

//create a variable for content-panel id
const mainEl = document.getElementById("main-el")

//create a function to display the information from the array
function renderPostsContent(){
    let contentArray = ""
    for (let i = 0; i < posts.length; i++) {
        let getName = posts[i].name
        let getUsername = posts[i].username
        let getLocation = posts[i].location
        let getAvatar = posts[i].avatar
        let getPost = posts[i].post
        let getComment = posts[i].comment
        let getLikes = posts[i].likes
        
        contentArray +=`
        <section id="section-el" class="section-style">
            <div class="user-info">
                <img src="${getAvatar}" class="post-avatar avatar-image" alt="Profile Avatar">
                <div class="post-info">
                    <h2 class="post-bold">${getName}</h2>
                    <p class="post-medium">${getLocation}</p>
                </div>
            </div>
            <div class="post-image-container">
                <img src="${getPost}" class="post-image" alt="Post photo">
            </div>
            <div class="post-body">
                <div class="post-activity">
                    <img src="images/icon-heart.png" class="post-heart" alt="Heart logo">
                    <img src="images/icon-comment.png" class="post-comment" alt="Comment logo">
                    <img src="images/icon-dm.png" class="post-dm" alt="Post DM logo">
                </div>
                <div class="post-likescount">
                    <h2 class="post-bold">${getLikes} likes</h2>
                </div>
                <p class="post-comments">
                    <span class="post-bold">${getUsername}</span> ${getComment}
                </p>
            </div>
        </section>
        `
    }
    mainEl.innerHTML = contentArray
} 

renderPostsContent()


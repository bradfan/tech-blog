// query selector on "btn" from login.handlebars to submit post to db then dynamically create reply options to fill div in homepage handlebars. User can post and submit here plus reply and submit here.

const savePost = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#submit-title').value;
    const content = document.querySelector('#submit').value;
  
    if (title && content) {
      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
    //   document.location.replace("/dashboard")
    }
    document.addEventListener("click",replyBox);
    const replyBox = createElement("div");
    replyContainer.append(replyBox)
    const text = createElement("textarea");
    replyContainer.append(text);
    const replyBtn = createElement("button");
    replyBox.append(replyBtn);


  };

 

// create function to save reply and generate next reply box in "replyContainer" div

// // homeRoutes.js works with homepage.js and homepage handlebars with the post and reply models.
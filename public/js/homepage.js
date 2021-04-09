// query selector on "btn" from login.handlebars to submit post to db then dynamically create reply options to fill div in homepage handlebars. User can post and submit here plus reply and submit here.

const savePost = async (event) => {
    event.preventDefault();
  
    //const title = document.querySelector('#submit-title').value;
    const title = "test title"
    const content = document.querySelector('.form-input').value;
  
    if (title && content) {
      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
    //   document.location.replace("/dashboard")
    }

    // document.addEventListener("click",replyBox);
    // const replyBox = document.createElement("div");
    // replyContainer.append(replyBox)
    // const text = document.createElement("textarea");
    // replyContainer.append(text);
    

    // appendChild(?)


  };

  document
      .querySelector("#subpost")
      .addEventListener('submit', savePost)

 

// create function to save reply and generate next reply box in "replyContainer" div

// // homeRoutes.js works with homepage.js and homepage handlebars with the post and reply models.
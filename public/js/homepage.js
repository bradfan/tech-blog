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
      document.location.replace("/dashboard")
    }
  };

  const replyBox = async (event) => {
      event.preventDefault();
    //   create reply element to go into "taco" div
  }

// create function to save reply and generate next reply box in "taco" div

// // homeRoutes.js works with homepage.js and homepage handlebars with the post and reply models.
//  Remember that dashboard is for past posts and replies. So the user can view past posts and reply only
// dashboard.js works with dashboard.handlebars and dashboard route.js as well as post and reply models

const savePost = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#submit-title').value;
    // const title = "test title"
    const content = document.querySelector('.form-input').value;
  
    if (title && content) {
      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
    //   document.location.replace("/dashboard")
    }

    
    

  


  };

  document
      .querySelector("#subpost")
      .addEventListener('submit', savePost)
// query selector on "btn" from login.handlebars to submit post to db then dynamically create reply options to fill div in homepage handlebars. User can post and submit here plus reply and submit here.

const saveReply = async (event) => {
  event.preventDefault();

  
  // const title = "test title"
  const content = document.querySelector(".reply-input").value;

  if (content) {
    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({ content }),
      headers: { "Content-Type": "application/json" },
    });
    //   document.location.replace("/dashboard")
  }
};

document.querySelector("#subpost").addEventListener("click", saveReply);

// create function to save reply and generate next reply box in "replyContainer" div

// // homeRoutes.js works with homepage.js and homepage handlebars with the post and reply models.

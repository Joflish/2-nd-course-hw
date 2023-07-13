"use strict";



let comments = []


const getComments = () => {

  // const loader = document.getElementById('loader');
  // // loader.disabled = true;
  // loader.innerText = "Комментарии загружаются ...";

  const invisibleDivHead = document.getElementById('invizDivHeader');
  invisibleDivHead.disabled = true;

  return fetch("https://webdev-hw-api.vercel.app/api/v1/pyaterikov-matvei/comments",{
  method: "GET",
})
.then((response) => {
  response.json().then((responseData) => {
    const Comments = responseData.comments.map((comment) => {
      return {
        name: comment.author.name,
        date: new Date(comment.date),
        text: comment.text,
        likes: comment.likes,
        isLiked: false,
      };
    });
      comments = Comments;
      renderComments();
      invisibleDivHead.classList.add('hidden');

    });
  });
};

getComments();

  const listComments = document.getElementById("comments-users");

  const renderComments = () => {
    const commentsHTML = comments.map((comment, index) => {
        const formattedDate = formatDate(new Date(comment.date));
        return `<li data-index="${index}" class="comment">
          <div class="comment-header">
            <div>${comment.name}</div>
            <div>${formattedDate}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">${comment.text}</div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.likes}</span>
              <button data-index="${index}" class="like-button ${comment.isLiked ? "-active-like" : ""}"></button>
            </div>
          </div>
        </li>`;
      }).join('');

    listComments.innerHTML = commentsHTML;
    counterLikes();
    answerComment();
  };

  renderComments();

  function formatDate(date) {
    const year = date.getFullYear().toString().slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }

  function counterLikes() {
    const likesButtonElements = document.querySelectorAll('.like-button');

    likesButtonElements.forEach((likesButtonElement) => {
        likesButtonElement.addEventListener('click', (event) => {
          event.stopPropagation();
          const index = likesButtonElement.dataset.index;
          const comment = comments[index];         

          if (comment.isLiked) {
            comment.likes = comment.likes - 1;
            likesButtonElement.classList.remove('-active-like');
          } else {
            comment.likes = comment.likes + 1;
            likesButtonElement.classList.add('-active-like');
          }

          comment.isLiked = !comment.isLiked;
          
          renderComments();
        });
      })
  };
  
  function answerComment() {
    const oldComments = document.querySelectorAll(".comment");

    for (let oldComment of oldComments) {
      oldComment.addEventListener("click", (event) => {
        event.stopPropagation();
        
        const index = oldComment.dataset.index;
        const comment = comments[index];

        textInputElement.value = `${comment.text}\n${comment.name}`;
      });
    }
  }

  const buttonElement = document.getElementById("button-add");
  const listElement = document.getElementById("comments-users");
  const nameInputElement = document.getElementById("name-input");
  const textInputElement = document.getElementById("text-input");

  const addComment = () => {
  const startAt = Date.now()
  buttonElement.disabled = true;
  buttonElement.textContent = "Комментарий загружается ...";
      //Цепочка проммисов

    fetch("https://webdev-hw-api.vercel.app/api/v1/pyaterikov-matvei/comments", {
      method: "POST",
      body: JSON.stringify({
        name: nameInputElement.value,
        text: textInputElement.value,
      }),
    })
    .then((response) => {
      buttonElement.textContent = 'Написать';
      buttonElement.disabled = false;
      if (response.status === 500) {
        return Promise.reject('Сервер упал');
      } else if (response.status === 400)
        return Promise.reject(400);
      else {
        return response.json();
      }
    })
    .then(() => {
      comments = comments;
      return getComments()
    })
    .then(() => {
        buttonElement.disabled = false;
        buttonElement.textContent = "Написать";
        nameInputElement.value = '';
        textInputElement.value = '';
        renderComments();
    })
    .catch((error) => {
      if (error === 500) {
        alert('Сервер сломался, попробуйте позже');
        return;
      }
      if (error === 400) {
        buttonElement.classList.add('empty');
        alert('Имя и комментарий должны быть не короче 3 символов');
        return;
      }
      alert('Кажется, у вас сломался интернет');
    })
    ; 
      renderComments();

  addButtonElement.disabled = true;
  addButtonElement.classList.add("empty");

  };

  buttonElement.addEventListener("click", addComment);

  const deleteComment = () => {
    comments.pop();
    renderComments();
  }

  textInputElement.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addComment();
      event.preventDefault();
    }
  });
  
  const buttonDeleteElement = document.getElementById("button-delete");
  
  buttonDeleteElement.addEventListener("click", deleteComment);


  const addButtonElement = document.getElementById("button-add");
  addButtonElement.disabled = true;
  addButtonElement.classList.add("empty"); 
  nameInputElement.addEventListener("input", handleInput);
  textInputElement.addEventListener("input", handleInput);

  function handleInput() {
    if (nameInputElement.value.trim() !== "" && textInputElement.value.trim() !== "") {
      addButtonElement.disabled = false;
      addButtonElement.classList.remove("empty"); 
    } else {
      addButtonElement.disabled = true;
      addButtonElement.classList.add("empty");
    }
  }
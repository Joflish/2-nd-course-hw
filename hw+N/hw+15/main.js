"use strict";

import { getComments, postFetch, comments, buttonElement, textInputElement, nameInputElement } from "./api.js";

import { renderComments } from "./render.js";

getComments();
export const listComments = document.getElementById("comments-users");
renderComments();

export function formatDate(date) {
    const year = date.getFullYear().toString().slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

export function counterLikes() {
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
  
export function answerComment() {
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


  export const addComment = () => {
    const startAt = Date.now()
    buttonElement.disabled = true;
    buttonElement.textContent = "Комментарий загружается ...";
    addButtonElement.disabled = true;
    addButtonElement.classList.add("empty");
    postFetch();
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
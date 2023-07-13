import { renderComments } from "./render.js";

export const nameInputElement = document.getElementById('name-input');
export const textInputElement = document.getElementById('text-input');
export const buttonElement = document.getElementById('button-add');

export let comments = [];

export const getComments = () => {
  
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

export function postFetch() {
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
        nameInputElement.value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;'),
        textInputElement.value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;'),
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
}
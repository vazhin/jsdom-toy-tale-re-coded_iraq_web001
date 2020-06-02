let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyForm = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyForm.style.display = "block";
    } else {
      toyForm.style.display = "none";
    }
  });

  // const toyCollection = document.querySelector("#toy-collection");
  //
  // fetch('http://localhost:3000/toys')
  //   .then(response => response.json())
  //   .then(object => {
  //     console.log(object)
  //
  //     for (element of object) {
  //       let cardDiv = document.createElement('div')
  //       cardDiv.classList.add('card')
  //       addInfoToCard(cardDiv);
  //     }
  //   })
  //
  //   function addInfoToCard(card) {
  //     card.innerHTML = `<h2>Woody</h2>
  //     <img src=toy_image_url class="toy-avatar" />
  //     <p>4 Likes </p>
  //     <button class="like-btn">Like <3</button>`
  //   }


});

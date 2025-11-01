//setupp
  let input = document.getElementById("search");
   let form = document.getElementById("form");
    input.focus()
input.setSelectionRange(input.value.length, input.value.length);
    console.log(input);
    ///////////
    function sendrequest (){
 let value = document.getElementById("search").value
       console.log(value);
fetch("/books/search?value="+value,{
  method:"POST",
headers:{
    "Content-Type":"application/json"
}}).then(res => res.json())
  .then(data => {
let array = data.book
let grid = document.getElementById("bookgrid");
let div = document.getElementById("div");
  div.innerHTML = "";
  console.log(div)
if(array.length===0){
  let section = document.createElement("section");
  section.className= "hero"
   section.innerHTML = `<p>No results found 😢</p>`
  div.appendChild(section);
  }

grid.innerHTML = "";
for(let i=0;i<array.length;i++){
  console.log(array[i]);
  let carde = document.createElement("div");
  carde.className = "book-card";
  carde.innerHTML = `
          <img src="${array[i].coverurl}" alt="Book Cover" />
          <div class="book-info">
            <h3>${array[i].title}</h3>
            <p>${array[i].author}</p>
            <p>${array[i].publisyear}</p>
            <span class="genre-tag">${array[i].genre}</span>
          </div>
  `
  grid.appendChild(carde);
}
    })
  }
sendrequest()
 input.addEventListener("input", sendrequest);
      
  /*
 <div class="book-card">
          <img src="<%= el.coverurl %>" alt="Book Cover" />
          <div class="book-info">
            <h3><%= el.title %></h3>
            <p><%= el.author %></p>
            <p><%= el.publishyear %></p>
            <span class="genre-tag"><%= el.genre %></span>
          </div>
        </div>
  */
  
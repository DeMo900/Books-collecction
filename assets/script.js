  let input = document.getElementById("search");
   let form = document.getElementById("form");
    input.focus()
input.setSelectionRange(input.value.length, input.value.length);
    console.log(input);
    input.addEventListener("input",()=>{
       let value = document.getElementById("search").value
       console.log(value);
fetch("/books/search?value="+value,{
  method:"POST",
headers:{
    "Content-Type":"application/json"
}}).then(res => res.json())
  .then(data => {
let array = data.book
let section = document.getElementById("section");
      section.innerHTML = ""
for(let i=0;i<array.length+1;i++){
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
  section.appendChild(carde);
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
}


  })
  .catch(err => console.error(err));
    })

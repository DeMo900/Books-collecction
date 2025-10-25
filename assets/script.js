  let input = document.getElementById("search");
   let form = document.getElementById("form");
    input.focus()
input.setSelectionRange(input.value.length, input.value.length);
    console.log(input);
    input.addEventListener("input",()=>{
       let value = document.getElementById("search").value
       console.log(value);
form.submit()

    })
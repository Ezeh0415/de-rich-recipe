// geting the html codes
const mainCardDiv = document.querySelector("#main-card-div");
const recipeCardDiv = document.querySelector("#recipe-card-div");
const loading = document.querySelector("#loading");
const error = document.querySelector("#error");
const showMore = document.querySelector("#showMore");
const addRecipeText = document.querySelector("#addRecipeText");
const uploadError = document.getElementById("uploadError");
const uploadSuccess = document.getElementById("uploadSuccess");



// URL of the API endpoint you want to fetch data from
const apiUrl1 =  `https://forkify-api.herokuapp.com/api/v2/recipes?search=rice&key=93838a86-f043-44b3-b7cf-0e86da1d4167`;

// Use the fetch API to make a GET request
fetch(apiUrl1)
  .then(response => {
    // Check if the response status is OK (status code 200-299)
    if (response === 200) {
      loading.classList.remove("hidden");
    } else if (!response.ok) {
      loading.classList.add("hidden");
      error.classList.remove("hidden");
      throw new Error('Network response was not ok');
    } else {
      loading.classList.add("hidden");
    }
    // Parse the response body as JSON
    return response.json();
  })
  .then(file => {
    
    // Handle the JSON data returned from the server
    // console.log('Data fetched:', data);

    const {status,results,data} = file;
    const {recipes} = data;
    const spliceRecipes = recipes.splice(3,12);
    // for home page section
    const img_url = spliceRecipes[1].image_url;
    showMore.style.backgroundImage = `url('${img_url}')`;
    showMore.style.backgroundRepeat = "no-repeat";
    showMore.style.backgroundSize = "cover";
    
    spliceRecipes.forEach(recipe => {
       const {id,image_url,publisher,title} = recipe;
      //  created the necessary html tags

        const firstDiv = document.createElement("div");
        const secondDiv = document.createElement("div");
        const imageDiv = document.createElement("div");
        const img = document.createElement("img");
        const thirdDiv = document.createElement("div");
        const firstSpan = document.createElement("span");
        const userSvgH3 = document.createElement("h3");
        const userSvg = `    <svg class="w-4 mt-1 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>`;
        const firstP = document.createElement("p");
        const clockSvgH3 = document.createElement("h3");
        const clockSvg = `<svg class="ml-1 w-4 mt-1 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>`;
        const secondP = document.createElement("p");
        const h4 = document.createElement("h4");
        const thirdP = document.createElement("p");

        // adding the necessary class
        firstDiv.classList.add("mt-3","shadow-lg","border-2","w-[95%]","mx-auto","md:h-fit");
        secondDiv.classList.add("card","bg-white");
        imageDiv.classList.add("w-full","h-44","overflow-hidden");
        img.classList.add("object-cover","rounded-sm","w-full","h-44");
        thirdDiv.classList.add("px-2","p-2");
        firstSpan.classList.add("flex","capitalize","md:text-xs","mt-1");
        // add svg before firstP
        firstP.classList.add("ml-1");
        // add svg before secondP
        secondP.classList.add("ml-1");
        h4.classList.add("capitalize","text-lg","text-gray-800","font-bold","md:text-sm","md:mt-1");
        thirdP.classList.add("mt-3","text-sm","text-gray-500","font-light","md:font-bold");

        // adding required text;

        img.src = image_url;
        img.alt = title;
        userSvgH3.innerHTML = userSvg;
        firstP.textContent = publisher;
        clockSvgH3.innerHTML = clockSvg;
        secondP.textContent = "july 12 2024";
        h4.textContent = title;
        thirdP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eum ut placeat consequuntur suscipit aut ipsum vitae";

        // seting up the html stage

        firstDiv.appendChild(secondDiv);
        secondDiv.appendChild(imageDiv);
        imageDiv.appendChild(img);
        secondDiv.appendChild(thirdDiv);
        thirdDiv.appendChild(firstSpan);
        firstSpan.appendChild(userSvgH3);
        firstSpan.appendChild(firstP);
        firstSpan.appendChild(clockSvgH3);
        firstSpan.appendChild(secondP);
        thirdDiv.appendChild(h4);
        thirdDiv.appendChild(thirdP);

        mainCardDiv.appendChild(firstDiv);



    });

  })
  .catch(error => {
    // Handle any errors that occurred during the fetch operation
    console.error('There was a problem with the fetch operation:', error);
  });



  function getInputValue() {
    // Select the input element
    const inputElement = document.getElementById('myInput');
    
    // Get the value from the input
    let inputValue = inputElement.value;
    
    // Display the input value in the paragraph element
  let result = inputValue;
    if (inputValue.trim() !== '') {
      // Update the display paragraph with the new input value
      
      const apiUrl2 = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${result}&key=93838a86-f043-44b3-b7cf-0e86da1d4167`;
      // Clear the input field
      inputElement.value = '';
      recipeCardDiv.textContent = "";

      fetch(apiUrl2)
        .then(response => {
          // Check if the response status is OK (status code 200-299)
          if (response === 200) {
            loading.classList.remove("hidden");
          } else if (!response.ok) {
            loading.classList.add("hidden");
            error.classList.remove("hidden");
            throw new Error('Network response was not ok');
          } else {
            loading.classList.add("hidden");
          }
          // Parse the response body as JSON
          return response.json();
        })
        .then(file => {
      
          const {status,results,data} = file;
          const {recipes} = data;
          const spliceRecipes = recipes;

          spliceRecipes.forEach(recipe => {
            const {id,image_url,publisher,title} = recipe;
           //  created the necessary html tags
     
             const firstDiv = document.createElement("div");
             const secondDiv = document.createElement("div");
             const imageDiv = document.createElement("div");
             const img = document.createElement("img");
             const thirdDiv = document.createElement("div");
             const firstSpan = document.createElement("span");
             const userSvgH3 = document.createElement("h3");
             const userSvg = `    <svg class="w-4 mt-1 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
           </svg>`;
             const firstP = document.createElement("p");
             const clockSvgH3 = document.createElement("h3");
             const clockSvg = `<svg class="ml-1 w-4 mt-1 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
           </svg>`;
             const secondP = document.createElement("p");
             const h4 = document.createElement("h4");
             const thirdP = document.createElement("p");
             const anchor = document.createElement("a");
     
             // adding the necessary class
             firstDiv.classList.add("mt-3","shadow-lg","border-2","w-[95%]","mx-auto","md:h-fit");
             secondDiv.classList.add("card","bg-white");
             imageDiv.classList.add("w-full","h-44","overflow-hidden");
             img.classList.add("object-cover","rounded-sm","w-full","h-44");
             thirdDiv.classList.add("px-2","p-2");
             firstSpan.classList.add("flex","capitalize","md:text-xs","mt-1");
             // add svg before firstP
             firstP.classList.add("ml-1","text-xs","mt-1");
             // add svg before secondP
             secondP.classList.add("ml-1","text-xs","mt-1");
             h4.classList.add("capitalize","text-lg","text-gray-800","font-bold","md:text-sm","md:mt-1");
             thirdP.classList.add("mt-3","text-sm","text-gray-500","font-light","md:font-bold");
     
             // adding required text;
     
             img.src = image_url;
             img.alt = title;
             userSvgH3.innerHTML = userSvg;
             firstP.textContent = publisher;
             clockSvgH3.innerHTML = clockSvg;
             secondP.textContent = "july 12 2024";
             h4.textContent = title;
             thirdP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eum ut placeat consequuntur suscipit aut ipsum vitae";
     
             // seting up the html stage
     
             firstDiv.appendChild(anchor);
             anchor.appendChild(secondDiv);
             secondDiv.appendChild(imageDiv);
             imageDiv.appendChild(img);
             secondDiv.appendChild(thirdDiv);
             thirdDiv.appendChild(firstSpan);
             firstSpan.appendChild(userSvgH3);
             firstSpan.appendChild(firstP);
             firstSpan.appendChild(clockSvgH3);
             firstSpan.appendChild(secondP);
             thirdDiv.appendChild(h4);
             thirdDiv.appendChild(thirdP);
     
             recipeCardDiv.appendChild(firstDiv);
     
     
     
         });

        })
        .catch(error => {
          // Handle any errors that occurred during the fetch operation
          console.error('There was a problem with the fetch operation:', error);
        });
  }

}

// for the background image in add new recipe

const apiUrl2 =  `https://forkify-api.herokuapp.com/api/v2/recipes?search=rice&key=93838a86-f043-44b3-b7cf-0e86da1d4167`;

// Use the fetch API to make a GET request
fetch(apiUrl2)
  .then(response => {
    // Check if the response status is OK (status code 200-299)
    if (response === 200) {
      loading.classList.remove("hidden");
    } else if (!response.ok) {
      loading.classList.add("hidden");
      error.classList.remove("hidden");
      throw new Error('Network response was not ok');
    } else {
      console.log("error");
    }
    // Parse the response body as JSON
    return response.json();
  })
  .then(file => {
    
    // Handle the JSON data returned from the server
    // console.log('Data fetched:', data);

    const {status,results,data} = file;
    const {recipes} = data;
    const spliceRecipes = recipes.splice(3,12);

    const img_url1 = spliceRecipes[7].image_url;
    addRecipeText.style.backgroundImage = `url('${img_url1}')`;
    addRecipeText.style.backgroundRepeat = "no-repeat";
    addRecipeText.style.backgroundSize = "cover";
    // addRecipeText.style.backdropFilter = "blur(100px)";
    
    // // spliceRecipes.forEach(recipe => {
    // //    const {id,image_url,publisher,title} = recipe;
    // //   //  created the necessary html tags

    // //     const firstDiv = document.createElement("div");
    // //     const secondDiv = document.createElement("div");
    // //     const imageDiv = document.createElement("div");
    // //     const img = document.createElement("img");
    // //     const thirdDiv = document.createElement("div");
    // //     const firstSpan = document.createElement("span");
    // //     const userSvgH3 = document.createElement("h3");
    // //     const userSvg = `    <svg class="w-4 mt-1 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    // //     <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    // //   </svg>`;
    // //     const firstP = document.createElement("p");
    // //     const clockSvgH3 = document.createElement("h3");
    // //     const clockSvg = `<svg class="ml-1 w-4 mt-1 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    // //     <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    // //   </svg>`;
    // //     const secondP = document.createElement("p");
    // //     const h4 = document.createElement("h4");
    // //     const thirdP = document.createElement("p");

    // //     // adding the necessary class
    // //     firstDiv.classList.add("mt-3","shadow-lg","border-2","w-[95%]","mx-auto","md:h-fit");
    // //     secondDiv.classList.add("card","bg-white");
    // //     imageDiv.classList.add("w-full","h-44","overflow-hidden");
    // //     img.classList.add("object-cover","rounded-sm","w-full","h-44");
    // //     thirdDiv.classList.add("px-2","p-2");
    // //     firstSpan.classList.add("flex","capitalize","md:text-xs","mt-1");
    // //     // add svg before firstP
    // //     firstP.classList.add("ml-1");
    // //     // add svg before secondP
    // //     secondP.classList.add("ml-1");
    // //     h4.classList.add("capitalize","text-lg","text-gray-800","font-bold","md:text-sm","md:mt-1");
    // //     thirdP.classList.add("mt-3","text-sm","text-gray-500","font-light","md:font-bold");

    // //     // adding required text;

    // //     img.src = image_url;
    // //     img.alt = title;
    // //     userSvgH3.innerHTML = userSvg;
    // //     firstP.textContent = publisher;
    // //     clockSvgH3.innerHTML = clockSvg;
    // //     secondP.textContent = "july 12 2024";
    // //     h4.textContent = title;
    // //     thirdP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eum ut placeat consequuntur suscipit aut ipsum vitae";

    // //     // seting up the html stage

    // //     firstDiv.appendChild(secondDiv);
    // //     secondDiv.appendChild(imageDiv);
    // //     imageDiv.appendChild(img);
    // //     secondDiv.appendChild(thirdDiv);
    // //     thirdDiv.appendChild(firstSpan);
    // //     firstSpan.appendChild(userSvgH3);
    // //     firstSpan.appendChild(firstP);
    // //     firstSpan.appendChild(clockSvgH3);
    // //     firstSpan.appendChild(secondP);
    // //     thirdDiv.appendChild(h4);
    // //     thirdDiv.appendChild(thirdP);

    // //     mainCardDiv.appendChild(firstDiv);



    // });

  })
  .catch(error => {
    // Handle any errors that occurred during the fetch operation
    console.error('There was a problem with the fetch operation:', error);
  });


  // FOR THE ADD NEW RECIPR;

  function handlePost() {

    
    const cookersName = document.getElementById("cookersName");
    const recipeName = document.getElementById("recipeName");
    const recipeDescription = document.getElementById("recipeDescription");
    // Select the file input element
    const recipeImage = document.getElementById('recipeImage');

    
    const cookersValue = cookersName.value;
    const recipeNameValue = recipeName.value;
    const recipeDescriptionValue = recipeDescription.value;
     // Get the files selected by the user
     const recipeImageValue = recipeImage.files[0]; 

     if (!cookersValue || !recipeNameValue || !recipeDescriptionValue || !recipeImageValue) {
      uploadError.textContent = "all input is required ";
      uploadSuccess.textContent = "";
    }  else {

     // id section
     const id = Date.now();

     // Check if any files were selected
     if (recipeImageValue) {
      const reader = new FileReader();

      reader.onload = function(e) {
        const newRecipeObj = {
          id:id,
          publisher: cookersValue,
          title: recipeNameValue,
          description: recipeDescriptionValue,
          image_url: e.target.result
        };
        const post =  `https://forkify-api.herokuapp.com/api/v2/recipes`;
        fetch(post, {
          method:'POST',
          headers: {
            'content-type': 'application/json',
            "Authorization" : '93838a86-f043-44b3-b7cf-0e86da1d4167'
          },
          body:JSON.stringify(newRecipeObj)
        })
        .then(res => res.json())
        .then(data => {
          console.log("success:", data);
          uploadSuccess.textContent = "SUCCESS due to server error we cant preview this now please bear with us";
          uploadError.textContent = "";
        })
        .catch(error => {
         uploadError.textContent = `${error}`;
         uploadSuccess.textContent = "";
        })
      }
      reader.readAsDataURL(recipeImageValue);
      } else {
        uploadError.textContent = "all input is required ";
        uploadSuccess.textContent = "";
      }


}
    
    cookersName.value = "";
    recipeName.value = "";
    recipeDescription.value = "";
    recipeImage.value = "";
    


  }



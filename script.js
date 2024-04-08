let accessKey = prompt("Please enter your access Key");

const apiUrl = 'https://api.unsplash.com/photos/random';
document.body.style.backgroundColor = 'purple';

// Function to fetch random image from Unsplash API
function fetchImage() {
fetch(`${apiUrl}?client_id=${accessKey}`)
    .then(response => response.json())
    .then(data => {
      // Extract image URL from the response data
      const imageUrl = data.urls.regular;
      const imageDescription = data.alt_description
      const imageLocation = data.location.name? data.location.name: ""
      // Create an image element and set its source to the fetched URL
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      const newDiv = document.createElement("textbox");

      const finalSentence = imageDescription.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());


      const newContent = document.createTextNode(finalSentence +' '+ imageLocation);

      newDiv.appendChild(newContent);

     const currentDiv = document.getElementById("outsidebox");
     document.body.insertBefore(newDiv, currentDiv);
      newDiv.style.fontSize = '2vw'

      imgElement.style.height = '50vw';
      imgElement.style.display = 'flex-direction'; 'row', 'justify-content'; 'center', 'align-content';'center';
     imgElement.style.border = '15px solid black';
     imgElement.style.overflow = 'scroll';
    
      document.body.appendChild(imgElement); 
    //console.log(data)
    })
 

    .catch(error => {
      console.error('Error fetching image:', error);
    });
}
// Call the function to fetch an image
fetchImage();
fetchImage();


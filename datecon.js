
const d = new Date();
            document.getElementById("resnav").innerHTML = d; 

let name = prompt("What shall I call you")
console.log(`Please sign my guest book, ${name}.` );

function addPost() {
            const input = document.getElementById('postInput');
            const text = input.value.trim();

            // Prevent empty posts
            if (text === "") {
                alert("Please write something before posting.");
                return;
            }

            // Create a new post element
            const postDiv = document.createElement('div');
            postDiv.className = 'post';
            postDiv.textContent = text; // Safe text insertion

            // Add the post to the container
            document.getElementById('postsContainer').prepend(postDiv);

            // Clear the input box
            input.value = "";
        }
       
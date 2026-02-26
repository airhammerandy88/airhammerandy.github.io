
const d = new Date();
            document.getElementById("resnav").innerHTML = d; 

let name = prompt("What shall I call you")
console.log(`Welcome to my Office, ${name}.` );
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
        const input = document.getElementById('postInput');
        const preview = document.getElementById('postPreview');

        input.addEventListener('input', () => {
            const text = input.value.trim();

            if (text === "") {
                preview.textContent = "Your post will appear here...";
                preview.classList.add('placeholder');
            } else {
                preview.textContent = text;
                preview.classList.remove('placeholder');
            }
        });
let userIdInput = document.getElementById('userIdInput');

let searchButton = document.getElementById('searchButton');

let resultDiv = document.getElementById('result');

searchButton.addEventListener('click', function() {

    let userId = userIdInput.value;
    Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    ])
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(data => {
        let user = data[0];
        let posts = data[1];
        let todos = data[2];

        if (!user) {
            resultDiv.innerHTML = 'User was not found. Please try another user ID';
            return;
        }

        resultDiv.innerHTML = `
            <table>
            <tr>
                <th colspan="2">User Information</th>
            </tr>
            <tr>
                <td>ID</td>
                <td>${user.id}</td>
            </tr>
            <tr>
                <td>Name</td>
                <td>${user.name}</td>
            </tr>
            <tr>
                <td>Username</td>
                <td>${user.username}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>${user.email}</td>
            </tr>
            </table>
            <br />
            <table>
            <tr>
                <th>Posts</th>
            </tr>
            ${posts.map(post => `
                <tr>
                <td>${post.title}</td>
                </tr>
            `).join('')}
            </table>
            <br />
            <table>
            <tr>
                <th>Todos</th>
            </tr>
            ${todos.map(todo => `
                <tr>
                <td>${todo.title}</td>
                </tr>
            `).join('')}
            </table>
        `;
        })
        .catch(error => {
            
        console.error(error);
        resultDiv.innerHTML = 'An error occurred. Please try again later.';
    });
});
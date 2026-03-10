// Function returning a Promise
function fetchUsers() {

    const shouldFail = false; // Change to true to test rejection

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (!shouldFail) {
                const users = [
                    { id: 1, name: "Ali Khan", email: "ali@email.com" },
                    { id: 2, name: "Sara Ahmed", email: "sara@email.com" },
                    { id: 3, name: "Ahmed Raza", email: "ahmed@email.com" }
                ];
                resolve(users);
            } else {
                reject("Failed to load user data from server.");
            }

        }, 3000); // 3 seconds delay
    });
}


// Function to call Promise
function loadUsers() {

    document.getElementById("output").innerHTML = "Loading data... Please wait 3 seconds ⏳";

    fetchUsers()
        .then(users => {

            let output = "";

            users.forEach(user => {
                output += `
                    <div class="card">
                        <h3>${user.name}</h3>
                        <p><strong>ID:</strong> ${user.id}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                    </div>
                `;
            });

            document.getElementById("output").innerHTML = output;
        })
        .catch(error => {
            document.getElementById("output").innerHTML =
                `<p class="error">${error}</p>`;
        });
}
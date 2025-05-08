let output = document.querySelector('#output');

(async function getFemaleUsers() {
    try {
        let response = await fetch('https://randomuser.me/api/?results=30');
        let data = await response.json();
        const femaleUsers = data.results.filter(user => user.gender === 'female');
        displayUsers(femaleUsers);
    } catch(error) {
        output.textContent = error
    }
})();

//

function displayUsers(femaleUsers) {
    femaleUsers.map(x => {
    let {email, phone, name:{title, first, last}, picture:{large:pic}} = x;
        output.innerHTML += `
        <section class="user-card">
            <img src="${pic}" alt="">
            <p>${title} ${first} ${last}</p>
            <p>${email}</p>
            <p>Phone: ${phone}</p>
        </section>
        `
    })
}
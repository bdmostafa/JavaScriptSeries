const profileBtn = document.getElementById('btn-profile');
const displayProfile = document.getElementById('display-profile');

profileBtn.addEventListener('click', loadProfiles);

async function loadProfiles() {
    // Get profiles data from sample.json
    const profiles = await fetch('./sample.json')
        .then(data => data.json())
    // console.log(profiles)

    // Profile output after constructing profile data 
    let profileHTML = '';
    profiles.forEach((profile, index) => {
        // Object destructuring
        const {
            name,
            age,
            profession
        } = profile;
        // Profile output in HTML format
        profileHTML += `
        <h3>Profile No: ${index + 1}</h3>
        <hr/>
            <ul>
                <li>Name:  ${name}</li>
                <li>Age: ${age}</li>
                <li>Profession: ${profession}</li>
            </ul>
        `;
    })
    // Rendering to DOM
    displayProfile.innerHTML = profileHTML;
}
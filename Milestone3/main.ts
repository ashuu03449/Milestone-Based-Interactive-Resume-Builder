document.getElementById('resume-form')?.addEventListener('submit', function(event: Event) {
    event.preventDefault(); // Prevents the default form submission

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const school = (document.getElementById('school') as HTMLInputElement).value;
    const year = (document.getElementById('year') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const work = (document.getElementById('work') as HTMLTextAreaElement).value;

    // Handle profile picture
    const profilePicInput = document.getElementById('profile-pic') as HTMLInputElement;
    const profilePic = profilePicInput.files?.[0];
    const profilePicURL = profilePic ? URL.createObjectURL(profilePic) : '';

    // Display resume
    (document.getElementById('personal-info-text') as HTMLElement).innerHTML = `
        <h2>Personal Information</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Contact Number: ${contact}</p>
    `;
    
    // Update profile picture if available
    const profilePicElement = document.createElement('img');
    profilePicElement.src = profilePicURL;
    profilePicElement.alt = 'Profile Picture';
    profilePicElement.className = 'profile-pic'; // Add class for styling
    (document.getElementById('personal-info-container') as HTMLElement).appendChild(profilePicElement);

    (document.getElementById('education-info') as HTMLElement).innerHTML = `
        <h2>Education</h2>
        <p>Degree: ${education}</p>
        <p>School/College Name: ${school}</p>
        <p>Graduation Year: ${year}</p>
    `;
    (document.getElementById('skills-info') as HTMLElement).innerHTML = `
        <h2>Skills</h2>
        <p>${skills}</p>
    `;
    (document.getElementById('work-info') as HTMLElement).innerHTML = `
        <h2>Work Experience</h2>
        <p>${work}</p>
    `;
    
    // Show the generated resume
    (document.getElementById('resume-display') as HTMLElement).style.display = 'block';
});

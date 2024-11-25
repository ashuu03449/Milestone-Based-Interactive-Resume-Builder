// Declare isEdit globally
let isEdit: boolean = false;

// Event listener for form submission to generate resume
document.getElementById('resume-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    console.log('Form submitted');
    generateResume();
});

// Function to generate the resume and save data
function generateResume() {
    console.log("Generating resume...");

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const school = (document.getElementById('school') as HTMLInputElement).value;
    const year = (document.getElementById('year') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const work = (document.getElementById('work') as HTMLTextAreaElement).value;
    const username = (document.getElementById('username') as HTMLInputElement).value;

    // Save data to localStorage
    localStorage.setItem(`resume_${username}`, JSON.stringify({
        name,
        email,
        contact,
        education,
        school,
        year,
        skills,
        work
    }));

    // Display resume details
    displayResume(name, email, contact, education, school, year, skills, work);

    // Show the generated resume
    (document.getElementById('resume-display') as HTMLElement).style.display = 'block';

    // Show edit button and hide save button
    document.getElementById('edit-btn')!.style.display = 'inline-block';
    document.getElementById('save-btn')!.style.display = 'none';
    document.getElementById('download-btn')!.style.display = 'inline-block';
    document.getElementById('share-btn')!.style.display = 'inline-block';
}

// Function to display the resume
function displayResume(name: string, email: string, contact: string, education: string, school: string, year: string, skills: string, work: string) {
    (document.getElementById('personal-info') as HTMLElement).innerHTML = `
        <h2>Personal Information</h2>
        <p>Name: <span class="editable" id="edit-name">${name}</span></p>
        <p>Email: <span class="editable" id="edit-email">${email}</span></p>
        <p>Contact Number: <span class="editable" id="edit-contact">${contact}</span></p>
    `;
    (document.getElementById('education-info') as HTMLElement).innerHTML = `
        <h2>Education</h2>
        <p>Degree: <span class="editable" id="edit-education">${education}</span></p>
        <p>School/College Name: <span class="editable" id="edit-school">${school}</span></p>
        <p>Graduation Year: <span class="editable" id="edit-year">${year}</span></p>
    `;
    (document.getElementById('skills-info') as HTMLElement).innerHTML = `
        <h2>Skills</h2>
        <p class="editable" id="edit-skills">${skills}</p>
    `;
    (document.getElementById('work-info') as HTMLElement).innerHTML = `
        <h2>Work Experience</h2>
        <p class="editable" id="edit-work">${work}</p>
    `;
}

// Edit functionality
document.getElementById('edit-btn')?.addEventListener('click', function() {
    toggleEdit(true);
});

// Save functionality
document.getElementById('save-btn')?.addEventListener('click', function() {
    toggleEdit(false); // Switch back to view mode
    saveEdits(); // Save the changes
});


// Toggle between view and edit modes
function toggleEdit(isEditMode: boolean) {
    console.log(`Toggling edit mode: ${isEditMode}`);
    isEdit = isEditMode;

    // Toggle visibility of edit and save buttons
    document.getElementById('edit-btn')!.style.display = isEditMode ? 'none' : 'inline-block';
    document.getElementById('save-btn')!.style.display = isEditMode ? 'inline-block' : 'none';
    document.getElementById('download-btn')!.style.display = isEditMode ? 'none' : 'inline-block';
    document.getElementById('share-btn')!.style.display = isEditMode ? 'none' : 'inline-block';

    const editableFields = document.querySelectorAll('.editable');
    editableFields.forEach(field => {
        if (isEditMode) {
            const currentText = field.textContent?.trim();
            const input = document.createElement('input');
            input.type = 'text';
            input.value = currentText || '';
            field.innerHTML = '';
            field.appendChild(input);
        } else {
            const inputField = field.querySelector('input');
            if (inputField) {
                field.textContent = inputField.value;
            }
        }
    });
}

// Save edits and update the resume display
function saveEdits() {
    // Update the form inputs with the new values after editing
    (document.getElementById('name') as HTMLInputElement).value = (document.getElementById('edit-name')?.textContent ?? '');
    (document.getElementById('email') as HTMLInputElement).value = (document.getElementById('edit-email')?.textContent ?? '');
    (document.getElementById('contact') as HTMLInputElement).value = (document.getElementById('edit-contact')?.textContent ?? '');
    (document.getElementById('education') as HTMLInputElement).value = (document.getElementById('edit-education')?.textContent ?? '');
    (document.getElementById('school') as HTMLInputElement).value = (document.getElementById('edit-school')?.textContent ?? '');
    (document.getElementById('year') as HTMLInputElement).value = (document.getElementById('edit-year')?.textContent ?? '');
    (document.getElementById('skills') as HTMLInputElement).value = (document.getElementById('edit-skills')?.textContent ?? '');
    (document.getElementById('work') as HTMLTextAreaElement).value = (document.getElementById('edit-work')?.textContent ?? '');
}

// Generate a unique URL for sharing
function generateResumeURL(username: string): string {
    const baseURL = 'https://dynamic-resume-milestone5.vercel.app'; // Updated base URL
    return `${baseURL}?username=${encodeURIComponent(username)}`; // Removed id
}

// Print functionality
document.getElementById('download-btn')?.addEventListener('click', function() {
    window.print(); // Trigger print dialog
});

// Share functionality
document.getElementById('share-btn')?.addEventListener('click', async () => {
    const username = (document.getElementById('username') as HTMLInputElement).value; // Retrieve dynamic username
    const resumeURL = generateResumeURL(username);

    try {
        await navigator.clipboard.writeText(resumeURL);
        alert('Resume link copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
});
// Function to load user data from URL
function loadUserData() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if (username) {
        const savedData = localStorage.getItem(`resume_${username}`);
        if (savedData) {
            const data = JSON.parse(savedData);
            // Populate form fields and display resume
            (document.getElementById('name') as HTMLInputElement).value = data.name;
            (document.getElementById('email') as HTMLInputElement).value = data.email;
            (document.getElementById('contact') as HTMLInputElement).value = data.contact;
            (document.getElementById('education') as HTMLInputElement).value = data.education;
            (document.getElementById('school') as HTMLInputElement).value = data.school;
            (document.getElementById('year') as HTMLInputElement).value = data.year;
            (document.getElementById('skills') as HTMLInputElement).value = data.skills;
            (document.getElementById('work') as HTMLTextAreaElement).value = data.work;

            // Display resume after loading data
            displayResume(data.name, data.email, data.contact, data.education, data.school, data.year, data.skills, data.work);

            // Show the generated resume
            (document.getElementById('resume-display') as HTMLElement).style.display = 'block';

            // Show edit button and hide save button
            document.getElementById('edit-btn')!.style.display = 'inline-block';
            document.getElementById('save-btn')!.style.display = 'none';
            document.getElementById('download-btn')!.style.display = 'inline-block';
            document.getElementById('share-btn')!.style.display = 'inline-block';
        } else {
            console.error(`No data found for username: ${username}`);
        }
    } else {
        console.error('Username not found in URL');
    }
}

// Call loadUserData on page load
window.onload = loadUserData;


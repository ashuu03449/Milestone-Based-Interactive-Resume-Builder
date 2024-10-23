// Declare variables globally
let isEdit = false;
let originalProfilePicUrl = ''; // Store original picture URL

// Event listener for form submission to generate resume
document.getElementById('resume-form')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    generateResume(event); // Pass the event to generateResume
});

// Function to generate the resume
function generateResume(event: Event): void {
    console.log("Generating resume...");

    // Retrieve input field values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const school = (document.getElementById('school') as HTMLInputElement).value;
    const year = (document.getElementById('year') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const work = (document.getElementById('work') as HTMLTextAreaElement).value;

    // Handle Profile Picture Upload
    const profilePicInput = document.getElementById('profile-pic') as HTMLInputElement;
    if (profilePicInput.files && profilePicInput.files[0]) {
        const profilePicUrl = URL.createObjectURL(profilePicInput.files[0]);
        (document.getElementById('profile-pic-img') as HTMLImageElement).src = profilePicUrl;
        originalProfilePicUrl = profilePicUrl; // Store the original picture URL
    }

    // Display resume details with editable sections
    (document.getElementById('personal-info') as HTMLElement).innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <div>
                <h2>Personal Information</h2>
                <p><strong>Name:</strong> <span class="editable" onblur="updateContent(this, 'name')">${name}</span></p>
                <p><strong>Email:</strong> <span class="editable" onblur="updateContent(this, 'email')">${email}</span></p>
                <p><strong>Contact Number:</strong> <span class="editable" onblur="updateContent(this, 'contact')">${contact}</span></p>
            </div>
            <img id="edit-profile-pic" src="${originalProfilePicUrl}" alt="Profile Picture" style="width: 160px; height: 160px; margin-left: 50px; object-fit: cover; cursor: default; border-radius:5px;" />
        </div>
    `;

    (document.getElementById('education-info') as HTMLElement).innerHTML = `
        <h2>Education</h2>
        <p><strong>Degree:</strong> <span class="editable" onblur="updateContent(this, 'education')">${education}</span></p>
        <p><strong>School/College Name:</strong> <span class="editable" onblur="updateContent(this, 'school')">${school}</span></p>
        <p><strong>Graduation Year:</strong> <span class="editable" onblur="updateContent(this, 'year')">${year}</span></p>
    `;

    (document.getElementById('skills-info') as HTMLElement).innerHTML = `
        <h2>Skills</h2>
        <p><span class="editable" onblur="updateContent(this, 'skills')">${skills.split(',').map(skill => skill.trim()).join(', ')}</span></p>
    `;

    (document.getElementById('work-info') as HTMLElement).innerHTML = `
        <h2>Work Experience</h2>
        <p><span class="editable" onblur="updateContent(this, 'work')">${work}</span></p>
    `;


    // Display other sections...

    // Show the resume and toggle buttons
    document.getElementById('resume-display')!.style.display = 'block';
    document.getElementById('edit-btn')!.style.display = 'block';
    document.getElementById('save-btn')!.style.display = 'none';
}

// Function to handle content updates
function updateContent(element: HTMLElement, field: string) {
    console.log(`Updated ${field}:`, element.innerText);
}

// Function to edit profile picture
function editProfilePicture() {
    if (!isEdit) return; // Only allow editing if in edit mode

    const newInput = document.createElement('input');
    newInput.type = 'file';
    newInput.accept = 'image/*';
    newInput.onchange = (event) => {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
            const newPicUrl = URL.createObjectURL(file);
            (document.getElementById('edit-profile-pic') as HTMLImageElement).src = newPicUrl;
            originalProfilePicUrl = newPicUrl; // Update the original picture URL
        }
    };
    newInput.click(); // Simulate a click on the input to open the file dialog
}

// Edit button event listener
document.getElementById('edit-btn')?.addEventListener('click', function () {
    toggleEdit(true);
});

// Save button event listener
document.getElementById('save-btn')?.addEventListener('click', function () {
    toggleEdit(false);
    saveEdits();
});

// Toggle between edit and view modes
function toggleEdit(isEditMode: boolean) {
    console.log(`Toggling edit mode: ${isEditMode}`);
    isEdit = isEditMode;

    // Show/hide buttons
    document.getElementById('edit-btn')!.style.display = isEditMode ? 'none' : 'inline-block';
    document.getElementById('save-btn')!.style.display = isEditMode ? 'inline-block' : 'none';

    makeFieldsEditable(isEditMode);
}

// Make fields editable or non-editable based on mode
function makeFieldsEditable(isEditable: boolean) {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        const editableElement = element as HTMLElement; // Cast to HTMLElement
        editableElement.contentEditable = isEditable.toString(); // Set contentEditable
        if (isEditable) {
            editableElement.classList.add('editing'); // Optional: Add a class to style the editing state
        } else {
            editableElement.classList.remove('editing'); // Optional: Remove the class when not editing
        }
    });

    // Allow profile picture edit only when in edit mode
    const profilePic = document.getElementById('edit-profile-pic') as HTMLImageElement;
    if (isEditable) {
        profilePic.style.cursor = 'pointer'; // Change cursor style to pointer
        profilePic.onclick = editProfilePicture; // Enable picture editing
    } else {
        profilePic.style.cursor = 'default'; // Reset cursor style
        profilePic.onclick = null; // Disable picture editing
    }
}

// Save edits and update the resume
function saveEdits() {
    console.log("Saving edits...");

    // Retrieve updated information from editable fields
    const updatedName = (document.querySelector('[onblur="updateContent(this, \'name\')"]') as HTMLElement).innerText;
    const updatedEmail = (document.querySelector('[onblur="updateContent(this, \'email\')"]') as HTMLElement).innerText;
    const updatedContact = (document.querySelector('[onblur="updateContent(this, \'contact\')"]') as HTMLElement).innerText;
    const updatedEducation = (document.querySelector('[onblur="updateContent(this, \'education\')"]') as HTMLElement).innerText;
    const updatedSchool = (document.querySelector('[onblur="updateContent(this, \'school\')"]') as HTMLElement).innerText;
    const updatedYear = (document.querySelector('[onblur="updateContent(this, \'year\')"]') as HTMLElement).innerText;
    const updatedSkills = (document.querySelector('[onblur="updateContent(this, \'skills\')"]') as HTMLElement).innerText;
    const updatedWork = (document.querySelector('[onblur="updateContent(this, \'work\')"]') as HTMLElement).innerText;

    // Update display with new values
    (document.getElementById('personal-info') as HTMLElement).innerHTML = `
        <div class="flex" style="display: flex; align-items: center; justify-content: space-between;">
            <div class="flex1">
                <h2>Personal Information</h2>
                <p><strong>Name:</strong> <span class="editable" onblur="updateContent(this, 'name')">${updatedName}</span></p>
                <p><strong>Email:</strong> <span class="editable" onblur="updateContent(this, 'email')">${updatedEmail}</span></p>
                <p><strong>Contact Number:</strong> <span class="editable" onblur="updateContent(this, 'contact')">${updatedContact}</span></p>
            </div>
            <img id="edit-profile-pic" class="flex2" src="${originalProfilePicUrl}" alt="Profile Picture" style="width: 160px; height: 160px; margin-left: 50px; object-fit: cover; cursor: default; border-radius:5px;" />
        </div>
    `;

    // Repeat for other sections if necessary

    // Hide the save button and show edit button
    document.getElementById('edit-btn')!.style.display = 'inline-block';
    document.getElementById('save-btn')!.style.display = 'none';
}

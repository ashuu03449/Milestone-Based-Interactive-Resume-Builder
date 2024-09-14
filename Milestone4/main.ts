// Declare isEdit globally
let isEdit: boolean = false;

// Event listener for form submission to generate resume
document.getElementById('resume-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    generateResume();
});

// Function to generate the resume
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

    // Display resume details
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

    // Show the generated resume
    (document.getElementById('resume-display') as HTMLElement).style.display = 'block';

    // Show edit button and hide save button
    document.getElementById('edit-btn')!.style.display = 'inline-block';
    document.getElementById('save-btn')!.style.display = 'none';
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


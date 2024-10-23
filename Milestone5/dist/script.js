"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c, _d, _e;
// Declare isEdit globally
let isEdit = false;
// Event listener for form submission to generate resume
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    console.log('Form submitted');
    generateResume();
});
// Function to generate the resume and save data
function generateResume() {
    console.log("Generating resume...");
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const education = document.getElementById('education').value;
    const school = document.getElementById('school').value;
    const year = document.getElementById('year').value;
    const skills = document.getElementById('skills').value;
    const work = document.getElementById('work').value;
    const username = document.getElementById('username').value;
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
    document.getElementById('resume-display').style.display = 'block';
    // Show edit button and hide save button
    document.getElementById('edit-btn').style.display = 'inline-block';
    document.getElementById('save-btn').style.display = 'none';
    document.getElementById('download-btn').style.display = 'inline-block';
    document.getElementById('share-btn').style.display = 'inline-block';
}
// Function to display the resume
function displayResume(name, email, contact, education, school, year, skills, work) {
    document.getElementById('personal-info').innerHTML = `
        <h2>Personal Information</h2>
        <p>Name: <span class="editable" id="edit-name">${name}</span></p>
        <p>Email: <span class="editable" id="edit-email">${email}</span></p>
        <p>Contact Number: <span class="editable" id="edit-contact">${contact}</span></p>
    `;
    document.getElementById('education-info').innerHTML = `
        <h2>Education</h2>
        <p>Degree: <span class="editable" id="edit-education">${education}</span></p>
        <p>School/College Name: <span class="editable" id="edit-school">${school}</span></p>
        <p>Graduation Year: <span class="editable" id="edit-year">${year}</span></p>
    `;
    document.getElementById('skills-info').innerHTML = `
        <h2>Skills</h2>
        <p class="editable" id="edit-skills">${skills}</p>
    `;
    document.getElementById('work-info').innerHTML = `
        <h2>Work Experience</h2>
        <p class="editable" id="edit-work">${work}</p>
    `;
}
// Edit functionality
(_b = document.getElementById('edit-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    toggleEdit(true);
});
// Save functionality
(_c = document.getElementById('save-btn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    toggleEdit(false); // Switch back to view mode
    saveEdits(); // Save the changes
});
// Toggle between view and edit modes
function toggleEdit(isEditMode) {
    console.log(`Toggling edit mode: ${isEditMode}`);
    isEdit = isEditMode;
    // Toggle visibility of edit and save buttons
    document.getElementById('edit-btn').style.display = isEditMode ? 'none' : 'inline-block';
    document.getElementById('save-btn').style.display = isEditMode ? 'inline-block' : 'none';
    document.getElementById('download-btn').style.display = isEditMode ? 'none' : 'inline-block';
    document.getElementById('share-btn').style.display = isEditMode ? 'none' : 'inline-block';
    const editableFields = document.querySelectorAll('.editable');
    editableFields.forEach(field => {
        var _a;
        if (isEditMode) {
            const currentText = (_a = field.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            const input = document.createElement('input');
            input.type = 'text';
            input.value = currentText || '';
            field.innerHTML = '';
            field.appendChild(input);
        }
        else {
            const inputField = field.querySelector('input');
            if (inputField) {
                field.textContent = inputField.value;
            }
        }
    });
}
// Save edits and update the resume display
function saveEdits() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    // Update the form inputs with the new values after editing
    document.getElementById('name').value = ((_b = (_a = document.getElementById('edit-name')) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : '');
    document.getElementById('email').value = ((_d = (_c = document.getElementById('edit-email')) === null || _c === void 0 ? void 0 : _c.textContent) !== null && _d !== void 0 ? _d : '');
    document.getElementById('contact').value = ((_f = (_e = document.getElementById('edit-contact')) === null || _e === void 0 ? void 0 : _e.textContent) !== null && _f !== void 0 ? _f : '');
    document.getElementById('education').value = ((_h = (_g = document.getElementById('edit-education')) === null || _g === void 0 ? void 0 : _g.textContent) !== null && _h !== void 0 ? _h : '');
    document.getElementById('school').value = ((_k = (_j = document.getElementById('edit-school')) === null || _j === void 0 ? void 0 : _j.textContent) !== null && _k !== void 0 ? _k : '');
    document.getElementById('year').value = ((_m = (_l = document.getElementById('edit-year')) === null || _l === void 0 ? void 0 : _l.textContent) !== null && _m !== void 0 ? _m : '');
    document.getElementById('skills').value = ((_p = (_o = document.getElementById('edit-skills')) === null || _o === void 0 ? void 0 : _o.textContent) !== null && _p !== void 0 ? _p : '');
    document.getElementById('work').value = ((_r = (_q = document.getElementById('edit-work')) === null || _q === void 0 ? void 0 : _q.textContent) !== null && _r !== void 0 ? _r : '');
}
// Generate a unique URL for sharing
function generateResumeURL(username) {
    const baseURL = 'https://dynamic-resume-milestone5.vercel.app'; // Updated base URL
    return `${baseURL}?username=${encodeURIComponent(username)}`; // Removed id
}
// Print functionality
(_d = document.getElementById('download-btn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
    window.print(); // Trigger print dialog
});
// Share functionality
(_e = document.getElementById('share-btn')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    const username = document.getElementById('username').value; // Retrieve dynamic username
    const resumeURL = generateResumeURL(username);
    try {
        yield navigator.clipboard.writeText(resumeURL);
        alert('Resume link copied to clipboard!');
    }
    catch (err) {
        console.error('Failed to copy text: ', err);
    }
}));
// Function to load user data from URL
function loadUserData() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {
        const savedData = localStorage.getItem(`resume_${username}`);
        if (savedData) {
            const data = JSON.parse(savedData);
            // Populate form fields and display resume
            document.getElementById('name').value = data.name;
            document.getElementById('email').value = data.email;
            document.getElementById('contact').value = data.contact;
            document.getElementById('education').value = data.education;
            document.getElementById('school').value = data.school;
            document.getElementById('year').value = data.year;
            document.getElementById('skills').value = data.skills;
            document.getElementById('work').value = data.work;
            // Display resume after loading data
            displayResume(data.name, data.email, data.contact, data.education, data.school, data.year, data.skills, data.work);
            // Show the generated resume
            document.getElementById('resume-display').style.display = 'block';
            // Show edit button and hide save button
            document.getElementById('edit-btn').style.display = 'inline-block';
            document.getElementById('save-btn').style.display = 'none';
            document.getElementById('download-btn').style.display = 'inline-block';
            document.getElementById('share-btn').style.display = 'inline-block';
        }
        else {
            console.error(`No data found for username: ${username}`);
        }
    }
    else {
        console.error('Username not found in URL');
    }
}
// Call loadUserData on page load
window.onload = loadUserData;

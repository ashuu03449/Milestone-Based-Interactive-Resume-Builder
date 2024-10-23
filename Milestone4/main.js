var _a, _b, _c;
// Declare variables globally
var isEdit = false;
var originalProfilePicUrl = ''; // Store original picture URL
// Event listener for form submission to generate resume
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    generateResume(event); // Pass the event to generateResume
});
// Function to generate the resume
function generateResume(event) {
    console.log("Generating resume...");
    // Retrieve input field values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var school = document.getElementById('school').value;
    var year = document.getElementById('year').value;
    var skills = document.getElementById('skills').value;
    var work = document.getElementById('work').value;
    // Handle Profile Picture Upload
    var profilePicInput = document.getElementById('profile-pic');
    if (profilePicInput.files && profilePicInput.files[0]) {
        var profilePicUrl = URL.createObjectURL(profilePicInput.files[0]);
        document.getElementById('profile-pic-img').src = profilePicUrl;
        originalProfilePicUrl = profilePicUrl; // Store the original picture URL
    }
    // Display resume details with editable sections
    document.getElementById('personal-info').innerHTML = "\n        <div style=\"display: flex; align-items: center; justify-content: space-between;\">\n            <div>\n                <h2>Personal Information</h2>\n                <p><strong>Name:</strong> <span class=\"editable\" onblur=\"updateContent(this, 'name')\">".concat(name, "</span></p>\n                <p><strong>Email:</strong> <span class=\"editable\" onblur=\"updateContent(this, 'email')\">").concat(email, "</span></p>\n                <p><strong>Contact Number:</strong> <span class=\"editable\" onblur=\"updateContent(this, 'contact')\">").concat(contact, "</span></p>\n            </div>\n            <img id=\"edit-profile-pic\" src=\"").concat(originalProfilePicUrl, "\" alt=\"Profile Picture\" style=\"width: 160px; height: 160px; margin-left: 50px; object-fit: cover; cursor: default; border-radius:5px;\" />\n        </div>\n    ");
    document.getElementById('education-info').innerHTML = "\n        <h2>Education</h2>\n        <p><strong>Degree:</strong> <span class=\"editable\" onblur=\"updateContent(this, 'education')\">".concat(education, "</span></p>\n        <p><strong>School/College Name:</strong> <span class=\"editable\" onblur=\"updateContent(this, 'school')\">").concat(school, "</span></p>\n        <p><strong>Graduation Year:</strong> <span class=\"editable\" onblur=\"updateContent(this, 'year')\">").concat(year, "</span></p>\n    ");
    document.getElementById('skills-info').innerHTML = "\n        <h2>Skills</h2>\n        <p><span class=\"editable\" onblur=\"updateContent(this, 'skills')\">".concat(skills.split(',').map(function (skill) { return skill.trim(); }).join(', '), "</span></p>\n    ");
    document.getElementById('work-info').innerHTML = "\n        <h2>Work Experience</h2>\n        <p><span class=\"editable\" onblur=\"updateContent(this, 'work')\">".concat(work, "</span></p>\n    ");
    // Display other sections...
    // Show the resume and toggle buttons
    document.getElementById('resume-display').style.display = 'block';
    document.getElementById('edit-btn').style.display = 'block';
    document.getElementById('save-btn').style.display = 'none';
}
// Function to handle content updates
function updateContent(element, field) {
    console.log("Updated ".concat(field, ":"), element.innerText);
}
// Function to edit profile picture
function editProfilePicture() {
    if (!isEdit)
        return; // Only allow editing if in edit mode
    var newInput = document.createElement('input');
    newInput.type = 'file';
    newInput.accept = 'image/*';
    newInput.onchange = function (event) {
        var _a;
        var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var newPicUrl = URL.createObjectURL(file);
            document.getElementById('edit-profile-pic').src = newPicUrl;
            originalProfilePicUrl = newPicUrl; // Update the original picture URL
        }
    };
    newInput.click(); // Simulate a click on the input to open the file dialog
}
// Edit button event listener
(_b = document.getElementById('edit-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    toggleEdit(true);
});
// Save button event listener
(_c = document.getElementById('save-btn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    toggleEdit(false);
    saveEdits();
});
// Toggle between edit and view modes
function toggleEdit(isEditMode) {
    console.log("Toggling edit mode: ".concat(isEditMode));
    isEdit = isEditMode;
    // Show/hide buttons
    document.getElementById('edit-btn').style.display = isEditMode ? 'none' : 'inline-block';
    document.getElementById('save-btn').style.display = isEditMode ? 'inline-block' : 'none';
    makeFieldsEditable(isEditMode);
}
// Make fields editable or non-editable based on mode
function makeFieldsEditable(isEditable) {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        var editableElement = element; // Cast to HTMLElement
        editableElement.contentEditable = isEditable.toString(); // Set contentEditable
        if (isEditable) {
            editableElement.classList.add('editing'); // Optional: Add a class to style the editing state
        }
        else {
            editableElement.classList.remove('editing'); // Optional: Remove the class when not editing
        }
    });
    // Allow profile picture edit only when in edit mode
    var profilePic = document.getElementById('edit-profile-pic');
    if (isEditable) {
        profilePic.style.cursor = 'pointer'; // Change cursor style to pointer
        profilePic.onclick = editProfilePicture; // Enable picture editing
    }
    else {
        profilePic.style.cursor = 'default'; // Reset cursor style
        profilePic.onclick = null; // Disable picture editing
    }
}
// Save edits and update the resume
function saveEdits() {
    console.log("Saving edits...");
    // Retrieve updated information from editable fields
    var updatedName = document.querySelector('[onblur="updateContent(this, \'name\')"]').innerText;
    var updatedEmail = document.querySelector('[onblur="updateContent(this, \'email\')"]').innerText;
    var updatedContact = document.querySelector('[onblur="updateContent(this, \'contact\')"]').innerText;
    var updatedEducation = document.querySelector('[onblur="updateContent(this, \'education\')"]').innerText;
    var updatedSchool = document.querySelector('[onblur="updateContent(this, \'school\')"]').innerText;
    var updatedYear = document.querySelector('[onblur="updateContent(this, \'year\')"]').innerText;
    var updatedSkills = document.querySelector('[onblur="updateContent(this, \'skills\')"]').innerText;
    var updatedWork = document.querySelector('[onblur="updateContent(this, \'work\')"]').innerText;
    // Update display with new values
    document.getElementById('personal-info').innerHTML = "\n        <div style=\"display: flex; align-items: center; justify-content: space-between;\">\n            <div class=\"flex1\">\n                <h2>Personal Information</h2>\n                <p><strong>Name:</strong> <span class=\"editable\" onblur=\"updateContent(this, 'name')\">".concat(updatedName, "</span></p>\n                <p><strong>Email:</strong> <span class=\"editable\" onblur=\"updateContent(this, 'email')\">").concat(updatedEmail, "</span></p>\n                <p><strong>Contact Number:</strong> <span class=\"editable\" onblur=\"updateContent(this, 'contact')\">").concat(updatedContact, "</span></p>\n            </div>\n            <img id=\"edit-profile-pic\" class=\"flex2\" src=\"").concat(originalProfilePicUrl, "\" alt=\"Profile Picture\" style=\"width: 160px; height: 160px; margin-left: 50px; object-fit: cover; cursor: default; border-radius:5px;\" />\n        </div>\n    ");
    // Repeat for other sections if necessary
    // Hide the save button and show edit button
    document.getElementById('edit-btn').style.display = 'inline-block';
    document.getElementById('save-btn').style.display = 'none';
}

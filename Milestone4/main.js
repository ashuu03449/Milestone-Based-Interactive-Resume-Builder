var _a, _b, _c;
// Declare isEdit globally
var isEdit = false;
// Event listener for form submission to generate resume
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    generateResume();
});
// Function to generate the resume
function generateResume() {
    console.log("Generating resume...");
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var school = document.getElementById('school').value;
    var year = document.getElementById('year').value;
    var skills = document.getElementById('skills').value;
    var work = document.getElementById('work').value;
    // Display resume details
    document.getElementById('personal-info').innerHTML = "\n        <h2>Personal Information</h2>\n        <p>Name: <span class=\"editable\" id=\"edit-name\">".concat(name, "</span></p>\n        <p>Email: <span class=\"editable\" id=\"edit-email\">").concat(email, "</span></p>\n        <p>Contact Number: <span class=\"editable\" id=\"edit-contact\">").concat(contact, "</span></p>\n    ");
    document.getElementById('education-info').innerHTML = "\n        <h2>Education</h2>\n        <p>Degree: <span class=\"editable\" id=\"edit-education\">".concat(education, "</span></p>\n        <p>School/College Name: <span class=\"editable\" id=\"edit-school\">").concat(school, "</span></p>\n        <p>Graduation Year: <span class=\"editable\" id=\"edit-year\">").concat(year, "</span></p>\n    ");
    document.getElementById('skills-info').innerHTML = "\n        <h2>Skills</h2>\n        <p class=\"editable\" id=\"edit-skills\">".concat(skills, "</p>\n    ");
    document.getElementById('work-info').innerHTML = "\n        <h2>Work Experience</h2>\n        <p class=\"editable\" id=\"edit-work\">".concat(work, "</p>\n    ");
    // Show the generated resume
    document.getElementById('resume-display').style.display = 'block';
    // Show edit button and hide save button
    document.getElementById('edit-btn').style.display = 'inline-block';
    document.getElementById('save-btn').style.display = 'none';
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
    console.log("Toggling edit mode: ".concat(isEditMode));
    isEdit = isEditMode;
    // Toggle visibility of edit and save buttons
    document.getElementById('edit-btn').style.display = isEditMode ? 'none' : 'inline-block';
    document.getElementById('save-btn').style.display = isEditMode ? 'inline-block' : 'none';
    var editableFields = document.querySelectorAll('.editable');
    editableFields.forEach(function (field) {
        var _a;
        if (isEditMode) {
            var currentText = (_a = field.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            var input = document.createElement('input');
            input.type = 'text';
            input.value = currentText || '';
            field.innerHTML = '';
            field.appendChild(input);
        }
        else {
            var inputField = field.querySelector('input');
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

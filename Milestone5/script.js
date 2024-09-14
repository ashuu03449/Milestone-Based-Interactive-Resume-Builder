var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a, _b, _c, _d, _e;
var _this = this;
// Declare isEdit globally
var isEdit = false;
// Event listener for form submission to generate resume
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    console.log('Form submitted');
    generateResume();
});
// Function to generate the resume and save data
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
    var username = document.getElementById('username').value;
    // Save data to localStorage
    localStorage.setItem("resume_".concat(username), JSON.stringify({
        name: name,
        email: email,
        contact: contact,
        education: education,
        school: school,
        year: year,
        skills: skills,
        work: work
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
    document.getElementById('personal-info').innerHTML = "\n        <h2>Personal Information</h2>\n        <p>Name: <span class=\"editable\" id=\"edit-name\">".concat(name, "</span></p>\n        <p>Email: <span class=\"editable\" id=\"edit-email\">").concat(email, "</span></p>\n        <p>Contact Number: <span class=\"editable\" id=\"edit-contact\">").concat(contact, "</span></p>\n    ");
    document.getElementById('education-info').innerHTML = "\n        <h2>Education</h2>\n        <p>Degree: <span class=\"editable\" id=\"edit-education\">".concat(education, "</span></p>\n        <p>School/College Name: <span class=\"editable\" id=\"edit-school\">").concat(school, "</span></p>\n        <p>Graduation Year: <span class=\"editable\" id=\"edit-year\">").concat(year, "</span></p>\n    ");
    document.getElementById('skills-info').innerHTML = "\n        <h2>Skills</h2>\n        <p class=\"editable\" id=\"edit-skills\">".concat(skills, "</p>\n    ");
    document.getElementById('work-info').innerHTML = "\n        <h2>Work Experience</h2>\n        <p class=\"editable\" id=\"edit-work\">".concat(work, "</p>\n    ");
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
    document.getElementById('download-btn').style.display = isEditMode ? 'none' : 'inline-block';
    document.getElementById('share-btn').style.display = isEditMode ? 'none' : 'inline-block';
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
// Generate a unique URL for sharing
function generateResumeURL(username) {
    var baseURL = 'https://dynamic-resume-milestone5.vercel.app'; // Updated base URL
    return "".concat(baseURL, "?username=").concat(encodeURIComponent(username)); // Removed id
}
// Print functionality
(_d = document.getElementById('download-btn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
    window.print(); // Trigger print dialog
});
// Share functionality
(_e = document.getElementById('share-btn')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var username, resumeURL, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                username = document.getElementById('username').value;
                resumeURL = generateResumeURL(username);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, navigator.clipboard.writeText(resumeURL)];
            case 2:
                _a.sent();
                alert('Resume link copied to clipboard!');
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                console.error('Failed to copy text: ', err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// Function to load user data from URL
function loadUserData() {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedData = localStorage.getItem("resume_".concat(username));
        if (savedData) {
            var data = JSON.parse(savedData);
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
            console.error("No data found for username: ".concat(username));
        }
    }
    else {
        console.error('Username not found in URL');
    }
}
// Call loadUserData on page load
window.onload = loadUserData;

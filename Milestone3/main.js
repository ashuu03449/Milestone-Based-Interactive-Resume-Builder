var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // Prevents the default form submission
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var school = document.getElementById('school').value;
    var year = document.getElementById('year').value;
    var skills = document.getElementById('skills').value;
    var work = document.getElementById('work').value;
    // Handle profile picture
    var profilePicInput = document.getElementById('profile-pic');
    var profilePic = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePicURL = profilePic ? URL.createObjectURL(profilePic) : '';
    // Display resume
    document.getElementById('personal-info-text').innerHTML = "\n        <h2>Personal Information</h2>\n        <p>Name: ".concat(name, "</p>\n        <p>Email: ").concat(email, "</p>\n        <p>Contact Number: ").concat(contact, "</p>\n    ");
    // Update profile picture if available
    var profilePicElement = document.createElement('img');
    profilePicElement.src = profilePicURL;
    profilePicElement.alt = 'Profile Picture';
    profilePicElement.className = 'profile-pic'; // Add class for styling
    document.getElementById('personal-info-container').appendChild(profilePicElement);
    document.getElementById('education-info').innerHTML = "\n        <h2>Education</h2>\n        <p>Degree: ".concat(education, "</p>\n        <p>School/College Name: ").concat(school, "</p>\n        <p>Graduation Year: ").concat(year, "</p>\n    ");
    document.getElementById('skills-info').innerHTML = "\n        <h2>Skills</h2>\n        <p>".concat(skills, "</p>\n    ");
    document.getElementById('work-info').innerHTML = "\n        <h2>Work Experience</h2>\n        <p>".concat(work, "</p>\n    ");
    // Show the generated resume
    document.getElementById('resume-display').style.display = 'block';
});

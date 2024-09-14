var toggleSkillsButton = document.getElementById('toggle_skills_button');
var skillsList = document.getElementById('skills_list');
var skillsVisible = false;
// Toggle visibility on button click
toggleSkillsButton.addEventListener('click', function () {
    skillsVisible = !skillsVisible; // Toggle state
    skillsList.style.display = skillsVisible ? 'block' : 'none'; // Show/hide list
    toggleSkillsButton.textContent = skillsVisible ? 'Hide Skills' : 'Show Skills'; // Update button text
});

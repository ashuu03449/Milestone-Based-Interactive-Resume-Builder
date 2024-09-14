
const toggleSkillsButton = document.getElementById('skills_section')!;
const skillsList = document.getElementById('skills_list')!;
let skillsVisible = false;

// Toggle visibility on button click
toggleSkillsButton.addEventListener('click', () => {
    skillsVisible = !skillsVisible; // Toggle state
    skillsList.style.display = skillsVisible ? 'block' : 'none'; // Show/hide list
    toggleSkillsButton.textContent = skillsVisible ? 'Hide Skills' : 'Show Skills'; // Update button text
});

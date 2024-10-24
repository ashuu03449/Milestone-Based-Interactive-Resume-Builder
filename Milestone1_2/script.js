var toggleButton = document.getElementById('toggleSkills');
var skillsSection = document.getElementById('skills');
// Initially show the skills section
skillsSection.style.display = 'block';
toggleButton.textContent = 'Hide Skills'; // Initial button text
toggleButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills'; // Update button text
    }
    else {
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'Show Skills'; // Update button text
    }
});

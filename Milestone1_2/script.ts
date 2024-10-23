const toggleButton = document.getElementById('toggleSkills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

// Initially show the skills section
skillsSection.style.display = 'block';
toggleButton.textContent = 'Hide Skills'; // Initial button text

toggleButton.addEventListener('click', () => {
  if (skillsSection.style.display === 'none') {
    skillsSection.style.display = 'block';
    toggleButton.textContent = 'Hide Skills'; // Update button text
  } else {
    skillsSection.style.display = 'none';
    toggleButton.textContent = 'Show Skills'; // Update button text
  }
});

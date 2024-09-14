import { generatePDF } from './src/utils';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;
    const urlDisplay = document.getElementById('url-display') as HTMLDivElement;
    const shareDownload = document.getElementById('share-download') as HTMLDivElement;
    const resumeURL = document.getElementById('resume-url') as HTMLAnchorElement;
    const downloadButton = document.getElementById('download-pdf') as HTMLButtonElement;
    const copyLinkButton = document.getElementById('copy-link') as HTMLButtonElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        // Collect other form data here...

        // Generate resume display
        resumeDisplay.style.display = 'block';

        // Simulate unique URL generation
        const uniqueURL = `https://username.vercel.app/resume/${encodeURIComponent(name)}`;
        resumeURL.href = uniqueURL;
        resumeURL.textContent = uniqueURL;
        urlDisplay.style.display = 'block';

        // Show share and download options
        shareDownload.style.display = 'block';

        // Add event listeners for download and copy link
        downloadButton.addEventListener('click', () => {
            generatePDF(name); // Generate and download PDF
        });

        copyLinkButton.addEventListener('click', () => {
            navigator.clipboard.writeText(uniqueURL)
                .then(() => alert('Link copied to clipboard!'))
                .catch(err => console.error('Failed to copy: ', err));
        });
    });
});

function updatePreview() {
    document.getElementById('previewName').textContent = document.getElementById('fullName').value || 'Your Name';

    document.getElementById('previewPhone').innerHTML = `
        <span class="contact-icon icon-phone"></span>
        <span>${document.getElementById('phone').value || 'Phone'}</span>`;

    document.getElementById('previewEmail').innerHTML = `
        <span class="contact-icon icon-email"></span>
        <span><a href="mailto:${document.getElementById('email').value || 'email@example.com'}">
            ${document.getElementById('email').value || 'Email'}
        </a></span>`;

    document.getElementById('previewLocation').innerHTML = `
        <span class="contact-icon icon-location"></span>
        <span>${document.getElementById('location').value || 'Location'}</span>`;

    document.getElementById('previewSummary').textContent =
        document.getElementById('summary').value || 'Your professional summary will appear here...';

    updateExperiencePreview();
    updateEducationPreview();
    updateCertificationsPreview();
    updateSkillsPreview();
    updateLanguagesPreview();
}

function updateExperiencePreview() {
    const container = document.getElementById('previewExperience');
    const experiences = document.querySelectorAll('#experienceContainer .dynamic-section');

    if (experiences.length === 0) {
        container.innerHTML = 'Your experience will appear here...';
        return;
    }

    let html = '';
    experiences.forEach(exp => {
        const company = exp.querySelector('.exp-company').value;
        const position = exp.querySelector('.exp-position').value;
        const duration = exp.querySelector('.exp-duration').value;
        const description = exp.querySelector('.exp-description').value;

        if (company || position) {
            html += `
                <div class="job-item">
                    <div class="job-title">${company}${company && position ? ' | ' : ''}${position}</div>
                    <div class="job-details">${duration}</div>
                    <ul class="bullet-points">
                        ${description.split('\n').filter(line => line.trim()).map(line => `<li>${line.trim()}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
    });

    container.innerHTML = html || 'Your experience will appear here...';
}

function updateEducationPreview() {
    const container = document.getElementById('previewEducation');
    const educations = document.querySelectorAll('#educationContainer .dynamic-section');

    if (educations.length === 0) {
        container.innerHTML = 'Your education will appear here...';
        return;
    }

    let html = '';
    educations.forEach(edu => {
        const institution = edu.querySelector('.edu-institution').value;
        const degree = edu.querySelector('.edu-degree').value;
        const year = edu.querySelector('.edu-year').value;
        const description = edu.querySelector('.edu-description').value;

        if (institution || degree) {
            html += `
                <div class="education-item">
                    <div class="university">${institution}${year ? ' / ' + year : ''}</div>
                    ${degree ? `<div class="degree">${degree}</div>` : ''}
                    ${description ? `<ul class="bullet-points">${description.split('\n').filter(line => line.trim()).map(line => `<li>${line.trim()}</li>`).join('')}</ul>` : ''}
                </div>
            `;
        }
    });

    container.innerHTML = html || 'Your education will appear here...';
}

function updateCertificationsPreview() {
    const container = document.getElementById('previewCertifications');
    const certifications = document.querySelectorAll('#certificationsContainer .dynamic-section');

    if (certifications.length === 0) {
        container.innerHTML = 'Your certifications will appear here...';
        return;
    }

    let html = '';
    certifications.forEach(cert => {
        const name = cert.querySelector('.cert-name').value;
        const org = cert.querySelector('.cert-org').value;
        const year = cert.querySelector('.cert-year').value;

        if (name) {
            html += `
                <div class="certification-item">
                    <div class="job-title">${name}${org ? ` - ${org}` : ''} ${year ? ` (${year})` : ''}</div>
                </div>
            `;
        }
    });

    container.innerHTML = html || 'Your certifications will appear here...';
}

function updateSkillsPreview() {

    const hardSkillsContainer = document.getElementById('previewHardSkills');
    const hardSkills = document.querySelectorAll('#hardSkillsContainer .dynamic-section');
    let hardSkillsHtml = '';
    hardSkills.forEach(skill => {
        const skillName = skill.querySelector('.skill-name').value;
        if (skillName.trim()) {
            hardSkillsHtml += `<li>${skillName.trim()}</li>`;
        }
    });
    hardSkillsContainer.innerHTML = hardSkillsHtml || '<li>Your technical skills will appear here</li>';

    const softSkillsContainer = document.getElementById('previewSoftSkills');
    const softSkills = document.querySelectorAll('#softSkillsContainer .dynamic-section');
    let softSkillsHtml = '';
    softSkills.forEach(skill => {
        const skillName = skill.querySelector('.skill-name').value;
        if (skillName.trim()) {
            softSkillsHtml += `<li>${skillName.trim()}</li>`;
        }
    });
    softSkillsContainer.innerHTML = softSkillsHtml || '<li>Your soft skills will appear here</li>';
}

function updateLanguagesPreview() {
    const container = document.getElementById('previewLanguages');
    const languages = document.querySelectorAll('#languagesContainer .dynamic-section');

    if (languages.length === 0) {
        container.innerHTML = 'Your languages will appear here';
        return;
    }

    let html = '';
    languages.forEach(lang => {
        const langName = lang.querySelector('.lang-name').value;
        const langLevel = lang.querySelector('.lang-level').value;
        if (langName) {
            html += `<span>${langName} (${langLevel})</span>`;
        }
    });

    container.innerHTML = html || 'Your languages will appear here';
}

function addExperience() {
    const container = document.getElementById('experienceContainer');
    const newExp = document.createElement('div');
    newExp.className = 'dynamic-section';
    newExp.innerHTML = `
        <button type="button" class="remove-btn" onclick="removeSection(this)">Remove</button>
        <div class="input-group">
            <label>Company</label>
            <input type="text" class="exp-company form-input" placeholder="Company name">
        </div>
        <div class="input-row">
            <div class="input-group">
                <label>Position</label>
                <input type="text" class="exp-position form-input" placeholder="Job title">
            </div>
            <div class="input-group">
                <label>Duration</label>
                <input type="text" class="exp-duration form-input" placeholder="Jan 2020 - Present">
            </div>
        </div>
        <div class="input-group">
            <label>Description</label>
            <textarea class="exp-description form-input" placeholder="Job responsibilities and achievements..."></textarea>
        </div>
    `;
    container.appendChild(newExp);
    addEventListeners(newExp);
}

function addEducation() {
    const container = document.getElementById('educationContainer');
    const newEdu = document.createElement('div');
    newEdu.className = 'dynamic-section';
    newEdu.innerHTML = `
        <button type="button" class="remove-btn" onclick="removeSection(this)">Remove</button>
        <div class="input-group">
            <label>Institution</label>
            <input type="text" class="edu-institution form-input" placeholder="University/College name">
        </div>
        <div class="input-row">
            <div class="input-group">
                <label>Degree</label>
                <input type="text" class="edu-degree form-input" placeholder="Degree title">
            </div>
            <div class="input-group">
                <label>Year</label>
                <input type="text" class="edu-year form-input" placeholder="2020">
            </div>
        </div>
        <div class="input-group">
            <label>Description</label>
            <textarea class="edu-description form-input" placeholder="Additional details..."></textarea>
        </div>
    `;
    container.appendChild(newEdu);
    addEventListeners(newEdu);
}

function addCertification() {
    const container = document.getElementById('certificationsContainer');
    const newCert = document.createElement('div');
    newCert.className = 'dynamic-section';
    newCert.innerHTML = `
        <button type="button" class="remove-btn" onclick="removeSection(this)">Remove</button>
        <div class="input-group">
            <label>Certification Name</label>
            <input type="text" class="cert-name form-input" placeholder="e.g., Certified JavaScript Developer">
        </div>
        <div class="input-row">
            <div class="input-group">
                <label>Issuing Organization</label>
                <input type="text" class="cert-org form-input" placeholder="e.g., Google">
            </div>
            <div class="input-group">
                <label>Year</label>
                <input type="text" class="cert-year form-input" placeholder="e.g., 2023">
            </div>
        </div>
    `;
    container.appendChild(newCert);
    addEventListeners(newCert);
}

function addHardSkill() {
    const container = document.getElementById('hardSkillsContainer');
    const newSkill = document.createElement('div');
    newSkill.className = 'dynamic-section';
    newSkill.innerHTML = `
        <button type="button" class="remove-btn" onclick="removeSection(this)">Remove</button>
        <div class="input-group">
            <input type="text" class="skill-name form-input" placeholder="e.g., JavaScript">
        </div>
    `;
    container.appendChild(newSkill);
    addEventListeners(newSkill);
}

function addSoftSkill() {
    const container = document.getElementById('softSkillsContainer');
    const newSkill = document.createElement('div');
    newSkill.className = 'dynamic-section';
    newSkill.innerHTML = `
        <button type="button" class="remove-btn" onclick="removeSection(this)">Remove</button>
        <div class="input-group">
            <input type="text" class="skill-name form-input" placeholder="e.g., Teamwork">
        </div>
    `;
    container.appendChild(newSkill);
    addEventListeners(newSkill);
}

function addLanguage() {
    const container = document.getElementById('languagesContainer');
    const newLang = document.createElement('div');
    newLang.className = 'dynamic-section';
    newLang.innerHTML = `
        <button type="button" class="remove-btn" onclick="removeSection(this)">Remove</button>
        <div class="input-row">
            <div class="input-group">
                <label>Language</label>
                <input type="text" class="lang-name form-input" placeholder="e.g., English">
            </div>
            <div class="input-group">
                <label>Proficiency</label>
                <select class="lang-level form-input">
                    <option value="Native">Native</option>
                    <option value="Fluent">Fluent</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Basic">Basic</option>
                </select>
            </div>
        </div>
    `;
    container.appendChild(newLang);
    addEventListeners(newLang);
}

function removeSection(button) {
    button.parentElement.remove();
    updatePreview();
}

function addEventListeners(element) {
    const inputs = element.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('input', updatePreview);
        input.addEventListener('change', updatePreview);
    });
}

function goToPage(pageNumber) {
    document.querySelectorAll('.form-page').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(`page${pageNumber}`).style.display = 'block';
    updatePreview();
}

async function downloadPDF() {
    const cvElement = document.getElementById('cvPreview');
    const button = document.querySelector('.download-btn');

    button.textContent = 'Generating PDF...';
    button.disabled = true;

    cvElement.classList.add('pdf-render-mode');
    document.body.classList.add('pdf-render-body');

    try {

        const canvas = await html2canvas(cvElement, {
            backgroundColor: '#ffffff',
            scale: 2, 
            width: 794,
            height: 1123,
            useCORS: true, 
            logging: false 
        });
        const imgData = canvas.toDataURL('image/jpeg', 0.85);

        if (!window.jspdf) {
            throw new Error('jsPDF library not loaded');
        }
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
            compress: true
        });

        const pdfWidth = 210;
        const pdfHeight = 297;
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = imgWidth / imgHeight;

        let finalPdfWidth = pdfWidth;
        let finalPdfHeight = pdfHeight;

        if (imgWidth > imgHeight) {
            finalPdfWidth = pdfHeight * ratio;
            finalPdfHeight = pdfHeight;
        } else {
            finalPdfWidth = pdfWidth;
            finalPdfHeight = pdfWidth / ratio;
        }

        const xOffset = (pdfWidth - finalPdfWidth) / 2;
        const yOffset = (pdfHeight - finalPdfHeight) / 2;

        pdf.addImage(imgData, 'JPEG', xOffset, yOffset, finalPdfWidth, finalPdfHeight);

        const name = document.getElementById('fullName').value || 'CV';
        pdf.save(`${name}_CV.pdf`);

    } catch (error) {
        console.error('Error generating PDF:', error);
        alert(`Error generating PDF: ${error.message}. Please try again or use a different browser.`);
    } finally {
        cvElement.classList.remove('pdf-render-mode');
        document.body.classList.remove('pdf-render-body');
        button.textContent = 'Download CV as PDF';
        button.disabled = false;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const allInputs = document.querySelectorAll('input, textarea, select');
    allInputs.forEach(input => {
        input.addEventListener('input', updatePreview);
        input.addEventListener('change', updatePreview);
    });

    document.querySelectorAll('.dynamic-section').forEach(section => {
        addEventListeners(section);
    });

    updatePreview();
});
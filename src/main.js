import { profileData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  renderHeroStats();
  renderSummary();
  renderProjects('All');
  renderTimeline();
  renderSkills();
  renderCertifications();
  renderEducation();
  renderLanguages();
  setupEventListeners();
  setupNavbarScroll();
});

// Render Hero Stats
function renderHeroStats() {
  const statsContainer = document.getElementById('heroStats');
  if (!statsContainer) return;

  statsContainer.innerHTML = profileData.stats
    .map(
      stat => `
      <div class="stat-item">
        <span class="stat-value">${stat.value}</span>
        <span class="stat-label">${stat.label}</span>
      </div>
    `
    )
    .join('');
}

// Render Summary Text
function renderSummary() {
  const summaryElem = document.getElementById('summaryText');
  if (summaryElem) {
    summaryElem.textContent = profileData.summary;
  }
}

// Render Filterable Projects Grid
function renderProjects(filterCategory) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const filtered = filterCategory === 'All'
    ? profileData.projects
    : profileData.projects.filter(p => p.category === filterCategory);

  grid.innerHTML = filtered.map(p => `
    <div class="project-card glass-panel">
      <div class="project-image-wrapper">
        <img src="${p.image}" alt="${p.title}" class="project-img" loading="lazy" />
        <span class="project-badge ${p.badge === 'In Progress' ? 'badge-in-progress' : ''}">${p.badge}</span>
      </div>
      <div class="project-content">
        <div class="project-category">${p.category}</div>
        <h3 class="project-title">${p.title}</h3>
        <div class="project-client">🏢 ${p.client} • 📍 ${p.location}</div>
        <p class="project-desc">${p.description}</p>
      </div>
    </div>
  `).join('');
}

// Render Experience Timeline
function renderTimeline() {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;

  timeline.innerHTML = profileData.experiences.map(exp => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content glass-panel">
        <span class="timeline-period">${exp.period}</span>
        <h3 class="timeline-role">${exp.role}</h3>
        <div class="timeline-company"><strong>${exp.company}</strong> • 📍 ${exp.location}</div>
        <p class="timeline-details">${exp.details}</p>
      </div>
    </div>
  `).join('');
}

// Render Skills Progress List
function renderSkills() {
  const skillsList = document.getElementById('skillsList');
  if (!skillsList) return;

  skillsList.innerHTML = profileData.skills.map(s => `
    <div class="skill-item">
      <div class="skill-item-header">
        <span>${s.name}</span>
        <span class="gradient-text">${s.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: ${s.level}%;"></div>
      </div>
    </div>
  `).join('');
}

// Render Certifications
function renderCertifications() {
  const certsList = document.getElementById('certsList');
  if (!certsList) return;

  certsList.innerHTML = profileData.certifications.map(c => `
    <div class="cert-card glass-panel">
      <div class="cert-icon">📜</div>
      <div>
        <div class="cert-title">${c.title}</div>
        <div class="cert-issuer">${c.issuer}</div>
      </div>
    </div>
  `).join('');
}

// Render Education Card
function renderEducation() {
  const eduCard = document.getElementById('eduCard');
  if (!eduCard) return;

  const edu = profileData.education;
  eduCard.innerHTML = `
    <div class="edu-degree">🎓 ${edu.degree}</div>
    <div class="edu-institution">${edu.institution}</div>
    <div class="edu-period">${edu.period}</div>
    <p class="edu-details">${edu.details}</p>
  `;
}

// Render Languages Tags
function renderLanguages() {
  const container = document.getElementById('languagesTags');
  if (!container) return;

  container.innerHTML = profileData.languages.map(l => `
    <span class="lang-tag">🗣️ ${l.name} (${l.level})</span>
  `).join('');
}

// Event Listeners for Filters & Contact Form
function setupEventListeners() {
  // Filter tabs click listener
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const category = e.target.getAttribute('data-filter');
      renderProjects(category);
    });
  });

  // Contact form submission mock handling
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.textContent = 'Thank you for reaching out! Your message has been sent successfully.';
      status.className = 'form-status success';
      form.reset();
    });
  }

  // Footer current year
  const yearElem = document.getElementById('currentYear');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
}

// Navbar scroll backdrop effect
function setupNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

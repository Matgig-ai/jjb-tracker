// Application principale
let currentFilter = 'all';
let searchQuery = '';
let currentPage = 'techniques';

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('jjbProgress');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            Object.assign(progressData, data);
        } catch (e) {
            console.error('Error loading progress:', e);
        }
    }
}

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem('jjbProgress', JSON.stringify(progressData));
}

// Get technique key
function getTechKey(category, technique) {
    return `${category}::${technique}`;
}

// Check if technique has status
function hasStatus(tech, type) {
    const key = getTechKey(tech.category, tech.technique);
    return progressData[type][key] === true;
}

// Toggle technique status
function toggleStatus(category, technique, type) {
    const key = getTechKey(category, technique);
    progressData[type][key] = !progressData[type][key];
    saveProgress();
    updateStats();
}

// Group techniques by category
function groupByCategory(techniques) {
    const grouped = {};
    techniques.forEach(tech => {
        if (!grouped[tech.category]) {
            grouped[tech.category] = [];
        }
        grouped[tech.category].push(tech);
    });
    return grouped;
}

// Filter techniques
function filterTechniques(techniques) {
    return techniques.filter(tech => {
        const matchesSearch = searchQuery === '' || 
            tech.technique.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tech.variants.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tech.category.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesFilter = currentFilter === 'all' ||
            (currentFilter === 'learned' && hasStatus(tech, 'learned')) ||
            (currentFilter === 'practiced' && hasStatus(tech, 'repeated')) ||
            (currentFilter === 'mastered' && hasStatus(tech, 'chained'));

        return matchesSearch && matchesFilter;
    });
}

// Update statistics
function updateStats() {
    const total = techniquesData.length;
    let learned = 0, practiced = 0, mastered = 0;

    techniquesData.forEach(tech => {
        if (hasStatus(tech, 'learned')) learned++;
        if (hasStatus(tech, 'repeated')) practiced++;
        if (hasStatus(tech, 'chained')) mastered++;
    });

    document.getElementById('totalTechniques').textContent = total;
    document.getElementById('learnedCount').textContent = learned;
    document.getElementById('practicedCount').textContent = practiced;
    document.getElementById('masteredCount').textContent = mastered;
}

// Render techniques
function renderTechniques() {
    const filtered = filterTechniques(techniquesData);
    const grouped = groupByCategory(filtered);
    const container = document.getElementById('categoriesContainer');
    const emptyState = document.getElementById('emptyState');

    if (filtered.length === 0) {
        container.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }

    container.style.display = 'grid';
    emptyState.style.display = 'none';
    container.innerHTML = '';

    Object.entries(grouped).forEach(([category, techniques]) => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';

        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'category-header';
        categoryHeader.innerHTML = `
            <div class="category-title">
                <h2>${category}</h2>
                <span class="category-count">${techniques.length}</span>
            </div>
            <span class="material-icons expand-icon">expand_more</span>
        `;

        const techniquesContainer = document.createElement('div');
        techniquesContainer.className = 'techniques-container';

        const techniquesList = document.createElement('div');
        techniquesList.className = 'techniques-list';

        techniques.forEach((tech, index) => {
            const expandId = `expand-${category.replace(/\s/g, '-')}-${index}`;
            const techniqueCard = document.createElement('div');
            techniqueCard.className = 'technique-card';

            const learned = hasStatus(tech, 'learned');
            const repeated = hasStatus(tech, 'repeated');
            const sparring = hasStatus(tech, 'sparring');
            const chained = hasStatus(tech, 'chained');

            techniqueCard.innerHTML = `
                <div class="technique-main">
                    <div class="technique-visual">
                        <span class="material-icons placeholder-icon">sports_mma</span>
                    </div>
                    <div class="technique-content">
                        <div class="technique-name">${tech.technique}</div>
                        <div class="technique-details">${tech.variants}</div>
                        <div class="progress-badges">
                            <div class="badge learned ${learned ? 'active' : ''}" data-type="learned" data-category="${category}" data-technique="${tech.technique}">
                                <span class="material-icons">${learned ? 'check_circle' : 'radio_button_unchecked'}</span>
                                Apprise
                            </div>
                            <div class="badge repeated ${repeated ? 'active' : ''}" data-type="repeated" data-category="${category}" data-technique="${tech.technique}">
                                <span class="material-icons">${repeated ? 'check_circle' : 'radio_button_unchecked'}</span>
                                10x
                            </div>
                            <div class="badge sparring ${sparring ? 'active' : ''}" data-type="sparring" data-category="${category}" data-technique="${tech.technique}">
                                <span class="material-icons">${sparring ? 'check_circle' : 'radio_button_unchecked'}</span>
                                Sparring
                            </div>
                            <div class="badge chained ${chained ? 'active' : ''}" data-type="chained" data-category="${category}" data-technique="${tech.technique}">
                                <span class="material-icons">${chained ? 'check_circle' : 'radio_button_unchecked'}</span>
                                Enchaînée
                            </div>
                        </div>
                        ${(tech.keyPoints || tech.situations || tech.chains) ? `
                        <div class="technique-actions">
                            <button class="expand-btn" data-expand="${expandId}">
                                <span class="material-icons">add</span>
                                Détails techniques
                            </button>
                        </div>
                        ` : ''}
                    </div>
                </div>
                ${(tech.keyPoints || tech.situations || tech.chains) ? `
                <div class="technique-expanded" id="${expandId}">
                    <div class="expanded-content">
                        ${tech.keyPoints && tech.keyPoints.length > 0 ? `
                            <div class="expanded-section">
                                <h4><span class="material-icons">check_circle</span> Points techniques clés</h4>
                                <ul>
                                    ${tech.keyPoints.map(point => `<li>${point}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                        ${tech.situations && tech.situations.length > 0 ? `
                            <div class="expanded-section">
                                <h4><span class="material-icons">psychology</span> Situations d'application</h4>
                                <ul>
                                    ${tech.situations.map(sit => `<li>${sit}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                        ${tech.chains && tech.chains.length > 0 ? `
                            <div class="expanded-section">
                                <h4><span class="material-icons">link</span> Enchaînements possibles</h4>
                                ${tech.chains.map(chain => {
                                    const steps = chain.split('→').map(s => s.trim());
                                    return `
                                        <div class="chain-flow">
                                            ${steps.map((step, i) => `
                                                ${i > 0 ? '<span class="chain-arrow">→</span>' : ''}
                                                <span class="chain-step">${step}</span>
                                            `).join('')}
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>
                ` : ''}
            `;

            techniquesList.appendChild(techniqueCard);
        });

        techniquesContainer.appendChild(techniquesList);
        categoryCard.appendChild(categoryHeader);
        categoryCard.appendChild(techniquesContainer);
        container.appendChild(categoryCard);

        // Toggle category
        categoryHeader.addEventListener('click', () => {
            const icon = categoryHeader.querySelector('.expand-icon');
            const isExpanded = techniquesContainer.classList.contains('expanded');

            if (isExpanded) {
                techniquesContainer.classList.remove('expanded');
                icon.classList.remove('expanded');
            } else {
                techniquesContainer.classList.add('expanded');
                icon.classList.add('expanded');
            }
        });

        // Auto-expand first category
        if (Object.keys(grouped)[0] === category) {
            techniquesContainer.classList.add('expanded');
            categoryHeader.querySelector('.expand-icon').classList.add('expanded');
        }
    });

    // Add expand button handlers
    document.querySelectorAll('.expand-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const expandId = btn.dataset.expand;
            const expandSection = document.getElementById(expandId);
            const isExpanded = expandSection.classList.contains('show');

            if (isExpanded) {
                expandSection.classList.remove('show');
                btn.classList.remove('expanded');
                btn.innerHTML = '<span class="material-icons">add</span> Détails techniques';
            } else {
                expandSection.classList.add('show');
                btn.classList.add('expanded');
                btn.innerHTML = '<span class="material-icons">remove</span> Masquer détails';
            }
        });
    });

    // Add badge click handlers
    document.querySelectorAll('.badge').forEach(badge => {
        badge.addEventListener('click', (e) => {
            e.stopPropagation();
            const type = badge.dataset.type;
            const category = badge.dataset.category;
            const technique = badge.dataset.technique;

            toggleStatus(category, technique, type);
            renderTechniques();
        });
    });
}

// Render concepts
function renderConcepts() {
    const container = document.getElementById('conceptsGrid');
    container.innerHTML = '';

    conceptsData.forEach((concept) => {
        const conceptCard = document.createElement('div');
        conceptCard.className = 'concept-card';

        conceptCard.innerHTML = `
            <div class="concept-header">
                <div class="concept-icon">
                    <span class="material-icons">account_tree</span>
                </div>
                <div class="concept-header-text">
                    <h3>${concept.title}</h3>
                    <div class="concept-meta">
                        <span class="concept-tag position">${concept.startPosition}</span>
                        <span class="concept-tag">${concept.steps.length} étapes</span>
                    </div>
                </div>
            </div>
            <p class="concept-description">${concept.objective}</p>
            <div class="concept-flow">
                <div class="flow-title">Séquence principale</div>
                <div class="flow-steps">
                    ${concept.steps.map((step, i) => `
                        <div class="flow-step">
                            <div class="step-number">${i + 1}</div>
                            <div class="step-name">${step}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            ${concept.alternatives ? `
                <div class="concept-flow" style="margin-top: 12px;">
                    <div class="flow-title">Alternatives</div>
                    <div class="flow-steps">
                        ${concept.alternatives.map(alt => `
                            <div class="flow-step">
                                <div class="step-number" style="background: var(--secondary);">
                                    <span class="material-icons" style="font-size: 16px;">alt_route</span>
                                </div>
                                <div class="step-name">${alt}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        `;

        container.appendChild(conceptCard);
    });
}

// Navigation
function switchPage(page) {
    currentPage = page;

    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelector(`[data-page="${page}"]`).classList.add('active');

    if (page === 'techniques') {
        document.getElementById('techniquesPage').classList.add('active');
        document.getElementById('conceptsPage').classList.remove('active');
        renderTechniques();
    } else {
        document.getElementById('techniquesPage').classList.remove('active');
        document.getElementById('conceptsPage').classList.add('active');
        renderConcepts();
    }
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderTechniques();
});

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderTechniques();
    });
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        switchPage(page);
    });
});

// Initialize
loadProgress();
updateStats();
renderTechniques();

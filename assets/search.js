
const box = document.getElementById('search-box');
const yearGrid = document.getElementById('year-grid');
const resultsBox = document.getElementById('search-results');
const noResults = document.getElementById('no-results');
let searchIndex = null;

async function loadIndex(){
  if (searchIndex) return searchIndex;
  const res = await fetch('search-index.json');
  searchIndex = await res.json();
  return searchIndex;
}

function renderResults(matches){
  const capped = matches.slice(0, 200);
  resultsBox.innerHTML = capped.map(m => `
    <a class="meeting-row" href="${m.url}">
      <div class="meeting-row-date">${m.date}</div>
      <div class="meeting-row-name">${m.subject}<br><span style="font-weight:normal;color:var(--muted);font-size:13px;">${m.category} &middot; ${m.meeting_name}</span></div>
      <div class="meeting-row-meta">${m.year}</div>
    </a>
  `).join('');
  if (matches.length > 200) {
    resultsBox.innerHTML += `<p class="no-results">Showing first 200 of ${matches.length} matches &mdash; try a more specific search term.</p>`;
  }
}

box.addEventListener('input', async () => {
  const q = box.value.trim().toLowerCase();
  if (!q) {
    resultsBox.style.display = 'none';
    noResults.style.display = 'none';
    yearGrid.style.display = '';
    return;
  }
  yearGrid.style.display = 'none';
  const idx = await loadIndex();
  const matches = idx.filter(m =>
    m.subject.toLowerCase().includes(q) ||
    m.category.toLowerCase().includes(q) ||
    m.date.toLowerCase().includes(q)
  );
  resultsBox.style.display = matches.length ? '' : 'none';
  noResults.style.display = matches.length ? 'none' : '';
  renderResults(matches);
});

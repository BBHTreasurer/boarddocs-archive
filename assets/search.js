
const box = document.getElementById('search-box');
const yearFilter = document.getElementById('year-filter');
const rows = Array.from(document.querySelectorAll('.meeting-row'));
const noResults = document.getElementById('no-results');

function applyFilters(){
  const q = box.value.trim().toLowerCase();
  const year = yearFilter.value;
  let visible = 0;
  rows.forEach(r => {
    const matchesText = !q || r.dataset.search.toLowerCase().includes(q);
    const matchesYear = !year || r.dataset.year === year;
    const show = matchesText && matchesYear;
    r.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  noResults.style.display = visible === 0 ? '' : 'none';
}

box.addEventListener('input', applyFilters);
yearFilter.addEventListener('change', applyFilters);

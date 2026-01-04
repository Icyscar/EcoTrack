// Waste Management Logic

document.getElementById('wasteForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const type = document.getElementById('wasteType').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const isRecyclable = document.getElementById('isRecyclable').checked;
    const date = new Date().toLocaleDateString();

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const allWaste = JSON.parse(localStorage.getItem('ecoWaste') || '[]');

    const entry = {
        userId: currentUser.email,
        type,
        weight,
        isRecyclable,
        date,
        id: Date.now()
    };

    allWaste.push(entry);
    localStorage.setItem('ecoWaste', JSON.stringify(allWaste));

    e.target.reset();
    updateWasteUI();
});

function updateWasteUI() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const allWaste = JSON.parse(localStorage.getItem('ecoWaste') || '[]');
    const userWaste = allWaste.filter(w => w.userId === currentUser.email);

    const historyDiv = document.getElementById('wasteHistory');
    const totalWeightEl = document.getElementById('totalWeight');
    const recycleRateEl = document.getElementById('recycleRate');

    if (userWaste.length === 0) {
        historyDiv.innerHTML = '<p style="text-align: center; color: #888;">No data recorded yet. Start logging!</p>';
        totalWeightEl.textContent = '0.0 kg';
        recycleRateEl.textContent = '0%';
        return;
    }

    let totalWeight = 0;
    let recycledWeight = 0;
    let html = '';

    userWaste.reverse().forEach(entry => {
        totalWeight += entry.weight;
        if (entry.isRecyclable) recycledWeight += entry.weight;

        html += `
            <div class="waste-item animate-fade">
                <div>
                    <strong>${entry.type}</strong> <br>
                    <small>${entry.date}</small>
                </div>
                <div style="text-align: right;">
                    <strong>${entry.weight} kg</strong> <br>
                    <span class="tag ${entry.isRecyclable ? 'tag-recycled' : 'tag-waste'}">
                        ${entry.isRecyclable ? 'Recyclable' : 'General Waste'}
                    </span>
                    ${entry.status ? `<br><small style="color: var(--secondary); font-weight: 600;">${entry.status}</small>` : ''}
                </div>
            </div>
        `;
    });

    historyDiv.innerHTML = html;
    totalWeightEl.textContent = totalWeight.toFixed(1) + ' kg';
    recycleRateEl.textContent = ((recycledWeight / totalWeight) * 100).toFixed(0) + '%';
}

const icons = {
  "SCHMIEDER KLINIK": "fa-hospital",
  "PRIVAT": "fa-user",
  "Hilfeleistung bzw. Tragehilfen/privat": "fa-hands-helping",
  "HAUSNOTRUF": "fa-phone-volume",
  "ZFP Reichenau": "fa-clinic-medical",
  "LEERFAHRT": "fa-car-side",
  "FEHLFAHRT": "fa-exclamation-triangle",
  "KH - KONSTANZ": "fa-hospital-user",
  "KH - SINGEN": "fa-hospital-symbol"
};

const data = {
  "SCHMIEDER KLINIK": {
    "Name": "",
    "Kostenträger-Nr.": "3491",
    "Kostenträger - Name / Ort": "SCHMIEDER KLINIK",
    "Von Objekt / Ort": "SCHM. GAILINGEN",
    "Nach Objekt / Ort": "SCHM. ALLENSBACH / MRT",
    "Statistik": "",
    "Zusatzfeld": "",
    "Tarif": "9111",
    "Zusatztext für Rechnung": ""
  },
  "PRIVAT": {
    "Name": "",
    "Kostenträger-Nr.": "1",
    "Kostenträger - Name / Ort": "PRIVAT",
    "Von Objekt / Ort": "WHG",
    "Nach Objekt / Ort": "",
    "Statistik": "",
    "Zusatzfeld": "",
    "Tarif": "6600",
    "Zusatztext für Rechnung": ""
  },
  "Hilfeleistung bzw. Tragehilfen/privat": {
    "Name": "",
    "Kostenträger-Nr.": "1",
    "Kostenträger - Name / Ort": "Hilfeleistung bzw. Tragehilfen/privat",
    "Von Objekt / Ort": "4204",
    "Nach Objekt / Ort": "WHG",
    "Statistik": "93",
    "Zusatzfeld": "",
    "Tarif": "2800",
    "Zusatztext für Rechnung": "HOCH HELFEN"
  },
  "HAUSNOTRUF": {
    "Name": "",
    "Kostenträger-Nr.": "8",
    "Kostenträger - Name / Ort": "HAUSNOTRUF",
    "Von Objekt / Ort": "4204",
    "Nach Objekt / Ort": "WHG",
    "Statistik": "89",
    "Zusatzfeld": "8",
    "Tarif": "8609",
    "Zusatztext für Rechnung": "HNR NR. ___"
  },
  "ZFP Reichenau": {
    "Name": "",
    "Kostenträger-Nr.": "2775",
    "Kostenträger - Name / Ort": "ZFP Reichenau",
    "Von Objekt / Ort": "ZFP ST. 92",
    "Nach Objekt / Ort": "",
    "Statistik": "",
    "Zusatzfeld": "",
    "Tarif": "9201",
    "Zusatztext für Rechnung": ""
  },
  "LEERFAHRT": {
    "Name": "DIENSTFAHRT",
    "Kostenträger-Nr.": "9",
    "Kostenträger - Name / Ort": "LEERFAHRT",
    "Von Objekt / Ort": "4204",
    "Nach Objekt / Ort": "4202 / 4203 / 4205 / 4206",
    "Statistik": "91",
    "Zusatzfeld": "7",
    "Tarif": "<>",
    "Zusatztext für Rechnung": ""
  },
  "FEHLFAHRT": {
    "Name": "FEHLFAHRT",
    "Kostenträger-Nr.": "9",
    "Kostenträger - Name / Ort": "LEERFAHRT",
    "Von Objekt / Ort": "4204",
    "Nach Objekt / Ort": "",
    "Statistik": "81",
    "Zusatzfeld": "6",
    "Tarif": "<>",
    "Zusatztext für Rechnung": ""
  },
  "KH - KONSTANZ": {
    "Name": "",
    "Kostenträger-Nr.": "1203",
    "Kostenträger - Name / Ort": "KH - KONSTANZ",
    "Von Objekt / Ort": "ZNA MED KONSTANZ",
    "Nach Objekt / Ort": "ZNA MED SINGEN",
    "Statistik": "21",
    "Zusatzfeld": "",
    "Tarif": "9201",
    "Zusatztext für Rechnung": ""
  },
  "KH - SINGEN": {
    "Name": "",
    "Kostenträger-Nr.": "3214",
    "Kostenträger - Name / Ort": "KH - SINGEN",
    "Von Objekt / Ort": "ZNA MED SINGEN",
    "Nach Objekt / Ort": "ZNA MED KONSTANZ",
    "Statistik": "21",
    "Zusatzfeld": "",
    "Tarif": "9201",
    "Zusatztext für Rechnung": ""
  }
};

const resetBtn = document.getElementById("reset-button");
const topContainer = document.getElementById("top-button");
const subOptions = document.getElementById("sub-options");
const output = document.getElementById("output");
const otherContainer = document.getElementById("other-buttons");

function renderView(category) {
  topContainer.innerHTML = "";
  subOptions.innerHTML = "";
  output.innerHTML = "";
  otherContainer.innerHTML = "";
  document.getElementById("reset-container").style.display = "block";

  if (category === "SCHMIEDER KLINIK") {
    const mainBtn = document.createElement("button");
    mainBtn.className = "icon-button selected";
    mainBtn.innerHTML = `<i class="fas ${icons[category]}"></i> KLINIKEN SCHMIEDER`;
    topContainer.appendChild(mainBtn);

    const options = [
      { label: "3 - Tragestuhl", tarif: "9211" },
      { label: "4 - gehfähig", tarif: "9111" },
      { label: "5 - Rollstuhl", tarif: "9711" }
    ];

    options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "icon-button";
      btn.textContent = opt.label;
      btn.addEventListener("click", () => {
        renderSchmiederTable(opt.label, opt.tarif);
      });
      subOptions.appendChild(btn);
    });
  } else {
    const btn = document.createElement("button");
    btn.className = "icon-button selected";
    btn.innerHTML = `<i class="fas ${icons[category]}"></i> ${category}`;
    topContainer.appendChild(btn);
    renderTable(data[category]);
  }
}

function renderSchmiederTable(subLabel, tarifValue) {
  subOptions.innerHTML = "";

  const subBtn = document.createElement("button");
  subBtn.className = "icon-button selected";
  subBtn.textContent = subLabel;
  subOptions.appendChild(subBtn);

  const entry = {
    "Name": "",
    "Kostenträger-Nr.": "3491",
    "Kostenträger - Name / Ort": "SCHMIEDER KLINIK",
    "Von Objekt / Ort": "SCHM. GAILINGEN",
    "Nach Objekt / Ort": "SCHM. ALLENSBACH / MRT",
    "Statistik": "",
    "Zusatzfeld": "",
    "Tarif": tarifValue,
    "Zusatztext für Rechnung": ""
  };

  renderTable(entry);
}

function renderTable(entry) {
  const fields = [
    "Name", "Kostenträger-Nr.", "Kostenträger - Name / Ort",
    "Von Objekt / Ort", "Nach Objekt / Ort", "Statistik",
    "Zusatzfeld", "Tarif", "Zusatztext für Rechnung"
  ];

  const rows = fields.map(field => {
    const value = entry[field] && entry[field].trim() !== "" ? entry[field] : "—";
    const extraClass = (field === "Kostenträger-Nr." || field === "Tarif") ? "highlight" : "";
    return `<div class="row"><div class="label">${field}</div><div class="value ${extraClass}">${value}</div></div>`;
  }).join("");

  output.innerHTML = `<div class="vertical-table">${rows}</div>`;
}

function resetView() {
  topContainer.innerHTML = "";
  subOptions.innerHTML = "";
  output.innerHTML = "";
  otherContainer.innerHTML = "";
  document.getElementById("reset-container").style.display = "none";

  Object.keys(data).forEach(category => {
    const btn = document.createElement("button");
    btn.className = "icon-button";
    btn.innerHTML = `<i class="fas ${icons[category]}"></i> ${category}`;
    btn.addEventListener("click", () => renderView(category));
    otherContainer.appendChild(btn);
  });
}

resetBtn.addEventListener("click", resetView);
resetView();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registered'))
    .catch(err => console.error('Service Worker error:', err));
}

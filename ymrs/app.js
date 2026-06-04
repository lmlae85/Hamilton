const YMRS_ITEMS = [
  {
    id: 1,
    title: "Løftet stemningsleje",
    note: "Vurder stemningslejet under samtalen og i konteksten af patientens aktuelle tilstand.",
    options: [
      [0, "Ikke til stede"],
      [1, "Let eller muligvis løftet, når der spørges derom"],
      [2, "Klar subjektivt løftet stemning; optimistisk, selvsikker, glad; svarende til situationen"],
      [3, "Løftet stemning, ikke svarende til situationen; lystig"],
      [4, "Euforisk, upassende latter, synger"]
    ]
  },
  {
    id: 2,
    title: "Øget motorisk aktivitet",
    note: "Vurder både patientens egen oplevelse og observerbar aktivitet under interviewet.",
    options: [
      [0, "Ikke til stede"],
      [1, "Subjektivt øget"],
      [2, "Animeret; gestikulerer mere"],
      [3, "Overskud af energi; til tider hyperaktiv; rastløs, men kan dæmpes ned"],
      [4, "Motorisk agitation; uafbrudt hyperaktivitet, kan ikke dæmpes ned"]
    ]
  },
  {
    id: 3,
    title: "Seksuel interesse",
    note: "Spørg neutralt. Vurder ændring fra habitualtilstanden og observerbar ukritisk adfærd.",
    options: [
      [0, "Normal; ikke øget"],
      [1, "Let eller muligvis øget"],
      [2, "Klar subjektiv øgning ved udspørgen"],
      [3, "Spontant seksuelt taleindhold; taler detaljeret om seksuelle ting; oplyser seksuel hyperaktivitet"],
      [4, "Åbenlyse seksuelle handlinger over for patienter, personale eller rater"]
    ]
  },
  {
    id: 4,
    title: "Søvn",
    note: "Vurder nedsat søvn og nedsat søvnbehov — ikke bare dårlig søvn.",
    options: [
      [0, "Rapporterer ingen nedsat søvn"],
      [1, "Søvn reduceret med op til én time i forhold til det sædvanlige"],
      [2, "Søvn reduceret mere end én time i forhold til det sædvanlige"],
      [3, "Rapporterer nedsat søvnbehov"],
      [4, "Nægter at have brug for søvn"]
    ]
  },
  {
    id: 5,
    title: "Irritabilitet",
    note: "Dette item scores 0–8. Her skal du ikke bruge mellemtrin på 1, 3, 5 eller 7.",
    options: [
      [0, "Ikke til stede"],
      [2, "Subjektivt øget"],
      [4, "Til tider irritabel under interviewet; nylige episoder af vrede eller irritabilitet i afdelingen"],
      [6, "Hyppig irritabilitet i løbet af interviewet; gennemgående kort for hovedet; studs"],
      [8, "Fjendtlig; ikke samarbejdsvillig; interview er umuligt"]
    ]
  },
  {
    id: 6,
    title: "Tale — hastighed og mængde",
    note: "Dette item scores 0–8. Vurder talemængde, talepres og afbrydelighed.",
    options: [
      [0, "Ikke til stede"],
      [2, "Føler sig snakkesalig"],
      [4, "Til tider øget mængde eller hastighed; til tider meget ordrig"],
      [6, "Taletrang; vedvarende øget talemængde og -hastighed; vanskelig at afbryde"],
      [8, "Talepres; kan ikke afbrydes; uafbrudt tale"]
    ]
  },
  {
    id: 7,
    title: "Sprog-/tankeforstyrrelser",
    note: "Vurder associationer, afledelighed, tankeflugt og sammenhæng i kommunikationen.",
    options: [
      [0, "Ikke til stede"],
      [1, "Omstændelig; afledelig i mindre grad; hurtige tanker"],
      [2, "Letafledelig; kommer bort fra emnet; skifter hyppigt emne; tankerne kører hurtigt"],
      [3, "Tankeflugt; associationstrang; svær at følge; rimer eller ekkolali"],
      [4, "Usammenhængende; kommunikation umulig"]
    ]
  },
  {
    id: 8,
    title: "Tankeindhold",
    note: "Dette item scores 0–8. Vurder grandiositet, paranoide ideer, vrangforestillinger og hallucinationer.",
    options: [
      [0, "Normalt"],
      [2, "Tvivlsomme fremtidsplaner, nye interesser"],
      [4, "Særlige projekter; overdreven religiøs interesse"],
      [6, "Storladne eller paranoide ideer; selvhenførende forestillinger"],
      [8, "Vrangforestillinger; hallucinationer"]
    ]
  },
  {
    id: 9,
    title: "Destruktiv-aggressiv adfærd",
    note: "Dette item scores 0–8. Vurder samarbejde, trusler, råben og destruktiv/aggressiv adfærd.",
    options: [
      [0, "Ikke til stede; samarbejdsvillig"],
      [2, "Sarkastisk; til tider højrøstet; på vagt"],
      [4, "Krævende; trusler i afdelingen"],
      [6, "Truer interviewer; råber; interviewet er vanskeligt"],
      [8, "Aggressiv; destruktiv; interview umuligt"]
    ]
  },
  {
    id: 10,
    title: "Udseende",
    note: "Vurder påklædning og soignering i relation til habitualtilstand og situation.",
    options: [
      [0, "Passende påklædt og velplejet"],
      [1, "Antydningsvis uplejet"],
      [2, "Uplejet; hår og tøj delvist i uorden; upassende påklædning"],
      [3, "Usoigneret; kun delvist påklædt; overdreven stærk make-up"],
      [4, "Fuldstændig usoigneret; udmajet; bizar påklædning"]
    ]
  },
  {
    id: 11,
    title: "Sygdomsindsigt",
    note: "Vurder erkendelse af sygdom og behov for behandling, ikke om patienten er enig med dig i alt.",
    options: [
      [0, "Til stede; erkender at være syg; enig i behov for behandling"],
      [1, "Muligvis syg"],
      [2, "Erkender adfærdsændring, men nægter at være syg"],
      [3, "Vedgår mulig adfærdsændring, men nægter at være syg"],
      [4, "Benægter adfærdsændring"]
    ]
  }
];

const state = {
  current: 0,
  answers: {},
  mode: "single"
};

const $ = (id) => document.getElementById(id);
const els = {
  patientId: $("patientId"),
  ratingDate: $("ratingDate"),
  notes: $("notes"),
  liveScore: $("liveScore"),
  answeredCount: $("answeredCount"),
  miniResult: $("miniResult"),
  saveState: $("saveState"),
  progressBar: $("progressBar"),
  stepLabel: $("stepLabel"),
  autoNext: $("autoNext"),
  singleMode: $("singleMode"),
  allMode: $("allMode"),
  itemMeta: $("itemMeta"),
  itemTitle: $("itemTitle"),
  itemNote: $("itemNote"),
  optionList: $("optionList"),
  prevBtn: $("prevBtn"),
  nextBtn: $("nextBtn"),
  resultTitle: $("resultTitle"),
  resultScore: $("resultScore"),
  resultText: $("resultText"),
  flags: $("flags"),
  toast: $("toast"),
  historyList: $("historyList")
};

function init(){
  els.ratingDate.value = new Date().toISOString().slice(0,10);
  loadDraft();
  render();
  renderHistory();

  $("startBtn").addEventListener("click", () => {
    state.mode = "single";
    els.singleMode.classList.remove("hidden");
    els.allMode.classList.add("hidden");
    scrollToEl(els.singleMode);
  });
  $("showAllBtn").addEventListener("click", toggleAllMode);
  els.prevBtn.addEventListener("click", () => go(-1));
  els.nextBtn.addEventListener("click", () => go(1));
  $("saveBtn").addEventListener("click", saveAssessment);
  $("copyBtn").addEventListener("click", copySummary);
  $("downloadBtn").addEventListener("click", downloadReport);
  $("resetBtn").addEventListener("click", resetAssessment);
  $("clearHistoryBtn").addEventListener("click", clearHistory);
  [els.patientId, els.ratingDate, els.notes].forEach(el => el.addEventListener("input", saveDraft));

  if("serviceWorker" in navigator){
    navigator.serviceWorker.register("../sw.js").catch(() => {});
  }
}

function render(){
  renderSingleItem();
  renderAllItems();
  updateScore();
  saveDraft();
}

function renderSingleItem(){
  const item = YMRS_ITEMS[state.current];
  els.itemMeta.textContent = `Item ${item.id} af ${YMRS_ITEMS.length}`;
  els.itemTitle.textContent = item.title;
  els.itemNote.textContent = item.note;
  els.stepLabel.textContent = `Item ${item.id} af ${YMRS_ITEMS.length}`;
  els.prevBtn.disabled = state.current === 0;
  els.nextBtn.disabled = state.current === YMRS_ITEMS.length - 1;
  els.optionList.innerHTML = item.options.map(([score, text]) => optionHtml(item.id, score, text)).join("");
  bindOptionEvents(els.optionList);
}

function optionHtml(itemId, score, text){
  const checked = state.answers[itemId] === score;
  return `
    <label class="option-card ${checked ? "selected" : ""}">
      <input type="radio" name="item-${itemId}" value="${score}" data-item="${itemId}" ${checked ? "checked" : ""} />
      <span class="option-text"><strong>Score ${score}</strong><span>${escapeHtml(text)}</span></span>
      <span class="option-score">${score}</span>
    </label>
  `;
}

function renderAllItems(){
  els.allMode.innerHTML = YMRS_ITEMS.map(item => `
    <section class="card all-item">
      <p class="eyebrow">Item ${item.id}</p>
      <h2>${escapeHtml(item.title)}</h2>
      <p class="item-note">${escapeHtml(item.note)}</p>
      <div class="option-list">
        ${item.options.map(([score, text]) => optionHtml(item.id, score, text)).join("")}
      </div>
    </section>
  `).join("");
  bindOptionEvents(els.allMode);
}

function bindOptionEvents(container){
  container.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener("change", (event) => {
      const itemId = Number(event.target.dataset.item);
      const value = Number(event.target.value);
      state.answers[itemId] = value;
      markDirty();
      updateScore();
      syncSelectedCards(itemId);
      saveDraft();
      if(state.mode === "single" && els.autoNext.checked && state.current < YMRS_ITEMS.length - 1){
        setTimeout(() => {
          state.current += 1;
          renderSingleItem();
          updateScore();
        }, 170);
      }
    });
  });
}

function syncSelectedCards(itemId){
  document.querySelectorAll(`input[data-item="${itemId}"]`).forEach(input => {
    input.checked = Number(input.value) === state.answers[itemId];
    input.closest(".option-card")?.classList.toggle("selected", input.checked);
  });
}

function updateScore(){
  const answered = Object.keys(state.answers).length;
  const total = getScore();
  const percent = Math.round((answered / YMRS_ITEMS.length) * 100);
  const complete = answered === YMRS_ITEMS.length;
  const interpretation = interpretScore(total, complete);

  els.liveScore.textContent = total;
  els.answeredCount.textContent = answered;
  els.progressBar.style.width = `${percent}%`;
  els.resultScore.textContent = total;
  els.miniResult.textContent = complete ? interpretation.label : "Ikke komplet";
  els.resultTitle.textContent = complete ? interpretation.label : "Udfyld alle items";
  els.resultText.textContent = complete
    ? `${interpretation.text} YMRS-score: ${total}/60. Brug scoren som klinisk støtte og sammenlign især med tidligere vurderinger.`
    : `Du mangler ${YMRS_ITEMS.length - answered} item${YMRS_ITEMS.length - answered === 1 ? "" : "s"}. Resultatet vises først ordentligt, når alt er udfyldt.`;
  renderFlags(complete);
}

function getScore(){
  return Object.values(state.answers).reduce((sum, value) => sum + Number(value), 0);
}

function interpretScore(total, complete = true){
  if(!complete) return { label:"Ikke komplet", text:"Vurderingen er ikke komplet." };
  if(total >= 32) return { label:"Svær mani", text:"Scoren ligger i intervallet for svær mani." };
  if(total >= 23) return { label:"Middelsvær mani", text:"Scoren ligger i intervallet for middelsvær mani." };
  if(total >= 16) return { label:"Let mani", text:"Scoren ligger i intervallet for let mani." };
  return { label:"Under YMRS’ mani-intervaller", text:"Scoren ligger under de angivne YMRS-intervaller for let, middelsvær og svær mani." };
}

function renderFlags(complete){
  if(!complete){
    els.flags.innerHTML = "";
    return;
  }
  const flags = [];
  const a = state.answers;
  if(a[4] >= 3) flags.push(["danger", "Søvn er markant påvirket: nedsat søvnbehov/benægter søvnbehov bør ikke bagatelliseres."]);
  if(a[5] >= 6) flags.push(["danger", "Irritabilitet er høj: risiko for konflikt og eskalering bør vurderes konkret."]);
  if(a[8] >= 6) flags.push(["danger", "Tankeindhold er svært påvirket: vurder grandiositet, paranoide ideer, vrangforestillinger eller hallucinationer."]);
  if(a[9] >= 4) flags.push(["danger", "Aggressiv eller truende adfærd er til stede: sikkerhed og rammer skal vurderes."]);
  if(a[11] >= 3) flags.push(["", "Sygdomsindsigt er lav: behandlingsalliance og behov for tættere opfølgning bør tænkes ind."]);
  if(flags.length === 0) flags.push(["", "Ingen særlige røde flag ud fra de valgte enkelt-items. Det fritager ikke for klinisk vurdering."]);
  els.flags.innerHTML = flags.map(([type, text]) => `<div class="flag ${type}">${escapeHtml(text)}</div>`).join("");
}

function go(direction){
  state.current = Math.max(0, Math.min(YMRS_ITEMS.length - 1, state.current + direction));
  renderSingleItem();
  updateScore();
}

function toggleAllMode(){
  state.mode = state.mode === "single" ? "all" : "single";
  els.singleMode.classList.toggle("hidden", state.mode !== "single");
  els.allMode.classList.toggle("hidden", state.mode !== "all");
  $("showAllBtn").textContent = state.mode === "all" ? "Vis én ad gangen" : "Vis alle items";
  if(state.mode === "all") scrollToEl(els.allMode);
  else scrollToEl(els.singleMode);
}

function buildSummary(){
  const answered = Object.keys(state.answers).length;
  const complete = answered === YMRS_ITEMS.length;
  const total = getScore();
  const interpretation = interpretScore(total, complete);
  const lines = [];
  lines.push("Youngs Maniskala (YMRS)");
  lines.push(`Dato: ${els.ratingDate.value || "Ikke angivet"}`);
  lines.push(`Patient-ID/navn: ${els.patientId.value || "Ikke angivet"}`);
  lines.push(`Score: ${total}/60`);
  lines.push(`Resultat: ${interpretation.label}`);
  lines.push(`Besvaret: ${answered}/${YMRS_ITEMS.length}`);
  if(els.notes.value.trim()) lines.push(`Note: ${els.notes.value.trim()}`);
  lines.push("");
  lines.push("Items:");
  YMRS_ITEMS.forEach(item => {
    const score = state.answers[item.id];
    const option = item.options.find(([value]) => value === score);
    lines.push(`${item.id}. ${item.title}: ${score ?? "ikke udfyldt"}${option ? ` — ${option[1]}` : ""}`);
  });
  lines.push("");
  lines.push("YMRS-intervaller i appen: 16–22 let mani, 23–31 middelsvær mani, 32–60 svær mani. 0–15 ligger under de angivne mani-intervaller.");
  return lines.join("\n");
}

async function copySummary(){
  try{
    await navigator.clipboard.writeText(buildSummary());
    showToast("Resultat kopieret");
  }catch{
    showToast("Kunne ikke kopiere");
  }
}

function downloadReport(){
  const blob = new Blob([buildSummary()], {type:"text/plain;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const date = els.ratingDate.value || new Date().toISOString().slice(0,10);
  const id = (els.patientId.value || "patient").replace(/[^a-z0-9æøå_-]+/gi,"-").replace(/-+/g,"-");
  a.href = url;
  a.download = `ymrs-${id}-${date}.txt`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast("Rapport downloadet");
}

function saveAssessment(){
  const answered = Object.keys(state.answers).length;
  if(answered < YMRS_ITEMS.length){
    showToast("Udfyld alle items før du gemmer");
    return;
  }
  const total = getScore();
  const record = {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}`,
    createdAt: new Date().toISOString(),
    patientId: els.patientId.value.trim(),
    ratingDate: els.ratingDate.value,
    notes: els.notes.value.trim(),
    score: total,
    result: interpretScore(total, true).label,
    answers: {...state.answers}
  };
  const history = getHistory();
  history.unshift(record);
  localStorage.setItem("ymrs-history", JSON.stringify(history.slice(0,50)));
  els.saveState.textContent = "Gemt lokalt";
  renderHistory();
  showToast("Gemt lokalt");
}

function getHistory(){
  try{return JSON.parse(localStorage.getItem("ymrs-history") || "[]");}
  catch{return []}
}

function renderHistory(){
  const history = getHistory();
  if(!history.length){
    els.historyList.className = "history-list empty";
    els.historyList.textContent = "Ingen gemte vurderinger endnu.";
    return;
  }
  els.historyList.className = "history-list";
  els.historyList.innerHTML = history.map(record => `
    <article class="history-item">
      <div>
        <h3>${escapeHtml(record.patientId || "Uden ID")} · ${escapeHtml(record.ratingDate || record.createdAt.slice(0,10))}</h3>
        <p>${escapeHtml(record.result)}${record.notes ? ` · ${escapeHtml(record.notes.slice(0,90))}${record.notes.length > 90 ? "…" : ""}` : ""}</p>
      </div>
      <div class="history-score">${record.score}/60</div>
    </article>
  `).join("");
}

function clearHistory(){
  if(confirm("Slette alle gemte YMRS-vurderinger i denne browser?")){
    localStorage.removeItem("ymrs-history");
    renderHistory();
    showToast("Arkiv ryddet");
  }
}

function resetAssessment(){
  if(!confirm("Nulstil den aktuelle vurdering?")) return;
  state.answers = {};
  state.current = 0;
  els.patientId.value = "";
  els.notes.value = "";
  els.ratingDate.value = new Date().toISOString().slice(0,10);
  localStorage.removeItem("ymrs-draft");
  markDirty();
  render();
  showToast("Nulstillet");
}

function saveDraft(){
  const draft = {
    patientId: els.patientId.value,
    ratingDate: els.ratingDate.value,
    notes: els.notes.value,
    answers: state.answers,
    current: state.current
  };
  localStorage.setItem("ymrs-draft", JSON.stringify(draft));
}

function loadDraft(){
  try{
    const draft = JSON.parse(localStorage.getItem("ymrs-draft") || "null");
    if(!draft) return;
    els.patientId.value = draft.patientId || "";
    els.ratingDate.value = draft.ratingDate || els.ratingDate.value;
    els.notes.value = draft.notes || "";
    state.answers = draft.answers || {};
    state.current = Math.max(0, Math.min(YMRS_ITEMS.length - 1, draft.current || 0));
    markDirty();
  }catch{}
}

function markDirty(){
  els.saveState.textContent = "Kladde gemt";
}

function scrollToEl(el){
  setTimeout(() => el.scrollIntoView({behavior:"smooth", block:"start"}), 50);
}

function showToast(message){
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove("show"), 2100);
}

function escapeHtml(value){
  return String(value)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");
}

document.addEventListener("DOMContentLoaded", init);

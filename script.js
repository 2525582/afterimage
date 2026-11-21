/*
  AFTERIMAGE CHARACTER ARCHIVE
  キャラクターを追加・編集するときは、下の characters 配列だけを書き換えてください。
  image: 立ち絵のファイル名（例 "images/shiori.png"）。未設定なら仮画像になります。
*/
const characters = [
  {
    id: "001",
    name: "SHIORI",
    reading: "西園寺 詩織 / さいおんじ しおり",
    color: "#a83242",
    role: "THE PERFECTIONIST",
    quote: "「わたくしに不可能など、あるはずがありませんわ。」",
    appearance: "艶やかな髪と整った顔立ち。気品を感じさせる装いを好む。",
    personality: "高飛車でプライドが高い。負けず嫌いで完璧主義だが、努力を惜しまない。",
    background: "ここに生い立ちや過去の出来事を記入してください。",
    ability: "ここに能力・得意分野・特殊技能などを記入してください。",
    likes: "紅茶、読書、努力が報われる瞬間",
    dislikes: "妥協、無礼な態度、負けること",
    relationships: "ここに他キャラクターとの関係性を記入してください。",
    image: "images/shiori.jpg"
  },
  {
    id: "002",
    name: "IBARA",
    reading: "華園 棘薔薇 / はなぞの いばら",
    color: "#8e354b",
    role: "THE ENIGMA",
    quote: "「ねえ、ボクのことをもっと知りたい？」",
    appearance: "金髪の長髪に大きな黒いリボン。華やかで中性的な美貌。",
    personality: "ここに性格を記入してください。",
    background: "ここに生い立ちや過去の出来事を記入してください。",
    ability: "ここに能力・得意分野・特殊技能などを記入してください。",
    likes: "ここに好きなものを記入してください。",
    dislikes: "ここに嫌いなものを記入してください。",
    relationships: "ここに他キャラクターとの関係性を記入してください。",
    image: "images/ibara.jpg"
  },
  {
    id: "003",
    name: "UNKNOWN",
    reading: "未登録 / —",
    color: "#64748b",
    role: "UNREGISTERED SUBJECT",
    quote: "“The next story has not been written yet.”",
    appearance: "外見情報は未登録です。",
    personality: "性格情報は未登録です。",
    background: "生い立ち情報は未登録です。",
    ability: "能力情報は未登録です。",
    likes: "—",
    dislikes: "—",
    relationships: "関係性は未登録です。",
    image: ""
  }
];

const $ = (selector) => document.querySelector(selector);
const entryScreen = $("#entryScreen");
const indexScreen = $("#indexScreen");
const profileScreen = $("#profileScreen");
const wipe = $("#transitionWipe");
let currentCharacter = null;
let transitionLock = false;

function setScreen(screen) {
  [entryScreen, indexScreen, profileScreen].forEach((item) => {
    const active = item === screen;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-hidden", String(!active));
  });
  window.scrollTo({ top: 0, behavior: "instant" });
}

function safeText(value, fallback = "—") {
  return value && String(value).trim() ? String(value) : fallback;
}

function renderCharacters() {
  const grid = $("#characterGrid");
  grid.innerHTML = "";
  $("#characterCount").textContent = `${String(characters.length).padStart(2, "0")} RECORDS`;

  characters.forEach((character, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "character-card";
    card.style.setProperty("--accent", character.color || "#b62e3b");
    card.setAttribute("aria-label", `Open ${character.name}`);
    const art = character.image
      ? `<img class="card-image" src="${character.image}" alt="${safeText(character.name)} portrait" onerror="this.remove()">`
      : `<div class="portrait-placeholder">${safeText(character.name).split(" ")[0]}<small>PORTRAIT / ${String(index + 1).padStart(2, "0")}</small></div>`;
    card.innerHTML = `
      <div class="card-art">${art}</div>
      <div class="card-topline"><span>RECORD / ${character.id}</span><span>● ACTIVE</span></div>
      <div class="card-info">
        <div class="card-role">${safeText(character.role, "ARCHIVE SUBJECT")}</div>
        <h3 class="card-name">${safeText(character.name)}</h3>
        <div class="card-reading">${safeText(character.reading)}</div>
        <div class="card-bottom"><span>VIEW PROFILE</span><span class="card-arrow">↗</span></div>
      </div>`;
    card.addEventListener("click", () => openCharacter(character));
    grid.appendChild(card);
  });
}

function renderProfile(character) {
  currentCharacter = character;
  document.documentElement.style.setProperty("--red", character.color || "#b62e3b");
  document.documentElement.style.setProperty("--red-bright", character.color || "#ed4655");
  $("#profileSerial").textContent = `RECORD / ${character.id}`;
  $("#profileFooter").innerHTML = `RECORD ${character.id} <i>✳</i>`;
  $("#profileReading").textContent = safeText(character.reading, "READING / —");
  $("#profileName").innerHTML = `${safeText(character.name).replaceAll(" ", "<br>")}`;
  $("#profileQuote").textContent = safeText(character.quote);
  $("#profileStamp").textContent = `A—${character.id}`;
  $("#profileTags").innerHTML = "";
  [character.role, `ID ${character.id}`, "ARCHIVE SUBJECT"].forEach((tag) => {
    const span = document.createElement("span");
    span.className = "profile-tag";
    span.textContent = safeText(tag);
    $("#profileTags").appendChild(span);
  });

  const portrait = $("#profilePortrait");
  portrait.innerHTML = character.image
    ? `<img class="card-image" src="${character.image}" alt="${safeText(character.name)} portrait" onerror="this.parentElement.innerHTML='<span>PORTRAIT<br>PLACEHOLDER</span><small>IMAGE / 01</small>'">`
    : `<span>${safeText(character.name).replaceAll(" ", "<br>")}</span><small>IMAGE / 01</small>`;

  const fields = [
    ["APPEARANCE / 外見", character.appearance],
    ["PERSONALITY / 性格", character.personality],
    ["BACKGROUND / 生い立ち", character.background],
    ["ABILITY / 能力", character.ability],
    ["LIKES / 好き", character.likes],
    ["DISLIKES / 嫌い", character.dislikes],
    ["RELATIONSHIPS / 関係性", character.relationships],
    ["THEME COLOR / テーマカラー", character.color || "—"]
  ];
  const detailGrid = $("#detailGrid");
  detailGrid.innerHTML = "";
  fields.forEach(([label, value]) => {
    const item = document.createElement("div");
    item.className = "detail-item";
    item.innerHTML = `<div class="detail-label">${label}</div><div class="detail-value"></div>`;
    item.querySelector(".detail-value").textContent = safeText(value);
    detailGrid.appendChild(item);
  });
}

function runTransition(kind, callback) {
  if (transitionLock) return;
  transitionLock = true;
  wipe.className = `transition-wipe play-${kind}`;
  window.setTimeout(() => {
    callback();
    window.setTimeout(() => {
      wipe.className = "transition-wipe";
      transitionLock = false;
    }, 360);
  }, 360);
}

function openCharacter(character) {
  renderProfile(character);
  runTransition("open", () => setScreen(profileScreen));
}

function returnToIndex() {
  runTransition("back", () => {
    document.documentElement.style.setProperty("--red", "#b62e3b");
    document.documentElement.style.setProperty("--red-bright", "#ed4655");
    setScreen(indexScreen);
  });
}

$("#enterButton").addEventListener("click", () => {
  renderCharacters();
  runTransition("open", () => setScreen(indexScreen));
});
$("#backButton").addEventListener("click", returnToIndex);
document.querySelectorAll("[data-home]").forEach((el) => el.addEventListener("click", (event) => {
  event.preventDefault();
  runTransition("back", () => setScreen(entryScreen));
}));

const menuOverlay = $("#menuOverlay");
$("#menuTrigger").addEventListener("click", () => menuOverlay.classList.add("open"));
$("#menuClose").addEventListener("click", () => menuOverlay.classList.remove("open"));
menuOverlay.querySelectorAll("[data-nav]").forEach((button) => button.addEventListener("click", () => {
  menuOverlay.classList.remove("open");
  if (button.dataset.nav === "entry") runTransition("back", () => setScreen(entryScreen));
  else {
    renderCharacters();
    runTransition("open", () => setScreen(indexScreen));
  }
}));

function updateClock() {
  $("#clock").textContent = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
  }).format(new Date());
}
updateClock();
window.setInterval(updateClock, 1000);
renderCharacters();

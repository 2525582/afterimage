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
    background: "名家・西園寺家の令嬢として生まれる。幼い頃から礼儀作法や教養、あらゆる分野で一流であることを求められ、数え切れないほどの努力を重ねてきた。周囲からは生まれながらの完璧な令嬢と思われているが、その裏には誰にも見せない負けず嫌いな一面がある。",
    ability: "学業、芸術、礼儀作法、戦略的思考など、幅広い分野で高い能力を発揮する。特に観察力と分析力に優れ、相手の些細な変化や癖を見抜くことが得意。努力によって身につけた実力こそが最大の武器。",
    likes: "紅茶、読書、努力が報われる瞬間",
    dislikes: "妥協、無礼な態度、負けること",
    relationships: "華園棘薔薇とは互いを強く意識し合うライバル関係。自由奔放で掴みどころのない棘薔薇の言動に振り回されることが多く、顔を合わせれば口論になることもしばしば。しかし、その才能と実力は誰よりも認めており、絶対に負けたくない相手でもある。",
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
    personality: "自由奔放で気まぐれ。人をからかうことが好きで、特に詩織を相手にすると悪戯っぽい笑みを浮かべる。中性的で華やかな雰囲気とは裏腹に、物事を冷静に見極める鋭さを持つ。自分のペースを崩さず、他人に媚びることを嫌う。",
    background: "華園家に生まれ、幼い頃から周囲の注目を集めてきた。容姿や振る舞いばかりを評価されることに飽き飽きしており、自分自身の価値は他人に決めさせないと考えている。表向きは気楽に過ごしているが、陰では自分の才能を磨き続けている。",
    ability: "優れた洞察力と直感を持ち、相手の心理や場の空気を読むことに長けている。発想力と応用力にも優れ、予想外の方法で問題を解決することが得意。特定の分野に縛られず、初めて挑戦することにも柔軟に対応できる。",
    likes: "甘いお菓子、綺麗なアクセサリー、気ままな時間、面白い人間、詩織をからかうこと。",
    dislikes: "束縛されること、退屈な時間、見た目だけで判断されること、自分の意思を無視されること。",
    relationships: "西園寺詩織とは互いに一歩も譲らないライバル関係。完璧主義で何事にも真剣な詩織を面白がり、わざと挑発することも多い。詩織の努力家な一面と実力を高く評価しており、誰よりも彼女の負けず嫌いな性格を理解している。",
    image: "images/ibara.jpg"
  },
  {
    id: "003",
    name: "ALMA",
    reading: "アルマ",
    color: "#A6D923",
    role: "THE CHOSEN",
    quote: "「今度こそ、あなたに好きだと伝えたい。」",
    appearance: "鮮やかな赤髪を持つ少女。蝶をモチーフにした装飾を好み、華やかで目を引く雰囲気を持つ。表情は豊かだが、ノエルに関する話題になると、途端に寂しげな表情を見せる。",
    personality: "少しプライドが高く、負けず嫌い。自分の実力に自信を持っており、簡単には他人に弱みを見せない。普段は強気で堂々としているが、ノエルのことになると途端に不器用になる。大切な相手ほど素直になれず、後悔を抱え続けている。",
    background: "ノエルと双子として「生成」された存在。この世界の象徴である「蝶」の力がノエルだけ成長するうちに弱まり、対照的にアルマだけが強くなっていった。やがてノエルは周囲から遠ざけられるようになり、アルマは力を持つ者として扱われるようになる。\n\n本当はノエルのことが大好きだった。しかし、強い自分から好意を伝えることが悔しく、照れくささもあって気持ちを伝えられなかった。今ではそのことを深く後悔している。",
    ability: "蝶の力を操る能力。蝶の鱗粉を利用した幻惑や感覚への干渉、空間を彩るような光の操作を得意とする。ノエルの力が弱まるにつれて、アルマの能力は異常なほど成長していった。現在は世界でも屈指の力を持つ存在。",
    likes: "ノエル、蝶、綺麗なもの、自分を認めてくれる人、ノエルと過ごした思い出。",
    dislikes: "ノエルを傷つけるもの、弱い自分、後悔すること、過去を変えられない現実、自分の気持ちに気づけなかったあの日。",
    relationships: "ノエルとは双子の姉妹。幼い頃は誰よりも仲が良く、いつも一緒に過ごしていた。しかし、蝶の力の成長に差が生まれたことで、2人の立場は大きく変わってしまう。アルマは今でもノエルを心から愛しており、彼女を失ったことを受け入れられずにいる。叶うことなら、もう一度ノエルと一緒に過ごしたいと願っている。",
    image: "images/alma.jpg"
  },
  {
    id: "004",
    name: "NOEL",
    reading: "ノエル",
    color: "#B8CDEB",
    role: "THE FORGOTTEN",
    quote: "「もう、誰も私を見ていない。」",
    appearance: "美しい白髪を持つ少女。儚げで静かな雰囲気をまとっており、どこか現実離れした印象を与える。蝶を象徴する存在として生まれたが、その力を失ってからは、周囲からも忘れられたような存在になってしまった。",
    personality: "物静かで、どこか儚げ。感情を表に出すことが少なく、基本的には無表情で過ごしている。かつては明るく、人懐っこい性格だったが、周囲から距離を置かれるようになってからは自分の気持ちを表現しなくなった。誰かに期待することも、何かを望むことも少なくなっている。",
    background: "アルマと双子として「生成」された存在。この世界の象徴である「蝶」の力を持って生まれ、幼少期はその力によって周囲から愛されていた。\n\nしかし、アルマの力が成長する一方で、ノエルの蝶の力は徐々に弱まっていった。その変化に気づいた周囲は、次第にノエルを遠ざけるようになる。\n\nかつては幸せだった。アルマとも仲が良く、何不自由ない日々を過ごしていた。しかし、3年前にすでに死亡している。",
    ability: "蝶を象徴する力を持つ。かつては蝶を生み出し、自由に操る能力に優れていた。蝶を通じて周囲の感情や気配を感じ取ることもできた。しかし、力の衰退とともに能力の大半を失ってしまった。現在、その力がどこまで残っているのかは不明。",
    likes: "アルマ、一緒に過ごした穏やかな時間、蝶、静かな場所、花。",
    dislikes: "争い、誰かに嫌われること、孤独、周囲からの視線、変わってしまった日常。",
    relationships: "アルマとは双子の妹。幼い頃は互いに支え合い、何をするにも一緒だった。アルマのことを大切に思っていたが、力が弱まってからは距離を感じるようになってしまう。アルマが自分にどのような感情を抱いていたのか、最後まで知ることはなかった。",
    image: "images/noel.jpg"
  },
];

const viewedSet = new Set((() => {
  try { return JSON.parse(localStorage.getItem("afterimage-viewed") || "[]").filter((id) => characters.some((character) => character.id === id)); }
  catch (error) { return []; }
})());
function updateSync() {
  const pct = characters.length ? Math.round((viewedSet.size / characters.length) * 100) : 0;
  const label = document.querySelector("#syncLabel");
  if (label) {
    label.textContent = pct >= 100 ? "SYNC 100% — COMPLETE" : `SYNC ${pct}%`;
    label.classList.toggle("sync-complete", pct >= 100);
  }
  const aboutSync = document.querySelector("#aboutSync");
  if (aboutSync) aboutSync.textContent = pct >= 100 ? "100% — COMPLETE" : `${pct}%`;
  const menuSync = document.querySelector("#menuSync");
  if (menuSync) menuSync.textContent = pct >= 100 ? "100% — COMPLETE" : `${pct}%`;
  if (window.checkCompleteGhost) window.checkCompleteGhost();
}
function markViewed(id) {
  viewedSet.add(id);
  try { localStorage.setItem("afterimage-viewed", JSON.stringify([...viewedSet])); } catch (error) {}
  updateSync();
}

const $ = (selector) => document.querySelector(selector);
const entryScreen = $("#entryScreen");
const indexScreen = $("#indexScreen");
const profileScreen = $("#profileScreen");
const relationScreen = $("#relationScreen");
const quotesScreen = $("#quotesScreen");
const galleryScreen = $("#galleryScreen");
const aboutScreen = $("#aboutScreen");
const worldScreen = $("#worldScreen");
const promptsScreen = $("#promptsScreen");
const wantedScreen = $("#wantedScreen");
const wipe = $("#transitionWipe");
let currentCharacter = null;
let transitionLock = false;

const screenKeys = new Map();
function setScreen(screen) {
  document.querySelectorAll(".screen").forEach((item) => {
    const active = item === screen;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-hidden", String(!active));
  });
  const key = screenKeys.get(screen);
  if (key) document.querySelectorAll("[data-nav]").forEach((btn) => btn.classList.toggle("current", btn.dataset.nav === key));
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
      <div class="card-glare"></div>
      <div class="card-topline"><span>RECORD / ${character.id}</span><span>${viewedSet.has(character.id) ? "● VIEWED" : "● ACTIVE"}</span></div>
      ${viewedSet.has(character.id) ? '<span class="viewed-stamp">VIEWED</span>' : ""}
      <div class="card-info">
        <div class="card-role">${safeText(character.role, "ARCHIVE SUBJECT")}</div>
        <h3 class="card-name">${safeText(character.name)}</h3>
        <div class="card-reading">${safeText(character.reading)}</div>
        <div class="card-bottom"><span>VIEW PROFILE</span><span class="card-arrow">↗</span></div>
      </div>`;
    card.addEventListener("click", () => openCharacter(character));
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      card.style.transform = `perspective(900px) rotateY(${((x - 0.5) * 10).toFixed(2)}deg) rotateX(${((0.5 - y) * 8).toFixed(2)}deg) translateY(-7px)`;
      card.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
      card.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
    grid.appendChild(card);
  });
}

function renderProfile(character) {
  currentCharacter = character;
  document.documentElement.style.setProperty("--red", character.color || "#b62e3b");
  document.documentElement.style.setProperty("--red-bright", character.color || "#ed4655");
  $("#profileSerial").textContent = `RECORD / ${character.id}`;
  $("#profileFooter").innerHTML = `RECORD ${character.id}`;
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
    if (revealObserver) revealObserver.observe(item);
    else item.classList.add("inview");
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

let splashBusy = false;
function openCharacter(character) {
  if (splashBusy) return;
  splashBusy = true;
  renderProfile(character);
  markViewed(character.id);
  playOpenSound();
  const nameEl = $("#splashName");
  nameEl.textContent = character.name;
  nameEl.dataset.text = character.name;
  $("#splashMeta").textContent = `RECORD / ${character.id} — OPENING`;
  $("#splashReading").textContent = character.reading;
  const lost = character.id === "004";
  $("#splashWarn").textContent = lost ? "SIGNAL LOST — NO RESPONSE" : "SIGNAL UNSTABLE — DO NOT LOOK AWAY";
  const splash = $("#splashOverlay");
  splash.classList.remove("closing");
  splash.classList.toggle("lost", lost);
  splash.classList.add("show");
  document.body.classList.add("glitching");
  window.setTimeout(() => {
    splash.classList.remove("show", "lost");
    document.body.classList.remove("glitching");
    runTransition("open", () => setScreen(profileScreen));
    splashBusy = false;
  }, lost ? 1500 : 1050);
}

function returnToIndex() {
  renderCharacters();
  const finish = () => runTransition("back", () => {
    document.documentElement.style.setProperty("--red", "#b62e3b");
    document.documentElement.style.setProperty("--red-bright", "#ed4655");
    setScreen(indexScreen);
  });
  if (!currentCharacter || splashBusy) { finish(); return; }
  splashBusy = true;
  const nameEl = $("#splashName");
  nameEl.textContent = currentCharacter.name;
  nameEl.dataset.text = currentCharacter.name;
  $("#splashMeta").textContent = `RECORD / ${currentCharacter.id} — CLOSING`;
  $("#splashReading").textContent = currentCharacter.reading;
  $("#splashWarn").textContent = "RECORD CLOSED";
  const splash = $("#splashOverlay");
  splash.classList.remove("lost");
  splash.classList.add("closing", "show");
  window.setTimeout(() => {
    splash.classList.remove("show", "closing");
    splashBusy = false;
    finish();
  }, 900);
}

$("#enterButton").addEventListener("click", () => {
  playBlip();
  renderCharacters();
  runTransition("open", () => setScreen(indexScreen));
});
$("#backButton").addEventListener("click", () => { playBackSound(); returnToIndex(); });
document.querySelectorAll("[data-home]").forEach((el) => el.addEventListener("click", (event) => {
  event.preventDefault();
  runTransition("back", () => setScreen(entryScreen));
}));

const menuOverlay = $("#menuOverlay");
$("#menuTrigger").addEventListener("click", () => menuOverlay.classList.add("open"));
$("#menuClose").addEventListener("click", () => menuOverlay.classList.remove("open"));
const navTargets = { entry: entryScreen, index: indexScreen, wanted: wantedScreen, relation: relationScreen, quotes: quotesScreen, gallery: galleryScreen, world: worldScreen, prompts: promptsScreen, about: aboutScreen };
screenKeys.set(entryScreen, "entry");
screenKeys.set(indexScreen, "index");
screenKeys.set(profileScreen, "index");
screenKeys.set(relationScreen, "relation");
screenKeys.set(quotesScreen, "quotes");
screenKeys.set(galleryScreen, "gallery");
screenKeys.set(worldScreen, "world");
screenKeys.set(promptsScreen, "prompts");
screenKeys.set(wantedScreen, "wanted");
screenKeys.set(aboutScreen, "about");
menuOverlay.querySelectorAll("[data-nav]").forEach((button) => button.addEventListener("click", () => {
  menuOverlay.classList.remove("open");
  const key = button.dataset.nav;
  const target = navTargets[key] || indexScreen;
  if (key === "index") renderCharacters();
  if (key === "wanted") { renderWanted(); document.body.classList.add("eroding"); window.setTimeout(() => document.body.classList.remove("eroding"), 240); if (soundOn) playOpenSound(); }
  if (key === "quotes") renderQuotes();
  if (key === "gallery") renderGallery();
  if (key === "prompts") renderPrompts();
  if (key === "about") updateAbout();
  runTransition(key === "entry" ? "back" : "open", () => setScreen(target));
}));

function updateClock() {
  $("#clock").textContent = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
  }).format(new Date());
}
updateClock();
window.setInterval(updateClock, 1000);
renderCharacters();
updateSync();
document.querySelectorAll("[data-nav]").forEach((btn) => btn.classList.toggle("current", btn.dataset.nav === "entry"));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") menuOverlay.classList.remove("open");
});

/* intro */
const introOverlay = $("#introOverlay");
function finishIntro() {
  if (!introOverlay || introOverlay.dataset.done) return;
  introOverlay.dataset.done = "1";
  document.body.classList.add("intro-done");
  if (window.startTitleDecode) window.startTitleDecode();
  introOverlay.classList.add("intro-hide");
  window.setTimeout(() => introOverlay.remove(), 650);
}
window.setTimeout(finishIntro, 2350);
if (introOverlay) introOverlay.addEventListener("click", finishIntro);

/* scroll reveal for profile details */
const revealObserver = ("IntersectionObserver" in window)
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("inview");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

/* afterimage trail marks */
let lastGhost = 0;
function spawnMark(x, y, className) {
  const mark = document.createElement("span");
  mark.className = className;
  mark.style.left = `${x}px`;
  mark.style.top = `${y}px`;
  document.body.appendChild(mark);
  window.setTimeout(() => mark.remove(), 900);
}
document.addEventListener("pointerdown", (event) => {
  spawnMark(event.clientX, event.clientY, "trail-mark");
});
if (window.matchMedia("(pointer: fine)").matches) {
  document.addEventListener("pointermove", (event) => {
    const now = performance.now();
    if (now - lastGhost < 55) return;
    lastGhost = now;
    spawnMark(event.clientX, event.clientY, "ghost-dot");
  });
}

/* profile portrait parallax */
window.addEventListener("scroll", () => {
  if (!profileScreen.classList.contains("is-active")) return;
  const img = profileScreen.querySelector(".visual-placeholder img");
  if (img) img.style.transform = `translateY(${Math.min(window.scrollY * 0.05, 28).toFixed(1)}px) scale(1.06)`;
}, { passive: true });

/* ===== sound (WebAudio, no files) ===== */
let audioCtx = null;
let soundOn = false;
try { soundOn = localStorage.getItem("afterimage-sound") === "on"; } catch (error) {}
const soundToggle = $("#soundToggle");
function refreshSoundLabel() { if (soundToggle) soundToggle.textContent = soundOn ? "SOUND ON" : "SOUND OFF"; }
refreshSoundLabel();
if (soundToggle) soundToggle.addEventListener("click", () => {
  soundOn = !soundOn;
  try { localStorage.setItem("afterimage-sound", soundOn ? "on" : "off"); } catch (error) {}
  refreshSoundLabel();
  if (soundOn) playBlip();
});
function ensureAudio() {
  if (!audioCtx) { const AC = window.AudioContext || window.webkitAudioContext; if (AC) audioCtx = new AC(); }
  if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}
function tone(freqFrom, freqTo, dur, type, gainVal, delay = 0) {
  const ctx = ensureAudio(); if (!ctx) return;
  const t0 = ctx.currentTime + delay;
  const osc = ctx.createOscillator(); const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freqFrom, t0);
  osc.frequency.exponentialRampToValueAtTime(Math.max(freqTo, 1), t0 + dur);
  gain.gain.setValueAtTime(gainVal, t0);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(gain).connect(ctx.destination);
  osc.start(t0); osc.stop(t0 + dur + 0.05);
}
function noiseBurst(dur, gainVal, delay = 0) {
  const ctx = ensureAudio(); if (!ctx) return;
  const t0 = ctx.currentTime + delay;
  const len = Math.floor(ctx.sampleRate * dur);
  const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
  const src = ctx.createBufferSource(); src.buffer = buffer;
  const gain = ctx.createGain(); gain.gain.value = gainVal;
  const filter = ctx.createBiquadFilter(); filter.type = "highpass"; filter.frequency.value = 900;
  src.connect(filter).connect(gain).connect(ctx.destination);
  src.start(t0);
}
function playBlip() { if (!soundOn) return; tone(740, 520, 0.07, "square", 0.05); }
function playBackSound() { if (!soundOn) return; tone(420, 180, 0.12, "square", 0.05); }
function playOpenSound() {
  if (!soundOn) return;
  tone(96, 36, 0.9, "sawtooth", 0.11);
  tone(58, 30, 1.0, "triangle", 0.1, 0.05);
  noiseBurst(0.12, 0.06, 0.02);
  noiseBurst(0.08, 0.05, 0.34);
  noiseBurst(0.16, 0.04, 0.62);
}

/* ===== drifting dust ===== */
(() => {
  const canvas = $("#dustCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w = 0, h = 0, dots = [];
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(70, Math.floor((w * h) / 26000));
    dots = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.6 + 0.4,
      s: Math.random() * 0.22 + 0.05,
      drift: (Math.random() - 0.5) * 0.12,
      p: Math.random() * Math.PI * 2,
      red: Math.random() < 0.22
    }));
  }
  resize();
  window.addEventListener("resize", resize);
  (function tick() {
    ctx.clearRect(0, 0, w, h);
    const t = performance.now() / 1000;
    dots.forEach((d) => {
      d.y -= d.s; d.x += d.drift + Math.sin(t * 0.6 + d.p) * 0.05;
      if (d.y < -4) { d.y = h + 4; d.x = Math.random() * w; }
      if (d.x < -4) d.x = w + 4; if (d.x > w + 4) d.x = -4;
      const a = 0.14 + 0.12 * (0.5 + 0.5 * Math.sin(t * 0.9 + d.p));
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = d.red ? `rgba(237,70,85,${a})` : `rgba(220,226,235,${a})`;
      ctx.fill();
    });
    requestAnimationFrame(tick);
  })();
})();

/* ===== sub screens ===== */
function renderQuotes() {
  const list = $("#quotesList");
  if (!list) return;
  list.innerHTML = "";
  characters.forEach((character) => {
    const item = document.createElement("button");
    item.className = "quote-item";
    item.style.setProperty("--accent", character.color || "#b62e3b");
    item.innerHTML = `<span class="quote-id">RECORD / ${character.id}</span><span class="quote-text">${safeText(character.quote)}</span><span class="quote-who">${safeText(character.name)}<small>${safeText(character.reading)}</small></span>`;
    item.addEventListener("click", () => openCharacter(character));
    list.appendChild(item);
  });
}
function renderGallery() {
  const grid = $("#galleryGrid");
  if (!grid) return;
  grid.innerHTML = "";
  characters.forEach((character) => {
    const item = document.createElement("button");
    item.className = "gallery-item";
    item.style.setProperty("--accent", character.color || "#b62e3b");
    item.innerHTML = character.image
      ? `<img src="${character.image}" alt="${safeText(character.name)} portrait" onerror="this.remove()"><span class="gallery-name">${safeText(character.name)}<small>${safeText(character.reading)}</small></span>`
      : `<span class="gallery-empty">${safeText(character.name)}</span><span class="gallery-name">${safeText(character.name)}<small>${safeText(character.reading)}</small></span>`;
    item.addEventListener("click", () => openCharacter(character));
    grid.appendChild(item);
  });
}
function updateAbout() {
  const count = $("#aboutCount");
  if (count) count.textContent = String(characters.length).padStart(2, "0");
  updateSync();
}
document.querySelectorAll("[data-open]").forEach((el) => el.addEventListener("click", () => {
  const target = characters.find((c) => c.id === el.dataset.open);
  if (target) openCharacter(target);
}));
const resetViewedBtn = $("#resetViewed");
if (resetViewedBtn) resetViewedBtn.addEventListener("click", () => {
  viewedSet.clear();
  try { localStorage.removeItem("afterimage-viewed"); } catch (error) {}
  updateSync();
  renderCharacters();
  playBackSound();
});

/* ===== prompt library ===== */
const promptEntries = [
  {
    title: "立ち絵プロンプトを作る",
    use: "新しいキャラの立ち絵が欲しい時",
    text: "あなたはAIイラスト生成のプロンプト作成の専門家です。PixAIで使う、キャラクターの立ち絵用プロンプトを作ってください。条件：[性別・年齢層]、髪は[色と長さ]、目は[色]、服装は[服装の説明]、雰囲気は[雰囲気]。出力は英語のタグ形式でカンマ区切り、品質タグ（masterpiece, best qualityなど）は先頭に置いてください。最後にネガティブプロンプトも別に書いてください。"
  },
  {
    title: "表情差分を作る",
    use: "同じキャラで表情だけ変えたい時",
    text: "PixAI用の表情差分プロンプトを作ってください。ベースのキャラタグは [ここにベースのプロンプトを貼る] です。表情だけを [笑顔 / 怒り / 照れ / 泣き顔 など] に変えたタグ一式と、変えてはいけない固定タグの一覧を、分けて出力してください。"
  },
  {
    title: "衣装チェンジ",
    use: "キャラはそのまま、服だけ変えたい時",
    text: "このキャラクターの衣装だけを変更したいです。外見の固定タグはそのままにして、衣装タグだけを [新しい衣装の説明] に差し替えた、PixAI用プロンプトの全文を出力してください。変更した箇所には印をつけてください。元のプロンプト：[ここに貼る]"
  },
  {
    title: "背景ありの一枚絵",
    use: "場面のあるイラストを作りたい時",
    text: "PixAIで背景ありのイラストを作ります。キャラタグは [ここに貼る]。場面は [場所・時間帯・天気] です。キャラのタグと背景のタグを分けて説明したあと、最後に合成した全文プロンプトを英語タグ形式で出力してください。"
  },
  {
    title: "設定画風に作る",
    use: "キャラ設定画っぽい画像が欲しい時",
    text: "キャラクター設定画のような画像を作るための、PixAI用プロンプトを作ってください。全身・正面・無地の背景・表情は通常でお願いします。キャラの特徴は [特徴を書く]。英語タグ形式で出力し、ネガティブプロンプトもつけてください。"
  },
  {
    title: "プロンプトの添削・整理",
    use: "タグがぐちゃぐちゃになってきた時",
    text: "次のPixAI用プロンプトを添削してください。重複したタグの削除、矛盾するタグの指摘、足りない品質タグの追加をして、整えた全文を出力してください。指摘した箇所は理由も一言つけてください。プロンプト：[ここに貼る]"
  },
  {
    title: "日本語の説明をタグ化する",
    use: "頭の中のイメージをそのまま渡したい時",
    text: "次の日本語のイメージ説明を、PixAIで使える英語タグ形式のプロンプトに変換してください。タグは重要度順に並べ、最後にネガティブプロンプトも提案してください。説明：[イメージを日本語で書く]"
  },
  {
    title: "PixAI RANDOM CHARACTER MAKER",
    use: "サイコロでランダムにキャラを作る時（長文・本格仕様）",
    text: `PixAI RANDOM CHARACTER MAKER

あなたはPixAI専用のランダムキャラクタープロンプトメーカーです。

ユーザーがチャット画面上のサイコロボタンを押して出目を決め、その結果に対応するイラストパーツを組み合わせ、PixAI用の英語プロンプトを作成してください。

【最重要：サイコロボタンの実装】

会話開始時に、実際に操作できるサイコロボタンをチャット内に表示してください。

通常の文章で「サイコロを振る」と案内するだけでは不十分です。

ChatGPTで利用可能なインタラクティブUI機能を使用してください。

サイコロの仕様

* 6面体サイコロ（1〜6）
* ボタンを押すとランダムに1〜6の数字が決定する
* 出目は画面上に大きく表示する
* 各項目の結果を保存する
* 一度決まった結果は、振り直さない限り変更しない
* 項目ごとに個別で振り直せる
* 全項目のリセット機能を設ける
* 全6項目が確定したらプロンプト作成ボタンを有効にする

【見本表】

1回目：性別

1. 女性
2. 男性
3. 中性的な女性
4. 中性的な男性
5. ファンタジーキャラ
6. 性別不詳

2回目：髪型

1. ロングストレート
2. ツインテール
3. ポニーテール
4. ウルフカット
5. ボブカット
6. 姫カット

3回目：前髪

1. パッツン前髪
2. センター分け
3. 目にかかる長い前髪
4. 斜め分け
5. シースルーバング
6. アシンメトリー前髪

4回目：髪色

1. 黒
2. 白
3. 赤
4. ピンク
5. 水色
6. 紫

5回目：目の色

1. 赤
2. 青
3. 紫
4. 金
5. 緑
6. オッドアイ

6回目：服装

1. ゴシックロリータ
2. 軍服
3. 和服
4. メイド服
5. 王族風ドレス
6. ファンタジー冒険者衣装

【操作画面】

以下の構成で表示してください。

* タイトル：PixAI Dice Maker
* 6つの項目それぞれにサイコロボタン
* 現在の出目
* 出目に対応するパーツ名
* 進行状況（0/6〜6/6）
* 全項目リセットボタン
* PixAI用プロンプト作成ボタン

【プロンプト作成】

6項目が確定したら、ユーザーがプロンプト作成ボタンを押すことで、英語プロンプトを生成してください。

出目と見本の対応を厳密に守ってください。

ユーザーが振った数字を絶対に変更しないでください。

【最終出力】

① サイコロ結果一覧

② PixAI用英語プロンプト

完成イメージ画像は絶対に掲載しないでください。

【禁止事項】

* AIが勝手に出目を決めること
* ユーザーの出目を変更すること
* 見本にないパーツを勝手に採用すること
* 完成イメージ画像を掲載すること
* 出目が確定する前にプロンプトを完成させること

ユーザーが操作するサイコロボタンを中心とした、楽しく使いやすいゲーム画面を作成してください。

【出目・翻訳の厳守ルール】

* サイコロの結果一覧は、必ず日本語で表示する。
* 出目の数字と日本語のパーツ名は、見本表の表記をそのまま使用する。
* 日本語の結果一覧を英語に翻訳しない。
* PixAI用英語プロンプトだけを英語で作成する。
* 結果一覧と英語プロンプトを明確に分けて表示する。
* コピー用プロンプトには、確定した6項目だけを反映する。
* 英語プロンプトをコピーする際、日本語の説明文や結果一覧を混ぜない。
* ユーザーが決めた出目・パーツの意味を勝手に解釈変更しない。

【コピー形式】

日本語の結果一覧
各項目の出目とパーツ名を日本語で表示。

PixAI用英語プロンプト
英語のプロンプトのみを独立したコピー可能なブロックに入れる。`
  }
];
function renderPrompts() {
  const list = $("#promptsList");
  if (!list) return;
  list.innerHTML = "";
  promptEntries.forEach((entry, i) => {
    const card = document.createElement("article");
    card.className = "prompt-card";
    card.innerHTML = `<div class="prompt-head"><span class="prompt-no">P-${String(i + 1).padStart(2, "0")}</span><h3>${entry.title}</h3><button class="copy-btn" type="button">COPY</button></div><p class="prompt-use">${entry.use}</p><p class="prompt-preview"></p><p class="prompt-text"></p><button class="detail-btn" type="button">詳細を見る</button>`;
    card.querySelector(".prompt-text").textContent = entry.text;
    card.querySelector(".prompt-preview").textContent = entry.text.replace(/\s+/g, " ").slice(0, 90) + "…";
    const detailBtn = card.querySelector(".detail-btn");
    detailBtn.addEventListener("click", () => {
      const open = card.classList.toggle("open");
      detailBtn.textContent = open ? "閉じる" : "詳細を見る";
    });
    const btn = card.querySelector(".copy-btn");
    btn.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(entry.text); }
      catch (error) {
        const ta = document.createElement("textarea");
        ta.value = entry.text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
      }
      btn.textContent = "COPIED";
      btn.classList.add("copied");
      window.setTimeout(() => { btn.textContent = "COPY"; btn.classList.remove("copied"); }, 1400);
    });
    list.appendChild(card);
  });
}

/* ===== erosion & hauntings ===== */
const scrambleChars = "ABCDEF0123456789#/=+";
function scrambleOnce(el) {
  if (!el || el.dataset.scrambling) return;
  const original = el.textContent;
  el.dataset.scrambling = "1";
  let step = 0;
  const iv = window.setInterval(() => {
    step++;
    el.textContent = original.split("").map((ch) => (ch === " " ? " " : scrambleChars[Math.floor(Math.random() * scrambleChars.length)])).join("");
    if (step >= 5) {
      window.clearInterval(iv);
      delete el.dataset.scrambling;
      if (el.id === "syncLabel") updateSync();
      else el.textContent = original;
    }
  }, 55);
}
window.setInterval(() => {
  if (document.hidden) return;
  if (Math.random() > 0.16) return;
  document.body.classList.add("eroding");
  window.setTimeout(() => document.body.classList.remove("eroding"), 200);
  scrambleOnce(Math.random() < 0.5 ? $("#clock") : $("#syncLabel"));
}, 6000);
window.setInterval(() => {
  if (document.hidden) return;
  if (!currentCharacter || currentCharacter.id !== "004") return;
  if (!profileScreen.classList.contains("is-active")) return;
  if (Math.random() > 0.4) return;
  const portrait = $("#profilePortrait");
  if (!portrait) return;
  portrait.classList.add("haunted");
  window.setTimeout(() => portrait.classList.remove("haunted"), 170);
}, 4200);
window.setTimeout(() => {
  const ghost = $("#introGhost");
  if (ghost) ghost.classList.add("flash");
  window.setTimeout(() => { if (ghost) ghost.classList.remove("flash"); }, 110);
}, 1980);

/* ===== entry screen upgrades ===== */
function decodeTitle(el, delay) {
  const finalText = el.dataset.text;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/=+";
  window.setTimeout(() => {
    let frame = 0;
    const total = 26;
    const iv = window.setInterval(() => {
      frame++;
      const resolved = Math.floor((frame / total) * finalText.length);
      el.textContent = finalText.split("").map((ch, i) => (i < resolved ? ch : chars[Math.floor(Math.random() * chars.length)])).join("");
      if (frame >= total) { window.clearInterval(iv); el.textContent = finalText; }
    }, 34);
  }, delay);
}
let titleDecoded = false;
function startTitleDecode() {
  if (titleDecoded) return;
  titleDecoded = true;
  document.querySelectorAll("#entryTitle .ttl").forEach((el, i) => decodeTitle(el, i * 220));
}
window.setInterval(() => {
  if (document.hidden) return;
  if (!entryScreen.classList.contains("is-active")) return;
  if (Math.random() > 0.22) return;
  const title = $("#entryTitle");
  if (!title) return;
  title.classList.add("title-glitch");
  window.setTimeout(() => title.classList.remove("title-glitch"), 190);
}, 7000);
const sessionStart = Date.now();
window.setInterval(() => {
  const hud = $("#hudSession");
  if (hud) {
    const s = Math.floor((Date.now() - sessionStart) / 1000);
    const hh = String(Math.floor(s / 3600)).padStart(2, "0");
    const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const ss = String(s % 60).padStart(2, "0");
    hud.textContent = `${hh}:${mm}:${ss}`;
  }
  const hudSync = $("#hudSync");
  const syncLabel = $("#syncLabel");
  if (hudSync && syncLabel) hudSync.textContent = syncLabel.textContent.replace("SYNC ", "");
}, 1000);
entryScreen.addEventListener("pointermove", (event) => {
  const rect = entryScreen.getBoundingClientRect();
  entryScreen.style.setProperty("--sx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
  entryScreen.style.setProperty("--sy", `${((event.clientY - rect.top) / rect.height) * 100}%`);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && entryScreen.classList.contains("is-active")) $("#enterButton").click();
});

/* ===== wanted ===== */
const wantedList = [
  { code: "W-01", name: "NORTH", reading: "ノース", image: "images/north.jpg", threat: "UNKNOWN",
    sighting: "紫の長い髪と紫の瞳。黒いゴシックなドレスに、白いブラウスと黒いリボン。いつも少し上から、じっとこちらを見上げている姿が目撃されている。",
    facts: ["性別：女性", "名前以外の素性：不明", "性格・目的：不明"] },
  { code: "W-02", name: "LULU", reading: "ルル", image: "images/lulu.jpg", threat: "UNKNOWN",
    sighting: "緑の髪。後ろ髪だけが異様に長い。大きめの白いシャツワンピースを一枚で着ている。腰に手を当てて立つ姿が目撃されている。",
    facts: ["性別：無性別", "名前以外の素性：不明", "性格・目的：不明"] },
  { code: "W-03", name: "ASTRAL", reading: "アストラル", image: "images/astral.jpg", threat: "HIGH",
    sighting: "ピンクのツインテールと、ハート型に跳ねた毛束。シスター服にハートの鍵のペンダント。瞳の中にもハートが浮かんでいる。",
    facts: ["性別：女性", "「聖女」と呼ばれている", "恋愛好き", "記録：元恋人を殺した"] }
];
function renderWanted() {
  const grid = $("#wantedGrid");
  if (!grid) return;
  grid.innerHTML = wantedList.map((person) => `
    <article class="wanted-card" tabindex="0">
      <header class="w-head"><span>CASE ${person.code}</span><span class="w-threat">危険度 ${person.threat}</span></header>
      <h3 class="w-wanted">WANTED</h3>
      <div class="w-photo"><img src="${person.image}" alt="${person.reading}"><span class="w-denied">NO FURTHER DATA</span></div>
      <h4 class="w-name">${person.name}<small>${person.reading} — それ以外の名前は不明</small></h4>
      <p class="w-label">SIGHTING REPORT — 目撃情報</p>
      <p class="w-text">${person.sighting}</p>
      <p class="w-label">KNOWN FACTS — 判明していること</p>
      <ul class="w-facts">${person.facts.map((fact) => `<li>${fact}</li>`).join("")}</ul>
      <footer class="w-foot">STATUS：未解明 — 見かけても近づかないこと</footer>
    </article>`).join("");
  grid.querySelectorAll(".wanted-card").forEach((card) => card.addEventListener("click", () => {
    card.classList.add("denied");
    document.body.classList.add("eroding");
    window.setTimeout(() => { card.classList.remove("denied"); document.body.classList.remove("eroding"); }, 1800);
  }));
}
window.setInterval(() => {
  if (document.hidden) return;
  if (!wantedScreen.classList.contains("is-active")) return;
  if (Math.random() > 0.35) return;
  const photos = document.querySelectorAll(".w-photo img");
  if (!photos.length) return;
  const photo = photos[Math.floor(Math.random() * photos.length)];
  photo.classList.add("haunted");
  window.setTimeout(() => photo.classList.remove("haunted"), 170);
}, 4500);

/* ===== hauntings 2 ===== */
window.setInterval(() => {
  if (document.hidden || !indexScreen.classList.contains("is-active")) return;
  if (Math.random() > 0.3) return;
  const cards = document.querySelectorAll("#characterGrid .character-card");
  const noelCard = [...cards].find((card) => { const name = card.querySelector(".card-name"); return name && name.textContent.trim() === "NOEL"; });
  if (!noelCard) return;
  noelCard.classList.add("vanishing");
  window.setTimeout(() => noelCard.classList.remove("vanishing"), 650);
}, 5000);
window.setInterval(() => {
  if (document.hidden) return;
  if (!currentCharacter || currentCharacter.id !== "004") return;
  if (!profileScreen.classList.contains("is-active")) return;
  if (Math.random() > 0.25) return;
  const quote = $("#profileQuote");
  if (!quote || quote.dataset.swapped) return;
  const original = quote.textContent;
  quote.dataset.swapped = "1";
  quote.textContent = "「……見てる？」";
  quote.classList.add("quote-wrong");
  window.setTimeout(() => { quote.textContent = original; quote.classList.remove("quote-wrong"); delete quote.dataset.swapped; }, 450);
}, 6000);
function checkCompleteGhost() {
  if (!characters.length || viewedSet.size < characters.length) return;
  if (sessionStorage.getItem("afterimage-complete-shown")) return;
  sessionStorage.setItem("afterimage-complete-shown", "1");
  const ghost = $("#completeGhost");
  if (!ghost) return;
  window.setTimeout(() => {
    ghost.classList.add("show");
    window.setTimeout(() => ghost.classList.remove("show"), 3800);
  }, 600);
}
window.setInterval(() => {
  if (document.hidden || !indexScreen.classList.contains("is-active")) return;
  if (!characters.length || viewedSet.size < characters.length) return;
  if (Math.random() > 0.2) return;
  const grid = $("#characterGrid");
  if (!grid || grid.querySelector(".ghost-card")) return;
  const ghost = document.createElement("div");
  ghost.className = "ghost-card";
  ghost.innerHTML = `<span class="g-top">RECORD / 005</span><span class="g-q">?</span><span class="g-bottom">UNLOGGED EXISTENCE</span>`;
  grid.appendChild(ghost);
  window.setTimeout(() => ghost.remove(), 750);
}, 9000);
let lastActivity = Date.now();
["pointerdown", "pointermove", "keydown", "scroll", "touchstart"].forEach((type) => window.addEventListener(type, () => {
  lastActivity = Date.now();
  const idle = $("#idleGhost");
  if (idle) idle.classList.remove("show");
}, { passive: true }));
window.setInterval(() => {
  if (document.hidden) return;
  const idle = $("#idleGhost");
  if (!idle) return;
  if (Date.now() - lastActivity > 30000) idle.classList.add("show");
}, 4000);

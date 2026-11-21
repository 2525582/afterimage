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
  {
    id: "005",
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

const viewedSet = new Set((() => {
  try { return JSON.parse(localStorage.getItem("afterimage-viewed") || "[]"); }
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
const wipe = $("#transitionWipe");
let currentCharacter = null;
let transitionLock = false;

function setScreen(screen) {
  document.querySelectorAll(".screen").forEach((item) => {
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
  const splash = $("#splashOverlay");
  splash.classList.add("show");
  document.body.classList.add("glitching");
  window.setTimeout(() => {
    splash.classList.remove("show");
    document.body.classList.remove("glitching");
    runTransition("open", () => setScreen(profileScreen));
    splashBusy = false;
  }, 1050);
}

function returnToIndex() {
  renderCharacters();
  runTransition("back", () => {
    document.documentElement.style.setProperty("--red", "#b62e3b");
    document.documentElement.style.setProperty("--red-bright", "#ed4655");
    setScreen(indexScreen);
  });
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
const navTargets = { entry: entryScreen, index: indexScreen, relation: relationScreen, quotes: quotesScreen, gallery: galleryScreen, about: aboutScreen };
menuOverlay.querySelectorAll("[data-nav]").forEach((button) => button.addEventListener("click", () => {
  menuOverlay.classList.remove("open");
  const key = button.dataset.nav;
  const target = navTargets[key] || indexScreen;
  if (key === "index") renderCharacters();
  if (key === "quotes") renderQuotes();
  if (key === "gallery") renderGallery();
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

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") menuOverlay.classList.remove("open");
});

/* intro */
const introOverlay = $("#introOverlay");
function finishIntro() {
  if (!introOverlay || introOverlay.dataset.done) return;
  introOverlay.dataset.done = "1";
  document.body.classList.add("intro-done");
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

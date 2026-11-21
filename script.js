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
      <div class="card-glare"></div>
      <div class="card-topline"><span>RECORD / ${character.id}</span><span>● ACTIVE</span></div>
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

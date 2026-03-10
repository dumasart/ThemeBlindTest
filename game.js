// ─── State ───────────────────────────────────────────────────────────────────
const state = {
  theme: null,
  songs: [],
  currentIndex: 0,
  score: 0,
  themeScore: 0,
  answered: false,
  previewUrl: null,
  playedThemes: new Set(),
};

// ─── DOM Refs ─────────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);

const screens = {
  themeSelect : $('screen-theme-select'),
  game        : $('screen-game'),
  end         : $('screen-end'),
};

// ─── Deezer JSONP Helper ──────────────────────────────────────────────────────
function searchDeezerTrack(title, artist) {
  return new Promise((resolve, reject) => {
    const callbackName = `dz_cb_${Date.now()}`;
    const script = document.createElement('script');
    const timeout = setTimeout(() => {
      delete window[callbackName];
      script.remove();
      reject(new Error('Deezer API timeout'));
    }, 8000);

    window[callbackName] = (data) => {
      clearTimeout(timeout);
      delete window[callbackName];
      script.remove();
      const track = data && data.data && data.data[0];
      if (track && track.preview) resolve(track);
      else reject(new Error('No preview available'));
    };

    const query = encodeURIComponent(`artist:"${artist}" track:"${title}"`);
    script.src = `https://api.deezer.com/search?q=${query}&output=jsonp&callback=${callbackName}`;
    document.head.appendChild(script);
  });
}

// ─── Screen Management ────────────────────────────────────────────────────────
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

// ─── Theme Selection Screen ───────────────────────────────────────────────────
function renderThemeList() {
  const list = $('theme-list');
  list.innerHTML = '';
  THEMES.forEach(theme => {
    const card = document.createElement('div');
    const played = state.playedThemes.has(theme.id);
    card.className = 'theme-card' + (played ? ' theme-card--played' : '');
    card.innerHTML = `
      <div class="theme-icon">${theme.icon}${played ? '<span class="theme-done">✔</span>' : ''}</div>
      <div class="theme-title">${theme.title}</div>
      <div class="theme-desc">${theme.description}</div>
    `;
    card.addEventListener('click', () => startGame(theme));
    list.appendChild(card);
  });
}

// ─── Game Start ───────────────────────────────────────────────────────────────
function startGame(theme) {
  state.theme = theme;
  state.songs = [...theme.songs].sort(() => Math.random() - 0.5);
  state.currentIndex = 0;
  state.themeScore = 0;

  $('total-songs').textContent = state.songs.length;
  $('theme-name').textContent = `${theme.icon} ${theme.title}`;
  $('hint-theme').textContent = theme.title;

  showScreen('game');
  loadSong(state.currentIndex);
}

// ─── Load Song ────────────────────────────────────────────────────────────────
async function loadSong(index) {
  state.answered = false;
  state.previewUrl = null;

  const song = state.songs[index];
  $('current-song-index').textContent = index + 1;
  $('feedback').textContent = '';
  $('feedback').className = '';
  $('guess-input').value = '';
  $('guess-input').disabled = false;
  $('btn-guess').disabled = false;
  $('btn-next').classList.add('hidden');
  $('btn-skip').classList.remove('hidden');
  $('revealed-answer').classList.add('hidden');

  resetPlayer();

  $('btn-play').textContent = '⏳ Loading…';
  $('btn-play').disabled = true;

  try {
    const data = await searchDeezerTrack(song.title, song.artist);
    state.previewUrl = data.preview;
    $('btn-play').textContent = '▶ Play Preview';
    $('btn-play').disabled = false;
  } catch (err) {
    $('btn-play').textContent = '⚠ Preview unavailable';
    setFeedback(`Could not load preview. Skipping…`, 'wrong');
    setTimeout(() => advanceSong(false), 2500);
  }
}

// ─── Player ───────────────────────────────────────────────────────────────────
function resetPlayer() {
  const audio = $('audio-player');
  audio.pause();
  audio.src = '';
  $('vinyl').className = 'vinyl stopped';
  $('progress-bar').style.width = '0%';
}

$('btn-play').addEventListener('click', () => {
  if (!state.previewUrl) return;
  const audio = $('audio-player');
  if (audio.paused) {
    audio.src = state.previewUrl;
    audio.play();
    $('vinyl').className = 'vinyl spinning';
    $('btn-play').textContent = '⏹ Stop';
  } else {
    audio.pause();
    $('vinyl').className = 'vinyl stopped';
    $('btn-play').textContent = '▶ Play Preview';
  }
});

$('audio-player').addEventListener('timeupdate', () => {
  const audio = $('audio-player');
  if (audio.duration) {
    $('progress-bar').style.width = `${(audio.currentTime / audio.duration) * 100}%`;
  }
});

$('audio-player').addEventListener('ended', () => {
  $('vinyl').className = 'vinyl stopped';
  $('btn-play').textContent = '▶ Play Preview';
});

// ─── Guess Logic ──────────────────────────────────────────────────────────────
function normalise(str) {
  return str.trim().toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function checkGuess() {
  if (state.answered) return;
  const song = state.songs[state.currentIndex];
  const input = normalise($('guess-input').value);
  if (!input) return;

  const allKeywords = [...song.keywords, ...(song.keywordsFr || [])];
  const isCorrect = allKeywords.some(kw => input.includes(normalise(kw)));

  if (isCorrect) {
    state.score++;
    state.themeScore++;
    $('score').textContent = state.score;
    setFeedback('✅ Correct! +1 point', 'correct');
  } else {
    setFeedback('❌ Wrong answer, try again!', 'wrong');
    return;
  }

  revealAnswer();
}

function setFeedback(msg, type) {
  $('feedback').textContent = msg;
  $('feedback').className = type === 'correct' ? 'feedback-correct' : 'feedback-wrong';
}

function revealAnswer() {
  state.answered = true;
  const song = state.songs[state.currentIndex];

  $('answer-song').textContent    = song.title;
  $('answer-artist').textContent  = song.artist;
  $('answer-keyword').textContent = song.keywords.join(' / ');
  $('revealed-answer').classList.remove('hidden');

  $('guess-input').disabled = true;
  $('btn-guess').disabled   = true;
  $('btn-skip').classList.add('hidden');
  $('btn-next').classList.remove('hidden');

  resetPlayer();
}

// ─── Navigation ───────────────────────────────────────────────────────────────
function advanceSong(showReveal = true) {
  if (showReveal && !state.answered) {
    setFeedback('Showed !', 'wrong');
    revealAnswer();
    return; // wait for "Next" click
  }

  state.currentIndex++;
  if (state.currentIndex >= state.songs.length) {
    endGame();
  } else {
    loadSong(state.currentIndex);
  }
}

$('btn-skip').addEventListener('click', () => advanceSong(true));

$('btn-next').addEventListener('click', () => {
  state.currentIndex++;
  if (state.currentIndex >= state.songs.length) {
    endGame();
  } else {
    loadSong(state.currentIndex);
  }
});

$('btn-guess').addEventListener('click', checkGuess);
$('guess-input').addEventListener('keydown', e => { if (e.key === 'Enter') checkGuess(); });

// ─── End Game ─────────────────────────────────────────────────────────────────
function endGame() {
  resetPlayer();
  state.playedThemes.add(state.theme.id);
  $('theme-score').textContent = `${state.themeScore} / ${state.songs.length}`;
  $('theme-score-name').textContent = `${state.theme.icon} ${state.theme.title}`;
  $('final-score').textContent = state.score;
  showScreen('end');
}

$('btn-restart').addEventListener('click', () => {
  state.themeScore = 0;
  renderThemeList();
  showScreen('themeSelect');
});

// ─── Init ─────────────────────────────────────────────────────────────────────
renderThemeList();
showScreen('themeSelect');

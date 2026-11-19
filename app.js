const questionSets = {
  beginner: [
    { tag: 'VOCABULARY', prompt: 'The library is a quiet place to _____ books.', choices: ['borrow', 'invite', 'repair', 'prepare'], answer: 0, explain: 'borrow books 是「借書」；library 是圖書館。' },
    { tag: 'GRAMMAR', prompt: 'Mia _____ to school by bus every morning.', choices: ['go', 'goes', 'going', 'gone'], answer: 1, explain: '主詞 Mia 是第三人稱單數，現在簡單式動詞加 -s。' },
    { tag: 'VOCABULARY', prompt: 'Please turn off the lights before you _____ the room.', choices: ['leave', 'reach', 'follow', 'choose'], answer: 0, explain: 'leave the room 是「離開房間」。' },
    { tag: 'GRAMMAR', prompt: 'We _____ dinner when the phone rang.', choices: ['have', 'had', 'were having', 'are having'], answer: 2, explain: '電話響起時，吃晚餐的動作正在進行，使用過去進行式。' }
  ],
  intermediate: [
    { tag: 'VOCABULARY', prompt: 'The new policy aims to _____ traffic in the city center.', choices: ['reduce', 'replace', 'repeat', 'remind'], answer: 0, explain: 'reduce traffic 表示「減少交通（車流）」。' },
    { tag: 'GRAMMAR', prompt: '_____ the heavy rain, the outdoor concert continued as planned.', choices: ['Although', 'Despite', 'Because', 'Unless'], answer: 1, explain: 'despite 後接名詞片語；although 後須接子句。' },
    { tag: 'VOCABULARY', prompt: 'The report provides _____ evidence that sleep affects memory.', choices: ['convince', 'convinced', 'convincing', 'convincingly'], answer: 2, explain: 'convincing 是形容詞，修飾名詞 evidence。' },
    { tag: 'READING', prompt: 'A community garden gives neighbors a place to grow vegetables together. What is one likely benefit?', choices: ['Stronger community ties', 'Fewer public parks', 'Higher food prices', 'Longer school days'], answer: 0, explain: '鄰居共同參與，最可能增進社區連結。' }
  ],
  advanced: [
    { tag: 'VOCABULARY', prompt: 'The scientist urged caution, noting that the findings were still _____ and needed replication.', choices: ['preliminary', 'inevitable', 'conventional', 'substantial'], answer: 0, explain: 'preliminary 表示「初步的」，符合仍需重複驗證的語境。' },
    { tag: 'GRAMMAR', prompt: 'Had the team examined the data more closely, it _____ the error before publication.', choices: ['would detect', 'would have detected', 'will detect', 'has detected'], answer: 1, explain: 'Had + 主詞 + 過去分詞是省略 if 的第三類條件句，主句用 would have + 過去分詞。' },
    { tag: 'VOCABULARY', prompt: 'Rather than dismiss the criticism, the author _____ it by revising the study design.', choices: ['addressed', 'assumed', 'derived', 'withdrew'], answer: 0, explain: 'address criticism 表示「正面處理批評」。' },
    { tag: 'READING', prompt: 'A city pilot replaced some street parking with trees and wider sidewalks. Early data showed cooler summer temperatures, while nearby shops reported mixed sales. Which conclusion is best supported?', choices: ['The pilot improved every business.', 'The pilot reduced heat, but its economic effect is unclear.', 'Residents no longer need cars.', 'The city should remove all sidewalks.'], answer: 1, explain: '資料支持降溫效果；店家營收回報不一，因此經濟影響尚不明確。' }
  ]
};
const levelNames = { beginner: '初階', intermediate: '中階', advanced: '進階' };
const defaultState = { level: 'beginner', xp: 0, correct: 0, answered: {} };
let state;
try { state = { ...defaultState, ...JSON.parse(localStorage.getItem('examEnglishProgress') || '{}') }; } catch { state = { ...defaultState }; }
let questionIndex = 0;
let locked = false;
const $ = (id) => document.getElementById(id);

function renderStats() {
  const level = Math.floor(state.xp / 100) + 1;
  const current = state.xp % 100;
  $('level-name').textContent = `${levelNames[state.level]}・Lv. ${level}`;
  $('level-hint').textContent = level === 1 ? '從基礎開始累積' : `已升級 ${level - 1} 次，繼續保持`;
  $('xp-current').textContent = current;
  $('xp-next').textContent = 100;
  $('xp-fill').style.width = `${current}%`;
  $('correct-count').textContent = state.correct;
  $('day-count').textContent = String(Math.min(99, Math.floor(state.correct / 3) + 1)).padStart(2, '0');
}
function save() {
  localStorage.setItem('examEnglishProgress', JSON.stringify(state));
  renderStats();
}
function renderQuestion() {
  const set = questionSets[state.level];
  const q = set[questionIndex % set.length];
  locked = false;
  $('question-tag').textContent = `${q.tag} · ${levelNames[state.level]}`;
  $('question-count').textContent = `TODAY'S QUESTION ${String(questionIndex + 1).padStart(2, '0')}`;
  $('question-text').textContent = q.prompt;
  $('feedback').hidden = true;
  $('feedback').className = 'feedback';
  $('next-button').hidden = true;
  $('answers').replaceChildren(...q.choices.map((choice, i) => {
    const button = document.createElement('button');
    button.className = 'answer';
    button.textContent = `${String.fromCharCode(65 + i)}.  ${choice}`;
    button.addEventListener('click', () => answer(i, q, button));
    return button;
  }));
}
function answer(selected, q, button) {
  if (locked) return;
  locked = true;
  const buttons = [...$('answers').querySelectorAll('.answer')];
  buttons.forEach((b, i) => { b.disabled = true; if (i === q.answer) b.classList.add('correct'); });
  const feedback = $('feedback');
  feedback.hidden = false;
  if (selected === q.answer) {
    const key = `${state.level}:${questionIndex % questionSets[state.level].length}`;
    if (!state.answered[key]) { state.xp += 20; state.correct += 1; state.answered[key] = true; }
    feedback.textContent = `答對了！${q.explain}${state.answered[key] && state.xp % 100 === 0 ? ' 升級經驗值已滿！' : ''}`;
    save();
  } else {
    button.classList.add('incorrect');
    feedback.classList.add('wrong');
    feedback.textContent = `再看一次：${q.explain}`;
  }
  $('next-button').hidden = false;
}
document.querySelectorAll('.level-option').forEach((button) => button.addEventListener('click', () => {
  state.level = button.dataset.level;
  questionIndex = 0;
  document.querySelectorAll('.level-option').forEach((item) => item.classList.toggle('active', item === button));
  save(); renderQuestion();
}));
$('next-button').addEventListener('click', () => { questionIndex += 1; renderQuestion(); });
$('reset-button').addEventListener('click', () => {
  if (!window.confirm('確定要清除這台裝置儲存的練習進度嗎？')) return;
  state = { ...defaultState, answered: {} }; questionIndex = 0;
  document.querySelectorAll('.level-option').forEach((item) => item.classList.toggle('active', item.dataset.level === state.level));
  save(); renderQuestion();
});
renderStats();
document.querySelectorAll('.level-option').forEach((item) => item.classList.toggle('active', item.dataset.level === state.level));
renderQuestion();

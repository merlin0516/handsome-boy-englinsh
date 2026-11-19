const questionSets = {
  beginner: [
    { tag: 'VOCABULARY', prompt: 'The library is a quiet place to _____ books.', choices: ['borrow', 'invite', 'repair', 'prepare'], answer: 0, explain: 'borrow books 是「借書」；library 是圖書館。' },
    { tag: 'GRAMMAR', prompt: 'Mia _____ to school by bus every morning.', choices: ['go', 'goes', 'going', 'gone'], answer: 1, explain: '主詞 Mia 是第三人稱單數，現在簡單式動詞加 -s。' },
    { tag: 'VOCABULARY', prompt: 'Please turn off the lights before you _____ the room.', choices: ['leave', 'reach', 'follow', 'choose'], answer: 0, explain: 'leave the room 是「離開房間」。' },
    { tag: 'GRAMMAR', prompt: 'We _____ dinner when the phone rang.', choices: ['have', 'had', 'were having', 'are having'], answer: 2, explain: '電話響起時，吃晚餐的動作正在進行，使用過去進行式。' },
    { tag: 'CLOZE', prompt: 'Ben was tired, _____ he finished his homework before bed.', choices: ['but', 'or', 'so', 'because'], answer: 0, explain: '前後語意轉折：Ben 很累，但仍完成作業，因此用 but。' },
    { tag: 'VOCABULARY', prompt: 'The weather is cold today. You should wear a _____ coat.', choices: ['warm', 'weak', 'wide', 'wild'], answer: 0, explain: '天氣冷時適合穿暖和的外套；warm 是「暖和的」。' },
    { tag: 'READING', prompt: 'Lily usually walks her dog after dinner. Today it is raining, so she is playing with him indoors. Where are Lily and her dog today?', choices: ['At a park', 'Inside the house', 'At school', 'On a bus'], answer: 1, explain: '文章指出今天下雨，所以 Lily 在室內陪狗玩。' },
    { tag: 'GRAMMAR', prompt: 'There _____ two apples and a banana on the table.', choices: ['is', 'are', 'was', 'be'], answer: 1, explain: 'there be 句型依後面的名詞一致；two apples 是複數，使用 are。' }
  ],
  intermediate: [
    { tag: 'VOCABULARY', prompt: 'The new policy aims to _____ traffic in the city center.', choices: ['reduce', 'replace', 'repeat', 'remind'], answer: 0, explain: 'reduce traffic 表示「減少交通（車流）」。' },
    { tag: 'GRAMMAR', prompt: '_____ the heavy rain, the outdoor concert continued as planned.', choices: ['Although', 'Despite', 'Because', 'Unless'], answer: 1, explain: 'despite 後接名詞片語；although 後須接子句。' },
    { tag: 'VOCABULARY', prompt: 'The report provides _____ evidence that sleep affects memory.', choices: ['convince', 'convinced', 'convincing', 'convincingly'], answer: 2, explain: 'convincing 是形容詞，修飾名詞 evidence。' },
    { tag: 'READING', prompt: 'A community garden gives neighbors a place to grow vegetables together. What is one likely benefit?', choices: ['Stronger community ties', 'Fewer public parks', 'Higher food prices', 'Longer school days'], answer: 0, explain: '鄰居共同參與，最可能增進社區連結。' },
    { tag: 'CLOZE', prompt: 'The museum is free on Sundays. _____, it can become crowded in the afternoon.', choices: ['However', 'Therefore', 'For example', 'Instead'], answer: 0, explain: '免費入場和下午可能擁擠形成轉折，用 However。' },
    { tag: 'GRAMMAR', prompt: 'By the time we arrived, the movie _____.', choices: ['starts', 'has started', 'had started', 'will start'], answer: 2, explain: '電影開始發生在我們抵達之前，使用過去完成式表示較早的過去事件。' },
    { tag: 'VOCABULARY', prompt: 'The instructions were _____, so everyone knew what to do.', choices: ['clear', 'rare', 'narrow', 'private'], answer: 0, explain: '大家都知道該做什麼，表示說明很清楚；clear 是「清楚的」。' },
    { tag: 'READING', prompt: 'A school moved its start time 30 minutes later. After one term, students reported sleeping longer, but test scores were unchanged. What can be concluded?', choices: ['Students reported sleeping longer, while scores stayed similar.', 'All students received higher scores.', 'The school day became shorter.', 'Students stopped taking tests.'], answer: 0, explain: '學生回報睡得較久，測驗成績則沒有變化；資料未證明兩者有因果關係。' }
  ],
  advanced: [
    { tag: 'VOCABULARY', prompt: 'The scientist urged caution, noting that the findings were still _____ and needed replication.', choices: ['preliminary', 'inevitable', 'conventional', 'substantial'], answer: 0, explain: 'preliminary 表示「初步的」，符合仍需重複驗證的語境。' },
    { tag: 'GRAMMAR', prompt: 'Had the team examined the data more closely, it _____ the error before publication.', choices: ['would detect', 'would have detected', 'will detect', 'has detected'], answer: 1, explain: 'Had + 主詞 + 過去分詞是省略 if 的第三類條件句，主句用 would have + 過去分詞。' },
    { tag: 'VOCABULARY', prompt: 'Rather than dismiss the criticism, the author _____ it by revising the study design.', choices: ['addressed', 'assumed', 'derived', 'withdrew'], answer: 0, explain: 'address criticism 表示「正面處理批評」。' },
    { tag: 'READING', prompt: 'A city pilot replaced some street parking with trees and wider sidewalks. Early data showed cooler summer temperatures, while nearby shops reported mixed sales. Which conclusion is best supported?', choices: ['The pilot improved every business.', 'The pilot reduced heat, but its economic effect is unclear.', 'Residents no longer need cars.', 'The city should remove all sidewalks.'], answer: 1, explain: '資料支持降溫效果；店家營收回報不一，因此經濟影響尚不明確。' },
    { tag: 'CLOZE', prompt: 'The app was designed to make transit information easier to access. _____, user interviews revealed that some older passengers still preferred printed maps.', choices: ['Nevertheless', 'Similarly', 'Consequently', 'In addition'], answer: 0, explain: '數位資訊更易取得與部分長者仍偏好紙本地圖形成讓步轉折，用 Nevertheless。' },
    { tag: 'GRAMMAR', prompt: 'The proposal, _____ several revisions, was finally approved by the committee.', choices: ['undergoing', 'having undergone', 'to undergo', 'was undergoing'], answer: 1, explain: '提案在通過前已完成多次修訂；having + 過去分詞表示先於主句的完成動作。' },
    { tag: 'VOCABULARY', prompt: 'The initial results are promising, but the researchers caution against drawing _____ conclusions from such a small sample.', choices: ['definitive', 'reluctant', 'temporary', 'flexible'], answer: 0, explain: '樣本太小時不宜下定論；definitive conclusions 是「定論」。' },
    { tag: 'READING', prompt: 'A library extended evening hours during exam month. Visits rose, especially among students, but staff overtime costs also increased. Which follow-up would best assess whether the change should continue?', choices: ['Compare learning-space use and costs over several terms.', 'Ask only the busiest student to decide.', 'Close the library immediately.', 'Count books without tracking visits.'], answer: 0, explain: '跨多個學期比較使用情形與成本，能更完整評估效益與資源需求。' }
  ]
};
const levelNames = { beginner: '初階', intermediate: '中階', advanced: '進階' };
const writingPrompts = {
  beginner: { label: '初階引導', text: 'Write 3–4 sentences about a place you like. Say where it is, what you do there, and why you like it.' },
  intermediate: { label: '中階練習', text: 'Some students prefer studying alone, while others learn better in groups. Write a short paragraph explaining which you prefer and give two reasons.' },
  advanced: { label: '進階挑戰', text: 'Should cities invest more in public transportation even when the projects are expensive? State your position, support it with reasons or examples, and briefly address another point of view.' }
};
const defaultState = { level: 'beginner', xp: 0, correct: 0, answered: {}, attempts: {}, missed: {}, drafts: {}, writingChecks: {} };
let state;
try { state = { ...defaultState, ...JSON.parse(localStorage.getItem('examEnglishProgress') || '{}') }; } catch { state = { ...defaultState }; }
state.answered ||= {};
state.attempts ||= {};
state.missed ||= {};
state.drafts ||= {};
state.writingChecks ||= {};
let questionIndex = 0;
let locked = false;
let reviewQueue = null;
const $ = (id) => document.getElementById(id);

function renderStats() {
  const level = Math.floor(state.xp / 100) + 1;
  const current = state.xp % 100;
  $('level-name').textContent = `${levelNames[state.level]}・Lv. ${level}`;
  $('level-hint').textContent = level === 1 ? '從基礎開始累積' : `已升級 ${level - 1} 次，繼續保持`;
  $('xp-current').textContent = current;
  $('xp-next').textContent = 100;
  $('xp-fill').style.width = `${current}%`;
  $('correct-count').textContent = Object.keys(state.answered).length;
  $('attempt-count').textContent = Object.values(state.attempts).reduce((sum, count) => sum + count, 0);
  $('level-count').textContent = String(Math.min(99, level)).padStart(2, '0');
  const missedCount = Object.keys(state.missed).filter((key) => key.startsWith(`${state.level}:`)).length;
  $('review-count').textContent = missedCount;
  $('review-button').hidden = missedCount === 0 || reviewQueue !== null;
}
function save() {
  localStorage.setItem('examEnglishProgress', JSON.stringify(state));
  renderStats();
}
function renderQuestion() {
  const set = questionSets[state.level];
  const currentIndex = reviewQueue ? reviewQueue[questionIndex] : questionIndex % set.length;
  const q = set[currentIndex];
  locked = false;
  $('question-tag').textContent = `${q.tag} · ${levelNames[state.level]}`;
  $('question-count').textContent = reviewQueue ? `錯題複習 ${questionIndex + 1} / ${reviewQueue.length}` : `TODAY'S QUESTION ${String(questionIndex + 1).padStart(2, '0')}`;
  $('question-text').textContent = q.prompt;
  $('feedback').hidden = true;
  $('feedback').className = 'feedback';
  $('next-button').hidden = true;
  renderStats();
  $('answers').replaceChildren(...q.choices.map((choice, i) => {
    const button = document.createElement('button');
    button.className = 'answer';
    button.textContent = `${String.fromCharCode(65 + i)}.  ${choice}`;
    button.addEventListener('click', () => answer(i, q, button));
    return button;
  }));
}
function renderWriting() {
  const prompt = writingPrompts[state.level];
  $('writing-level').textContent = prompt.label;
  $('writing-prompt').textContent = prompt.text;
  $('writing-response').value = state.drafts[state.level] || '';
  updateWordCount();
  document.querySelectorAll('[data-check]').forEach((input) => {
    input.checked = Boolean(state.writingChecks[`${state.level}:${input.dataset.check}`]);
  });
}
function updateWordCount() {
  const words = $('writing-response').value.match(/[A-Za-z]+(?:['’][A-Za-z]+)*/g) || [];
  $('word-count').textContent = `${words.length} ${words.length === 1 ? 'word' : 'words'}`;
}
function answer(selected, q, button) {
  if (locked) return;
  locked = true;
  const buttons = [...$('answers').querySelectorAll('.answer')];
  buttons.forEach((b, i) => { b.disabled = true; if (i === q.answer) b.classList.add('correct'); });
  const feedback = $('feedback');
  feedback.hidden = false;
  const key = `${state.level}:${reviewQueue ? reviewQueue[questionIndex] : questionIndex % questionSets[state.level].length}`;
  state.attempts[key] = (state.attempts[key] || 0) + 1;
  if (selected === q.answer) {
    const earnedXp = !state.answered[key];
    if (earnedXp) { state.xp += 20; state.correct += 1; state.answered[key] = true; }
    delete state.missed[key];
    feedback.textContent = `答對了！${q.explain}${earnedXp && state.xp % 100 === 0 ? ' 升級經驗值已滿！' : ''}`;
    save();
  } else {
    button.classList.add('incorrect');
    state.missed[key] = true;
    feedback.classList.add('wrong');
    feedback.textContent = `再看一次：${q.explain}`;
    save();
  }
  $('next-button').hidden = false;
}
document.querySelectorAll('.level-option').forEach((button) => button.addEventListener('click', () => {
  state.level = button.dataset.level;
  questionIndex = 0;
  reviewQueue = null;
  document.querySelectorAll('.level-option').forEach((item) => item.classList.toggle('active', item === button));
  save(); renderQuestion(); renderWriting();
}));
$('writing-response').addEventListener('input', () => {
  state.drafts[state.level] = $('writing-response').value;
  updateWordCount();
  save();
});
document.querySelectorAll('[data-check]').forEach((input) => input.addEventListener('change', () => {
  const key = `${state.level}:${input.dataset.check}`;
  if (input.checked) state.writingChecks[key] = true;
  else delete state.writingChecks[key];
  save();
}));
$('next-button').addEventListener('click', () => {
  questionIndex += 1;
  if (reviewQueue && questionIndex >= reviewQueue.length) { reviewQueue = null; questionIndex = 0; }
  renderQuestion();
});
$('review-button').addEventListener('click', () => {
  reviewQueue = Object.keys(state.missed).filter((key) => key.startsWith(`${state.level}:`)).map((key) => Number(key.split(':')[1]));
  questionIndex = 0;
  if (reviewQueue.length) renderQuestion();
});
$('reset-button').addEventListener('click', () => {
  if (!window.confirm('確定要清除這台裝置儲存的練習進度嗎？')) return;
  state = { ...defaultState, answered: {}, attempts: {}, missed: {}, drafts: {}, writingChecks: {} }; questionIndex = 0; reviewQueue = null;
  document.querySelectorAll('.level-option').forEach((item) => item.classList.toggle('active', item.dataset.level === state.level));
  save(); renderQuestion(); renderWriting();
});
renderStats();
document.querySelectorAll('.level-option').forEach((item) => item.classList.toggle('active', item.dataset.level === state.level));
renderQuestion();
renderWriting();

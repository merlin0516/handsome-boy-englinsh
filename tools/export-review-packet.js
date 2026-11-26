const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
const end = source.indexOf('\nconst levelNames');
if (end < 0) throw new Error('Could not locate questionSets in app.js');

const sandbox = {};
vm.runInNewContext(`${source.slice(0, end)}\nglobalThis.questionSets = questionSets;`, sandbox, { timeout: 1000 });
const questionSets = sandbox.questionSets;
const levelNames = { beginner: '初階', intermediate: '中階', advanced: '進階' };
const skillNames = { VOCABULARY: '字彙', GRAMMAR: '文法', CLOZE: '克漏字', READING: '閱讀理解' };

function csvCell(value) {
  return `"${String(value ?? '').replaceAll('"', '""')}"`;
}

function writeCsv(fileName, rows) {
  const content = `\uFEFF${rows.map((row) => row.map(csvCell).join(',')).join('\r\n')}\r\n`;
  fs.writeFileSync(path.join(__dirname, '..', 'knowledge', fileName), content, 'utf8');
}

const reviewRows = [[
  'question_id', 'level', 'skill', 'question', 'option_a', 'option_b', 'option_c', 'option_d',
  'reviewer_answer', 'one_best_answer (yes/no/uncertain)', 'level_fit (yes/no/uncertain)',
  'wording_review (ok/revise)', 'evidence_review (sufficient/unclear/not_applicable)', 'comments'
]];
const keyRows = [['question_id', 'level', 'skill', 'suggested_answer', 'answer_text', 'explanation']];
let total = 0;
const questionCounts = {};

for (const [level, questions] of Object.entries(questionSets)) {
  if (!Object.hasOwn(levelNames, level) || !questions.length) {
    throw new Error(`Unexpected question set: ${level} (${questions.length} items)`);
  }
  questionCounts[level] = questions.length;
  questions.forEach((question, index) => {
    if (!skillNames[question.tag] || question.choices.length !== 4 || question.answer < 0 || question.answer >= 4) {
      throw new Error(`Invalid question data: ${level}:${index + 1}`);
    }
    const questionId = `${level}-${String(index + 1).padStart(2, '0')}`;
    const levelName = levelNames[level];
    const skillName = skillNames[question.tag];
    reviewRows.push([
      questionId, levelName, skillName, question.prompt, ...question.choices,
      '', '', '', '', '', ''
    ]);
    keyRows.push([
      questionId, levelName, skillName, String.fromCharCode(65 + question.answer),
      question.choices[question.answer], question.explain
    ]);
    total += 1;
  });
}

if (!total) throw new Error('Question bank is empty');
writeCsv('reviewer-questions.csv', reviewRows);
writeCsv('reviewer-answer-key.csv', keyRows);
const levelSummary = Object.entries(questionCounts).map(([level, count]) => `${levelNames[level]} ${count} 題`).join('、');
process.stdout.write(`Exported answer-hidden review sheet and separate answer key for ${total} questions (${levelSummary}).\n`);

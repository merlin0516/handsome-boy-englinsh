const readingPassages = {
  beginner: 'Maple Community Center lends board games to neighborhood families on Saturdays. Anyone who lives nearby can get a free borrowing card at the front desk. Families may borrow up to two games and must return them by 4 p.m. that day. Volunteers counted 32 borrowed games on the first Saturday in May and 45 on the last Saturday. They did not count how many families visited the center or ask why more games were borrowed.',
  intermediate: 'Hillview High added labeled bins for bottles and paper in two hallways after students complained about waste. For six weeks, student volunteers checked the bins every Friday. The share of items placed in the correct bin rose from 54% in the first week to 71% in the sixth. The school did not weigh the collected waste or compare hallways without labels. In a survey, 58% of respondents found the labels easy to understand, but only 40% of students answered.',
  advanced: 'On two bus lines, a regional transit office tested a mobile app that sent alerts about delays and transfer changes for three weeks. Among riders who chose to activate alerts, missed transfers were 12% lower than those same riders reported in the previous month. During the trial, the office also added platform signs, and weather was milder than in the previous month. The report did not include riders who ignored the alerts or those who did not own a smartphone. A follow-up survey received responses from 45% of app users; most respondents said the messages were timely. The office plans to test the alerts on more lines before deciding whether to expand the service.'
};

const questionSets = {
  beginner: [
    { tag: 'VOCABULARY', prompt: 'The library is a quiet place to _____ books.', choices: ['borrow', 'invite', 'repair', 'prepare'], answer: 0, explain: 'borrow books 是「借書」；library 是圖書館。' },
    { tag: 'GRAMMAR', prompt: 'Mia _____ to school by bus every morning.', choices: ['go', 'goes', 'going', 'gone'], answer: 1, explain: '主詞 Mia 是第三人稱單數，現在簡單式動詞加 -s。' },
    { tag: 'VOCABULARY', prompt: 'Please turn off the lights before you _____ the room.', choices: ['leave', 'reach', 'follow', 'choose'], answer: 0, explain: 'leave the room 是「離開房間」。' },
    { tag: 'GRAMMAR', prompt: 'We _____ dinner when the phone rang.', choices: ['have', 'had', 'were having', 'are having'], answer: 2, explain: '電話響起時，吃晚餐的動作正在進行，使用過去進行式。' },
    { tag: 'CLOZE', prompt: 'Ben was tired, _____ he finished his homework before bed.', choices: ['but', 'or', 'so', 'because'], answer: 0, explain: '前後語意轉折：Ben 很累，但仍完成作業，因此用 but。' },
    { tag: 'VOCABULARY', prompt: 'The weather is cold today. You should wear a _____ coat.', choices: ['warm', 'weak', 'wide', 'wild'], answer: 0, explain: '天氣冷時適合穿暖和的外套；warm 是「暖和的」。' },
    { tag: 'READING', prompt: 'Lily usually walks her dog after dinner. Today it is raining, so she is playing with him indoors. Where are Lily and her dog today?', choices: ['At a park', 'Inside the house', 'At school', 'On a bus'], answer: 1, explain: '文章指出今天下雨，所以 Lily 在室內陪狗玩。' },
    { tag: 'GRAMMAR', prompt: 'There _____ two apples and a banana on the table.', choices: ['is', 'are', 'was', 'be'], answer: 1, explain: 'there be 句型依後面的名詞一致；two apples 是複數，使用 are。' },
    { tag: 'CLOZE', prompt: 'Emma made a card for her mother. She drew a flower on the front. _____, she wrote a kind message inside.', choices: ['Finally', 'Suddenly', 'Instead', 'Although'], answer: 0, explain: '寫訊息是製作卡片的最後一步；Finally 表示「最後」。' },
    { tag: 'GRAMMAR', prompt: 'If it _____ tomorrow, we will play soccer outside.', choices: ['does not rain', 'did not rain', 'will not rain', 'not raining'], answer: 0, explain: '第一類條件句的 if 子句用現在簡單式表達未來可能；主句用 will。' },
    { tag: 'VOCABULARY', prompt: 'The museum guide spoke slowly so visitors could _____ the story.', choices: ['understand', 'forget', 'borrow', 'invite'], answer: 0, explain: '導覽員放慢速度是為了讓參觀者理解故事；understand 是「理解」。' },
    { tag: 'READING', prompt: 'A sign at the pool says, “Please shower before entering the water. Children under 12 must stay with an adult.” What must a 10-year-old visitor do?', choices: ['Bring an adult to the pool.', 'Swim before taking a shower.', 'Leave the pool alone.', 'Pay for an extra lesson.'], answer: 0, explain: '標示明確要求 12 歲以下兒童要和成人待在一起。' },
    { tag: 'CLOZE', prompt: 'Maya forgot her umbrella, _____ her friend shared one with her on the way home.', choices: ['unless', 'so', 'although', 'instead'], answer: 1, explain: '朋友分享雨傘是 Maya 忘記帶傘後的結果，因此用 so 表示「所以」。' },
    { tag: 'READING', prompt: 'The class garden is open at lunch. Students may water the plants, but they must return the tools to the box before class. What should a student do after watering?', choices: ['Take the tools home.', 'Close the garden for the day.', 'Put the tools back in the box.', 'Wait until after school to water.'], answer: 2, explain: '規定明確說明午餐時間可澆水，之後要在上課前把工具放回箱子。' },
    { tag: 'VOCABULARY', prompt: 'The glass is full, so carry it _____ to avoid spilling the water.', choices: ['carelessly', 'rarely', 'loudly', 'carefully'], answer: 3, explain: '為了避免水灑出來，應該小心地拿；carefully 是「小心地」。' },
    { tag: 'GRAMMAR', prompt: 'My brother and I _____ the same bus every morning.', choices: ['take', 'takes', 'taking', 'took'], answer: 0, explain: '主詞 My brother and I 是複數，描述每天的習慣用現在簡單式 take。' },
    { tag: 'READING', prompt: 'A notice says the science room closes at 4 p.m. this Friday. Students may return borrowed goggles to the office until 5 p.m. What can a student do after the science room closes?', choices: ['Return the goggles to the office before 5 p.m.', 'Use the science room until 5 p.m.', 'Keep the goggles until next month.', 'Return the goggles to the library.'], answer: 0, explain: '科學教室 4 點關閉，但借用的護目鏡可在 5 點前交回辦公室。' },
    { tag: 'READING', prompt: 'During road work, Route 6 buses going toward the hospital leave from Elm Street. Buses going toward downtown still leave from Main Street. Where should a hospital-bound passenger wait?', choices: ['At Main Street.', 'At Elm Street.', 'At the hospital entrance.', 'At the downtown station.'], answer: 1, explain: '公告指出施工期間往醫院方向的 Route 6 改在 Elm Street 發車。' },
    { tag: 'READING', prompt: 'Nora borrowed a library book on May 3. Her receipt says to return it by May 17. She may renew it online before the due date. What should Nora do by May 17?', choices: ['Borrow the same book again at school.', 'Wait for the library to contact her.', 'Return the book or renew it online.', 'Renew it only after the due date.'], answer: 2, explain: '收據要求 5 月 17 日前歸還，也允許在到期前線上續借。' },
    { tag: 'GRAMMAR', prompt: 'The children _____ in the yard now.', choices: ['play', 'plays', 'played', 'are playing'], answer: 3, explain: 'now 表示此刻正在進行的動作，使用現在進行式 are playing。' },
    { tag: 'READING', prompt: 'What may a neighborhood family do at Maple Community Center?', choices: ['Get a free borrowing card at the front desk.', 'Borrow games for a whole month.', 'Borrow more than two games at once.', 'Return games to the center on weekdays only.'], answer: 0, explain: '住在附近的家庭可在服務台免費辦借用卡；每次最多借兩款，且當天需歸還。', passage: readingPassages.beginner },
    { tag: 'READING', prompt: 'What do the volunteers’ counts show?', choices: ['More families visited the center on the last Saturday.', 'The number of borrowed games rose from 32 to 45.', 'Every family borrowed two games.', 'The center extended its Saturday hours.'], answer: 1, explain: '紀錄顯示首個五月週六借出 32 款、最後一個週六借出 45 款；沒有家庭人數或開放時間資料。', passage: readingPassages.beginner }
  ],
  intermediate: [
    { tag: 'VOCABULARY', prompt: 'The new policy aims to _____ traffic in the city center.', choices: ['reduce', 'replace', 'repeat', 'remind'], answer: 0, explain: 'reduce traffic 表示「減少交通（車流）」。' },
    { tag: 'GRAMMAR', prompt: '_____ the heavy rain, the outdoor concert continued as planned.', choices: ['Although', 'Despite', 'Because', 'Unless'], answer: 1, explain: 'despite 後接名詞片語；although 後須接子句。' },
    { tag: 'VOCABULARY', prompt: 'The report provides _____ evidence that sleep affects memory.', choices: ['convince', 'convinced', 'convincing', 'convincingly'], answer: 2, explain: 'convincing 是形容詞，修飾名詞 evidence。' },
    { tag: 'READING', prompt: 'A community garden gives neighbors a place to grow vegetables together. What is one likely benefit?', choices: ['Stronger community ties', 'Fewer public parks', 'Higher food prices', 'Longer school days'], answer: 0, explain: '鄰居共同參與，最可能增進社區連結。' },
    { tag: 'CLOZE', prompt: 'The museum is free on Sundays. _____, it can become crowded in the afternoon.', choices: ['However', 'Therefore', 'For example', 'Instead'], answer: 0, explain: '免費入場和下午可能擁擠形成轉折，用 However。' },
    { tag: 'GRAMMAR', prompt: 'By the time we arrived, the movie _____.', choices: ['starts', 'has started', 'had started', 'will start'], answer: 2, explain: '電影開始發生在我們抵達之前，使用過去完成式表示較早的過去事件。' },
    { tag: 'VOCABULARY', prompt: 'The instructions were _____, so everyone knew what to do.', choices: ['clear', 'rare', 'narrow', 'private'], answer: 0, explain: '大家都知道該做什麼，表示說明很清楚；clear 是「清楚的」。' },
    { tag: 'READING', prompt: 'A school moved its start time 30 minutes later. After one term, students reported sleeping longer, but test scores were unchanged. What can be concluded?', choices: ['Students reported sleeping longer, while scores stayed similar.', 'All students received higher scores.', 'The school day became shorter.', 'Students stopped taking tests.'], answer: 0, explain: '學生回報睡得較久，測驗成績則沒有變化；資料未證明兩者有因果關係。' },
    { tag: 'CLOZE', prompt: 'A neighborhood bookstore began hosting free reading groups. _____, more residents started visiting the shop, and several asked for a second monthly session.', choices: ['As a result', 'On the contrary', 'For instance', 'At first'], answer: 0, explain: '讀書會開始後，來店居民變多並要求加開場次，語意呈現結果，因此用 As a result。' },
    { tag: 'GRAMMAR', prompt: 'The students, _____ their projects early, had time to check their work.', choices: ['finish', 'finished', 'having finished', 'were finishing'], answer: 2, explain: '學生先完成專題，之後才有時間檢查；having finished 表示先完成的動作。' },
    { tag: 'VOCABULARY', prompt: 'The instructions were brief but _____; no important step was missing.', choices: ['comprehensive', 'temporary', 'distant', 'ordinary'], answer: 0, explain: '沒有漏掉重要步驟，表示說明雖簡短但完整；comprehensive 是「全面的」。' },
    { tag: 'READING', prompt: 'A town added bike lanes on two busy roads. In a survey, 60 percent of respondents said they felt safer cycling there, but the town did not count bicycle trips before the change. Which claim is best supported?', choices: ['Most surveyed respondents said they felt safer.', 'Cycling increased by exactly 60 percent.', 'Car crashes fell on both roads.', 'Every resident supports the lanes.'], answer: 0, explain: '調查支持多數受訪者表示感覺較安全；沒有前後車流數據，不能推論騎乘量或事故變化。' },
    { tag: 'VOCABULARY', prompt: 'The manager asked staff to _____ the cause of repeated delays before proposing a solution.', choices: ['celebrate', 'scatter', 'identify', 'decorate'], answer: 2, explain: '提出解決辦法前，應先找出延誤原因；identify 是「辨認、找出」。' },
    { tag: 'GRAMMAR', prompt: 'Although the new route is longer, it is _____ than the old road during rush hour.', choices: ['least crowded', 'less crowded', 'crowded', 'more crowded'], answer: 1, explain: 'than 表示比較級；less crowded 表示「比較不擁擠」。' },
    { tag: 'CLOZE', prompt: 'The survey included only a small sample; _____, its results should be treated as an early signal rather than a final answer.', choices: ['meanwhile', 'similarly', 'otherwise', 'therefore'], answer: 3, explain: '樣本數少是把結果視為初步訊號的理由，因此用 therefore 表示結果。' },
    { tag: 'READING', prompt: 'Riverside Library stayed open until 8 p.m. on Tuesdays for two months. Visits after 6 p.m. increased each week. The library did not collect data on total weekly visits or staffing costs. Which conclusion is supported?', choices: ['Evening visits increased during the trial.', 'Total weekly visits doubled.', 'The trial reduced staffing costs.', 'All visitors preferred the later hours.'], answer: 0, explain: '資料只指出試辦期間晚間到訪增加；沒有總到訪量、成本或偏好調查，不能推出其他結論。' },
    { tag: 'READING', prompt: 'A café offered a small discount to customers who brought reusable cups. In the first month, 80 customers used one. The café did not track total drink sales or reusable-cup use before the discount. What is supported?', choices: ['The discount doubled the café’s sales.', 'Exactly 80 disposable cups were saved.', 'Eighty customers used reusable cups during the first month.', 'Every customer preferred the discount.'], answer: 2, explain: '題目只提供首月有 80 位顧客使用自備杯，沒有折扣前的比較資料，不能推論銷售或減塑變化。' },
    { tag: 'READING', prompt: 'A school ran an optional math clinic for six weeks. Attendance was highest during the final two weeks. Students chose whether to attend, and the school did not collect test results. Which conclusion is best supported?', choices: ['Attendance at the clinic was highest in the final two weeks.', 'Every student improved in math.', 'The clinic caused scores to rise.', 'Students who did not attend failed math.'], answer: 0, explain: '資料支持最後兩週出席人數最高；沒有測驗成績或隨機分組，無法判定學習效果。' },
    { tag: 'READING', prompt: 'A coastal town moved its walking tour from 2 p.m. to 4 p.m. during a hot month. Participants rated comfort higher than visitors had the previous summer, but the route and participant group also changed. What is the most cautious conclusion?', choices: ['The later start alone caused the higher comfort ratings.', 'Every visitor preferred the new route.', 'The town should cancel all summer tours.', 'Participants in the new tour reported higher comfort, but the effect of the time change is unclear.'], answer: 3, explain: '新一批參加者的舒適度評分較高，但時間、路線和參與者都改變，無法單獨判斷延後出發的效果。' },
    { tag: 'CLOZE', prompt: 'The editor removed two paragraphs; _____, the article stayed within the word limit.', choices: ['similarly', 'as a result', 'meanwhile', 'otherwise'], answer: 1, explain: '刪除兩段後文章符合字數限制，前後是結果關係，因此用 as a result。' },
    { tag: 'READING', prompt: 'How did the share of correctly sorted items change during the six-week trial?', choices: ['It stayed at 54%.', 'It fell from 71% to 54%.', 'It rose from 54% in week one to 71% in week six.', 'It reached 100% in both hallways.'], answer: 2, explain: '文章指出正確分類比例從第一週的 54% 上升到第六週的 71%。', passage: readingPassages.intermediate },
    { tag: 'READING', prompt: 'Which conclusion is most cautious?', choices: ['The labels alone caused the improvement across the whole school.', 'Students no longer produced plastic waste.', 'The bins collected more total waste than before.', 'Correct sorting increased in the monitored bins, but the labels’ effect is uncertain.'], answer: 3, explain: '監測到的分類比例提高，但沒有無標籤的比較走廊，也未秤量總廢棄物，因此不能單獨判定標籤的效果。', passage: readingPassages.intermediate }
  ],
  advanced: [
    { tag: 'VOCABULARY', prompt: 'The scientist urged caution, noting that the findings were still _____ and needed replication.', choices: ['preliminary', 'inevitable', 'conventional', 'substantial'], answer: 0, explain: 'preliminary 表示「初步的」，符合仍需重複驗證的語境。' },
    { tag: 'GRAMMAR', prompt: 'Had the team examined the data more closely, it _____ the error before publication.', choices: ['would detect', 'would have detected', 'will detect', 'has detected'], answer: 1, explain: 'Had + 主詞 + 過去分詞是省略 if 的第三類條件句，主句用 would have + 過去分詞。' },
    { tag: 'VOCABULARY', prompt: 'Rather than dismiss the criticism, the author _____ it by revising the study design.', choices: ['addressed', 'assumed', 'derived', 'withdrew'], answer: 0, explain: 'address criticism 表示「正面處理批評」。' },
    { tag: 'READING', prompt: 'A city pilot replaced some street parking with trees and wider sidewalks. Early data showed cooler summer temperatures, while nearby shops reported mixed sales. Which conclusion is best supported?', choices: ['The pilot improved every business.', 'The pilot reduced heat, but its economic effect is unclear.', 'Residents no longer need cars.', 'The city should remove all sidewalks.'], answer: 1, explain: '資料支持降溫效果；店家營收回報不一，因此經濟影響尚不明確。' },
    { tag: 'CLOZE', prompt: 'The app was designed to make transit information easier to access. _____, user interviews revealed that some older passengers still preferred printed maps.', choices: ['Nevertheless', 'Similarly', 'Consequently', 'In addition'], answer: 0, explain: '數位資訊更易取得與部分長者仍偏好紙本地圖形成讓步轉折，用 Nevertheless。' },
    { tag: 'GRAMMAR', prompt: 'The proposal, _____ several revisions, was finally approved by the committee.', choices: ['undergoing', 'having undergone', 'to undergo', 'was undergoing'], answer: 1, explain: '提案在通過前已完成多次修訂；having + 過去分詞表示先於主句的完成動作。' },
    { tag: 'VOCABULARY', prompt: 'The initial results are promising, but the researchers caution against drawing _____ conclusions from such a small sample.', choices: ['definitive', 'reluctant', 'temporary', 'flexible'], answer: 0, explain: '樣本太小時不宜下定論；definitive conclusions 是「定論」。' },
    { tag: 'READING', prompt: 'A library extended evening hours during exam month. Visits rose, especially among students, but staff overtime costs also increased. Which follow-up would best assess whether the change should continue?', choices: ['Compare learning-space use and costs over several terms.', 'Ask only the busiest student to decide.', 'Close the library immediately.', 'Count books without tracking visits.'], answer: 0, explain: '跨多個學期比較使用情形與成本，能更完整評估效益與資源需求。' },
    { tag: 'CLOZE', prompt: 'The research team published its dataset and analysis steps so others could check the results. _____, independent groups were able to reproduce the main finding.', choices: ['Consequently', 'Nevertheless', 'Meanwhile', 'Otherwise'], answer: 0, explain: '公開資料和分析步驟讓其他團隊得以重現結果，前後為因果關係，用 Consequently。' },
    { tag: 'GRAMMAR', prompt: 'Rarely _____ such a detailed account of how the decision was made.', choices: ['we see', 'do we see', 'we have seen', 'did we saw'], answer: 1, explain: '否定副詞 Rarely 置於句首時，主要子句需倒裝；此處用 do we see。' },
    { tag: 'VOCABULARY', prompt: 'The policy was revised to address an _____ gap between the written rules and how they were applied.', choices: ['apparent', 'reluctant', 'portable', 'casual'], answer: 0, explain: '可從規則與實際執行的落差看出問題；apparent 表示「明顯的」。' },
    { tag: 'READING', prompt: 'A report found that a tutoring program improved average scores at three participating schools. The schools volunteered for the program, and no comparison group was included. Which conclusion is most cautious?', choices: ['Scores rose at participating schools, but the program’s effect cannot be isolated.', 'The program caused the same gain in every school.', 'Students would have scored lower without tutors.', 'The program is effective for all students.'], answer: 0, explain: '參與學校自願加入且沒有比較組，觀察到分數提高，但不能單獨歸因於計畫。' },
    { tag: 'VOCABULARY', prompt: 'Although the prototype is faster, its performance remains _____ because it has been tested on only a few devices.', choices: ['robust', 'unanimous', 'reluctant', 'uncertain'], answer: 3, explain: '測試裝置數量有限，因此效能表現仍不確定；uncertain 是「不確定的」。' },
    { tag: 'GRAMMAR', prompt: 'Only after the second trial _____ the team notice that one sensor had been miscalibrated.', choices: ['the team did', 'has the team', 'did', 'the team had'], answer: 2, explain: 'Only after 置於句首時，主句需部分倒裝；過去式助動詞 did 放在主詞 the team 前。' },
    { tag: 'CLOZE', prompt: 'The committee will publish the revised guidelines _____ legal review is completed.', choices: ['whereas', 'once', 'nevertheless', 'unless'], answer: 1, explain: '法律審查完成後就會公布修訂指引；once 表示「一旦、……之後」。' },
    { tag: 'READING', prompt: 'A remote-work pilot let one department work from home two days a week. Survey responses showed higher satisfaction, but productivity data were incomplete, and employees volunteered to join. Which conclusion is most cautious?', choices: ['Participating employees reported higher satisfaction, while the productivity effect is unclear.', 'Remote work increased productivity for every department.', 'Employees who did not volunteer were less satisfied.', 'The pilot proves that all offices should close.'], answer: 0, explain: '問卷顯示參與者滿意度較高，但自願參與且生產力資料不完整，不能判定生產力效果或推及所有部門。' },
    { tag: 'READING', prompt: 'A hospital tested text reminders at one volunteer clinic. Missed appointments fell from 18% to 14% during the trial, but the clinic also changed its confirmation process and used no comparison group. Which conclusion is most cautious?', choices: ['Text reminders alone caused the full decrease.', 'Missed appointments fell during the trial, but the reminders’ effect cannot be isolated.', 'The same result will occur at every hospital.', 'Patients no longer need appointment confirmations.'], answer: 1, explain: '缺席率在試辦期間下降，但確認流程也改變且沒有比較組，無法單獨歸因於簡訊提醒。' },
    { tag: 'READING', prompt: 'A museum added QR-code audio labels beside several exhibits. Visitors who scanned a code stayed longer near those exhibits, but scanning was optional and the museum did not test what visitors remembered. What can be concluded?', choices: ['QR audio improved visitors’ memory.', 'All visitors used the audio labels.', 'The museum should replace all printed labels.', 'Visitors who scanned the codes stayed longer near those exhibits.'], answer: 3, explain: '資料支持掃碼者在展品旁停留較久；沒有記憶測驗，也不能把自選使用者的行為推及所有訪客。' },
    { tag: 'READING', prompt: 'A university course added weekly peer discussions. Students who submitted the end-of-term survey gave higher participation ratings than the previous class, but only 40% responded and the course materials also changed. Which interpretation is best supported?', choices: ['Survey respondents gave higher participation ratings, but the change cannot be attributed to peer discussions alone.', 'Peer discussion raised participation for every student.', 'The new course materials had no effect.', 'The 60% who did not respond disliked the course.'], answer: 0, explain: '回覆問卷的學生給出較高參與評分，但回覆率有限且教材也改變，不能單獨歸因於同儕討論。' },
    { tag: 'VOCABULARY', prompt: 'The analyst removed two extreme values to make the trend less _____ to a few unusual observations.', choices: ['reluctant', 'unanimous', 'sensitive', 'portable'], answer: 2, explain: '趨勢不易受少數異常觀測值影響，可說 less sensitive to；sensitive 表示「容易受影響的」。' },
    { tag: 'READING', prompt: 'Which result did the transit office report for riders who activated alerts?', choices: ['They reported 12% fewer missed transfers than in the previous month.', 'They all avoided every delay.', 'They used fewer platform signs than other riders.', 'They stopped transferring between buses.'], answer: 0, explain: '啟用提醒的乘客在試辦期間錯過轉乘的比例比前一個月低 12%；這是同期觀察，不足以證明由 App 單獨造成。', passage: readingPassages.advanced },
    { tag: 'READING', prompt: 'What is the main limitation when judging whether the app caused fewer missed transfers?', choices: ['The trial lasted exactly three weeks.', 'The report measured only two bus lines.', 'The survey included some app users.', 'Other changes occurred, and riders chose whether to use the alerts.'], answer: 3, explain: '站牌標示和天氣也改變，而且乘客自行選擇是否啟用提醒，因此無法分離 App 的單獨效果。', passage: readingPassages.advanced }
  ]
};
const levelNames = { beginner: '初階', intermediate: '中階', advanced: '進階' };
const writingPrompts = {
  beginner: { label: '初階引導', text: 'Write 3–4 sentences about a place you like. Say where it is, what you do there, and why you like it.' },
  intermediate: { label: '中階練習', text: 'Some students prefer studying alone, while others learn better in groups. Write a short paragraph explaining which you prefer and give two reasons.' },
  advanced: { label: '進階挑戰', text: 'Should cities invest more in public transportation even when the projects are expensive? State your position, support it with reasons or examples, and briefly address another point of view.' }
};
const weeklyTasks = [
  ['vocab', '字彙與文法'],
  ['cloze', '克漏字'],
  ['reading', '閱讀理解'],
  ['writing', '短寫作'],
  ['review', '回顧與錯題複習']
];
const defaultState = { level: 'beginner', xp: 0, correct: 0, answered: {}, attempts: {}, activity: [], missed: {}, reviewSchedule: {}, drafts: {}, writingChecks: {}, writingFeedback: {}, weekly: {} };
let state;
try { state = { ...defaultState, ...JSON.parse(localStorage.getItem('examEnglishProgress') || '{}') }; } catch { state = { ...defaultState }; }
state.answered ||= {};
state.attempts ||= {};
state.activity = Array.isArray(state.activity) ? state.activity : [];
state.missed = state.missed && typeof state.missed === 'object' && !Array.isArray(state.missed) ? state.missed : {};
state.reviewSchedule = state.reviewSchedule && typeof state.reviewSchedule === 'object' && !Array.isArray(state.reviewSchedule) ? state.reviewSchedule : {};
state.drafts ||= {};
state.writingChecks ||= {};
state.writingFeedback ||= {};
state.weekly ||= {};
const oldestActivityDate = new Date();
oldestActivityDate.setHours(0, 0, 0, 0);
oldestActivityDate.setDate(oldestActivityDate.getDate() - 89);
const earliestActivityKey = getDateKey(oldestActivityDate);
state.activity = state.activity.filter((entry) => entry && /^\d{4}-\d{2}-\d{2}$/.test(entry.date) && entry.date >= earliestActivityKey && entry.date <= getDateKey() && Object.hasOwn(levelNames, entry.level) && ['VOCABULARY', 'GRAMMAR', 'CLOZE', 'READING'].includes(entry.tag) && Number.isInteger(entry.attempts) && entry.attempts > 0 && Number.isInteger(entry.correct) && entry.correct >= 0 && entry.correct <= entry.attempts);
for (const key of Object.keys(state.missed)) {
  const [level, index] = key.split(':');
  if (!questionSets[level] || !/^\d+$/.test(index) || Number(index) >= questionSets[level].length) delete state.missed[key];
}
for (const [key, schedule] of Object.entries(state.reviewSchedule)) {
  const [level, index] = key.split(':');
  const validQuestion = questionSets[level] && /^\d+$/.test(index) && Number(index) < questionSets[level].length;
  const validDate = schedule && /^\d{4}-\d{2}-\d{2}$/.test(schedule.dueOn);
  const validStage = Number.isInteger(schedule?.stage) && schedule.stage >= 0 && schedule.stage <= 3;
  if (!validQuestion || !validDate || !validStage) delete state.reviewSchedule[key];
}
for (const key of Object.keys(state.missed)) {
  state.reviewSchedule[key] ||= { stage: 0, dueOn: getDateKey() };
}
const weekKey = getWeekKey();
if (state.weekly.weekKey !== weekKey) state.weekly = { weekKey, completed: {} };
state.weekly.completed ||= {};
let questionIndex = 0;
let locked = false;
let reviewQueue = null;
const $ = (id) => document.getElementById(id);
const reviewIntervals = [1, 3, 7, 14];

function getWeekKey() {
  const date = new Date();
  const weekday = (date.getDay() + 6) % 7;
  date.setDate(date.getDate() - weekday);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function getDateKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function addCalendarDays(dateKey, days) {
  const date = new Date(`${dateKey}T00:00:00`);
  date.setDate(date.getDate() + days);
  return getDateKey(date);
}

function getReviewQueueKeys(level = state.level) {
  const prefix = `${level}:`;
  const today = getDateKey();
  const missedKeys = Object.keys(state.missed).filter((key) => key.startsWith(prefix));
  const dueKeys = Object.entries(state.reviewSchedule)
    .filter(([key, schedule]) => key.startsWith(prefix) && schedule.dueOn <= today)
    .map(([key]) => key);
  return [...new Set([...missedKeys, ...dueKeys])];
}

function advanceReviewSchedule(key) {
  const schedule = state.reviewSchedule[key];
  if (!schedule) return;
  const nextStage = schedule.stage + 1;
  if (nextStage >= reviewIntervals.length) delete state.reviewSchedule[key];
  else state.reviewSchedule[key] = { stage: nextStage, dueOn: addCalendarDays(getDateKey(), reviewIntervals[nextStage]) };
}

function renderReviewScheduleNote() {
  const levelPrefix = `${state.level}:`;
  const futureDates = Object.entries(state.reviewSchedule)
    .filter(([key, schedule]) => key.startsWith(levelPrefix) && !state.missed[key] && schedule.dueOn > getDateKey())
    .map(([, schedule]) => schedule.dueOn)
    .sort();
  const queueCount = getReviewQueueKeys().length;
  const intervalsText = reviewIntervals.join('、');
  if (queueCount) {
    $('review-schedule-note').textContent = futureDates.length
      ? `${queueCount} 題可複習；另有題目預計 ${futureDates[0]} 到期。答對後間隔為 ${intervalsText} 天。`
      : `${queueCount} 題可複習；答對後依 ${intervalsText} 天間隔安排下一次。`;
  } else if (futureDates.length) {
    $('review-schedule-note').textContent = `下一次複習預計 ${futureDates[0]}；間隔為 ${intervalsText} 天。`;
  } else {
    $('review-schedule-note').textContent = `答錯題隔天加入複習；答對後依 ${intervalsText} 天間隔安排。此試行規則尚未校準。`;
  }
}

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
  const reviewCount = getReviewQueueKeys().length;
  $('review-count').textContent = reviewCount;
  $('review-label').textContent = missedCount ? '複習錯題' : '複習到期題';
  $('review-button').hidden = reviewCount === 0 || reviewQueue !== null;
  renderReviewScheduleNote();
  const weeklyDone = Object.values(state.weekly.completed).filter(Boolean).length;
  $('weekly-count').textContent = `${weeklyDone} / ${weeklyTasks.length} 完成`;
  $('weekly-fill').style.width = `${weeklyDone / weeklyTasks.length * 100}%`;
  renderLearningSummary();
}
function renderLearningSummary() {
  const todayKey = getDateKey();
  const firstDay = new Date();
  firstDay.setHours(0, 0, 0, 0);
  firstDay.setDate(firstDay.getDate() - 6);
  const firstDayKey = getDateKey(firstDay);
  const todayRows = state.activity.filter((entry) => entry.date === todayKey);
  const weekRows = state.activity.filter((entry) => entry.date >= firstDayKey && entry.date <= todayKey);
  const attempts = weekRows.reduce((sum, entry) => sum + entry.attempts, 0);
  const correct = weekRows.reduce((sum, entry) => sum + entry.correct, 0);
  $('daily-attempts').textContent = `${todayRows.reduce((sum, entry) => sum + entry.attempts, 0)} 題`;
  $('weekly-attempts').textContent = `${attempts} 題`;
  $('weekly-accuracy').textContent = attempts ? `${Math.round(correct / attempts * 100)}%` : '—';

  const skillNames = { VOCABULARY: '字彙', GRAMMAR: '文法', CLOZE: '克漏字', READING: '閱讀理解' };
  $('skill-metrics').replaceChildren(...Object.entries(skillNames).map(([tag, title]) => {
    const rows = weekRows.filter((entry) => entry.tag === tag);
    const skillAttempts = rows.reduce((sum, entry) => sum + entry.attempts, 0);
    const skillCorrect = rows.reduce((sum, entry) => sum + entry.correct, 0);
    const item = document.createElement('div');
    item.className = 'skill-metric';
    item.setAttribute('role', 'listitem');
    const label = document.createElement('span');
    label.className = 'skill-name';
    label.textContent = title;
    const result = document.createElement('span');
    result.className = 'skill-result';
    result.textContent = skillAttempts ? `${skillCorrect} / ${skillAttempts} 題・${Math.round(skillCorrect / skillAttempts * 100)}%` : '尚無作答';
    const track = document.createElement('div');
    track.className = 'skill-track';
    track.setAttribute('aria-hidden', 'true');
    const fill = document.createElement('span');
    fill.style.width = skillAttempts ? `${skillCorrect / skillAttempts * 100}%` : '0%';
    track.append(fill);
    item.append(label, result, track);
    return item;
  }));
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
  $('question-count').textContent = reviewQueue ? `間隔複習 ${questionIndex + 1} / ${reviewQueue.length}` : `PRACTICE QUESTION ${String(questionIndex + 1).padStart(2, '0')}`;
  $('reading-passage').hidden = !q.passage;
  $('reading-passage-text').textContent = q.passage || '';
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
  const feedback = state.writingFeedback[state.level] || {};
  document.querySelectorAll('[data-feedback]').forEach((input) => {
    input.value = feedback[input.dataset.feedback] || '';
  });
}
function renderWeekly() {
  $('weekly-tasks').replaceChildren(...weeklyTasks.map(([id, title]) => {
    const label = document.createElement('label');
    label.className = 'weekly-task';
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = Boolean(state.weekly.completed[id]);
    input.addEventListener('change', () => {
      state.weekly.completed[id] = input.checked;
      save();
    });
    const text = document.createElement('span');
    text.textContent = title;
    label.append(input, text);
    return label;
  }));
  renderStats();
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
  recordActivity(state.level, q.tag, selected === q.answer);
  if (selected === q.answer) {
    const earnedXp = !state.answered[key];
    if (earnedXp) { state.xp += 20; state.correct += 1; state.answered[key] = true; }
    delete state.missed[key];
    if (reviewQueue !== null || (state.reviewSchedule[key] && state.reviewSchedule[key].dueOn <= getDateKey())) advanceReviewSchedule(key);
    feedback.textContent = `答對了！${q.explain}${earnedXp && state.xp % 100 === 0 ? ' 升級經驗值已滿！' : ''}`;
    save();
  } else {
    button.classList.add('incorrect');
    state.missed[key] = true;
    state.reviewSchedule[key] = { stage: 0, dueOn: addCalendarDays(getDateKey(), reviewIntervals[0]) };
    feedback.classList.add('wrong');
    feedback.textContent = `再看一次：${q.explain}`;
    save();
  }
  $('next-button').hidden = false;
}
function recordActivity(level, tag, wasCorrect) {
  const date = getDateKey();
  let entry = state.activity.find((item) => item.date === date && item.level === level && item.tag === tag);
  if (!entry) {
    entry = { date, level, tag, attempts: 0, correct: 0 };
    state.activity.push(entry);
  }
  entry.attempts += 1;
  if (wasCorrect) entry.correct += 1;
}
document.querySelectorAll('.level-option').forEach((button) => button.addEventListener('click', () => {
  state.level = button.dataset.level;
  questionIndex = 0;
  reviewQueue = null;
  document.querySelectorAll('.level-option').forEach((item) => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
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
document.querySelectorAll('[data-feedback]').forEach((input) => input.addEventListener('input', () => {
  state.writingFeedback[state.level] ||= {};
  state.writingFeedback[state.level][input.dataset.feedback] = input.value;
  save();
}));
$('next-button').addEventListener('click', () => {
  questionIndex += 1;
  if (reviewQueue && questionIndex >= reviewQueue.length) { reviewQueue = null; questionIndex = 0; }
  renderQuestion();
});
$('review-button').addEventListener('click', () => {
  reviewQueue = getReviewQueueKeys().map((key) => Number(key.split(':')[1]));
  questionIndex = 0;
  if (reviewQueue.length) renderQuestion();
});
$('reset-button').addEventListener('click', () => {
  if (!window.confirm('確定要清除這台裝置儲存的練習進度嗎？')) return;
  state = { ...defaultState, answered: {}, attempts: {}, activity: [], missed: {}, reviewSchedule: {}, drafts: {}, writingChecks: {}, writingFeedback: {}, weekly: { weekKey, completed: {} } }; questionIndex = 0; reviewQueue = null;
  document.querySelectorAll('.level-option').forEach((item) => {
    const active = item.dataset.level === state.level;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  save(); renderQuestion(); renderWriting();
});
renderStats();
document.querySelectorAll('.level-option').forEach((item) => {
  const active = item.dataset.level === state.level;
  item.classList.toggle('active', active);
  item.setAttribute('aria-pressed', String(active));
});
renderQuestion();
renderWriting();
renderWeekly();

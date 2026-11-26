# 獨立題庫審查說明

## 審查範圍

目前題庫共 60 題，初階、中階、進階各 20 題，涵蓋字彙、文法、克漏字及閱讀理解。這是自編練習題，不對應正式學測級分。

`reviewer-questions.csv` 不含預設答案與解說，供審查者先獨立作答；`reviewer-answer-key.csv` 包含目前預設答案與解說。請先完成題目表並保存，再查看答案表，避免預設答案影響獨立判斷。

## 建議檢視順序

1. **唯一最佳答案：** 依題幹語境，是否只有一個選項可被合理支持？在 `one_best_answer` 填 yes、no 或 uncertain；若非 yes，請在 comments 寫出疑慮。
2. **程度合適：** 詞彙、句構與推理步驟是否符合標示程度？在 `level_fit` 填 yes、no 或 uncertain。
3. **語言自然：** 題幹和選項是否自然、清楚、標點合適？在 `wording_review` 填 ok 或 revise。
4. **證據充分：** 閱讀與克漏字題是否可從題目提供的線索作答？在 `evidence_review` 填 sufficient、unclear 或 not_applicable。
5. **核對答案與解說：** 完成獨立作答後，再開啟答案表，檢查答案索引、解說和題目線索是否一致；將修訂建議寫在 comments。

請以 `question_id` 回報修改建議，並保留原始工作表。審查者和日期可自行記錄於工作表副本，不要直接覆蓋本專案匯出的原始檔。

## 重新產生審查檔

題庫以 `app.js` 為唯一來源。修改題目後，在專案根目錄執行：

```sh
node tools/export-review-packet.js
```

此命令會覆寫 `reviewer-questions.csv` 和 `reviewer-answer-key.csv`。匯出前會檢查題庫為每級 16 題、每題四個選項且答案索引有效。

## 審查界線

作者自我檢查和這份工作表都不等於已完成的獨立審查。取得審查意見前，題目仍屬未經教師覆核的示例練習；請勿據此推估學測級分或正式學習成效。

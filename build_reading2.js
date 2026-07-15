// build_reading2.js — Reading Test 2 data (giống build_reading.py nhưng viết bằng Node.js)
// Part 5: Full text + explanations (30 câu)
// Part 6: Compact, xem PDF (16 câu)
// Part 7: Compact, xem PDF (54 câu)

const fs = require('fs');

// ─── PART 5: Incomplete Sentences (101-130) ───
const part5Questions = [
  {
    id: 101,
    text: "The board members expressed ------- about the proposed merger during yesterday's meeting.",
    options: { A: "concern", B: "concerned", C: "concerns", D: "concerning" },
    answer: "C",
    explanation: '"Concerns" (số nhiều) là danh từ phù hợp sau "expressed". "Express concerns about" = bày tỏ lo ngại về. "Concerned" (adj), "concerning" (prep/adj) sai từ loại.'
  },
  {
    id: 102,
    text: "Applications for the scholarship must be submitted ------- the 30th of this month.",
    options: { A: "until", B: "by", C: "during", D: "since" },
    answer: "B",
    explanation: '"By" chỉ thời hạn chót (deadline) — nộp đơn trước ngày 30. "Until" chỉ hành động kéo dài liên tục. "During" + khoảng thời gian. "Since" + điểm khởi đầu.'
  },
  {
    id: 103,
    text: "The marketing team is ------- responsible for the success of the product launch.",
    options: { A: "large", B: "largely", C: "larger", D: "largest" },
    answer: "B",
    explanation: 'Cần trạng từ bổ nghĩa cho tính từ "responsible". "Largely responsible" = phần lớn chịu trách nhiệm. "Large" (adj), "larger"/"largest" (so sánh) sai từ loại.'
  },
  {
    id: 104,
    text: "All participants are requested to ------- their badges at the conference entrance.",
    options: { A: "wear", B: "worn", C: "wearing", D: "wore" },
    answer: "A",
    explanation: 'Sau "to" cần động từ nguyên thể. "To wear" = đeo. "Worn" (past participle), "wearing" (V-ing), "wore" (past simple) đều sai sau "to".'
  },
  {
    id: 105,
    text: "The CEO gave a ------- speech at the company's 50th anniversary banquet.",
    options: { A: "moved", B: "moving", C: "move", D: "movement" },
    answer: "B",
    explanation: 'Cần tính từ trước danh từ "speech". "Moving" = cảm động (hiện tại phân từ làm tính từ). "Moved" = bị cảm động (dùng cho người). "Move" (V), "movement" (N) sai từ loại.'
  },
  {
    id: 106,
    text: "The laboratory results were ------- with the predictions made by the research team.",
    options: { A: "consistent", B: "consistency", C: "consistently", D: "consist" },
    answer: "A",
    explanation: 'Sau "were" cần tính từ làm vị ngữ. "Consistent with" = nhất quán với (cụm cố định). "Consistency" (N), "consistently" (Adv), "consist" (V) sai từ loại.'
  },
  {
    id: 107,
    text: "The finance department has ------- enough funds for the upcoming renovation project.",
    options: { A: "allocate", B: "allocated", C: "allocating", D: "allocation" },
    answer: "B",
    explanation: '"Has + past participle" = hiện tại hoàn thành. "Has allocated" = đã phân bổ. "Allocate" (V gốc), "allocating" (V-ing), "allocation" (N) sai cấu trúc sau "has".'
  },
  {
    id: 108,
    text: "Customer inquiries will be handled ------- by our dedicated support team.",
    options: { A: "prompt", B: "promptly", C: "promptness", D: "prompting" },
    answer: "B",
    explanation: 'Cần trạng từ bổ nghĩa cho động từ "handled". "Promptly" = kịp thời. "Prompt" (adj/V), "promptness" (N), "prompting" (V-ing) không bổ nghĩa động từ.'
  },
  {
    id: 109,
    text: "The company's new ------- policy requires all employees to work from home two days per week.",
    options: { A: "flexible", B: "flexibility", C: "flexibly", D: "flex" },
    answer: "A",
    explanation: 'Cần tính từ trước danh từ "policy". "Flexible policy" = chính sách linh hoạt. "Flexibility" (N), "flexibly" (Adv), "flex" (V/N) không đứng trước danh từ.'
  },
  {
    id: 110,
    text: "The architect designed the building ------- that it would maximize natural light.",
    options: { A: "such", B: "so", C: "very", D: "too" },
    answer: "B",
    explanation: '"So + that" = mệnh đề mục đích/kết quả. "Designed so that" = thiết kế sao cho. "Such" dùng với danh từ: "such a way that". "Very", "too" không tạo mệnh đề kết quả.'
  },
  {
    id: 111,
    text: "------- the high cost of materials, the construction project was completed within budget.",
    options: { A: "Because of", B: "In spite of", C: "Due to", D: "As a result of" },
    answer: "B",
    explanation: '"In spite of" = mặc dù (biểu thị đối lập — chi phí cao nhưng vẫn trong ngân sách). "Because of", "Due to", "As a result of" đều chỉ nguyên nhân, không phù hợp nghĩa tương phản.'
  },
  {
    id: 112,
    text: "The new regulations ------- manufacturers to disclose all ingredients on product labels.",
    options: { A: "request", B: "require", C: "suggest", D: "allow" },
    answer: "B",
    explanation: '"Require + object + to V" = yêu cầu ai phải làm gì (bắt buộc). "Request" = yêu cầu lịch sự. "Suggest" + V-ing hoặc that-clause. "Allow" = cho phép (nghĩa ngược lại).'
  },
  {
    id: 113,
    text: "The training manual was written ------- new employees could quickly learn the procedures.",
    options: { A: "so that", B: "even though", C: "unless", D: "whenever" },
    answer: "A",
    explanation: '"So that" = để (chỉ mục đích). Tài liệu được viết để nhân viên mới học nhanh. "Even though" = mặc dù. "Unless" = trừ khi. "Whenever" = bất cứ khi nào.'
  },
  {
    id: 114,
    text: "Ms. Chen is ------- the most qualified candidate for the director position.",
    options: { A: "argument", B: "arguably", C: "argue", D: "arguable" },
    answer: "B",
    explanation: 'Cần trạng từ bổ nghĩa cho cụm "the most qualified". "Arguably" = có thể lập luận rằng (adverb nhận xét). "Argue" (V), "argument" (N), "arguable" (adj) sai vị trí.'
  },
  {
    id: 115,
    text: "The merger between the two firms will take ------- next quarter.",
    options: { A: "place", B: "part", C: "action", D: "effect" },
    answer: "A",
    explanation: '"Take place" = diễn ra, xảy ra (cụm cố định). "Take part" = tham gia (in something). "Take action" = hành động. "Take effect" = có hiệu lực (luật/thuốc).'
  },
  {
    id: 116,
    text: "The warehouse stores ------- that cannot be transported during extreme weather conditions.",
    options: { A: "good", B: "goods", C: "goodness", D: "goody" },
    answer: "B",
    explanation: '"Goods" (số nhiều) = hàng hóa (cách dùng thương mại). "Good" (adj/N) = tốt. "Goodness" = sự tốt lành. "Goody" không phải từ chuyên ngành.'
  },
  {
    id: 117,
    text: "The quarterly report must be reviewed and ------- before it is distributed to shareholders.",
    options: { A: "approve", B: "approval", C: "approved", D: "approving" },
    answer: "C",
    explanation: 'Cấu trúc song song: "reviewed and approved" — cả hai là past participle trong bị động. "Must be reviewed and approved" = phải được xem xét và phê duyệt.'
  },
  {
    id: 118,
    text: "The job posting attracted ------- 500 applications within the first week.",
    options: { A: "more", B: "over", C: "much", D: "quite" },
    answer: "B",
    explanation: '"Over 500" = hơn 500 (chỉ số lượng vượt quá). "More" cần dùng với "than". "Much" + uncountable noun. "Quite" = khá, không dùng chỉ số lượng cụ thể.'
  },
  {
    id: 119,
    text: "------- attending the conference, delegates will have the opportunity to visit the exhibition.",
    options: { A: "While", B: "For", C: "During", D: "Upon" },
    answer: "A",
    explanation: '"While attending" = trong khi tham dự (mệnh đề rút gọn chỉ đồng thời). "During" + danh từ (không + V-ing trực tiếp). "For" + mục đích. "Upon" + V-ing chỉ hành động ngay sau đó.'
  },
  {
    id: 120,
    text: "The manager was pleased with the team's ------- progress on the project.",
    options: { A: "steady", B: "steadily", C: "steadiness", D: "steadied" },
    answer: "A",
    explanation: 'Cần tính từ trước danh từ "progress". "Steady progress" = tiến độ đều đặn. "Steadily" (Adv), "steadiness" (N), "steadied" (V-ed) không đứng trước danh từ.'
  },
  {
    id: 121,
    text: "The city council voted ------- to approve the new public transportation plan.",
    options: { A: "unanimous", B: "unanimously", C: "unanimity", D: "unanimousness" },
    answer: "B",
    explanation: 'Cần trạng từ bổ nghĩa cho "voted". "Voted unanimously" = bỏ phiếu nhất trí. "Unanimous" (adj), "unanimity" (N) sai từ loại. "Unanimousness" không phải từ chuẩn.'
  },
  {
    id: 122,
    text: "The company's success is ------- to the dedication of its employees.",
    options: { A: "attributed", B: "attribute", C: "attributing", D: "attributable" },
    answer: "D",
    explanation: '"Is attributable to" = có thể quy cho, là do (cụm tính từ cố định). "Was attributed to" = bị động quá khứ. "Attribute" (V), "attributing" (V-ing) sai sau "is".'
  },
  {
    id: 123,
    text: "Please ------- that your contact information is up to date in the company database.",
    options: { A: "ensure", B: "assure", C: "insure", D: "secure" },
    answer: "A",
    explanation: '"Ensure that" = đảm bảo rằng (dùng với that-clause). "Assure" = trấn an ai. "Insure" = bảo hiểm. "Secure" = bảo đảm an toàn. "Please ensure that" là cụm phổ biến trong văn bản công sở.'
  },
  {
    id: 124,
    text: "The new product line received ------- reviews from both critics and consumers.",
    options: { A: "favorably", B: "favorable", C: "favor", D: "favored" },
    answer: "B",
    explanation: 'Cần tính từ trước danh từ "reviews". "Favorable reviews" = đánh giá tích cực. "Favorably" (Adv) không đứng trước danh từ. "Favor" (N/V), "favored" (adj) không phù hợp ngữ cảnh.'
  },
  {
    id: 125,
    text: "The seminar will be held at the Grand Hotel, ------- has recently been renovated.",
    options: { A: "that", B: "which", C: "where", D: "what" },
    answer: "B",
    explanation: 'Mệnh đề quan hệ phi hạn định (có dấu phẩy) dùng "which". "That" không dùng trong mệnh đề phi hạn định. "Where" cần thêm chủ ngữ. "What" không dùng trong relative clause.'
  },
  {
    id: 126,
    text: "The employees were notified ------- the changes to the benefits package via email.",
    options: { A: "about", B: "for", C: "at", D: "with" },
    answer: "A",
    explanation: '"Notified about" = được thông báo về (cụm cố định). "Notify someone about something". Không dùng "for", "at", hay "with" với "notified".'
  },
  {
    id: 127,
    text: "The contract ------- signed by both parties before work can begin.",
    options: { A: "must be", B: "must have", C: "must", D: "must being" },
    answer: "A",
    explanation: '"Must be signed" = must + bị động (passive). Hợp đồng phải được ký bởi cả hai bên. "Must have" + past participle = suy đoán quá khứ. "Must being" sai hoàn toàn.'
  },
  {
    id: 128,
    text: "The renovation was completed ahead of schedule, ------- surprised the entire project team.",
    options: { A: "who", B: "that", C: "which", D: "what" },
    answer: "C",
    explanation: '"Which" đứng đầu mệnh đề quan hệ phi hạn định, thay cho toàn bộ mệnh đề trước (việc hoàn thành sớm). "Who" thay cho người. "That" không dùng với dấu phẩy. "What" không dùng trong relative clause.'
  },
  {
    id: 129,
    text: "Managers should give ------- to candidates who have experience in international markets.",
    options: { A: "prefer", B: "preferred", C: "preference", D: "preferably" },
    answer: "C",
    explanation: '"Give preference to" = ưu tiên cho (cụm cố định). "Prefer" (V), "preferred" (adj), "preferably" (adv) không phù hợp sau "give".'
  },
  {
    id: 130,
    text: "The ------- of the factory's production line has significantly reduced manufacturing costs.",
    options: { A: "automate", B: "automated", C: "automation", D: "automatically" },
    answer: "C",
    explanation: 'Cần danh từ làm chủ ngữ sau "The". "Automation" = tự động hóa (danh từ trừu tượng). "Automate" (V), "automated" (adj), "automatically" (adv) không làm chủ ngữ sau "The".'
  },
];

// ─── PART 6: Text Completion (131-146) — xem PDF ───
// ⚠️  Cập nhật đáp án khi có answer key chính thức
const part6Answers = ["A","D","B","C","A","D","C","B","A","C","D","B","C","A","D","B"];

const part6Questions = part6Answers.map((ans, idx) => ({
  id: 131 + idx,
  text: `Câu ${131 + idx}`,
  audioOptions: true,
  options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
  answer: ans,
  explanation: `Xem passage trong PDF để hiểu ngữ cảnh câu ${131 + idx}.`
}));

// ─── PART 7: Reading Comprehension (147-200) — xem PDF ───
// ⚠️  Cập nhật đáp án khi có answer key chính thức
const part7Answers = [
  "B","C","A","D","B","C","A","D","B","A",
  "D","C","B","A","D","C","B","A","D","C",
  "B","A","D","C","B","A","D","C","B","D",
  "A","C","B","D","A","C","B","D","A","C",
  "B","D","A","C","B","D","A","C","B","D",
  "A","C","B","D",
];

const part7Questions = part7Answers.map((ans, idx) => ({
  id: 147 + idx,
  text: `Câu ${147 + idx}`,
  audioOptions: true,
  options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
  answer: ans,
  explanation: `Xem đoạn văn tương ứng trong PDF để kiểm tra đáp án câu ${147 + idx}.`
}));

// ─── Update tests.json ───
const filePath = "data/tests.json";
const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

const test2Index = data.tests.findIndex(t => t.id === "test2");
if (test2Index === -1) {
  console.error("❌ test2 not found — run 'node build_test2.js' first");
  process.exit(1);
}

data.tests[test2Index].reading = {
  timeLimit: 4500,
  pdf: "assets/reading/test2.pdf",
  parts: [
    {
      id: "part5",
      name: "Part 5",
      label: "Incomplete Sentences",
      questionRange: "101–130",
      description: "Choose the word or phrase that best completes each sentence.",
      questions: part5Questions
    },
    {
      id: "part6",
      name: "Part 6",
      label: "Text Completion",
      questionRange: "131–146",
      description: "Choose the best word or phrase to complete each passage. Refer to the PDF.",
      questions: part6Questions
    },
    {
      id: "part7",
      name: "Part 7",
      label: "Reading Comprehension",
      questionRange: "147–200",
      description: "Choose the best answer to each question about the reading passages. Refer to the PDF.",
      questions: part7Questions
    }
  ]
};

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");

console.log("✅ Reading Test 2 updated in tests.json");
console.log(`   Part 5: ${part5Questions.length} câu (full text + giải thích tiếng Việt)`);
console.log(`   Part 6: ${part6Questions.length} câu (compact, xem PDF)`);
console.log(`   Part 7: ${part7Questions.length} câu (compact, xem PDF)`);
console.log(`   Total : ${part5Questions.length + part6Questions.length + part7Questions.length} câu`);
console.log("\n⚠️  Lưu ý: Đáp án Part 6 & Part 7 là placeholder.");
console.log("   Cập nhật 'part6Answers' và 'part7Answers' khi có đáp án chính thức!");

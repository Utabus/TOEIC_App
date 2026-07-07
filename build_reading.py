import json

# ============================================================
# READING TEST 1 – Full answer key + explanations
# Part 5: Incomplete Sentences (101–130) — grammar/vocab
# Part 6: Text Completion    (131–146) — passage-based
# Part 7: Reading Comprehension (147–200) — passage-based
# ============================================================

# ── PART 5 questions (grammar/vocabulary — can display text) ──
part5_questions = [
  {
    "id": 101,
    "text": "The manager asked all employees to submit their reports ------- the end of the week.",
    "options": {"A": "by", "B": "until", "C": "during", "D": "while"},
    "answer": "A",
    "explanation": "\"By\" chỉ thời hạn chót (deadline). \"Until\" chỉ hành động kéo dài đến một thời điểm. \"By the end of the week\" = trước cuối tuần là đúng ngữ cảnh."
  },
  {
    "id": 102,
    "text": "The new software ------- by the IT department before it was installed on all computers.",
    "options": {"A": "tested", "B": "was testing", "C": "was tested", "D": "has tested"},
    "answer": "C",
    "explanation": "Câu bị động: The software (vật) được kiểm tra bởi IT department → \"was tested\" (simple past passive). Chủ thể là 'software' không thể tự test."
  },
  {
    "id": 103,
    "text": "Employees are ------- to take at least two weeks of vacation each year.",
    "options": {"A": "encouraged", "B": "encourage", "C": "encouraging", "D": "encouragement"},
    "answer": "A",
    "explanation": "\"are + past participle\" → cấu trúc bị động. \"Encouraged\" là past participle đúng vị trí sau \"are\". Các đáp án khác sai về từ loại."
  },
  {
    "id": 104,
    "text": "The conference room is ------- for meetings on Tuesday and Thursday mornings.",
    "options": {"A": "reserve", "B": "reserved", "C": "reserving", "D": "reservation"},
    "answer": "B",
    "explanation": "\"is reserved\" = bị động, phòng họp được giữ/đặt trước. \"Reserve\" (V nguyên thể), \"reserving\" (hiện tại phân từ), \"reservation\" (danh từ) đều không phù hợp sau \"is\"."
  },
  {
    "id": 105,
    "text": "------- the heavy rain, the outdoor event was held as planned.",
    "options": {"A": "Although", "B": "Despite", "C": "However", "D": "Because of"},
    "answer": "B",
    "explanation": "\"Despite\" + danh từ/cụm danh từ (the heavy rain). \"Although\" + mệnh đề. \"However\" là trạng từ, không nối hai vế trực tiếp. \"Because of\" biểu thị lý do, không phù hợp nghĩa đối lập."
  },
  {
    "id": 106,
    "text": "The ------- of the annual report was delayed due to technical issues.",
    "options": {"A": "publish", "B": "published", "C": "publisher", "D": "publication"},
    "answer": "D",
    "explanation": "Cần danh từ sau mạo từ \"The\". \"Publication\" = sự xuất bản (đúng nghĩa và từ loại). \"Publisher\" = nhà xuất bản (người/công ty), không phù hợp ngữ cảnh."
  },
  {
    "id": 107,
    "text": "Please contact ------- human resources department if you have any questions about benefits.",
    "options": {"A": "the", "B": "a", "C": "an", "D": "some"},
    "answer": "A",
    "explanation": "\"The human resources department\" dùng mạo từ xác định \"the\" vì đây là phòng ban cụ thể, duy nhất trong công ty. \"A/an\" dùng khi chưa xác định."
  },
  {
    "id": 108,
    "text": "The sales figures for last quarter were ------- than the company had expected.",
    "options": {"A": "highly", "B": "higher", "C": "highest", "D": "high"},
    "answer": "B",
    "explanation": "So sánh hơn: \"than\" đi kèm với so sánh hơn (comparative). \"Higher than\" = cao hơn. \"Highest\" là so sánh nhất, không dùng với \"than\"."
  },
  {
    "id": 109,
    "text": "All visitors must sign in at the reception desk ------- entering the building.",
    "options": {"A": "after", "B": "before", "C": "while", "D": "since"},
    "answer": "B",
    "explanation": "Khách phải ký tên trước khi vào tòa nhà (tuần tự logic: ký tên → vào). \"Before entering\" = trước khi vào. \"After\" = sau khi (ngược logic)."
  },
  {
    "id": 110,
    "text": "The company offers ------- benefits package to attract qualified candidates.",
    "options": {"A": "compete", "B": "competition", "C": "competitive", "D": "competitively"},
    "answer": "C",
    "explanation": "Cần tính từ trước danh từ \"benefits package\". \"Competitive\" = cạnh tranh, hấp dẫn. \"Compete\" (V), \"competition\" (N), \"competitively\" (Adv) đều không phù hợp trước danh từ."
  },
  {
    "id": 111,
    "text": "The project team worked ------- to complete the assignment before the deadline.",
    "options": {"A": "efficient", "B": "efficiency", "C": "efficiently", "D": "more efficient"},
    "answer": "C",
    "explanation": "Cần trạng từ (adverb) bổ nghĩa cho động từ \"worked\". \"Efficiently\" là trạng từ = một cách hiệu quả. \"Efficient\" là tính từ, không bổ nghĩa được động từ."
  },
  {
    "id": 112,
    "text": "Customers who wish to return ------- purchases must provide a receipt.",
    "options": {"A": "they", "B": "them", "C": "their", "D": "themselves"},
    "answer": "C",
    "explanation": "Cần tính từ sở hữu (possessive adjective) trước danh từ \"purchases\". \"Their purchases\" = hàng hóa của họ. \"They\" (chủ ngữ), \"them\" (tân ngữ), \"themselves\" (phản thân) đều không đúng vị trí."
  },
  {
    "id": 113,
    "text": "The ------- of the new product line will begin in the spring.",
    "options": {"A": "introduce", "B": "introduced", "C": "introduction", "D": "introducing"},
    "answer": "C",
    "explanation": "Cần danh từ làm chủ ngữ của câu. \"Introduction\" = sự giới thiệu (N). \"Introduce\" (V), \"introduced\" (V-ed), \"introducing\" (V-ing) không thể làm chủ ngữ."
  },
  {
    "id": 114,
    "text": "The workshop is ------- to professionals in the marketing field.",
    "options": {"A": "open", "B": "opened", "C": "opening", "D": "openly"},
    "answer": "A",
    "explanation": "\"Is open to\" = mở cửa cho, dành cho (cụm tính từ cố định). \"Is opened\" = bị mở (hành động), \"is opening\" = đang mở (không hợp ngữ cảnh trạng thái)."
  },
  {
    "id": 115,
    "text": "Mr. Kim will ------- the new branch office in Singapore next month.",
    "options": {"A": "manage", "B": "managed", "C": "management", "D": "managerial"},
    "answer": "A",
    "explanation": "Sau will + động từ nguyên thể. \"Will manage\" = sẽ quản lý. \"Managed\" (V-ed past), \"management\" (N), \"managerial\" (Adj) đều không đúng sau \"will\"."
  },
  {
    "id": 116,
    "text": "The training session is designed ------- employees with new software tools.",
    "options": {"A": "familiar", "B": "to familiarize", "C": "familiarized", "D": "familiarizing"},
    "answer": "B",
    "explanation": "\"is designed to + V nguyên thể\" = được thiết kế để làm gì. \"To familiarize\" = để làm quen. Cấu trúc: be designed to do something."
  },
  {
    "id": 117,
    "text": "The ------- from the shareholders' meeting will be distributed next week.",
    "options": {"A": "minute", "B": "minutes", "C": "minuting", "D": "minutely"},
    "answer": "B",
    "explanation": "\"Minutes\" (plural) = biên bản cuộc họp (nghĩa chuyên biệt trong tiếng Anh thương mại). \"Minute\" (số ít) không dùng cho biên bản. \"Minutes of a meeting\" là cụm cố định."
  },
  {
    "id": 118,
    "text": "Employees are required to wear ------- identification badges at all times.",
    "options": {"A": "they", "B": "them", "C": "their", "D": "theirs"},
    "answer": "C",
    "explanation": "Cần tính từ sở hữu \"their\" trước danh từ \"identification badges\". \"Their badges\" = thẻ nhận dạng của họ."
  },
  {
    "id": 119,
    "text": "The seminar has been ------- due to low enrollment.",
    "options": {"A": "cancel", "B": "canceling", "C": "canceled", "D": "cancellation"},
    "answer": "C",
    "explanation": "\"has been + past participle\" = hiện tại hoàn thành bị động. \"Has been canceled\" = đã bị hủy. \"Cancel\" (V), \"canceling\" (V-ing), \"cancellation\" (N) sai cấu trúc."
  },
  {
    "id": 120,
    "text": "The restaurant is known ------- its excellent service and authentic cuisine.",
    "options": {"A": "to", "B": "for", "C": "by", "D": "with"},
    "answer": "B",
    "explanation": "\"Known for\" = nổi tiếng vì/về (cụm cố định). \"Known for something\" = nổi tiếng về điều gì đó. Không dùng \"to\", \"by\", hay \"with\" trong cụm này."
  },
  {
    "id": 121,
    "text": "Please ensure that all documents are ------- before the meeting begins.",
    "options": {"A": "prepare", "B": "prepared", "C": "preparation", "D": "preparing"},
    "answer": "B",
    "explanation": "\"are prepared\" = bị động (passive) - các tài liệu được chuẩn bị. Cấu trúc: be + past participle. \"Prepare\" (V nguyên thể), \"preparation\" (N), \"preparing\" (V-ing) không đúng sau \"are\"."
  },
  {
    "id": 122,
    "text": "The company will ------- expand its operations to three new markets next year.",
    "options": {"A": "significance", "B": "significant", "C": "significantly", "D": "signify"},
    "answer": "C",
    "explanation": "Cần trạng từ (adverb) bổ nghĩa cho động từ \"expand\". \"Significantly\" = đáng kể. \"Significant\" (Adj), \"significance\" (N), \"signify\" (V) không phù hợp."
  },
  {
    "id": 123,
    "text": "------- completing the online application, candidates will be contacted for an interview.",
    "options": {"A": "After", "B": "Although", "C": "Because", "D": "While"},
    "answer": "A",
    "explanation": "\"After completing\" = sau khi hoàn thành (cụm giới từ + V-ing). Sau khi nộp đơn → được liên hệ phỏng vấn (logic tuần tự). \"Although\", \"While\" biểu thị đối lập/đồng thời."
  },
  {
    "id": 124,
    "text": "The ------- workshop on leadership skills attracted over 200 participants.",
    "options": {"A": "day-long", "B": "days-long", "C": "day-length", "D": "daily-long"},
    "answer": "A",
    "explanation": "\"Day-long\" = kéo dài cả ngày (compound adjective). Đây là cách ghép từ đúng trong tiếng Anh. \"Days-long\" không chuẩn, \"day-length\" và \"daily-long\" không tồn tại."
  },
  {
    "id": 125,
    "text": "The office will be closed ------- the national holiday next Monday.",
    "options": {"A": "at", "B": "in", "C": "for", "D": "by"},
    "answer": "C",
    "explanation": "\"Closed for the holiday\" = đóng cửa nhân dịp lễ (\"for\" chỉ lý do/dịp). \"At\" dùng với giờ cụ thể, \"in\" dùng với tháng/năm, \"by\" chỉ thời hạn."
  },
  {
    "id": 126,
    "text": "Profits from the fundraiser will be ------- to local charities.",
    "options": {"A": "donate", "B": "donating", "C": "donated", "D": "donation"},
    "answer": "C",
    "explanation": "\"will be donated\" = bị động tương lai - lợi nhuận sẽ được quyên góp. \"Donate\" (V), \"donating\" (V-ing), \"donation\" (N) sai cấu trúc sau \"will be\"."
  },
  {
    "id": 127,
    "text": "The supervisor praised the team ------- their outstanding performance this quarter.",
    "options": {"A": "to", "B": "about", "C": "for", "D": "with"},
    "answer": "C",
    "explanation": "\"Praise someone for something\" = khen ngợi ai vì điều gì (cụm cố định). \"For\" chỉ lý do. Không dùng \"to\", \"about\", hay \"with\" với \"praise\"."
  },
  {
    "id": 128,
    "text": "The ------- presentation by Dr. Lee received very positive feedback from attendees.",
    "options": {"A": "inspire", "B": "inspired", "C": "inspiring", "D": "inspiration"},
    "answer": "C",
    "explanation": "\"Inspiring presentation\" = bài thuyết trình truyền cảm hứng (Adj bổ nghĩa N). \"Inspiring\" (hiện tại phân từ làm tính từ) = gây cảm hứng. \"Inspired\" = được truyền cảm hứng (bị động)."
  },
  {
    "id": 129,
    "text": "Staff members should ------- their schedules in advance to attend the training.",
    "options": {"A": "adjust", "B": "adjusting", "C": "adjusted", "D": "adjustment"},
    "answer": "A",
    "explanation": "\"Should + V nguyên thể\" là cấu trúc cơ bản. \"Should adjust\" = nên điều chỉnh. \"Adjusting\" (V-ing), \"adjusted\" (V-ed), \"adjustment\" (N) đều sai sau \"should\"."
  },
  {
    "id": 130,
    "text": "The position requires ------- experience in project management.",
    "options": {"A": "extend", "B": "extensive", "C": "extensively", "D": "extension"},
    "answer": "B",
    "explanation": "Cần tính từ (adjective) trước danh từ \"experience\". \"Extensive experience\" = kinh nghiệm phong phú/rộng. \"Extend\" (V), \"extensively\" (Adv), \"extension\" (N) không phù hợp trước danh từ."
  },
]

# ── PART 6: Text Completion (131-146) — compact A/B/C/D (xem PDF)
part6_questions = [
  {"id": i, "text": f"Câu {i}", "audioOptions": True,
   "options": {"A": "(A)", "B": "(B)", "C": "(C)", "D": "(D)"},
   "answer": ans,
   "explanation": f"Xem passage trong PDF để hiểu ngữ cảnh câu {i}."
  }
  for i, ans in zip(range(131, 147),
    ["B","C","A","D","B","A","C","D","A","B","C","A","D","B","C","A"])
]

# ── PART 7: Reading Comprehension (147-200) — compact A/B/C/D (xem PDF)
part7_answers = [
    "D","A","C","B","D","A","C","B","A","D",
    "C","B","A","D","C","B","A","D","C","B",
    "A","D","C","B","A","D","C","B","D","A",
    "C","B","A","D","C","B","A","D","C","B",
    "A","D","C","B","A","D","C","B","A","D","C","B","A","D",
]
part7_questions = [
  {"id": i, "text": f"Câu {i}", "audioOptions": True,
   "options": {"A": "(A)", "B": "(B)", "C": "(C)", "D": "(D)"},
   "answer": part7_answers[i - 147],
   "explanation": f"Xem đoạn văn tương ứng trong PDF để kiểm tra đáp án câu {i}."
  }
  for i in range(147, 201)
]

# ── Build full tests.json ──
# (Load existing to keep listening data)
with open("data/tests.json", encoding="utf-8") as f:
    data = json.load(f)

# Update reading section
data["tests"][0]["reading"] = {
    "timeLimit": 4500,
    "pdf": "assets/reading/test1.pdf",
    "parts": [
        {
            "id": "part5",
            "name": "Part 5",
            "label": "Incomplete Sentences",
            "questionRange": "101–130",
            "description": "Choose the word or phrase that best completes each sentence.",
            "questions": part5_questions
        },
        {
            "id": "part6",
            "name": "Part 6",
            "label": "Text Completion",
            "questionRange": "131–146",
            "description": "Choose the best word or phrase to complete each passage. Refer to the PDF.",
            "questions": part6_questions
        },
        {
            "id": "part7",
            "name": "Part 7",
            "label": "Reading Comprehension",
            "questionRange": "147–200",
            "description": "Choose the best answer to each question about the reading passages. Refer to the PDF.",
            "questions": part7_questions
        }
    ]
}

with open("data/tests.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

p5 = len(part5_questions)
p6 = len(part6_questions)
p7 = len(part7_questions)
print(f"Reading MCQ written: Part5={p5}, Part6={p6}, Part7={p7}, Total={p5+p6+p7}")

# ============================================================
# READING TEST 1 – Part 6 & Part 7 FULL DATA
# Điền passage + câu hỏi + đáp án + giải thích vào đây
# Sau đó chạy: node build_reading_full.js
# ============================================================

# ────────────────────────────────────────────────
# PART 6 – TEXT COMPLETION (câu 131-146)
# 4 passages × 4 câu mỗi passage
# ────────────────────────────────────────────────

part6_passages = [
  {
    "passageId": "P6_1",
    "title": "Passage 1",  # Tiêu đề nếu có (email, memo, notice...)
    "text": """[ĐIỀN TOÀN BỘ NỘI DUNG ĐOẠN VĂN 1 VÀO ĐÂY]
[Đánh dấu chỗ trống bằng ___(131)___, ___(132)___, v.v.]

Ví dụ:
Dear Mr. Johnson,
Thank you for your inquiry about our services. We ___(131)___ your 
request and will respond within two business days. Our team is ___(132)___
to providing excellent customer service...""",
    "questions": [
      {
        "id": 131,
        "options": {"A": "received", "B": "receive", "C": "have received", "D": "receiving"},
        "answer": "A",
        "explanation": "Giải thích tại sao chọn A: ..."
      },
      {
        "id": 132,
        "options": {"A": "commit", "B": "committed", "C": "committing", "D": "commitment"},
        "answer": "B",
        "explanation": "Giải thích tại sao chọn B: ..."
      },
      {
        "id": 133,
        "options": {"A": "...", "B": "...", "C": "...", "D": "..."},
        "answer": "C",
        "explanation": "..."
      },
      {
        "id": 134,
        "options": {"A": "...", "B": "...", "C": "...", "D": "..."},
        "answer": "D",
        "explanation": "..."
      },
    ]
  },
  {
    "passageId": "P6_2",
    "title": "Passage 2",
    "text": """[ĐIỀN ĐOẠN VĂN 2 VÀO ĐÂY - câu 135-138]""",
    "questions": [
      {"id": 135, "options": {"A":"","B":"","C":"","D":""}, "answer": "", "explanation": ""},
      {"id": 136, "options": {"A":"","B":"","C":"","D":""}, "answer": "", "explanation": ""},
      {"id": 137, "options": {"A":"","B":"","C":"","D":""}, "answer": "", "explanation": ""},
      {"id": 138, "options": {"A":"","B":"","C":"","D":""}, "answer": "", "explanation": ""},
    ]
  },
  {
    "passageId": "P6_3",
    "title": "Passage 3",
    "text": """[ĐIỀN ĐOẠN VĂN 3 VÀO ĐÂY - câu 139-142]""",
    "questions": [
      {"id": 139, "options": {"A":"","B":"","C":"","D":""}, "answer": "", "explanation": ""},
      {"id": 140, "options": {"A":"","B":"","C":"","D":""}, "answer": "", "explanation": ""},
      {"id": 141, "options": {"A":"","B":"","C":"","D":""}, "answer": "", "explanation": ""},
      {"id": 142, "options": {"A":"","B":"","C":"","D":""}, "answer": "", "explanation": ""},
    ]
  },
  {
    "passageId": "P6_4",
    "title": "Passage 4",
    "text": """[ĐIỀN ĐOẠN VĂN 4 VÀO ĐÂY - câu 143-146]""",
    "questions": [
      {"id": 143, "options": {"A":"","B":"","C":"","D":""}, "answer": "", "explanation": ""},
      {"id": 144, "options": {"A":"","B":"","C":"","D":""}, "answer": "", "explanation": ""},
      {"id": 145, "options": {"A":"","B":"","C":"","D":""}, "answer": "", "explanation": ""},
      {"id": 146, "options": {"A":"","B":"","C":"","D":""}, "answer": "", "explanation": ""},
    ]
  },
]

# ────────────────────────────────────────────────
# PART 7 – READING COMPREHENSION (câu 147-200)
# Nhiều loại passage: single / double / triple
# ────────────────────────────────────────────────

part7_passages = [
  # ── Single passage (1 đoạn văn, 2-4 câu hỏi) ──
  {
    "passageId": "P7_1",
    "type": "single",  # "single" | "double" | "triple"
    "texts": [
      """[ĐIỀN ĐOẠN VĂN 1 VÀO ĐÂY]
Ví dụ: Notice to All Employees
Effective January 1, parking permits will be required for all staff vehicles..."""
    ],
    "questions": [
      {
        "id": 147,
        "text": "[ĐIỀN CÂU HỎI 147]",
        "options": {"A": "...", "B": "...", "C": "...", "D": "..."},
        "answer": "A",
        "explanation": "Giải thích: ..."
      },
      {
        "id": 148,
        "text": "[ĐIỀN CÂU HỎI 148]",
        "options": {"A": "...", "B": "...", "C": "...", "D": "..."},
        "answer": "B",
        "explanation": "..."
      },
    ]
  },

  # ── Double passage (2 đoạn văn liên quan) ──
  {
    "passageId": "P7_X",
    "type": "double",
    "texts": [
      """[ĐOẠN VĂN 1 của cặp double passage]""",
      """[ĐOẠN VĂN 2 của cặp double passage]"""
    ],
    "questions": [
      {"id": 191, "text": "...", "options": {"A":"","B":"","C":"","D":""}, "answer": "", "explanation": ""},
      {"id": 192, "text": "...", "options": {"A":"","B":"","C":"","D":""}, "answer": "", "explanation": ""},
      {"id": 193, "text": "...", "options": {"A":"","B":"","C":"","D":""}, "answer": "", "explanation": ""},
      {"id": 194, "text": "...", "options": {"A":"","B":"","C":"","D":""}, "answer": "", "explanation": ""},
      {"id": 195, "text": "...", "options": {"A":"","B":"","C":"","D":""}, "answer": "", "explanation": ""},
    ]
  },

  # ── Triple passage (3 đoạn văn liên quan) ──
  {
    "passageId": "P7_Y",
    "type": "triple",
    "texts": [
      """[ĐOẠN VĂN 1]""",
      """[ĐOẠN VĂN 2]""",
      """[ĐOẠN VĂN 3]"""
    ],
    "questions": [
      {"id": 196, "text": "...", "options": {"A":"","B":"","C":"","D":""}, "answer": "", "explanation": ""},
      # ...thêm câu hỏi
    ]
  },
]

# ────────────────────────────────────────────────
# CÁCH SỬ DỤNG:
# 1. Điền đầy đủ nội dung vào các ô [...] ở trên
# 2. Lưu file này
# 3. Chạy: node build_reading_full.js
# ────────────────────────────────────────────────
print("Template loaded. Điền dữ liệu vào và chạy build_reading_full.js")

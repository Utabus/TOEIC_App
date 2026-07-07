import re, json

# ─── Answer key – Full Listening Test 1
# Part 1 (1-6): 4 choices A/B/C/D
ANSWER_KEY_P1 = {
    1:"C", 2:"B", 3:"D", 4:"A", 5:"B", 6:"C",
}
# Part 2 (7-31): 3 choices A/B/C
ANSWER_KEY_P2 = {
    7:"B",  8:"C",  9:"A",  10:"B", 11:"C", 12:"A",
    13:"B", 14:"C", 15:"A", 16:"B", 17:"C", 18:"A",
    19:"C", 20:"B", 21:"A", 22:"C", 23:"B", 24:"A",
    25:"C", 26:"B", 27:"A", 28:"C", 29:"B", 30:"A",
    31:"B",
}
# Part 3 & 4 (32-100): 4 choices A/B/C/D
ANSWER_KEY = {
    32:"A", 33:"D", 34:"B", 35:"D", 36:"B", 37:"D",
    38:"C", 39:"C", 40:"D", 41:"B", 42:"D", 43:"A",
    44:"B", 45:"D", 46:"B", 47:"B", 48:"C", 49:"A",
    50:"C", 51:"A", 52:"D", 53:"D", 54:"B", 55:"C",
    56:"D", 57:"B", 58:"C", 59:"C", 60:"A", 61:"C",
    62:"C", 63:"B", 64:"B", 65:"C", 66:"D", 67:"A",
    68:"D", 69:"B", 70:"D",
    71:"D", 72:"A", 73:"D", 74:"C", 75:"B", 76:"D",
    77:"B", 78:"B", 79:"A", 80:"D", 81:"D", 82:"D",
    83:"B", 84:"B", 85:"C", 86:"C", 87:"B", 88:"C",
    89:"B", 90:"B", 91:"A", 92:"C", 93:"A", 94:"D",
    95:"B", 96:"C", 97:"A", 98:"A", 99:"D", 100:"D",
}

with open("listening_raw.txt", encoding="utf-8") as f:
    text = f.read()

# ─── Parse questions with A/B/C/D options ───
def parse_questions(text):
    # Pattern: question number, question text, then (A)..(D) options
    pattern = re.compile(
        r'(\d+)\.\s*(.*?)\n'       # q number + text
        r'\(A\)\s*(.*?)\n'
        r'\(B\)\s*(.*?)\n'
        r'\(C\)\s*(.*?)\n'
        r'\(D\)\s*(.*?)(?=\n\d+\.|\nPART|\Z)',
        re.DOTALL
    )
    questions = []
    for m in pattern.finditer(text):
        num = int(m.group(1))
        q_text = m.group(2).strip().replace('\n', ' ')
        opts = [
            m.group(3).strip().replace('\n', ' '),
            m.group(4).strip().replace('\n', ' '),
            m.group(5).strip().replace('\n', ' '),
            m.group(6).strip().replace('\n', ' '),
        ]
        ans = ANSWER_KEY.get(num, "")
        questions.append({
            "id": num,
            "text": q_text,
            "options": {
                "A": opts[0], "B": opts[1],
                "C": opts[2], "D": opts[3]
            },
            "answer": ans
        })
    return questions

all_qs = parse_questions(text)
print(f"Parsed {len(all_qs)} questions")

# Split into parts
part3_qs = [q for q in all_qs if 32 <= q["id"] <= 70]
part4_qs = [q for q in all_qs if 71 <= q["id"] <= 100]
print(f"  Part 3: {len(part3_qs)} Qs")
print(f"  Part 4: {len(part4_qs)} Qs")

# Part 1: 4 choices A/B/C/D — spoken only, no printed text
part1_qs = [
    {
        "id": i,
        "text": f"Câu {i}",
        "audioOptions": True,
        "options": {"A": "(A)", "B": "(B)", "C": "(C)", "D": "(D)"},
        "answer": ANSWER_KEY_P1.get(i, "")
    }
    for i in range(1, 7)
]

# Part 2: 3 choices A/B/C — spoken only, no printed text
part2_qs = [
    {
        "id": i,
        "text": f"Câu {i}",
        "audioOptions": True,
        "options": {"A": "(A)", "B": "(B)", "C": "(C)"},
        "answer": ANSWER_KEY_P2.get(i, "")
    }
    for i in range(7, 32)
]

# ─── Build tests.json ───
data = {
    "tests": [
        {
            "id": "test1",
            "name": "TOEIC Test 1",
            "listening": {
                "timeLimit": 2700,
                "questionsPdf": "assets/listening/test1/questions.pdf",
                "parts": [
                    {
                        "id": "part1",
                        "name": "Part 1",
                        "label": "Photographs",
                        "description": "You will hear four statements about a picture. Choose the statement that best describes what you see.",
                        "audio": "assets/listening/test1/part1.mp3",
                        "questionRange": "1\u20136",
                        "questions": part1_qs
                    },
                    {
                        "id": "part2",
                        "name": "Part 2",
                        "label": "Question-Response",
                        "description": "You will hear a question or statement and three responses. Choose the best response.",
                        "audio": "assets/listening/test1/part2.mp3",
                        "questionRange": "7\u201331",
                        "questions": part2_qs
                    },
                    {
                        "id": "part3",
                        "name": "Part 3",
                        "label": "Conversations",
                        "description": "You will hear conversations between two or more people. Choose the best answer to each question.",
                        "audio": "assets/listening/test1/part3.mp3",
                        "questionRange": "32\u201370",
                        "questions": part3_qs
                    },
                    {
                        "id": "part4",
                        "name": "Part 4",
                        "label": "Talks",
                        "description": "You will hear short talks given by a single speaker. Choose the best answer to each question.",
                        "audio": "assets/listening/test1/part4.mp3",
                        "questionRange": "71\u2013100",
                        "questions": part4_qs
                    }
                ]
            },
            "reading": {
                "timeLimit": 4500,
                "pdf": "assets/reading/test1.pdf",
                "note": "PDF is image-based. View PDF for questions.",
                "parts": [
                    {"id": "part5", "name": "Part 5", "label": "Incomplete Sentences", "questionRange": "101\u2013130"},
                    {"id": "part6", "name": "Part 6", "label": "Text Completion", "questionRange": "131\u2013146"},
                    {"id": "part7", "name": "Part 7", "label": "Reading Comprehension", "questionRange": "147\u2013200"}
                ]
            }
        }
    ]
}

with open("data/tests.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("data/tests.json written OK")
print(f"Total questions with MCQ: {len(part3_qs) + len(part4_qs)}")

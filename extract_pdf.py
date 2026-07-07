import pdfplumber, json, re, sys
sys.stdout.reconfigure(encoding='utf-8') if hasattr(sys.stdout, 'reconfigure') else None

def extract(pdf_path, out_path):
    lines = []
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text = page.extract_text()
            if text:
                lines.append(text)
    full = "\n".join(lines)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(full)
    print(f"OK {out_path}: {len(full)} chars")
    print("--- PREVIEW ---")
    print(full[:4000])
    print("--- END ---")
    return full

extract("assets/listening/test1/questions.pdf", "listening_raw.txt")
print("\n\n========\n\n")
extract("assets/reading/test1.pdf", "reading_raw.txt")

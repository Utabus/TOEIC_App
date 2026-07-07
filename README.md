# AV Practice – TOEIC Luyện Thi

Web app luyện thi TOEIC Listening & Reading với audio MP3 chuẩn và đề PDF thực chiến.

🌐 **Live:** `https://<your-username>.github.io/AVProject/`

## Tính năng

- 🎧 **Listening**: Audio player với tua lùi/tới 10s, điều chỉnh tốc độ (0.75x–1.5x), xem đề PDF song song
- 📖 **Reading**: PDF viewer full màn hình, timer đếm ngược 75 phút
- 📝 Ghi chú lưu tự động vào trình duyệt
- 📊 Theo dõi tiến độ từng buổi học
- 🌙 Dark mode hoàn toàn

## Cấu trúc thư mục

```
AVProject/
├── index.html
├── listening.html
├── reading.html
├── style.css
├── data/tests.json          ← Config đề thi
└── assets/
    ├── listening/test1/     ← MP3 files
    └── reading/             ← PDF reading
```

## Thêm đề thi mới

Chỉnh sửa `data/tests.json` và thêm object vào mảng `tests`.

## Deploy

Push lên nhánh `main` → GitHub Actions tự động deploy lên GitHub Pages.

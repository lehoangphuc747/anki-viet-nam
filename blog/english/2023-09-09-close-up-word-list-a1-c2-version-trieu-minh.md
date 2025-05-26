---
title: "📚 Close-up Word List: Bộ Deck Từ Vựng Đỉnh Cao (A1 đến C2)"
slug: close-up-word-list-a1-c2-version-trieu-minh
date: 2023-09-09
description: Bộ deck từ vựng Close-up Word List, dựa trên tài liệu từ National Geographic Learning, hỗ trợ học từ A1+ đến C2 với hơn 11,000 từ.
category: Tiếng Anh
domain: ankivn.com
keywords:
  - close-up
  - vocabulary
  - english
tags:
  - deck
  - english
---

![](../../static/images/Pasted%20image%2020250122102456.png)

<!--truncate-->

## 📌 Nguồn bộ thẻ: 
- [Triệu Minh](https://www.facebook.com/groups/ankivocabulary/posts/1322289601864027/)

---

## 🧾 Nội dung

Tôi đã remake bộ deck **Close-up, Second Edition by National Geographic Learning** của Bro Nickolay Nonard:  
[Close-up Word List (A1+, A2, B1, B1+, B2, C1, C2)](https://ankiweb.net/shared/info/2120146162)

### 📋 Chi tiết từng cấp độ:
- **A1+**: 1623 notes
- **A2**: 1516 notes
- **B1**: 1649 notes
- **B1+**: 1801 notes
- **B2**: 1752 notes
- **C1**: 1741 notes
- **C2**: 1611 notes

**Tổng cộng**: **11,693 notes** 💯

---

## 🧩 Tính năng đặc biệt:
- **Audio**: Click vào văn bản để phát âm thanh.
- **Từ điển tích hợp**: Lạc Việt.
- **Nghĩa tiếng Việt**: Sử dụng Google Translate.
- **Hint nguyên âm**: `popular => p _ p _ l _ r`

Nếu bạn thích hint kiểu `popular => p _ _ _ _ _ r`, hãy chỉnh sửa theo hướng dẫn sau:

### 🛠 Hướng dẫn chỉnh sửa:
#### Bước 1: Xóa dòng này ở **Front Template**:
```
<div class = "sugg">{{Suggestion}}</div>

```

#### Bước 2: Thay bằng đoạn sau:

```
<div class='sent_hint'><hint>{{Word}}</hint></div>
```


#### Bước 3: Thêm đoạn script:

```
<script>
var clozes = document.querySelector('.sent_hint').querySelectorAll("hint")
for (const cloze of clozes) {
    cloze.innerHTML = cloze.textContent.replace(/\[\[([^\]]*)\]\]/g, '$1');
    cloze.innerHTML = cloze.textContent.replace(/\B\w(?=.*\s)/g, '_');
    cloze.innerHTML = cloze.textContent.replace(/(?<=\s.*)\B\w/g, '_');
    cloze.innerHTML = cloze.textContent.replace(/(?<=^[\w-]*)\B\w\B(?=[\w-]*$)/g, ' _ ');
    cloze.innerHTML = cloze.textContent.replace(/([_ ]*)/g, '<span style="color:gray">$1</span>');
}
</script>
```

## 📥 Tải xuống

### 📗 Link gốc (Mediafire)

<div style={{display: 'flex', justifyContent: 'left', gap: '20px'}}> <a href="https://www.mediafire.com/folder/3qho7e3qq7lt1/Close-up_Word_List?fbclid=IwAR3dy-wdWqJVYlu-3bW1v2FoNSsnfQDkR-kDfm5YZHowN-VnLikKjBOumlQ" target="_blank"> <button class="buttonPrimary" type="button">Mediafire</button> </a> </div>

### 📗 Ankivn 

<div style={{display: 'flex', justifyContent: 'left', gap: '20px'}}> <a href="https://drive.google.com/drive/folders/1OWl_Qd6a3q4qbmf-Trxjw27T42VdNW4w"> <button class="buttonPrimary" type="button">Google Drive</button> </a> </div>

## 📸 Preview

![](../../static/images/Pasted%20image%2020250122102512.png)
![](../../static/images/Pasted%20image%2020250122102516.png)

---

## 💬 Lời kết

Bộ deck này dành cho các bạn muốn cải thiện từ vựng qua các cấp độ từ A1+ đến C2. Hãy tải về và trải nghiệm! 🌟

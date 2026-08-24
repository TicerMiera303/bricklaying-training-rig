# Panduan Deploy BrickTutor AI (Percuma, guna Vercel)

Projek ini ada 2 bahagian:
- `public/index.html` — chat interface yang pelajar nampak (frontend)
- `api/chat.js` — server kecil yang simpan API key dan panggil Anthropic API (backend)

API key TIDAK pernah didedahkan kepada pelajar kerana ia disimpan di server (Environment
Variable), bukan dalam kod frontend.

---

## LANGKAH 1: Dapatkan Anthropic API Key

1. Pergi ke https://console.anthropic.com
2. Daftar/log masuk akaun (guna e-mel organisasi/kolej jika ada)
3. Pergi ke bahagian **API Keys** → **Create Key**
4. Salin API key tersebut (contoh: `sk-ant-...`) — simpan di tempat selamat, jangan kongsi

> Nota: Penggunaan API dikenakan bayaran mengikut jumlah penggunaan (bukan percuma
> sepenuhnya), tetapi kosnya sangat rendah untuk penggunaan kelas/bengkel. Anda boleh
> tetapkan had perbelanjaan (spend limit) dalam Anthropic Console.

---

## LANGKAH 2: Naikkan Kod ke GitHub

1. Pergi ke https://github.com → daftar akaun percuma jika belum ada
2. Klik **New repository** → nama contoh: `bricktutor-ai` → **Create repository**
3. Muat naik SEMUA fail dalam folder projek ini (`public/`, `api/`, `package.json`,
   `vercel.json`) ke repository tersebut — boleh guna butang "uploading an existing file"
   terus di GitHub (drag & drop semua fail/folder)

---

## LANGKAH 3: Deploy ke Vercel (Percuma)

1. Pergi ke https://vercel.com → **Sign Up** → pilih **Continue with GitHub**
2. Selepas log masuk, klik **Add New...** → **Project**
3. Pilih repository `bricktutor-ai` yang anda naikkan tadi → **Import**
4. Sebelum klik Deploy, pergi ke bahagian **Environment Variables**:
   - Name: `ANTHROPIC_API_KEY`
   - Value: (paste API key dari Langkah 1)
   - Klik **Add**
5. Klik **Deploy**
6. Tunggu 1-2 minit — Vercel akan beri anda pautan awam, contoh:
   `https://bricktutor-ai.vercel.app`

---

## LANGKAH 4: Uji

1. Buka pautan `https://bricktutor-ai.vercel.app` (atau nama projek anda) di telefon
2. Cuba tanya soalan seperti "Apa jenis kerangka pintu kayu?"
3. Jika berjaya dapat jawapan — sistem sudah online sepenuhnya

---

## LANGKAH 5: Jana QR Code untuk Pelajar

1. Pergi ke mana-mana penjana QR percuma, contoh: https://www.qr-code-generator.com
   atau https://qrcode.tec-it.com
2. Paste pautan Vercel anda (contoh: `https://bricktutor-ai.vercel.app`)
3. Muat turun/cetak QR code tersebut
4. Tampal/paparkan QR code di bengkel — pelajar scan guna kamera telefon untuk terus
   masuk ke BrickTutor AI

---

## Kemas kini nota pembelajaran pada masa hadapan

Kandungan nota (Knowledge Base) disimpan dalam fail `api/chat.js` di bahagian
`KNOWLEDGE_BASE`. Untuk tambah/kemas kini nota:
1. Edit teks dalam `KNOWLEDGE_BASE` di fail `api/chat.js`
2. Push perubahan ke GitHub
3. Vercel akan auto-deploy semula (tiada langkah tambahan diperlukan)

---

## Troubleshooting

| Masalah | Punca berkemungkinan | Penyelesaian |
|---|---|---|
| "ANTHROPIC_API_KEY belum ditetapkan" | Env var tak ditambah / salah nama | Semak Settings → Environment Variables di Vercel, pastikan nama tepat `ANTHROPIC_API_KEY` |
| "Ralat API: ..." | API key salah/tamat tempoh/tiada kredit | Semak status akaun di console.anthropic.com |
| Halaman kosong/404 | Struktur folder salah semasa upload | Pastikan `public/index.html` dan `api/chat.js` berada di path yang betul dalam repo |
| Jawapan lambat | Biasa untuk API AI, ambil masa 3-8 saat | Ini normal, tunggu sahaja |

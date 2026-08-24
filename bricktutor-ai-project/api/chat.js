// api/chat.js
// Serverless function (Vercel) - simpan ANTHROPIC_API_KEY sebagai Environment Variable
// di dashboard Vercel, JANGAN letak terus dalam kod ini.

const KNOWLEDGE_BASE = `
=== NOTA 2/7: MEMASANG KERANGKA PINTU (CCA 2123) ===

PENGENALAN
Kerangka pintu ialah bingkai yang mengelilingi bukaan tempat daun pintu dipasang. Terdiri
daripada dua tiang jenang tegak disambung kepada kepala jenang (kayu melintang).
Kerangka mesti cukup kuat untuk menanggung pintu. Bahan: Kayu, Logam, Plastik.

DOKUMEN KONTRAK
- Lukisan pembinaan (Construction Drawing): Pelan Arkitek/Pelan Bangunan, Pelan Lantai
  (lokasi pintu/tingkap), Jadual Pintu dan Tingkap (Door and Window Schedule - label, saiz,
  bahan, kuantiti), Lukisan Perincian (Detail Drawing).
- Spesifikasi: saiz standard pintu 900mm x 2100mm dan 750mm x 2100mm (untuk tandas), jenis
  bahan, cara bukaan, label pintu.
- Bill of Quantities (BQ): kerja yang perlu dilakukan kontraktor, kuantiti bahan/kerja, kadar
  harga per unit, jumlah amaun.

JENIS KERANGKA PINTU KAYU
1) Kerangka Padu:
   - Dua tiang jenang + satu kepala jenang + hias jenang.
   - Saiz kayu: 100mm x 75mm atau kayu nipis 38mm tebal (lebar = tebal tembok).
   - Tiang jenang ada tetingkat 12mm dalam / kayu penahan 12mm untuk terima daun pintu.
   - Kepala jenang disambung guna tanggam; ada tanduk/unjuran 38mm masuk ke tembok bata.
   - Kaki tiang jenang mudah reput basah (kawasan lembap cth bilik mandi) - guna batu alas
     150mm konkrit + penetap keluli untuk kukuhkan.
   - 2 kaedah pemasangan:
     a) BINA DALAM - kerangka didirikan dahulu sebelum tembok dibina, ditetap sementara
        dengan perembat pada kepala pintu, bahagian bawah pada gelegar lantai/pancang.
        Palam kayu dipasang setiap 300mm (dekat kaki jenang & kepala pintu), tiang jenang
        dipaku pada palam selepas tanduk dibina dalam tembok.
     b) BINA KEMUDIAN - kerangka dipasang selepas tembok siap. Selepas mortar keras, korek
        lubang 75mm-100mm setiap 300mm (sambungan dasar), sumbat palam kayu keras sehingga
        sendat, kerangka diletak antara hujung palam, uji kepugakan, paku tiang jenang pada
        palam, isi ruang dengan mortar simen.
   - Tambatan keluli jenis Fish Tail dipasang di permukaan belakang tiang jenang semasa
     kerja bata, pada setiap lapisan bata ke-3 atau ke-5.
2) Kerangka Kotak (Pelapik Jenang) - 3 jenis:
   - Pelapik Jenang Biasa: tembok tak lebih 215mm (1 bata), guna kayu 38mm tebal, tetingkat
     untuk daun pintu (atau papan 12mm jika bahan nipis).
   - Pelapik Jenang Bertetulang: untuk tembok tebal, guna kayu bersaiz kecil sebagai bingkai
     + papan 10-12mm untuk tetingkat/penahan pintu.
   - Pelapik Jenang Berbingkai: untuk dinding sangat tebal, guna panel + pemidang (tanggam
     lubang dan puting).

KERANGKA PINTU LOGAM (ALUMINIUM)
Kelebihan berbanding kayu: keratan bingkai lebih kecil, kepingan kaca lebih besar,
bebas kelembapan, merintang api, lebih ringan.

LINTEL / AMBANG PINTU
- Lintel menanggung beban di atas bukaan supaya beban tidak ditanggung kerangka pintu.
- Unjuran tanduk lintel tidak boleh kurang dari 112.5mm.
- 2 jenis: Lintel Tuang Dahulu, Lintel Tuang Di Situ.
- Mesti kuat, tahan tekanan/mampatan/tegangan/ricih tanpa retak/lentur.
- Kerja acuan lintel: guna papan 1"x4"x4'-0", tiang topang berbentuk T (kayu 2"x3", 2 unit,
  jarak 2'-0"), guna spirit level untuk kerataan, sudut mesti tepat 90 darjah, pasang besi
  tetulang sebelum tuang konkrit (nisbah bancuhan 1:2:4), buka acuan selepas 7 hari.

LANGKAH KERJA PEMASANGAN KERANGKA PINTU
1) Kaedah Bina Dalam: kerangka dipasang teliti sebelum kerja bata, jenis kayu ikut piawaian
   JKR, kepugakan diuji dengan aras spirit/batu ladung, ditupang tengah/atas/bawah, ambang
   konkrit (lintel) diletak atas kepala jenang semasa kerja bata dijalankan.
2) Kaedah Bina Kemudian: kerangka dipasang selepas tembok bata siap; ruang bukaan disediakan
   ikut pelan bangunan; lubang 75-100mm dikorek setiap 300mm (3 lapisan bata) untuk palam.

JENIS CAT & KEMASAN KAYU
- Cat Minyak (oil paint): 3 lapisan (asas, alas, kemasan); kelebihan - keras & tahan lasak;
  kelemahan - berbau, mudah terbakar, lambat kering.
- Cat Emulsi/Cair (berasaskan air): mudah dibersih air, tiada bau, sesuai permukaan
  basah/kering, tapi lambat kering & lemah lekatan pada permukaan menyerap.
- Cat Distemper (cat kapur): untuk papan siling, kadang tembok bata/konkrit.
- Cat Khas: Cat Aluminium (kayu bergetah & logam), Cat Bitumen (lindung karat, murah),
  Cat Kalis Kulat (kawasan lembap), Cat Tahan Api (ammonium fosfat).
- Syelek: resin dari 'lac bugs', larut dalam methylated spirit, untuk kilat kayu.
- Sampang: varnish minyak, kering 12-24 jam, tahan cuaca & air.
- Kemasan Lilin: keras (carnauba/ceresine), sederhana (lilin lebah), lembut (paraffin).
- Pelarut: Turpentine (cat kilat/lincau/sembur, lambat kering, jimat), Lacquer Thinner
  (cat besi & syelek, cepat kering), Spirit Metal (untuk syelek).

=== NOTA 4/7: MEMASANG PANEL PINTU (CCA 2123) ===

PRINSIP AM BINAAN PINTU
- Kandungan lembapan kayu: pintu luar 17%, pintu dalam 8%.
- Kayu mesti bebas kecacatan teruk (menggeleding, rekah, buku longgar, reput, serangga).
- Kayu keras untuk pintu: Cengal/Balau/Resak (pintu luar), Meranti/Punah/Kapur (pintu dalam).
- Tanggam sambungan mesti kuat, tahan cuaca.
- Saiz bukaan pintu minimum 900mm x 2100mm (untuk laluan perabot dsb).
- Perlu daya perintang cuaca - papan kalis tiris pada bingkai bawah daun pintu.

JENIS PANEL PINTU
1) Pintu Beroti Biasa: papan beroti (100-175mm, 20-32mm tebal) dicantum pada kepingan kayu
   belebas melintang (32mm tebal). Papan kecil lebih baik - kurang pengecutan.
2) Pintu Beroti dan Berembat: sama seperti di atas + perembat (kayu sama tebal dengan
   belebas) untuk kukuhkan & jamin kepersegian.
3) Pintu Beroti Berbingkai: paling kuat - papan jalur dipasang pada bingkai (susur atas,
   tengah, bawah + sisi bingkai).
4) Pintu Rata: kerap digunakan untuk perumahan/bangunan awam (untuk binaan dalam).
   a) Pintu Rata Padu: berlapis - 2 lapisan muka + empulur (tengah, dari kayu jalur
      bercantum tanggam temu).
   b) Pintu Rata Berbingkai: lebih murah & ringan - bingkai dalam + 2 papan lebar untuk
      tutup kedua-dua permukaan; dikemas dengan penutup bibir (juga untuk pasang engsel &
      buat tetingkat pintu berdaun kembar).
5) Pintu Panel: bilangan panel tak dihadkan; jika lebih 1 panel dipanggil pintu panel
   kembar (kembar dua, kembar tiga, dsb).

CARA MEMASANG DAUN PINTU
1) Ukur rangka pintu dengan pita pengukur, tanda pada daun pintu - pastikan ruang 3mm di
   kiri, kanan, atas; bahagian bawah sediakan ruang untuk pemasangan jubin. Potong jika
   daun pintu terlalu lebar.
2) Letak daun pintu pada rangka, baji bahagian bawah ikut ketebalan jubin.

PEMASANGAN ENGSEL
- Jarak engsel dari atas & bawah rangka pintu = 225mm; engsel tengah = setengah bahagian
  tinggi pintu.
- Guna pahat sesuai untuk lorek pada rangka pintu ikut ukuran & ketebalan engsel.
- Selepas engsel dipasang pada daun pintu, angkat ke rangka, baji bawah ikut ketebalan
  jubin, tanda & lorek engsel pada rangka, guna skru sesuai.

PEMASANGAN KUNCI PINTU
1) Tanda kedudukan kunci pada setengah ketinggian daun pintu.
2) Guna pahat ikut ukuran kotak kunci - lorek pada daun pintu & lorek kokot untuk plat
   hentaman, buat lubang untuk tuil & kunci, pasang gandar & plat penutup dengan skru
   sesuai.
- Jenis kunci: Kunci Permukaan (kotak kunci + selak kancing/selak kunci), Kunci Pemasangan
  Berlubang Persegi (plat hentaman + kotak kunci + selak kancing/kunci).

KERJA CAT PINTU & TINGKAP
- Fungsi cat: melindungi bahan dari cuaca/serangga/oksida, cantikkan pemandangan, mudahkan
  pembersihan.
- Dua jenis utama: berasaskan minyak/gloss (kayu/logam, licin & berkilat) dan berasaskan
  air/emulsion (dinding/siling, matte effect).
- Peralatan mengecat: Berus (kawasan sukar capai/bersudut), Roller/Penggelek (kawasan luas),
  Painting Tray, Scraper (kikis cat lama), Long Arm Roller (kawasan tinggi), Extension Pole,
  Alat Sembur (jimat masa/tenaga untuk ruang besar).
- Lapisan cat: Lapisan Asas/Prime Coat (pertama, mudah kering, tembusi permukaan kayu/plaster)
  -> Lapisan Alas/Under Coat (tentukan warna akhir tepat, isi lubang kecil, kering satu
  malam) -> Lapisan Kemasan/Finishing Coat.
- Cat Anti Karat/Oksida: untuk permukaan besi, kacau rata sebelum guna, permukaan mesti
  bersih/kering, sapuan rata untuk perlindungan terbaik.
- Langkah cat kayu (cat minyak/gloss): bersihkan permukaan (bebas minyak/habuk) -> tampal
  lubang dengan dempul/wood filler -> gosok kertas las -> sapu undercoat -> gosok semula
  bila kering -> sapu lapisan kemasan (sapuan/semburan).
- Mengecat ulang: (a) terus atas cat lama, atau (b) buang cat lama dulu (paint removal)
  kemudian ulang proses macam kayu baru.

HOUSEKEEPING & 3R
- Bersihkan semua peralatan & cat selepas guna (berus, bekas cat).
- Simpan & susun peralatan mengikut kategori dalam stor selepas dibersihkan.
- Pastikan tiada kesan cat meleleh.
- Tutup rapat lebihan cat, simpan jauh dari bahan mudah terbakar.
- Buang berus/roller yang rosak; guna beg sampah khas untuk cat, buang dalam tong tertutup.

=== NOTA 6/7: MEMERIKSA KERJA BATA (CCA 2123) ===

TUJUAN IKATAN BATA
Ikatan kuat, susunan cantik & menarik. Jenis biasa di Malaysia: Ikatan Sisi Bata, Ikatan
Kepala Bata, Ikatan Inggeris, Ikatan Flemish.

LUKISAN PEMBINAAN & SPESIFIKASI
3 jenis lukisan bangunan: Lukisan Struktural (piling, rasuk, tiang), Lukisan
Arkitektural/Senibina (pelan, keratan rentas, ketinggian bangunan), Lukisan
Perpaipan/Servis (sistem paip air masuk/keluar, gas, air sisa).

KAEDAH PEMERIKSAAN
- Berjadual: sela tertentu (tidak tetap), selepas pembinaan disiapkan.
- Berterusan: pemeriksa di tapak dari awal hingga siap projek, untuk elemen/item spesifik.

ALAT PEMERIKSAAN KERJA BATA
1) Laser Digital Distance Meter - ukur jarak (panjang/tinggi) guna sinaran laser, keputusan
   pada panel skrin.
2) Pelambab/Plumb Bob - pemberat keluli berbentuk kun digantung tali, hasilkan garis pugak
   tepat.
3) Timbang Air/Spirit Level - keluli/aluminium, ada selinder buih tengah & hujung, tanda
   posisi aras/pugak.
4) Pita Pengukur/Measuring Tape - ukur jarak yang pembaris berlipat tak boleh ukur.
5) Sesiku Pemidang/L-angle - dapatkan sudut tepat 90 darjah, besi bentuk "L" (600mm &
   300mm, lebar 35mm, tebal 3mm) - untuk penandaan pepenjuru & ketepatan penjuru tembok/tiang.
6) Chalk Line - tali cotton dalam bekas keluli/plastik, melalui serbuk kapur (merah/biru),
   dilentingkan pada tapak untuk tanda garisan.

JENIS BATA
1) Bata Tanah Liat:
   a) Bata Biasa (common bricks) - perlu dilepa, untuk kerja bawah tanah/tapak asas, lebih
      murah dari bata muka.
   b) Bata Muka (facing brick) - mutu tinggi, tak perlu dilepa, untuk kerja kecantikan.
2) Bata Kalsa (Kalsium Silikat) - patuh BS 187, campuran kapur+pasir+air. Kelebihan:
   kecantikan, ekonomi, kekuatan mampatan tinggi, penebatan bunyi, tahan lasak, perintang api.
3) Bata Simen - simen+pasir, nisbah lazim 1:8, saiz sama dengan bata tanah liat
   (216mm x 103mm x 65mm).
4) Blok Konkrit/Simen - 3 jenis:
   a) Blok Konkrit Padu - bahan padat >=75% isipadu (konkrit ringan/padat/berudara).
   b) Blok Konkrit Berongga - rongga/lubang lurus, bahan padat 50-75% isipadu.
   c) Blok Bersel - lubang tak tembus, bahan padat 50-70% isipadu, lubang dihalakan ke bawah.
5) Blok Ringan (Lightweight Block) - ketumpatan <1500 kg/m3, untuk tembok sekat (dalaman),
   penebatan memuaskan.

KRITERIA PEMERIKSAAN KERJA BATA (9 kriteria)
a) SAIZ - dimensi ruang (lintang & pugak), jenis ikatan bata; bata potong diletak di lokasi
   tidak jelas kelihatan (cth bukaan tingkap/pintu).
b) JAJARAN (Alignment) - sekata, seimbang, lurus, tidak berpiuh. Sambungan pugak (perpend)
   dianggap GAGAL jika sisihan melebihi 20mm setiap 2m tinggi tembok.
c) KEPUGAKAN - diuji dengan aras spirit pada kedua hujung sisi tembok/tiang. Untuk bangunan
   bertingkat, sisihan maksimum dibenarkan 25mm dari jumlah tinggi keseluruhan.
d) KELURUSAN - diuji pada permukaan hadapan guna kayu lurus, direntang antara hujung tembok
   (kedua arah - melintang & membujur).
e) KEPERSEGIAN (Squareness) - ditentukan di tapak dengan kaedah 3:4:5 guna sesiku keluli;
   juga diuji dengan ukur petak secara menyerong (diagonal) dari 4 penjuru. Jika perbezaan
   antara kepersegian serong panjang & pendek KURANG DARI lebar bukaan = persegi.
f) KEKUATAN - bergantung kekuatan bata, kekuatan/elastik mortar, kemahiran penerap bata,
   keseragaman bata & kaedah ikatan. Bata boleh capai kekuatan mampatan serendah 1600 psi
   hingga melebihi 15,000 psi (bata dibakar lebih baik). Mortar portland-cement-lime
   biasanya lebih kuat dari unit bata.
g) KELASAKAN (Durability) - bergantung mutu bata, mortar, rekabentuk sesuai cuaca, LKL
   (Lapisan Kalis Lembap) di lokasi sepatutnya. Mortar/LKL GAGAL jika tak memenuhi
   keperluan kod bangunan/spesifikasi.
h) KEBERSIHAN - kaedah "buttering" mortar pada kepala bata untuk permukaan bersih & bebas
   lelehan. GAGAL jika permukaan tidak ditampil dengan elok/ada tompokan.
i) KESAMAAN (Evenness) - keseragaman jenis & warna bata, ketebalan sambungan bawah (bed
   joint), sambungan pugak, aras - diuji guna tolok penanda.
j) JOINTING - tiada peraturan tetap ketebalan sambungan; bata tak seragam perlu sambungan
   sehingga 12mm; sambungan 6mm-10mm PALING KUAT untuk bata seragam.

TUJUAN PEMERIKSAAN
i) Pastikan pelan/spesifikasi diluluskan & kod/standard rujukan dipatuhi.
ii) Pastikan pemilik dapat apa yang dibayar.
iii) Kawal/atur aktiviti bantu proses pembinaan.
iv) Simpan rekod proses.

JENIS KECACATAN KERJA BATA (NCR - Non-Conformance Report)
- Ketidakpatuhan Utama (Major) - gagal keseluruhan fungsi asal/ciri keselamatan asas/
  objektif kualiti/kod amalan kejuruteraan/keperluan perundangan.
- Pemerhatian (Observation) - kekurangan tidak diklasifikasi NCR tapi berpotensi
  menjurus ketidakpatuhan jika tak diambil tindakan.
- Ketidakpatuhan Kecil (Minor) - gagal sebahagian fungsi asal/spesifikasi/piawaian/
  lukisan/prosedur, tidak diklasifikasi sebagai Major.
- Contoh NCR Major: kerja batu bata tidak kemas, rongga tidak diisi mortar sepenuhnya.

PERINGKAT PEMERIKSAAN (3 peringkat)
a) Peringkat Penerimaan - persediaan SEBELUM pemasangan (bahan bata & mortar, saiz lebar/
   tinggi, garisan tandaan; kelulusan kilang pengeluar bata, makmal ujian, simen, pasir).
b) Peringkat Pembinaan - SEMASA pemasangan (nisbah bancuhan mortar, kebersihan permukaan
   bata, tekstur bata, lapisan kalis lembap/DPC, lapisan exmet, tiang pengukuh/stiffener,
   bar pengikat/tie rod, dinding lurus/tegak/rata, jenis & cara susunan ikatan bata, ruang
   bukaan untuk kerja arkitek/sivil/M&E, dinding bata tak boleh dibina melebihi 1m dari
   bahagian lain pada satu masa).
c) Peringkat Produk Siap - SELEPAS pemasangan (tentukan ada/tiada kecacatan pada dinding
   bata, cadangan pembaikan jika ada kecacatan).

BORANG PEMERIKSAAN (JKR - Prosedur Pembinaan dan Penyeliaan Tapak Bina)
- Borang Pemeriksaan Kerja Bata (Peringkat Penerimaan)
- Borang Pemeriksaan Kerja Bata (Semasa Pembinaan)
- Borang Pemeriksaan Kerja Bata (Produk Siap)
- Borang Pemeriksaan (Perolehan Bahan)
- Borang Permohonan Pemeriksaan/Pengujian/Bahan/Mock-up (RFI)
- Site Memorandum
Setiap borang perlu ditandakan: (cek) jika mematuhi lukisan/spesifikasi, (X) jika tidak
mematuhi (rujuk borang NCR), (TB) jika tidak berkaitan.

KEPERLUAN PPE & KESELAMATAN DI BENGKEL
- Dapatkan keizinan guru/pensyarah sebelum masuk bengkel.
- Patuhi peraturan berpakaian di bengkel.
- Patuhi langkah penggunaan mesin yang betul; jangan bermain-main/bergurau semasa di bengkel.
- Dilarang bawa bahan terlarang (peralatan tajam, makanan) ke dalam bengkel.
- Pastikan pengudaraan & pencahayaan baik (pintu/tingkap dibuka semasa kerja bengkel).
- Laporkan kemalangan kepada guru dengan segera.
- Kemaskan bengkel & susun semula peralatan di tempat asal selepas kerja siap.
- PPE yang perlu: baju bengkel, alat pelindung mata, alat pelindung pendengaran, kasut
  keselamatan, sarung tangan, alat pelindung hidung & mulut, topi keselamatan.
- Peralatan rosak mesti dilaporkan kepada guru/pensyarah, bukan digunakan.
`;

const SYSTEM_PROMPT = `Anda ialah BrickTutor AI, satu AI Learning Assistant yang direka khas untuk
membantu pelajar TVET mempelajari kemahiran bricklaying dan asas masonry dalam Teknologi
Pembinaan (Kursus CCA 2123 - Kerja Bata, Pemasangan Pintu dan Tingkap). Tujuan utama anda
ialah membimbing pelajar sebelum, semasa, dan selepas aktiviti amali bricklaying.

PERATURAN PALING PENTING - SKOP JAWAPAN
Anda HANYA boleh menjawab soalan berdasarkan KNOWLEDGE BASE di bawah, yang diambil terus
daripada nota pembelajaran rasmi kursus CCA 2123. JANGAN reka jawapan atau guna pengetahuan
am di luar KNOWLEDGE BASE ini untuk fakta teknikal, ukuran, piawaian, atau prosedur.

Jika soalan pelajar TIDAK dijawab dalam KNOWLEDGE BASE:
Nyatakan dengan jelas: "Maaf, maklumat ini tiada dalam nota pembelajaran yang dimuat naik
buat masa ini. Sila rujuk pensyarah anda atau piawaian rasmi (JKR/BS) untuk maklumat lanjut."
Jangan cuba teka atau anggar jawapan teknikal.

BAHASA: Jawab dalam Bahasa Melayu secara default. Jika pelajar tanya dalam English, jawab
dalam English. Guna bahasa mudah & jelas sesuai untuk pelajar TVET.

PENDEKATAN MENGAJAR: Bila sesuai, strukturkan jawapan - (1) Penerangan ringkas konsep,
(2) Prosedur/langkah yang betul, (3) Kesilapan biasa (jika ada dalam KB), (4) Peringatan
keselamatan (jika berkaitan), (5) Tip praktikal ringkas, (6) Satu soalan semakan pendek
di akhir untuk sahkan kefahaman.

UNTUK PROSEDUR AMALI: strukturkan dengan Persediaan, Alatan/Bahan, Langkah demi langkah,
Semakan kualiti, Kesilapan biasa, Langkah keselamatan.

AI TUTOR MODE:
- "Macam mana nak buat..." -> beri prosedur langkah demi langkah dari KB.
- "Kenapa..." -> terangkan punca & penyelesaian dari KB.
- "Betul ke..." -> bantu pelajar semak sendiri kefahaman mereka (pandu, jangan terus beri
  jawapan penuh).
- Jika pelajar terangkan kesilapan yang mereka buat, kenal pasti punca berkemungkinan
  (rujuk KB) & berikan tindakan pembetulan praktikal.

TRAINING RIG MODE: Jika pelajar sebut "SMART BRICK AI Training Rig", kaitkan dengan
pembelajaran praktikal - galakkan Observe (Perhati) -> Practice (Praktik) -> Check (Semak)
-> Correct (Betulkan) -> Repeat (Ulang).

FEEDBACK MODE: Jika pelajar terangkan/gambarkan kerja bata mereka, beri maklum balas dengan
struktur: OBSERVATION (apa yang diperhatikan), STRENGTH (apa yang bagus), IMPROVEMENT (apa
perlu diperbaiki), ACTION (apa perlu buat seterusnya). Jangan dakwa penilaian 100% tepat -
ingatkan ia pemerhatian umum sahaja, pengesahan akhir tetap dari pensyarah.

SAFETY: Sentiasa ingatkan prosedur keselamatan bengkel/tapak bila berkaitan - PPE,
pengendalian alatan selamat, mengangkat selamat, housekeeping, amalan kerja selamat. Jangan
sekali-kali galakkan amalan tidak selamat.

NADA: Mesra, menggalakkan, profesional, praktikal, ringkas. Jangan bebankan pelajar baru
dengan istilah teknikal berlebihan tanpa penjelasan.

MATLAMAT UTAMA: Anda BUKAN pengganti pensyarah. Anda ialah pembantu pembelajaran yang
menyokong pelajar - pensyarah kekal sebagai pengajar dan penilai utama. Sentiasa galakkan
pelajar rujuk pensyarah untuk pengesahan/penilaian rasmi.

=== KNOWLEDGE BASE (SUMBER RASMI SAHAJA) ===
${KNOWLEDGE_BASE}
=== TAMAT KNOWLEDGE BASE ===`;

export default async function handler(req, res) {
  // Benarkan CORS supaya frontend (mana-mana asal) boleh panggil endpoint ini
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Field "messages" diperlukan (array)' });
    }

    // Hadkan panjang sejarah perbualan supaya tidak terlalu besar
    const trimmedMessages = messages.slice(-20);

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'ANTHROPIC_API_KEY belum ditetapkan di server' });
    }

    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages: trimmedMessages
      })
    });

    const data = await anthropicRes.json();

    if (!anthropicRes.ok) {
      console.error('Anthropic API error:', data);
      return res.status(anthropicRes.status).json({ error: data?.error?.message || 'Ralat API Anthropic' });
    }

    const reply = Array.isArray(data.content)
      ? data.content.map(b => b.text || '').filter(Boolean).join('\n')
      : '';

    return res.status(200).json({ reply: reply || 'Maaf, tiada jawapan diterima.' });

  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: err.message || 'Ralat pelayan tidak diketahui' });
  }
}

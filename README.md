# 🏢 Otomatisasi Chat Kos-Kosan (Real World Project)

Repositori ini berisi implementasi sistem otomatisasi pesan untuk manajemen kos-kosan. Proyek ini bertujuan untuk mempermudah pemilik/pengelola kos dalam mengirimkan tagihan, pengingat, dan berbagai informasi lainnya kepada penghuni kos secara otomatis menggunakan script WhatsApp (atau platform chat lainnya) yang terhubung dengan data di dalam Spreadsheet Excel.

## 🌟 Fitur Utama

- **Pengingat Tagihan Otomatis:** Mengirim pesan pengingat pembayaran ke penghuni kos secara terjadwal berdasarkan data dari file Excel.
- **Broadcast Informasi:** Memudahkan pengiriman informasi penting (seperti pemeliharaan fasilitas, aturan baru, dll) ke seluruh penghuni.
- **Integrasi Spreadsheet:** Mengambil data penghuni, status pembayaran, dan nomor telepon langsung dari `Spreadsheet Kos_ An Otomatis.xlsx`.
- **Template Pesan:** Mendukung format pesan yang dapat disesuaikan dengan nama penghuni dan nominal tagihan.

## 📂 Struktur Folder & File

- `Automatisasi kos simple.js`: Script utama yang berisi logika untuk memproses data dari spreadsheet dan mengeksekusi pengiriman pesan otomatis.
- `Spreadsheet Kos_ An Otomatis.xlsx`: File database utama yang menyimpan data penghuni, tanggal jatuh tempo, status pembayaran, dan informasi kontak.

## 🚀 Cara Penggunaan (Setup)

1. **Clone Repository:**
   ```bash
   git clone <URL_REPO_ANDA>
   cd "otomatisasi ai/New folder"
   ```

2. **Persiapkan Data:**
   Buka file `Spreadsheet Kos_ An Otomatis.xlsx` dan pastikan data penghuni (Nama, Nomor WA, Tanggal Tagihan, Jumlah Tagihan, Status) sudah benar dan terisi.

3. **Install Dependencies (jika ada):**
   Pastikan Anda sudah menginstal Node.js di komputer Anda. Jika script ini menggunakan library khusus (seperti `whatsapp-web.js` atau `xlsx`), jalankan:
   ```bash
   npm install
   ```
   *(Catatan: pastikan ada file package.json jika menggunakan npm, jika belum, Anda bisa menginisialisasinya dengan `npm init -y`)*

4. **Jalankan Script:**
   ```bash
   node "Automatisasi kos simple.js"
   ```

## 🛠️ Teknologi yang Digunakan

- **JavaScript / Node.js:** Sebagai bahasa pemrograman inti untuk otomatisasi.
- **Excel / Spreadsheet:** Sebagai basis data (database) sederhana dan mudah dikelola untuk manajemen penghuni kos.

## 📝 Catatan Tambahan

Proyek ini dirancang secara khusus untuk menjawab masalah nyata (real world) dalam manajemen properti skala kecil-menengah agar pengelolaan penagihan menjadi lebih tertib, cepat, dan efisien.

---

*Dibuat untuk mempermudah manajemen kos-kosan secara otomatis.*

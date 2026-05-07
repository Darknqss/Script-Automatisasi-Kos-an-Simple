function cekDanKirimTagihan() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getDataRange().getValues();

    var hariIni = new Date();
    var tglSekarang = hariIni.getDate();
    var bulanSekarang = hariIni.getMonth();
    var tahunSekarang = hariIni.getFullYear();

    // Mencari tahu jumlah hari di bulan ini
    var jumlahHariBulanIni = new Date(tahunSekarang, bulanSekarang + 1, 0).getDate();

    var tokenApi = "YOUR_FONNTE_TOKEN_HERE";
    var noRekening = "YOUR_BANK_ACCOUNT_HERE";

    Logger.log("--- Memulai Patroli Bot ---");
    Logger.log("Hari ini tanggal: " + tglSekarang);

    for (var i = 1; i < data.length; i++) {
        // Memastikan data dibaca sebagai angka/teks yang benar
        var noWa = data[i][1] ? data[i][1].toString() : "";
        var tglJatuhTempo = Number(data[i][2]); // Memaksa jadi angka murni
        var nominal = data[i][3];

        if (!tglJatuhTempo || noWa === "") continue; // Lewati jika baris kosong

        var selisih;
        if (tglJatuhTempo >= tglSekarang) {
            selisih = tglJatuhTempo - tglSekarang;
        } else {
            selisih = (jumlahHariBulanIni - tglSekarang) + tglJatuhTempo;
        }

        // Lampu Senter: Melihat hasil hitungan di setiap baris
        Logger.log("Mengecek Baris " + i + " | Target Tgl: " + tglJatuhTempo + " | Selisih: " + selisih);

        var pesan = "";
        var salam = "Om Swastyastu, Selamat pagi Kak. Mohon maaf mengganggu waktunya.\n\n";
        var perkenalan = "Perkenalkan nama saya (nama anda)";
        var penutup = `\n\nPembayaran dapat ditransfer melalui rekening:\n*${noRekening}*\n\nTerima kasih 🙏`;

        if (selisih === 7) {
            pesan = salam + perkenalan + `Izin mengingatkan nggih, pembayaran kos sebesar ${nominal} akan jatuh tempo dalam 7 hari lagi (tanggal ${tglJatuhTempo}).` + penutup;
        } else if (selisih === 3) {
            pesan = salam + `Izin mengingatkan lagi nggih, pembayaran kos sebesar ${nominal} akan jatuh tempo dalam 3 hari lagi (tanggal ${tglJatuhTempo}).` + penutup;
        } else if (selisih === 1) {
            pesan = salam + `Sekadar mengingatkan, besok sudah jadwalnya untuk pembayaran kos sebesar ${nominal}.` + penutup;
        } else if (selisih === 0) {
            pesan = salam + `Hari ini adalah jadwal jatuh tempo untuk pembayaran kos sebesar ${nominal}. Ditunggu konfirmasinya nggih.` + penutup;
        }

        if (pesan !== "") {
            var payload = {
                "target": noWa,
                "message": pesan
            };

            var options = {
                "method": "post",
                "headers": { "Authorization": tokenApi },
                "payload": payload,
                "muteHttpExceptions": true
            };

            var balasanFonnte = UrlFetchApp.fetch("https://api.fonnte.com/send", options);
            Logger.log(">>> PESAN TERKIRIM KE: " + noWa + " | Balasan API: " + balasanFonnte.getContentText());
        }
    }
    Logger.log("--- Patroli Selesai ---");
}

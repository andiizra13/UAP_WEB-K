list_barang = [
    { kode: "001", barang: "Liquid", harga: 10000 },
    { kode: "002", barang: "pod foom", harga: 128000 },
    { kode: "003", barang: "artha rda", harga: 150000 },
  ];
  
  var listBarangTabel = document.getElementById("listTabelBarang");
  
  list_barang.forEach(function (item) {
    // destruction
    var { kode, barang, harga } = item;
    var row = listBarangTabel.insertRow(listBarangTabel.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
  
    cell1.innerHTML = kode;
    cell2.innerHTML = barang;
    cell3.innerHTML = "Rp" + harga.toFixed(2);
  });
  
  function tambahkanBarang() {
    var kodeBarang = document.getElementById("kodeBarang").value;
    var banyakBarang = document.getElementById("banyakBarang").value;
    var selectedItem = list_barang.find((item) => item.kode === kodeBarang);
    var totalPembayaran;
    if (selectedItem) {
      totalPembayaran = selectedItem.harga * banyakBarang;
      alert("Total pembayaran adalah: " + totalPembayaran.toFixed(2));
  
      var uang = prompt("masukkan uang user:");
      var kembalian = uang - totalPembayaran;
      if (uang < totalPembayaran) {
        alert("uang anda tidak cukup");
      } else {
        alert(
          "Uang pembeli: " +
            uang +
            "\nTotal bayar: " +
            totalPembayaran +
            "\ntotal kembalian" +
            kembalian
        );
      }
    } else {
      alert("Barang dengan kode " + kodeBarang + " tidak ditemukan");
    }
  }
  
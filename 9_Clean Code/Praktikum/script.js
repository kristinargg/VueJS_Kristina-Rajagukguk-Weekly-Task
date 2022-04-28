class kendaraan {
  constructor(totalRoda, kecepatanPerJam) {
    this.totalRoda = totalRoda;
    this.kecepatanPerJam = kecepatanPerJam;
  }
}

class mobil extends kendaraan {
  tambahKecepatan(kecepatanPerJam, kecepatanBaru) {
    this.kecepatanBaru = kecepatanBaru;
    kecepatanPerJam = this.kecepatanPerJam + this.kecepatanBaru;
  }
  berjalan() {
    tambahKecepatan(10);
  }
}

mobilCepat = new mobil(0, 0, 0);
mobilLamban = new mobil(0, 0, 0);

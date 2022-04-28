import {
  penjumlahan,
  pengurangan,
  pembagian,
  perkalian,
  sisaBagi,
  rataRata,
  luasPersegi,
  luasLingkaran,
  luasKubus,
  volumeKubus,
} from "@/utils/index.js";

describe("Melakukan penjumlahan", () => {
  test("Penjumlahan dua bilangan positif", () => {
    expect(penjumlahan(2, 7)).toBe(9);
  });
  test("Penjumlahan dua bilangan negatif", () => {
    expect(penjumlahan(-2, 7)).toBe(5);
  });
  test("Penjumlahan dua non numerik", () => {
    expect(penjumlahan("3", "7")).toBe("37");
  });
});

describe("Melakukan pengurangan", () => {
  test("pengurangan dua bilangan positif", () => {
    expect(pengurangan(5, 7)).toBe(-2);
  });
  test("pengurangan dua bilangan negatif", () => {
    expect(pengurangan(5, -7)).toBe(12);
  });
  test("pengurangan dua non numerik", () => {
    expect(pengurangan("5", "7")).toBe(-2);
  });
});

describe("Melakukan pembagian", () => {
  test("pembagian dua bilangan positif", () => {
    expect(pembagian(12, 6)).toBe(2);
  });
  test("pembagian dua bilangan negatif", () => {
    expect(pembagian(49, -7)).toBe(-7);
  });
  test("pembagian dua non numerik", () => {
    expect(pembagian("12", "4")).toBe(3);
  });
});

describe("Melakukan perkalian", () => {
  test("perkalian dua bilangan positif", () => {
    expect(perkalian(2, 6)).toBe(12);
  });
  test("perkalian dua bilangan negatif", () => {
    expect(perkalian(7, -7)).toBe(-49);
  });
  test("perkalian dua non numerik", () => {
    expect(perkalian("-12", "4")).toBe(-48);
  });
});

describe("Melakukan sisaBagi", () => {
  test("sisaBagi dua bilangan positif", () => {
    expect(sisaBagi(9, 6)).toBe(3);
  });
  test("sisaBagi dua bilangan negatif", () => {
    expect(sisaBagi(-6, -2)).toBe(-0);
  });
  test("sisaBagi dua non numerik", () => {
    expect(sisaBagi("12", "4")).toBe(0);
  });
});

describe("Melakukan rataRata", () => {
  test("rataRata lima bilangan positif", () => {
    expect(rataRata(1, 2, 3, 4, 5)).toBe(3);
  });
  test("rataRata lima bilangan negatif", () => {
    expect(rataRata(-6, -2, -9, -3, -4)).toBe(-4.8);
  });
  test("rataRata lima non numerik", () => {
    expect(rataRata("12", "4", "1", "3", "8")).toBe(24827.6);
  });
});

describe("Melakukan luasPersegi", () => {
  test("luasPersegi dua bilangan positif", () => {
    expect(luasPersegi(12, 6)).toBe(72);
  });
  test("luasPersegi dua bilangan negatif", () => {
    expect(luasPersegi(-7, -7)).toBe(49);
  });
  test("luasPersegi dua non numerik", () => {
    expect(luasPersegi("12", "4")).toBe(48);
  });
});

describe("Melakukan luasLingkaran", () => {
  test("luasLingkaran dua bilangan positif", () => {
    expect(luasLingkaran(3.14, 6)).toBe(113.04);
  });
  test("luasLingkaran dua bilangan negatif", () => {
    expect(luasLingkaran(3.14, -7)).toBe(153.86);
  });
  test("luasLingkaran dua non numerik", () => {
    expect(luasLingkaran("3.14", "2")).toBe(12.56);
  });
});

describe("Melakukan luasKubus", () => {
  test("luasKubus dua bilangan positif", () => {
    expect(luasKubus(4, 6)).toBe(144);
  });
  test("luasKubus dua bilangan negatif", () => {
    expect(luasKubus(4, -7)).toBe(-168);
  });
  test("luasKubus dua non numerik", () => {
    expect(luasKubus("4", "4")).toBe(96);
  });
});
describe("Melakukan volumeKubus", () => {
  test("volumeKubus dua bilangan positif", () => {
    expect(volumeKubus(6, 6, 6)).toBe(216);
  });
  test("volumeKubus dua bilangan negatif", () => {
    expect(volumeKubus(4, -4, -7)).toBe(112);
  });
  test("volumeKubus dua non numerik", () => {
    expect(volumeKubus("3", "3", "3")).toBe(27);
  });
});

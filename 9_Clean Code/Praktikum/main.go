package main

func main (){
	mobilCepat := mobil{}
	mobilCepat.berjalan()

	mobilLamban := mobil{}
	mobilLamban.berjalan()
}
type kendaraan struct{
	totalRoda int
	kecepatanPerJam int
}
type mobil struct {
	kendaraan 
}
func tambahKecepatan(kecepatanBaru int){
	m.kecepatanPerJam = m.kecepatanPerJam + kecepatanBaru
}
func ((m * mobil) berjalan()){
	m.tambahKecepatan(10)
}
Detail perkerjaan:

- JWT Authentication & Roles (Admin, Tutor/mata pelajaran, Student) (signup/login/logout)
- Membuat dan mengubah sistem menyimpan gambar dan data yang di perlukan menjadi lebih efisien dan secure
- Mengintegrasikan backend ke frontend supaya functional
- Membuat page dengan logic seperti ini

	1. Seperti di moodle soal akan muncul setelah tombol start ditekan
	2. Suatu PDF akan muncul dan mereka harus mengerjakannya di kertas/tablet (yg pasti tulisan tangan) dengan time limit yang sesuai untuk pertanyaan yg diberikan dan kumpul
	3. lalu mereka buat video dan menjelaskan cara kerja mereka selayaknya mengajar ke peers yg lain dan submit ke kita via link youtube/gdrive supaya dapat direview
	4. mereview cara kerja mereka dan melihat apakah mereka layak untuk menjadi tutor atau tidak

-  Suatu page blog seperti reddit dimana kumpulan request materi akan muncul dan user bisa melakukan up vote dan down vote serta filter untuk melihat apa yang paling banyak di request sesuai upvote/downvote



  **Explanation:**

  - data user seperti nama, jenjang apa, nama sekolah/uni, nilai(setelah ujian registrasi tutor), subject(materi apa yang diajarkan), tgl menjadi tutor resmi.



**New Brief:**

1. [x] Pas pilih pilihan pelajaran di pelajaran pilihanku, di-directnya ke join as a tutor; pelajarannya hilang pas kita balik
- [x] Seharusnya: user di-direct ke list sesi per subject; pelajaran pilihannya gak hilang
2. [x] Setelah sign-up, gaada yang berubah.
- [x] Seharusnya: Di-direct ke login page, supaya bisa login atau bisa setelah sign up auto terlogin
3. [x] Setelah sign in, bisa dimunculkan tombol log outnya
4. [x] Ada sistem downvote
- [x] Seharusnya: diremove aja, jadi only upvote
5. [x] Di bagian upvote materi, seharusnya materi dengan upvote terbanyak naik ke paling atas (di-sort dari atas yang paling banyak sampai ke bawah yang paling sedikit upvotenya)
6. [x] Di tutor hub, UI designnya bisa di-improve, and tambah bagian dimana lgsg dilead ke sistem sertifikasi
7. [x] Kalau sudah tersign-in, pelajaran yang dipilih user masih ga ke-save di account usernya
- [x] Seharusnya: Pelajaran yang dipilih user disave, supaya setelah dia logout dan login lagi, pelajaran yang dia pilih masih muncul di dashboard pelajaran pilihanku
8. [x] ⁠Pas submit di form sign-up student, masih bisa disubmit formnya walaupun bukti screenshotnya belum ada
- [x] Seharusnya: bagian upload bukti screenshot required
9. [x] ⁠Sidebarnya navbar kalau dilihat di hp, tidak bisa tertutup karena tombol x-nya ketumpuk oleh sidebar
10. [x] ⁠Pas mau nambah pelajaran (yang di bagian sidebar), tulisannya "Tutor's Library"
- [x] Seharusnya: “Pelajaran yang tersedia”

- [x] Untuk bagian pelajaran pilihanku, setelah mata pelajaran sudah dipilih oleh murid dan murid mempencet card mengenai subjectnya ex: Fisika, mereka dapat melihat list sesi yang sudah diposting oleh tutor" fisika yang dimana ada limit murid yg diterima dan juga batas waktu pendaftaran yaitu sebelum kelasnya dimulai. Setelah kelasnya mulai, hanya murid yang terdaftar dapat melihat isi dalam informasi mengenai kelasnya lagi. (ada di Figma). Saat sesi yang ada di pilih/pencet, suatu page yang auto generated akan muncul yang berisi tentang data tutornya "nama, edukasi, achievements, subject yang diajarkan, deskripsi tentang apa materi-materi dalam subject yg diajarkan"lalu murid bisa melakukan registrasi ke itu setelah menekan tombol join. (akan diupdate malam ini di figma)

- [x] Suatu user tidak bisa join ke dalam kelasnya jika kapasitas kelasnya sudah penuh, jumlah kapasitasnya sudah di tentukan oleh tutor saat tutor membuat kelas tutornya.

- [x] sesi pelajaran yang sudah dipilih akan muncul di atas dashboard pelajaran pilihanku dengan teratur sesuai dengan jadwal yang ada misal; 19/8 10:00 fisika, 19/8 12:00 kimia. card untuk jadwal kelasnya akan tertera sesuai tanggal dan jam kelasnya.

Role Admin:
All page and data
diberi role secara manual dalam code backend


Role tutor:

Ketentuan:
Harus menjadi member terlebih dahulu dan lulus kualifikasi sesuai mata pelajarannya.

Buat role tutor per subjek (Tutor Matematika, Tutor Fisika, Tutor Kimia, Tutor Biologi, Tutor Economy, Tutor Bahasa Inggris. Ini berfungsi supaya tutor hanya bisa membuat kelas sesuai kualifikasi yang mereka ada. Kalau tidak, mereka tidak akan bisa melihat opsi subject yg belum terkualifikasi sesuai dengan dropdown dalam page jadwalkan sesi.

Role member:
bisa melihat page semua page kecuali jadwalkan sesi.

Role public:

Bisa melihat semua page KECUALI: SESI PILIHANKU, REQUEST MATERI, UP VOTE PAGE, JADWALKAN SESI.


* [ ] Untuk tutor, harusnya bisa akses student punya course
* [ ] Tolong cek apakah carousel di homepage sudah dipull dari GitHub atai belum

Sign Up
* [x] Bagian Program yang ingin diikuti kan tidak bisa disubmit jika belum diisi, seharusnya pop-upnya bisa diganti dengan “pilih minimal 1 program yang ingin diikuti”
* [x] Email yang fiktif masih bisa disubmit, seharusnya user cuma bisa memasukkan email yang beneran ada
* [x] Tambah combobox grouped untuk field Tingkat
* [x] Tambah combobox untuk Asal Sekolah

Upvote Materi
* [x] Page request/upvote materi harusnya dibuat per mata pelajaran, bukan materi dari semua pelejaran digabung jadi satu. Jadi misal aku pencet mapel “Fisika” di page P2P Sessions, lalu aku klik tombol “Request Materi”, baru diarahkan ke page upvote materi, tapi page upvote materi khusus mata pelajaran Fisika.
* [x] Berarti di form, mata pelajaran diilangin aja (otomatis langsung keinput mata pelajarannya)
* [x] Image di Form opsional, dan waktu coba submit dengan image muncul alert “Client Error”
* [x] Frontendnya tolong diperbaiki, karena kalau screen sizenya dikecilin, tombol upvotenya bisa beberapa pindah ke bawah
* [x] Sistem sortingnya belum otomatis, harus di ganti dulu sistem sortnya di tombol filter lalu dibalikin ke sistem sort yang diinginkan baru ter-sort
* [x] Setelah materi di-upvote, harusnya text “upvote” berubah jadi cancel upvote
* [x] Downvote terbanyak dan terdikit harusnya dihilangin

Jadwalkan Sesi
* [x] Seharusnya tidak bisa memilih tanggal & waktu di masa lalu
* [x] Masih belum bisa disubmit
* [x] Series seharusnya ada minimal 2 sesi

P2P Sessions
* [x] Bagian sesi pilihanku, kalau belum ada isinya, dikosongin aja

P2P Sessions - Registrasi Sesi Lainnya
* [x] Formnya diilangin cuma ada tombol untuk pergi ke halaman request materi/upvote materi
* [x] Bagian Sesi Pilihanku, design wave dan dashboard Sesi Pilihanku-nya ikutin halaman P2P Sessions aja.

Tutor Hub
* [x] Tombol “Portofolio” belum nge-direct user ke page tutornya
* [x] Tambah editor untuk tambah/edit/delete Portfolio Tutor di Admin page


Tambahan
Upvote Materi
* [x] Setelah request, jumlah upvote otomatis 1

Untuk role yang sudah dibuat (Admin, Tutor, Member/Student, Guest ( org yang blm menjadi member) )
* [ ] tlg cek lagi mereka bisa akses apa sesuai yang sudah di beritahukan sebelumnya

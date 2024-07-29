  <style>
        /* Style untuk pairingbox */
        .pairingbox {
z-index: 1000;
background-color: white;
            position: fixed;
            bottom: 10px; /* Jarak dari bawah layar */
            left: 10px; /* Jarak dari tepi kiri layar */
            right: 10px; /* Jarak dari tepi kanan layar */
            width: calc(100% - 20px); /* Lebar pairingbox dengan jarak kiri dan kanan */
            height: 50vh;
            border-radius: 25px; /* Radius sudut atas dan bawah */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px; /* Padding di dalam pairingbox */
            box-sizing: border-box; /* Memastikan padding termasuk dalam lebar total */
            justify-content: flex-end; /* Menempatkan elemen di bagian bawah */
            opacity: 0; /* Mulai dengan opacity 0 untuk animasi kemunculan */
            transform: translateY(20px); /* Mulai dengan posisi sedikit lebih rendah untuk animasi kemunculan */
            animation: slideIn 0.5s forwards; /* Menambahkan animasi kemunculan */
            animation-delay: 1s; /* Penundaan sebelum animasi dimulai */
        }

        .pairingbox.hidden {
            display: none; /* Menyembunyikan popup */
        }

        .pairingbox h1 {
            font-size: 34px;
            padding: 0;
            text-align: center;
        }

        .pairingbox p {
            font-size: 16px;
            margin: 0 0 10px 0; /* Jarak di atas tombol */
            padding: 0;
            text-align: center;
            color: gray;
        }

        .button-pair {
            display: flex;
            gap: 10px; /* Jarak antara tombol */
            width: 100%; /* Lebar kontainer tombol sesuai lebar pairingbox */
            justify-content: center; /* Memusatkan tombol */
            margin-top: 20px; /* Jarak atas untuk memberi ruang dengan deskripsi */
        }

        .pairingbox .action-button {
            padding: 15px; /* Naikin padding untuk tinggi tombol */
            background: #fff; /* Warna tombol putih */
            color: #000; /* Warna teks tombol hitam untuk kontras */
            text-decoration: none;
            border-radius: 8px; /* Radius tombol lebih sedikit membulat */
            text-align: center;
            width: 45%; /* Lebar tombol 45% dari lebar kontainer */
            min-width: 120px; /* Lebar minimum tombol */
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #ccc; /* Garis border abu-abu */
            box-shadow: none; /* Menghilangkan bayangan tombol */
        }

        /* Style untuk businesscard */
        .businesscard {
            width: 150px; /* Lebar card */
            height: 100px; /* Tinggi card */
            margin: 20px 0; /* Jarak atas dan bawah card */
            perspective: 1200px; /* Menambahkan perspektif untuk efek 3D */
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .card-inner {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            animation: flip 5s infinite; /* Menambahkan animasi flip otomatis */
            border-radius: 10px; /* Radius untuk card inner */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Bayangan halus */
            transform: rotateX(10deg) rotateY(10deg); /* Kemiringan awal */
        }

        @keyframes flip {
            0% {
                transform: rotateY(10deg) rotateX(10deg); /* Memulai dari posisi normal dengan kemiringan */
            }
            25% {
                transform: rotateY(100deg) rotateX(10deg); /* Putaran cepat ke 100 derajat dengan kemiringan */
            }
            50% {
                transform: rotateY(180deg) rotateX(10deg); /* Memutar ke 180 derajat dengan kemiringan */
            }
            75% {
                transform: rotateY(210deg) rotateX(10deg); /* Putaran cepat ke 210 derajat dengan kemiringan */
            }
            100% {
                transform: rotateY(360deg) rotateX(10deg); /* Memutar penuh kembali ke posisi awal dengan kemiringan */
            }
        }

        @keyframes slideIn {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .card-side {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 10px; /* Radius yang sama untuk sisi depan dan belakang */
        }

        .card-front {
            background: url('img/ahtera_20240728_212614_0000.png') no-repeat center center; /* Ganti dengan URL gambar depan */
            background-size: cover;
        }

        .card-back {
            background: url('img/ahtera_20240728_212614_0001.png') no-repeat center center; /* Ganti dengan URL gambar belakang */
            background-size: cover;
            transform: rotateY(180deg);
        }
</style>

    <div class="pairingbox" id="pairingbox">
        <h1>ahteraCard</h1>
        <div class="businesscard">
            <div class="card-inner">
                <div class="card-side card-front"></div>
                <div class="card-side card-back"></div>
            </div>
        </div>
        <p>You are holding the business card of<br> Mr M Aidil Alamsyah, CEO of Ahtera</p>
        <div class="button-pair">
            <a href="#" class="action-button" id="cancel-button">Cancel</a>
            <a href="priv/father.html" class="action-button">View</a>
        </div>
    </div>

   <script>
      // JavaScript untuk menghilangkan popup saat tombol Cancel diklik
document.getElementById('cancel-button').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah aksi default dari link
    document.getElementById('pairingbox').style.display = 'none'; // Menghilangkan pairingbox
});
    </script>
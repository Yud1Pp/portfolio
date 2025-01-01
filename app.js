// emailSend
function sendEmail() {
  // emailSend
  const form = document.forms["contact-form"];

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Ambil elemen tombol
    const bttnSubmit = document.querySelector(".button-submit");
    const bttnLoading = document.querySelector(".button-loading");
    const alert = document.querySelector(".alert-success");

    // Toggle tombol loading
    bttnLoading.classList.toggle("hidden");
    bttnSubmit.classList.toggle("hidden");

    // Ambil data dari form
    let parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    // Kirim email menggunakan EmailJS
    emailjs
      .send("service_ryr6x83", "template_tbru5t2", parms)
      .then((result) => {
        console.log("Terkirim: ", result);

        // Reset form setelah email berhasil dikirim
        form.reset();

        // Toggle tombol loading kembali
        bttnLoading.classList.toggle("hidden");
        bttnSubmit.classList.toggle("hidden");
        alert.classList.toggle("hidden");

        // Tampilkan pesan sukses
        // alert("Email berhasil dikirim!");
      })
      .catch((err) => {
        console.log("Terjadi kesalahan: ", err);

        // Toggle tombol loading kembali
        bttnLoading.classList.toggle("hidden");
        bttnSubmit.classList.toggle("hidden");

        // Tampilkan pesan error
        alert("Gagal mengirim email. Silakan coba lagi.");
      });
  });
}

// slider
var swiper = new Swiper(".swiper", {
  //   origin: center,
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 400,
  preventClicks: true,
  freeMode: false,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

// aos
const technicalSkill = document.querySelectorAll(".technical-skill");
const projectAnimate = document.querySelectorAll(".project-animate");

technicalSkill.forEach((skill, i) => {
  skill.dataset.aos = "flip-right";
  skill.dataset.aosDelay = i * 50;
});

projectAnimate.forEach((skill, i) => {
  skill.dataset.aos = "zoom-in-up";
  skill.dataset.aosDelay = i * 50;
});

AOS.init({
  duration: 500,
  once: true,
});

// gsap
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(MotionPathPlugin);
  gsap.from(".img-profile", {
    rotationY: 360,
    opacity: 0,
    duration: 3,
    ease: "expo.out"
  });
  
});

let roles = ['AI Engineer', 'Data Scientist'];  // Teks yang akan berganti
let index = 0;  // Menandakan teks yang aktif
let textElement = document.getElementById('role');  // Elemen untuk teks yang akan diganti
let cursorElement = document.getElementById('cursor');  // Elemen untuk kursor

function typeWriterEffect() {
  let role = roles[index];  // Pilih teks berdasarkan index
  let currentText = '';
  let i = 0;

  // Bersihkan teks sebelumnya
  textElement.innerHTML = '';
  cursorElement.style.opacity = 1;  // Tampilkan kursor saat mengetik

  // Ketik teks satu per satu
  let typingInterval = setInterval(() => {
    currentText += role[i];
    textElement.innerHTML = currentText;  // Perbarui teks
    i++;
    if (i === role.length) {
      clearInterval(typingInterval);  // Hentikan ketikan ketika selesai
      setTimeout(() => {
        // Setelah selesai mengetik, sembunyikan kursor sebentar
        cursorElement.style.opacity = 0;
        setTimeout(() => {
          index = (index + 1) % roles.length;  // Ganti ke teks berikutnya
          typeWriterEffect();  // Mulai efek mengetik lagi
        }, 500);  // Tunggu 0.5 detik sebelum mulai mengetik teks berikutnya
      }, 1000);  // Tunggu 1 detik setelah selesai mengetik sebelum mengganti teks
    }
  }, 100);  // Kecepatan mengetik (100ms per huruf)
}

// Mulai efek pertama kali
typeWriterEffect();


// Seleksi elemen canvas
// const canvas = document.getElementById("starfield");
// const ctx = canvas.getContext("2d");

// // Atur ukuran canvas agar sesuai dengan viewport
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // Array untuk menyimpan data bintang
// let stars = [];
// const starCount = 150;

// // Membuat bintang
// for (let i = 0; i < starCount; i++) {
//   stars.push({
//     x: Math.random() * canvas.width,
//     y: Math.random() * canvas.height,
//     radius: Math.random() * 2, // Ukuran bintang
//     alpha: Math.random(), // Opasitas bintang
//     speed: Math.random() * 0.5, // Kecepatan gerakan
//   });
// }

// // Fungsi menggambar bintang
// function drawStars() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   for (let star of stars) {
//     ctx.beginPath();
//     ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
//     ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
//     ctx.fill();

//     // Update posisi bintang (animasi jatuh ke bawah)
//     star.y += star.speed;

//     // Jika bintang keluar dari layar, reset posisinya
//     if (star.y > canvas.height) {
//       star.y = 0;
//       star.x = Math.random() * canvas.width;
//     }
//   }
//   requestAnimationFrame(drawStars); // Loop animasi
// }

// // Jalankan animasi
// drawStars();

// window.addEventListener("resize", () => {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   // Sesuaikan posisi bintang tanpa menghentikan animasi
//   stars.forEach((star) => {
//     star.x = Math.random() * canvas.width;
//     star.y = Math.random() * canvas.height;
//   });
// });

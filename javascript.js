// VERSI DOM

const comp = document.getElementById("jawaban-comp");
const result = document.getElementById("hasil");
const kirim = document.getElementById("kirim");
const input = document.getElementById("user-input");
const komp = Math.round(Math.random() * 10);
console.log(komp)
let kesempatan = 3;

function hasil(computer, player) {
  while (kesempatan > 0) {
    kesempatan--;
    if (player == computer) {
      result.style.color = "green";
      result.innerHTML = "SELAMAT ANGKA YANG ANDA TEBAK BENAR";
      comp.innerHTML = computer;
      input.setAttribute("disabled", true);
      return;
    } else {
      kirim.innerHTML = "Submit (" + kesempatan + ")";

      if (player > computer) {
        result.style.color = "yellow";
        result.innerHTML = "ANGKA TERLALU BESAR";
        comp.innerHTML = "YANG BENER NEBAKNYA"
        return;
      } else {
        result.style.color = "yellow";
        result.innerHTML = "ANGKA TERLALU KECIL";
        comp.innerHTML = "YANG BENER NEBAKNYA"
        return;
      }
    }
  }

  if (kesempatan === 0) {
    kirim.innerHTML = "Submit";
    comp.innerHTML = computer;
    input.setAttribute("disabled", true);
    result.style.color = "red";
    result.innerHTML = "KESEMPATAN TELAH HABIS";
    return;
  }
}

kirim.addEventListener("click", () => {
  hasil(komp, input.value);
});


// VERSI TUGAS PAK DHIKA

// const comp = Math.round(Math.random() * 10) + 1;
// console.log(comp);
// let player = parseInt(prompt("Masukkan angka tebakkan anda 1 sampai 10"));
// let kesempatan = 5;

// while (kesempatan > 0) {
//   if (player == comp) {
//     alert(
//       "yeah hasil komputer : " +
//         comp +
//         " sama dengan hasil tebakanmu: " +
//         player
//     );
//     break;
//   } else {
//     if (player > comp) {
//       player = parseInt(prompt("angka yang di tebak terlalu besar"));
//     } else {
//       player = parseInt(prompt("angka yang di masukan terlalu kecil"));
//     }
//   }
//   kesempatan--;
// }
// if (kesempatan === 0) {
//   alert(
//     "Kesempatan telah habis dan angka yang disimpan komputer adalah " + comp
//   );
// }
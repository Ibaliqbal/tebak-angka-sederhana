"use strict";
const playerInput = document.querySelector("input");
const btn = document.querySelector("button");
const comp = document.querySelector("h3");
const statusGuest = document.querySelector("p");
const randomNum = ~~(Math.random() * 10 + 1);
let kesempatan = 3;
function checkGuesNumber(komp, player) {
    while (kesempatan > 0) {
        kesempatan--;
        if (player === komp) {
            statusGuest.style.color = "green";
            statusGuest.textContent = "SELAMAT ANGKA YANG ANDA TEBAK BENAR";
            playerInput.setAttribute("disabled", "true");
            comp.textContent = komp.toString();
            return;
        }
        else {
            btn.textContent = `Submit ${kesempatan}`;
            if (player > komp) {
                statusGuest.style.color = "blue";
                statusGuest.textContent = "ANGKA TERLALU BESAR";
                comp.textContent = "YANG BENER NEBAKNYA";
                return;
            }
            else {
                statusGuest.style.color = "red";
                statusGuest.textContent = "ANGKA TERLALU KECIL";
                comp.textContent = "YANG BENER NEBAKNYA";
                return;
            }
        }
    }
    if (kesempatan === 0) {
        btn.textContent = "Submit";
        comp.textContent = komp.toString();
        playerInput.setAttribute("disabled", "true");
        statusGuest.style.color = "red";
        statusGuest.textContent = "KESEMPATAN TELAH HABIS";
        return;
    }
}
btn.addEventListener("click", function () {
    checkGuesNumber(randomNum, parseInt(playerInput.value));
});

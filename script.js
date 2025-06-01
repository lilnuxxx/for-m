// --- BAGIAN UPDATE CHECKER (TIDAK BERUBAH) ---
(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json";

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information. Status:", response.status);
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage || `Ada versi baru ${latestVersion}, mohon update!`;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

/* (function optimizeExperience() {
    // ... (kode optimizeExperience yang dikomentari tetap sama) ...
})();
*/

const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.getElementById('noBtn');
    const yesButton = document.getElementById('yesBtn');

    // Ganti teks tombol "No"
    noButton.textContent = messages[messageIndex];

    // Perbesar tombol "Yes"
    const currentYesFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    // Kamu bisa sesuaikan angka pengali (1.25) ini untuk mengatur seberapa cepat tombol Yes membesar
    yesButton.style.fontSize = `${currentYesFontSize * 1.25}px`;

    // Opsional: Jika kamu ingin pertumbuhan tombol "Yes" lebih drastis (lebar/tingginya juga bertambah signifikan selain karena font),
    // kamu bisa coba juga untuk sedikit meningkatkan paddingnya di sini. Contoh:
    /*
    let currentPaddingTop = parseFloat(window.getComputedStyle(yesButton).paddingTop);
    let currentPaddingLeft = parseFloat(window.getComputedStyle(yesButton).paddingLeft);
    if (!isNaN(currentPaddingTop) && !isNaN(currentPaddingLeft)) {
        yesButton.style.paddingTop = `${currentPaddingTop * 1.05}px`; // Tambah 5% padding atas
        yesButton.style.paddingBottom = `${currentPaddingTop * 1.05}px`; // Tambah 5% padding bawah (asumsi sama dengan atas)
        yesButton.style.paddingLeft = `${currentPaddingLeft * 1.1}px`; // Tambah 10% padding kiri
        yesButton.style.paddingRight = `${currentPaddingLeft * 1.1}px`; // Tambah 10% padding kanan (asumsi sama dengan kiri)
    }
    */

    // Update messageIndex untuk klik berikutnya
    messageIndex = (messageIndex + 1) % messages.length;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Event Listener (pastikan ini sudah ada dan benar)
document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yesBtn');
    const noButton = document.getElementById('noBtn');

    if (yesButton) {
        yesButton.addEventListener('click', handleYesClick);
    } else {
        console.error("Tombol 'Yes' dengan ID 'yesBtn' tidak ditemukan!");
    }

    if (noButton) {
        noButton.addEventListener('click', handleNoClick);
    } else {
        console.error("Tombol 'No' dengan ID 'noBtn' tidak ditemukan!");
    }
});
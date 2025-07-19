function updateCurrentTime() {
  const now = new Date();
  document.getElementById('currentTime').innerText = now.toLocaleString();
}
setInterval(updateCurrentTime, 1000);
updateCurrentTime();

function updateWelcomeText(name) {
  const welcomeEl = document.getElementById('welcomeName');
  if (name.trim() !== "") {
    welcomeEl.textContent = `Hi ${name}, Selamat Datang di Berdikari`;
  } else {
    welcomeEl.textContent = "Selamat Datang di Berdikari";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const initialName = document.getElementById('name').value;
  updateWelcomeText(initialName);
});


document.getElementById('name').addEventListener('input', function () {
  updateWelcomeText(this.value);
});


document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const message = document.getElementById('messageText').value;

  document.getElementById('preview').innerHTML = `
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Tanggal Lahir:</strong> ${dob}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;
});

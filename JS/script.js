function updateCurrentTime() {
  const now = new Date();
  document.getElementById('currentTime').innerText = now.toLocaleString();
}
setInterval(updateCurrentTime, 1000);
updateCurrentTime();

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

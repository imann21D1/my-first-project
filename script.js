function showGreeting() {
  alert("Вітаємо у книгарні «Пастель»! Гарного читання 📚");
}


function sendForm(event) {
  event.preventDefault(); 
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  if (name === "" || message === "") {
    alert("Будь ласка, заповніть усі поля!");
    return;
  }

  document.getElementById("result").innerText =
    "Дякуємо, " + name + "! Ваше повідомлення надіслано ✨";

  document.getElementById("contactForm").reset();
}


function countBooks() {
  const rows = document.querySelectorAll("table tbody tr");
  alert("Усього книг у каталозі: " + rows.length);
}

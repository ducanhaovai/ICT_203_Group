document.addEventListener("DOMContentLoaded", function () {
  var quantityField = document.querySelector(".quantity-field");
  var buttonMinus = document.querySelector(".button-minus");
  var buttonPlus = document.querySelector(".button-plus");

  buttonMinus.addEventListener("click", function () {
    var currentValue = parseInt(quantityField.value);
    if (currentValue > 1) {
      quantityField.value = currentValue - 1;
    }
  });

  buttonPlus.addEventListener("click", function () {
    var currentValue = parseInt(quantityField.value);
    if (currentValue < 20) {
      quantityField.value = currentValue + 1;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submitBtn");
  const toast = document.querySelector(".alert-t");
  const progress = document.querySelector(".progress");

  let timer1, timer2;

  function showToast() {
    toast.classList.add("active");

    progress.classList.add("active");

    timer1 = setTimeout(() => {
      toast.classList.remove("active");
    }, 5000);

    timer2 = setTimeout(() => {
      progress.classList.remove("active");
    }, 5300);
  }

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    showToast();
  });

  const closeIcon = document.querySelector(".close");
  closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");

    setTimeout(() => {
      progress.classList.remove("active");
    }, 300);

    clearTimeout(timer1);
    clearTimeout(timer2);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submitcheck");
  const toast = document.querySelector(".alert-t");
  const progress = document.querySelector(".progress");

  let timer1, timer2;

  function showToast() {
    toast.classList.add("active");

    progress.classList.add("active");

    timer1 = setTimeout(() => {
      toast.classList.remove("active");
    }, 5000);

    timer2 = setTimeout(() => {
      progress.classList.remove("active");
    }, 5300);
  }

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    showToast();
  });

  const closeIcon = document.querySelector(".close");
  closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");

    setTimeout(() => {
      progress.classList.remove("active");
    }, 300);

    clearTimeout(timer1);
    clearTimeout(timer2);
  });
});

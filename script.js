document.addEventListener("DOMContentLoaded", () => {
  const userType = document.getElementById("userType");
  const centerOptions = document.getElementById("centerOptions");
  const isCenter = document.getElementById("isCenter");
  const centerInfo = document.getElementById("centerInfo");

  // إظهار اختيارات المعلم
  userType.addEventListener("change", () => {
    if (userType.value === "teacher") {
      centerOptions.classList.remove("hidden");
    } else {
      centerOptions.classList.add("hidden");
      centerInfo.classList.add("hidden");
    }
  });

  // إظهار بيانات السينتر لو اختار نعم
  isCenter.addEventListener("change", () => {
    if (isCenter.value === "yes") {
      centerInfo.classList.remove("hidden");
    } else {
      centerInfo.classList.add("hidden");
    }
  });

  // معالجة تسجيل الدخول
  const form = document.getElementById("loginForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const type = userType.value;
    const centerId = document.getElementById("centerId").value;
    const centerPassword = document.getElementById("centerPassword").value;

    console.log({
      email,
      password,
      type,
      center: (type === "teacher") ? { centerId, centerPassword } : null
    });

    alert("تم تسجيل الدخول (دي نسخة تجريبية بالثيم الجديد 🎨)");
  });
});

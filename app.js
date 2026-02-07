// LOGIN
function login() {
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "login",
      username: document.getElementById("username").value,
      password: document.getElementById("password").value
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      sessionStorage.setItem("username", document.getElementById("username").value);
      sessionStorage.setItem("district", data.data.district);
      sessionStorage.setItem("zone", data.data.zone);
      sessionStorage.setItem("role", data.data.role);

      if (data.data.role === "Admin") {
        window.location = "admin-dashboard.html";
      } else {
        window.location = "district-dashboard.html";
      }
    } else {
      document.getElementById("msg").innerText = "Login failed";
    }
  });
}

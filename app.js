const API_URL = "PASTE_YOUR_WEB_APP_URL_HERE";

// LOGIN
function login() {
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "login",
      username: username.value,
      password: password.value
    })
  })
  .then(r => r.json())
  .then(d => {
    if (d.success) {
      sessionStorage.setItem("username", username.value);
      sessionStorage.setItem("district", d.data.district);
      sessionStorage.setItem("zone", d.data.zone);
      window.location = "dashboard.html";
    } else {
      msg.innerText = "Login Failed";
    }
  });
}

// CALLING
function saveCalling() {
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "saveCalling",
      zone: sessionStorage.getItem("zone"),
      district: sessionStorage.getItem("district"),
      vleName: vle.value,
      vleType: type.value,
      mobile: mobile.value,
      blsId: bls.value,
      product: product.value,
      remarks: remarks.value,
      enteredBy: sessionStorage.getItem("username")
    })
  }).then(()=>alert("Saved"));
}

// VISIT
function saveVisit() {
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "saveVisit",
      zone: sessionStorage.getItem("zone"),
      district: sessionStorage.getItem("district"),
      vleName: vle.value,
      mobile: mobile.value,
      blsId: bls.value,
      visitType: visitType.value,
      photo: photo.value,
      remarks: remarks.value,
      enteredBy: sessionStorage.getItem("username")
    })
  }).then(()=>alert("Saved"));
}

// REVENUE
function saveRevenue() {
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "saveRevenue",
      zone: sessionStorage.getItem("zone"),
      district: sessionStorage.getItem("district"),
      g2c: g2c.value || 0,
      brp: brp.value || 0,
      banking: banking.value || 0,
      od: od.value || 0,
      other: other.value || 0,
      enteredBy: sessionStorage.getItem("username")
    })
  }).then(()=>alert("Saved"));
}

function logout() {
  sessionStorage.clear();
  window.location = "index.html";
}

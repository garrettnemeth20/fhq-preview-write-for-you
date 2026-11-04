// Logo in header, email button, and one signature interaction: "show the edit".
(function () {
  document.querySelector(".brand").innerHTML = '<img src="assets/logo.png" alt="Write For You LLC" width="119" height="40">';
  var ctas = document.querySelector(".hero .ctas");
  ctas.insertAdjacentHTML("beforeend", '<a class="btn btn-ghost" href="mailto:letjmwriteforyou@gmail.com">Email Jessilyn</a>');
  var box = document.createElement("div");
  box.className = "edit";
  box.innerHTML = '<p id="ed" aria-live="polite"></p><button type="button" id="eb" aria-pressed="false">Show the edit</button><p class="cap">Illustrative example sentence for this preview, not client work.</p>';
  ctas.parentNode.appendChild(box);
  var draft = "We are in the business of providing help to small teams in order to explain what they do on a daily basis in plain words.";
  var edited = "We <del>are in the business of providing</del> help <del>to</del> small teams <del>in order to</del> explain what they do <del>on a daily basis</del> in plain words.";
  var p = document.getElementById("ed"), btn = document.getElementById("eb");
  p.textContent = draft;
  btn.addEventListener("click", function () {
    var on = btn.getAttribute("aria-pressed") !== "true";
    btn.setAttribute("aria-pressed", on);
    btn.textContent = on ? "Show the draft" : "Show the edit";
    if (on) p.innerHTML = edited; else p.textContent = draft;
  });
})();

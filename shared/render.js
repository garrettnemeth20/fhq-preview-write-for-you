// Spider Sites demo renderer. All copy comes from window.CONTENT (content.js).
(function () {
  var c = window.CONTENT, el = function (t, a, h) { var e = document.createElement(t); if (a) for (var k in a) e.setAttribute(k, a[k]); if (h != null) e.innerHTML = h; return e; };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (m) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]; }); };
  var tel = "tel:" + c.phoneTel, root = document.getElementById("app");
  document.documentElement.style.setProperty("--accent", c.theme.accent);
  if (c.theme.dark) document.documentElement.style.setProperty("--dark", c.theme.dark);
  if (c.theme.ground) document.documentElement.style.setProperty("--ground", c.theme.ground);
  if (c.theme.display) document.documentElement.style.setProperty("--display", c.theme.display);
  var ph = function (label, note) { return '<div class="ph" data-placeholder="true">[ ' + esc(label) + ' ]' + (note ? "<small>" + esc(note) + "</small>" : "") + "</div>"; };
  var html = "";
  html += '<div class="demo-bar">' + esc(c.demoBar) + ' · <a href="https://spidersitesmedia.com">Spider Sites</a></div>';
  html += '<header class="top"><div class="wrap"><a class="brand" href="#top">' + esc(c.name) + '</a><a class="btn btn-call" href="' + tel + '"><span class="sm">Call</span><span class="lg">Call ' + esc(c.phoneDisplay) + "</span></a></div></header>";
  html += '<main id="top"><section class="hero"><div class="wrap"><p class="eyebrow">' + esc(c.hero.eyebrow) + "</p><h1>" + esc(c.hero.headline) + '</h1><p class="lede">' + esc(c.hero.lede) + '</p><div class="ctas"><a class="btn btn-call" href="' + tel + '">Call ' + esc(c.phoneDisplay) + '</a><a class="btn btn-ghost" href="#services">' + esc(c.hero.secondary) + "</a></div>" + (c.hero.hook ? '<p class="hook">' + esc(c.hero.hook) + "</p>" : "") + "</div></section>";
  html += '<div class="trust"><div class="wrap"><ul>' + c.trust.map(function (t) { return "<li>" + esc(t.label) + (t.detail ? "<span>" + esc(t.detail) + "</span>" : "") + "</li>"; }).join("") + "</ul></div></div>";
  html += '<section id="services"><div class="wrap"><h2>' + esc(c.services.title) + '</h2><p class="sub">' + esc(c.services.sub) + '</p><div class="cards">' + c.services.items.map(function (s) { return '<div class="card"><h3>' + esc(s.name) + "</h3><p>" + esc(s.text) + "</p></div>"; }).join("") + "</div></div></section>";
  html += '<section class="why"><div class="wrap"><h2>' + esc(c.why.title) + "</h2><ul>" + c.why.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul></div></section>";
  html += '<section id="reviews"><div class="wrap"><h2>' + esc(c.reviews.title) + '</h2><p class="sub">' + esc(c.reviews.sub) + "</p>" + ph(c.reviews.placeholder, c.reviews.placeholderNote) + "</div></section>";
  html += '<section id="work"><div class="wrap"><h2>' + esc(c.gallery.title) + "</h2>" + ph(c.gallery.placeholder, c.gallery.placeholderNote) + "</div></section>";
  html += '<section class="area"><div class="wrap"><h2>' + esc(c.area.title) + "</h2><p>" + esc(c.area.text) + "</p></div></section>";
  html += '<section class="contact" id="contact"><div class="wrap grid"><div><h2>' + esc(c.contact.title) + '</h2><a class="big-phone" href="' + tel + '">' + esc(c.phoneDisplay) + "</a>" + c.contact.lines.map(function (l) { return "<p>" + esc(l) + "</p>"; }).join("") + '</div><form id="f" novalidate><label for="n">Name</label><input id="n" name="n" autocomplete="name"><label for="p">Phone</label><input id="p" name="p" type="tel" autocomplete="tel"><label for="m">What do you need?</label><textarea id="m" name="m" rows="4"></textarea><button class="btn btn-call" type="submit">Send</button><p class="form-note" id="fn" role="status">' + esc(c.contact.formNotice) + "</p></form></div></section></main>";
  html += '<footer><div class="wrap"><p><strong>' + esc(c.name) + "</strong><br>" + esc(c.footer.nap) + "</p><p>" + c.footer.extra.map(function (x) { return x.charAt(0) === "[" ? '<span class="ph-inline" data-placeholder="true">' + esc(x) + "</span>" : esc(x); }).join("<br>") + '</p><p>Demo by <a href="https://spidersitesmedia.com">Spider Sites</a>. Not the official site of ' + esc(c.name) + ".</p></div></footer>";
  html += '<div class="callbar"><a href="' + tel + '">Call ' + esc(c.phoneDisplay) + "</a></div>";
  root.innerHTML = html;
  document.title = c.pageTitle;
  if (c.theme.heroDark) document.body.className += " dark-hero";
  document.getElementById("f").addEventListener("submit", function (e) { e.preventDefault(); document.getElementById("fn").className = "form-note show"; });
})();

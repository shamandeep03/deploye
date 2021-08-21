export function MainJs() {
  //secod theme
  //var _gaq = _gaq || [];
  (function (html) {
    html.className = html.className.replace(/\bno-js\b/, "js");
  })(document.documentElement);

  // _gaq.push(["_setAccount", "UA-126686401-7"]);
  // _gaq.push(["_trackPageview"]);

  (function () {
    var ga = document.createElement("script");
    ga.type = "text/javascript";
    ga.async = true;
    ga.src =
      ("https:" === document.location.protocol
        ? "https://ssl"
        : "https://www") + ".google-analytics.com/ga.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(ga, s);
  })();

  "fetch" in window ||
    document.write(
      '<script src="https://www.jthemes.org/wp/appset/demos/wp-includes/js/dist/vendor/wp-polyfill-fetch.min.js?ver=3.0.0"></scr' +
        "ipt>"
    );
  document.contains ||
    document.write(
      '<script src="https://www.jthemes.org/wp/appset/demos/wp-includes/js/dist/vendor/wp-polyfill-node-contains.min.js?ver=3.42.0"></scr' +
        "ipt>"
    );
  window.DOMRect ||
    document.write(
      '<script src="https://www.jthemes.org/wp/appset/demos/wp-includes/js/dist/vendor/wp-polyfill-dom-rect.min.js?ver=3.42.0"></scr' +
        "ipt>"
    );
  (window.URL && window.URL.prototype && window.URLSearchParams) ||
    document.write(
      '<script src="https://www.jthemes.org/wp/appset/demos/wp-includes/js/dist/vendor/wp-polyfill-url.min.js?ver=3.6.4"></scr' +
        "ipt>"
    );
  (window.FormData && window.FormData.prototype.keys) ||
    document.write(
      '<script src="https://www.jthemes.org/wp/appset/demos/wp-includes/js/dist/vendor/wp-polyfill-formdata.min.js?ver=3.0.12"></scr' +
        "ipt>"
    );
  (Element.prototype.matches && Element.prototype.closest) ||
    document.write(
      '<script src="https://www.jthemes.org/wp/appset/demos/wp-includes/js/dist/vendor/wp-polyfill-element-closest.min.js?ver=2.0.2"></scr' +
        "ipt>"
    );
  "objectFit" in document.documentElement.style ||
    document.write(
      '<script src="https://www.jthemes.org/wp/appset/demos/wp-includes/js/dist/vendor/wp-polyfill-object-fit.min.js?ver=2.3.4"></scr' +
        "ipt>"
    );
  // var mailchimp_public_data = {
  //   site_url: "https://www.jthemes.org/wp/appset/demos",
  //   ajax_url: "https://www.jthemes.org/wp/appset/demos/wp-admin/admin-ajax.php",
  //   language: "en",
  // };
  //third theme
  return;
}

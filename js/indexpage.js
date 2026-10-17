!function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
    n.queue = []; t = b.createElement(e); t.async = !0;
    t.src = v; s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
}(window, document, 'script',
   'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '208667718717030');
fbq('track', 'PageView');


    window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'AW-10940897338');

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-147208159-1');

!function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
    n.queue = []; t = b.createElement(e); t.async = !0;
    t.src = v; s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
}(window, document, 'script',
   '../connect.facebook.net/en_US/fbevents.js');
fbq('init', '1391602731211089');
fbq('track', 'PageView');


window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-147208159-1');

function shareToFacebook() {
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + window.location.href);
}

function shareToTwitter() {
    window.open("https://twitter.com/intent/tweet?text=" + document.title + "&url=" + window.location.href);
}

function shareToLinkedIn() {
    window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + window.location.href + "&title=" + document.title);
}



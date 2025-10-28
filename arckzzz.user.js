// ==UserScript==
// @name         Arckzzz
// @namespace    https://github.com/arckzzz/public
// @version      1.0.0
// @description  Outil pour fourmizzz
// @author       Arckene
// @match        http://test.fourmizzz.fr/*
// @match        http://s1.fourmizzz.fr/*
// @match        http://s2.fourmizzz.fr/*
// @match        http://s3.fourmizzz.fr/*
// @match        http://s4.fourmizzz.fr/*
// @match        http://s1.antzzz.org/*
// @icon
// @run-at       document-end
// @grant        none
// @updateURL    https://raw.githubusercontent.com/arckzzz/public/main/arckzzz.user.js
// @downloadURL  https://raw.githubusercontent.com/arckzzz/public/main/arckzzz.user.js
// ==/UserScript==

(function() {
    'use strict';

    const SCRIPT_URL = 'https://arckzzz.github.io/public/compiled/arckzzz.js';

    if (document.getElementById('arckzzzjs')) {
        console.log('Arckzzz déjà injecté, skip.');
        return;
    }

    const script = document.createElement('script');
    script.src = `${SCRIPT_URL}?v=${Date.now()}`;
    script.type = 'text/javascript';
    script.id = 'arckzzzjs';

    const infos =
        typeof GM_info !== 'undefined'
            ? GM_info
            : typeof GM !== 'undefined' && GM.info !== 'undefined'
                ? GM.info
                : null;

    if (infos) {
        script.setAttribute('data-gm-info', JSON.stringify(infos));
    }

    document.documentElement.appendChild(script);
})();
// Author: Mikhail Gusarov <dottedmag@dottedmag.net>
// License: WTFPL 2

let script = document.createElement('script');
script.src = chrome.extension.getURL('cs_injection.js');
script.onload = function()
{
    this.remove();
};
(document.head || document.documentElement).appendChild(script);

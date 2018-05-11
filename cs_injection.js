// Author: Mikhail Gusarov <dottedmag@dottedmag.net>
// License: WTFPL 2

(function(){
    // Ctrl-B is hijacked to "Bold"
    // Ctrl-K is hijacked to "Insert Link"
    const hijacked_keys = {k: true, b:true};
    function jira_dehijack_keys(event)
    {
        if (event.key in hijacked_keys && event.ctrlKey)
            event.stopPropagation();
    }
    document.addEventListener('keydown', jira_dehijack_keys, true);
}());

import '@motion-canvas/player';

/**
// Run this function so that the player can be used with relative paths, such as
// a github pages deployment. Since this is a separate build file, vite doesn't
// know how to add the base url to the player's src attribute.
(function prependBase() {
    // If there's no BASE_URL, then there's nothing to do
    const base = 'http://localhost:5173/';
    if (!base) {
        return;
    }
    document.querySelectorAll('motion-canvas-player').forEach(player => {
        let url = player.getAttribute('src');
        // URL is absolute
        if (url?.startsWith('/')) {
            // Copy everything after the '/'
            url = base + url.slice(1);
            // Create a new player
            const newElement = document.createElement('motion-canvas-player');
            // Set the same attributes
            newElement.setAttribute('auto', player.getAttribute('auto') ?? 'true');
            newElement.setAttribute('src', url);
            // Replace the old player
            player.replaceWith(newElement);
        }
    });
})();
/**/
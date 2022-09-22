const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');
const path = require('path');

// An array with your links
const links = fs.readdirSync(path.join('_posts'))
    .map(filename => {
        if (filename.startsWith('!')) {
            return null;
        }

        return {
            url: '/posts/' + filename.replace('.md', ''),
            changefreq: 'weekly',
            priority: 1.0
        };
    }).filter(link => link);

links.unshift({
    url: '/',
    changefreq: 'weekly',
    priority: 0.8
});

// Create a stream to write to
const stream = new SitemapStream({ hostname: 'https://acairns.co.uk/' });

// Return a promise that resolves with your XML string
return streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
    fs.writeFileSync('./public/sitemap.xml', data.toString());
});

const puppeteer = require("puppeteer");
const fs = require('fs');
const path = require('path');

(async () => {

    const posts = fs.readdirSync(path.join('_posts'))
        .map(filename => {
            //        if (filename.startsWith('!')) {
            //            return null;
            //        }

            return {
                slug: filename.replace('.md', ''),
                url: '/posts/' + filename.replace('.md', ''),
            };
        }).filter(link => link);

    try {
        // launch a new headless browser
        const browser = await puppeteer.launch();

        // loop over the urls
        for (let i = 0; i < posts.length; i++) {
            const page = await browser.newPage();

            // set the viewport size
            await page.setViewport({
                width: 1920,
                height: 1080,
                deviceScaleFactor: 1,
            });

            // tell the page to visit the url
            await page.goto('http://localhost:3000/posts/' + posts[i].slug);

            // take a screenshot and save it in the screenshots directory

            await page.screenshot({ path: `./public/social/${posts[i].slug}.png` });

            // done!
            console.log(`✅ Screenshot of ${posts[i].slug} saved!`);
        }

        // close the browser
        await browser.close();
    } catch (error) {
        console.log(error);
    }
})();
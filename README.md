# Website

Here's what happens.

Animations are in `./animations` and uses Motion Canvas.
Website is in `./web` and uses Remix deployed to Cloudflare Pages.

Both uses Vite.

Animations, when built, get put in `./web/public/animations/` and
are then available to be embedded.

To update the animations, run:
```
$ rm -rf ./web/public/animations
$ cd animations
$ npm run build
```

This will output a bunch of stuff into that directory.

I've written a wrapper for embedding an animation: `<Player />`;

Just tell it what the project name was:
```
<Player project='project123' />
```

When testing locally on mobile, make sure ngrok is setup...
```
ngrok http --domain=fluent-tiger-content.ngrok-free.app 5173
```
Now, view this and should be able to test a bit on mobile.
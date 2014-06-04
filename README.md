# Livefyre.js

Livefyre.js is the core library that should be installed on each Livefyre Customer Website. Amongst other things, it provides `Livefyre.require`, which can be used to fetch other Livefyre web components.

## Add to your Site

Note: The recommended installation path is to include a `<script>` tag to a cdn release of [Livefyre/Livefyre-scout](//github.com/Livefyre/Livefyre-scout), which is very tiny and will download the latest version of Livefyre.js for you.

```html
<script src="//cdn.livefyre.com/Livefyre.js"></script>
```

## Modules

### Livefyre.require

#### What it is

Livefyre.require is a custom AMD loader based on [requirejs](http://requirejs.org/). It can be used to load various packages published by Livefyre, and so it presents a convenient and (hopefully) intuitive integration path.

An important feature of Livefyre.require is that its packages are versioned using [semver](http://semver.org/), and packages can be pinned to a version or a range. This gives you, the integrator, flexibility when customizing an integration. Pinning to a full version guarantees that the Livefyre package code running on the page will not change, while pinning to a major or minor range ensures that you will get new bugfixes and features without having to change the integration code.

An example interation using Livefyre.require could look like this:

```html
<!-- First add Livefyre.js to the page -->
<script src="//cdn.livefyre.com/Livefyre.js"></script>

<!-- Then load up all the desired Livefyre packages and Do Stuff in the callback -->
<script type="text/javascript">
    Livefyre.require([
        'lfawesome#1',
        'lfsuperawesome#2.1.2'
        ], function (LFAwesome, LFSuperawesome) {
            var greatness = new LFAwesome();
            // etc..
        });
</script>
```

#### Exciting! So what are the available packages and what versions should I use?

TODO(jj): uhhhhhh... wiki? Edit here? I don't want to expose the internal versions process to the public. THEY AREN'T READY.

Pre-release version are also available using the `lfenv` query param. New features will be deployed to our UAT testing environment before appearing in production integrations. Get tomorrow's code today by specifying `lfenv=uat`, e.g., `mydemopage.com?lfenv=uat`.

derpopolis:

The latest version of [Livefyre/require](//github.com/Livefyre/require).

* Supported packages
* Version Pinning
    - What are Major, Minor, Patch versions?
* What is the latest version of package X?
    - Go look at [lfpackges.json](//github.com/Livefyre/require/blob/master/src/lfpackages.json)
    - Later: https://github.com/Livefyre/require/issues/16
* How can I test out the QA/UAT release of the apps on my page(?lfenv)
* Pro tips
    - Override s3 bucket
    - bypass cdn (?lfcdn=0)
    - ?

### auth

The latest version of [Livefyre/livefyre-auth](//github.com/Livefyre/livefyre-auth).

### Coming Soon: Permalinks

Powered by [streamhub-permalink](https://github.com/Joao-S-Martins/streamhub-permalink)


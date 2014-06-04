# Livefyre.js

Livefyre.js is the core library that should be installed on each Livefyre Customer Website. Amongst other things, it provides `Livefyre.require`, which can be used to fetch other Livefyre web components.

## Add to your Site

Note: The recommended installation path is to actually include a `<script>` tag to load Livefyre/Livefyre-scout, which is very tiny and will download the latest version of Livefyre.js for you.

```html
<script src="//cdn.livefyre.com/Livefyre.js"></script>
```

## Modules

### Livefyre.require

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


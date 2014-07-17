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

Livefyre.require is a custom AMD loader based on [requirejs](http://requirejs.org/). It can be used to load various packages published by Livefyre, and so it presents a convenient and intuitive integration path.

An important feature of Livefyre.require is that its packages are versioned using [Semantic Versioning](http://semver.org/). Packages can be pinned to a version or a range. This gives you, the integrator, flexibility when customizing an integration.

Pinning to a full version guarantees that the Livefyre package code running on the page will not change, while pinning to a major or minor range ensures that you will get new bugfixes and features without having to change the integration code.

* `package-name#1` - Major version pin to v1. You'll get all new updates that maintain a backward-compatible API.
* `package-name#1.1` - Minor version pin to v1.1. You'll get all bugfixes to this minor version, but no additional functionality or changes to default behavior.
* `package-name#1.1.1` - Patch version pin to v1.1.1. The behavior of this embed will never change, even if there are bugfixes.

An example integration using Livefyre.require could look like this:

```html
<!-- First add Livefyre.js to the page -->
<script src="//cdn.livefyre.com/Livefyre.js"></script>

<!-- Then load up all the desired Livefyre packages and Do Stuff in the callback -->
<script>
Livefyre.require([
    'lfawesome#1',
    'lfsuperawesome#2.1.2'
], function (LFAwesome, LFSuperAwesome) {
    var greatness = new LFAwesome();
    // etc..
});
</script>
```

#### Exciting! So what are the available packages and what versions should I use?

The current LF packages are listed here: [packages.html](//cdn.livefyre.com/packages.html)

#### How can I test out pre-release versions of packages?

You may see non-prod versions listed amongst the available packages. New features will be deployed to our UAT testing environment before appearing in production integrations. These pre-release versions are available using the `lfenv` query param.

Get tomorrow's code today by specifying the `lfenv` query-string parameter when visiting a page using `Livefyre.require`. Supported values are `uat` and the default, `prod` (e.g. `http://mydemopage.com?lfenv=uat`). The version pins in your requires will still be respected.

### auth

The latest version of [Livefyre/livefyre-auth](//github.com/Livefyre/livefyre-auth).

### Coming Soon: Permalinks

Powered by [streamhub-permalink](https://github.com/Joao-S-Martins/streamhub-permalink)

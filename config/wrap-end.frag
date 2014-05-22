    // The return value from here will be assigned to window.Livefyre

    var Livefyre = window.Livefyre || {};

    // We only have an async reference to the Livefyre.js object...
    // So define it here as something special
    Livefyre.require = function () {
        var args = arguments;
        var self = this;
        require(['Livefyre'], function (LivefyreJS) {
            LivefyreJS.require.apply(self, args);
        });
    };
    // and define
    Livefyre.define = define;
    return Livefyre;
}));

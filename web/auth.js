const Facebook = {
    init: (appId) => {
        window.fbAsyncInit = function () {
            FB.init({
                appId: appId,
                xfbml: true,
                version: 'v2.7'
            });
        };
    },
    login: function(permissions) {
        return new Promise((resolve) => {
            if (typeof FB != "undefined") {
                FB.login(function () {
                    if (FB.getAccessToken()) {
                        resolve(FB.getAccessToken());
                    }
                }, { scope: permissions || 'public_profile,email' });
                return true;
            } else {
                return false;
            }
        });
    },
    logout: () => {
        return new Promise((resolve) => {
            if (typeof FB != "undefined") {
                FB.logout((response) => {
                    resolve();
                    return true;
                });
            } else {
                return false;
            }
        });
    }
}

module.exports = Facebook
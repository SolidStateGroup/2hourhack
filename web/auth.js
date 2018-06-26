import './fb'
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
            FB.login(function(response) {
                if (response.authResponse) {
                    console.log('Welcome!  Fetching your information.... ');
                    FB.api('/me?fields=picture.type(large),first_name,last_name', function(response) {
                        console.log('Good to see you, ' + response.name + '.');
                        console.log(response)
                        resolve(response)
                    });
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            },{scope: 'user_photos'});
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
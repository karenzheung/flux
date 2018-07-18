import UserProfile from './UserProfile';

// Security Manager will handle all security related functionality of the app (authentication, authorization, etc)
class SecurityManager {

    getUserProfile(userName) {
        return new UserProfile(userName);
    }

    oauthSignIn = () => {
        // Google's OAuth 2.0 endpoint for requesting an access token
        const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

        // Create <form> element to submit parameters to OAuth 2.0 endpoint.
        var form = document.createElement('form');
        form.setAttribute('method', 'GET'); // Send as a GET request.
        form.setAttribute('action', oauth2Endpoint);


        // Parameters to pass to OAuth 2.0 endpoint.
        var params = {'client_id': '46090867366-mola679it62f8cvnhe5mijtaia7t4drl.apps.googleusercontent.com',
                    'redirect_uri': 'http://localhost:3000/demo2',
                    'response_type': 'token',
                    'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly'
                    };

        // Add form parameters as hidden input values.
        for (var p in params) {
        var input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.appendChild(input);
        }

        // Add form to page and submit it to open the OAuth 2.0 endpoint.
        document.body.appendChild(form);
        form.submit();
    }

    getAccessToken = () => {
        let fragmentString = window.location.hash.substring(1);
        // Parse query string to see if page request is coming from OAuth 2.0 server.
        let params = {};
        let regex = /([^&=]+)=([^&]*)/g, m;
        while (m = regex.exec(fragmentString)) {
            params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
        }
        console.log(params);
        return params.access_token;
    }

    getUserInformation = (userAccessToken) => {
        let url = "https://www.googleapis.com/drive/v3/about?fields=user&access_token="+userAccessToken;
        fetch(url)
        .then (response => response.json())
        .then(responseJson => {
        })
        .catch((err) => console.log(err))
    }
}
export default SecurityManager;
window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// TODO: (WEBSOCKETS) descomentamos el siguiente fragmento de codigo para que funcione el websocket con Laravel Echo

import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    forceTLS: false, // true for https connections only (default false),
    wsHost: window.location.hostname, // hostname for the websocket server
    wsPort: 6001,  // port for the websocket server
});

// TODO: (WEBSOCKETS) con esta linea de codigo podemos escuchar el evento en tiempo real desde nuestro frontend
window.Echo.channel('events').listen('TestEvents', (e) => console.log('message: ' + e.message));


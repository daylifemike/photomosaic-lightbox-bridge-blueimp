// because this snippet is so small it's being being "localized" directly to the page in the PHP
(function (window) {
    'use strict';
    window.PhotoMosaic.LightboxBridge.blueimp = function ($, $mosaic, $items) {
        var id = $mosaic.attr( 'id' );
        $items.attr('data-gallery', id);
    }
}(window));
// Hazel.js
(function($) {
    $.fn.hazel = function(message, type = 'success', duration = 2000) {
        // Define type-based background colors
        var typeStyles = {
            success: '#0c8',
            warning: '#ff8c00',
            danger: '#f36',
            dark: '#0f172a',
            primary: '#8957ff'
        };

        // Get background color based on type
        var backgroundColor = typeStyles[type] || 'black';

        // Create the notification div if it doesn't exist
        var $notification = $('#hazel-notification');
        if ($notification.length === 0) {
            $notification = $('<div>', {
                id: 'hazel-notification',
                css: {
                    position: 'fixed',
                    top: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '10px',
                    'border-radius': '5px',
                    'z-index': 1000,
                    display: 'none',
                    'white-space': 'nowrap'
                }
            }).appendTo('body');
        }

        // Apply the styles for the selected type
        $notification.css({
            'background-color': backgroundColor,
            color: 'white'
        });

        // Display the notification
        $notification.text(message)
                     .fadeIn(200)
                     .delay(duration)
                     .fadeOut(200);

        return this;
    };
}(jQuery));

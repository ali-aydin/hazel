//Hazel.js
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

        // Create a container for notifications if it doesn't exist
        var $container = $('#hazel-container');
        if ($container.length === 0) {
            $container = $('<div>', {
                id: 'hazel-container',
                css: {
                    position: 'fixed',
                    top: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    'z-index': 1000,
                    display: 'flex',
                    'flex-direction': 'column',
                    gap: '10px', // Space between notifications
                    'align-items': 'center'
                }
            }).appendTo('body');
        }

        // Create a new notification element
        var $notification = $('<div>', {
            css: {
                padding: '10px',
                'border-radius': '5px',
                'background-color': backgroundColor,
                color: 'white',
                'white-space': 'nowrap',
                'box-shadow': '0 4px 6px rgba(0, 0, 0, 0.1)',
                opacity: 0, // Start hidden for fade-in effect
                transition: 'opacity 0.2s ease'
            },
            text: message
        }).appendTo($container);

        // Fade in the notification
        setTimeout(() => {
            $notification.css('opacity', 1);
        }, 0);

        // Fade out and remove the notification after the duration
        setTimeout(() => {
            $notification.css('opacity', 0);
            setTimeout(() => {
                $notification.remove();
            }, 200); // Match fade-out duration
        }, duration);

        return this;
    };
}(jQuery));

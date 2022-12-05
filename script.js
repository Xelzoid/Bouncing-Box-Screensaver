const div = document.getElementById('my_bouncing_box');
    let current_direction = 'bottom-right'
    setInterval(mover, 10);
    function mover() {
        if (current_direction === 'bottom-right') {
            // checks if div collides with right side and changes orientation accordingly
            if ((window.innerWidth - div.offsetLeft - div.offsetWidth) == "0") {
                current_direction = 'bottom-left';
            }
            // checks if div collides with bottom side and changes orientation accordingly
            else if ((window.innerHeight - div.offsetTop - div.offsetHeight) == '1') {
                current_direction = 'top-right';
            }
            else {
                div.style.top = div.offsetTop + 1 + "px";
                div.style.left = div.offsetLeft + 1 + "px";
            };
        }
        else if (current_direction === 'bottom-left') {
            if (div.offsetLeft == "0") {
                current_direction = 'bottom-right';
            }
            else if ((window.innerHeight - div.offsetTop - div.offsetHeight) == '1') {
                current_direction = 'top-left';
            }
            else {
                div.style.top = div.offsetTop + 1 + "px";
                div.style.left = div.offsetLeft - 1 + "px";
            };
        } 
        else if (current_direction === 'top-right') {
            if ((window.innerWidth - div.offsetLeft - div.offsetWidth) == "0") {
                current_direction = 'top-left';
            }
            else if (div.offsetTop == '0') {
                current_direction = 'bottom-right';
            }
            else {
                div.style.top = div.offsetTop - 1 + "px";
                div.style.left = div.offsetLeft + 1 + "px";
            };
        }
        else if (current_direction === 'top-left') {
            if (div.offsetLeft == "0") {
                current_direction = 'top-right';
            }
            else if (div.offsetTop == '0') {
                current_direction = 'bottom-left';
            }
            else {
                div.style.top = div.offsetTop - 1 + "px";
                div.style.left = div.offsetLeft - 1 + "px";
            };
        };   
    };
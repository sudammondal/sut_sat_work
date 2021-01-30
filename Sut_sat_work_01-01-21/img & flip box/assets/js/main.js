function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /* Create lens: */
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /* Insert lens: */
    img.parentElement.insertBefore(lens, img);
    /* Calculate the ratio between result DIV and lens: */
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /* Set background properties for the result DIV */
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /* Execute a function when someone moves the cursor over the image, or the lens: */
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /* And also for touch screens: */
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);

    function moveLens(e) {
        var pos, x, y;
        /* Prevent any other actions that may occur when moving over the image */
        e.preventDefault();
        /* Get the cursor's x and y positions: */
        pos = getCursorPos(e);
        /* Calculate the position of the lens: */
        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);
        /* Prevent the lens from being positioned outside the image: */
        if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
        if (x < 0) { x = 0; }
        if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
        if (y < 0) { y = 0; }
        /* Set the position of the lens: */
        lens.style.left = x + "px";
        lens.style.top = y + "px";
        /* Display what the lens "sees": */
        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }

    function getCursorPos(e) {
        var a, x = 0,
            y = 0;
        e = e || window.event;
        /* Get the x and y positions of the image: */
        a = img.getBoundingClientRect();
        /* Calculate the cursor's x and y coordinates, relative to the image: */
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /* Consider any page scrolling: */
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
    }
}
imageZoom("myimage", "myresult");

// function magnify(imgID, zoom) {
//     var img, glass, w, h, bw;
//     img = document.getElementById(imgID);

//     /* Create magnifier glass: */
//     glass = document.createElement("DIV");
//     glass.setAttribute("class", "img-magnifier-glassS");

//     /* Insert magnifier glass: */
//     img.parentElement.insertBefore(glass, img);

//     /* Set background properties for the magnifier glass: */
//     glass.style.backgroundImage = "url('" + img.src + "')";
//     glass.style.backgroundRepeat = "no-repeat";
//     glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
//     bw = 3;
//     w = glass.offsetWidth / 2;
//     h = glass.offsetHeight / 2;

//     /* Execute a function when someone moves the magnifier glass over the image: */
//     glass.addEventListener("mousemove", moveMagnifier);
//     img.addEventListener("mousemove", moveMagnifier);

//     /*and also for touch screens:*/
//     glass.addEventListener("touchmove", moveMagnifier);
//     img.addEventListener("touchmove", moveMagnifier);

//     function moveMagnifier(e) {
//         var pos, x, y;
//         /* Prevent any other actions that may occur when moving over the image */
//         e.preventDefault();
//         /* Get the cursor's x and y positions: */
//         pos = getCursorPos(e);
//         x = pos.x;
//         y = pos.y;
//         /* Prevent the magnifier glass from being positioned outside the image: */
//         if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
//         if (x < w / zoom) { x = w / zoom; }
//         if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
//         if (y < h / zoom) { y = h / zoom; }
//         /* Set the position of the magnifier glass: */
//         glass.style.left = (x - w) + "px";
//         glass.style.top = (y - h) + "px";
//         /* Display what the magnifier glass "sees": */
//         glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
//     }

//     function getCursorPos(e) {
//         var a, x = 0,
//             y = 0;
//         e = e || window.event;
//         /* Get the x and y positions of the image: */
//         a = img.getBoundingClientRect();
//         /* Calculate the cursor's x and y coordinates, relative to the image: */
//         x = e.pageX - a.left;
//         y = e.pageY - a.top;
//         /* Consider any page scrolling: */
//         x = x - window.pageXOffset;
//         y = y - window.pageYOffset;
//         return { x: x, y: y };
//     }
// }
// magnify("myimageS", 3);
// (imageZoom , magnify) ai duita akoi sate hobena but akra off and akta on korte hobe(mast be css & js).//
function initComparisons() {
    var x, i;
    /* Find all elements with an "overlay" class: */
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
        /* Once for each "overlay" element:
        pass the "overlay" element as a parameter when executing the compareImages function: */
        compareImages(x[i]);
    }

    function compareImages(img) {
        var slider, img, clicked = 0,
            w, h;
        /* Get the width and height of the img element */
        w = img.offsetWidth;
        h = img.offsetHeight;
        /* Set the width of the img element to 50%: */
        img.style.width = (w / 2) + "px";
        /* Create slider: */
        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");
        /* Insert slider */
        img.parentElement.insertBefore(slider, img);
        /* Position the slider in the middle: */
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
        /* Execute a function when the mouse button is pressed: */
        slider.addEventListener("mousedown", slideReady);
        /* And another function when the mouse button is released: */
        window.addEventListener("mouseup", slideFinish);
        /* Or touched (for touch screens: */
        slider.addEventListener("touchstart", slideReady);
        /* And released (for touch screens: */
        window.addEventListener("touchend", slideFinish);

        function slideReady(e) {
            /* Prevent any other actions that may occur when moving over the image: */
            e.preventDefault();
            /* The slider is now clicked and ready to move: */
            clicked = 1;
            /* Execute a function when the slider is moved: */
            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
        }

        function slideFinish() {
            /* The slider is no longer clicked: */
            clicked = 0;
        }

        function slideMove(e) {
            var pos;
            /* If the slider is no longer clicked, exit this function: */
            if (clicked == 0) return false;
            /* Get the cursor's x position: */
            pos = getCursorPos(e)
                /* Prevent the slider from being positioned outside the image: */
            if (pos < 0) pos = 0;
            if (pos > w) pos = w;
            /* Execute a function that will resize the overlay image according to the cursor: */
            slide(pos);
        }

        function getCursorPos(e) {
            var a, x = 0;
            e = e || window.event;
            /* Get the x positions of the image: */
            a = img.getBoundingClientRect();
            /* Calculate the cursor's x coordinate, relative to the image: */
            x = e.pageX - a.left;
            /* Consider any page scrolling: */
            x = x - window.pageXOffset;
            return x;
        }

        function slide(x) {
            /* Resize the image: */
            img.style.width = x + "px";
            /* Position the slider: */
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
    }
}
initComparisons();
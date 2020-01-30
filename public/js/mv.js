"use strict";

function createEl(template) {
    var el = document.createElement("div");
    el.innerHTML = template.trim();
    return el.firstChild;
}

function createSvgEl(template) {
    var el = createEl(
        '\n    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
            template.trim() +
            "</svg>\n  "
    );
    return el;
}

function createSvgChildEl(template) {
    return createSvgEl(template).firstChild;
}

function createLine(options) {
    var el = createSvgChildEl(
        '\n    <rect x="' +
            options.x +
            '" y="' +
            options.y +
            '" width="' +
            options.width +
            '" height="' +
            options.height +
            '" fill="' +
            options.color +
            '">\n  '
    );
    return el;
}

var totalMaskIdx = 0;
function createMasksWithStripes(count, box) {
    var averageHeight =
        arguments.length <= 2 || arguments[2] === undefined ? 10 : arguments[2];

    var masks = [];
    for (var i = 0; i < count; i++) {
        masks.push([]);
    }
    var maskNames = [];
    for (var _i = totalMaskIdx; _i < totalMaskIdx + masks.length; _i++) {
        maskNames.push("clipPath" + _i);
    }
    totalMaskIdx += masks.length;
    var maskIdx = 0;
    var x = 0;
    var y = 0;
    var stripeHeight = averageHeight;
    while (true) {
        var w = Math.max(
            stripeHeight * 10,
            Math.round(Math.random() * box.width)
        );
        masks[maskIdx].push(
            "\n      M " +
                x +
                "," +
                y +
                " L " +
                (x + w) +
                "," +
                y +
                " L " +
                (x + w) +
                "," +
                (y + stripeHeight) +
                " L " +
                x +
                "," +
                (y + stripeHeight) +
                " Z\n    "
        );

        maskIdx += 1;
        if (maskIdx >= masks.length) {
            maskIdx = 0;
        }

        x += w;
        if (x > box.width) {
            x = 0;
            y += stripeHeight;
            stripeHeight = Math.round(
                Math.random() * averageHeight + averageHeight / 2
            );
        }
        if (y >= box.height) {
            break;
        }
    }

    masks.forEach(function(rects, i) {
        var el = createSvgChildEl(
            '<clipPath id="' +
                maskNames[i] +
                '">\n      <path d="' +
                rects.join(" ") +
                '" fill="white"></path>\n    </clipPath>'
        );
        document.querySelector("#clip-paths g").appendChild(el);
    });

    return maskNames;
}

function cloneAndStripeElement(element, clipPathName, parent) {
    var el = element.cloneNode(true);
    var box = element.getBoundingClientRect();
    var parentBox = parent.getBoundingClientRect();
    box = {
        top: box.top - parentBox.top,
        left: box.left - parentBox.left,
        width: box.width,
        height: box.height
    };
    var style = window.getComputedStyle(element);

    dynamics.css(el, {
        position: "absolute",
        left: Math.round(box.left + window.scrollX),
        top: Math.round(box.top + window.scrollY),
        width: Math.ceil(box.width),
        height: Math.ceil(box.height),
        display: "none",
        pointerEvents: "none",
        background: "#0a0a0a",
        fontSize: style.fontSize,
        fontFamily: style.fontFamily,
        color: style.color,
        textDecoration: style.textDecoration
    });
    parent.appendChild(el);
    el.style["-webkit-clip-path"] = "url(/#" + clipPathName + ")";
    el.style["clip-path"] = "url(/#" + clipPathName + ")";

    return el;
}

function animateCrazyLogo() {
    var el = document.querySelector("#header-logo");
    var box = el.getBoundingClientRect();
    var count = 10 + Math.random() * 10;
    var masks = createMasksWithStripes(count, box, Math.round(100 / count));
    var clonedEls = [];

    for (var i = 0; i < masks.length; i++) {
        var clonedEl = cloneAndStripeElement(el, masks[i], document.body);
        var path = clonedEl.querySelectorAll("path");
        var _color2 = tinycolor(
            "hsl(" + Math.round(Math.random() * 360) + ", 80%, 65%)"
        );
        dynamics.css(path[0], {
            fill: _color2.toRgbString()
        });
        dynamics.css(path[1], {
            fill: _color2.toRgbString()
        });
        dynamics.css(path[2], {
            fill: _color2.toRgbString()
        });
        clonedEls.push(clonedEl);
    }

    var _loop3 = function _loop3(_i3) {
        var clonedEl = clonedEls[_i3];
        var d = Math.random() * 100;

        dynamics.setTimeout(function() {
            clonedEl.style.display = "";
            dynamics.css(clonedEl, {
                translateX: Math.random() * 100 - 50
            });
        }, d);

        dynamics.setTimeout(function() {
            dynamics.css(clonedEl, {
                translateX: Math.random() * 20 - 10
            });
        }, d + 50);

        dynamics.setTimeout(function() {
            dynamics.css(clonedEl, {
                translateX: Math.random() * 5 - 2.5
            });
        }, d + 100);

        dynamics.setTimeout(function() {
            document.body.removeChild(clonedEl);
        }, d + 150);
    };

    for (var _i3 = 0; _i3 < clonedEls.length; _i3++) {
        _loop3(_i3);
    }
}

function logoAnimationLoop() {
    dynamics.setTimeout(function() {
        animateCrazyLogo();
        logoAnimationLoop();
    }, 100 + Math.random() * 5000);
}

dynamics.setTimeout(logoAnimationLoop, 4000);

setTimeout(function() {
    var myEl = document.querySelector("#header-logo");
    if (myEl) {
        console.log("el found");
        myEl.addEventListener("mouseover", animateCrazyLogo);
    }
}, 1000);

// var myEl = document.querySelector("#header-logo");
// if (myEl) {
//     console.log("el found");
//     el.addEventListener("mouseover", animateCrazyLogo);
// }

// document
//     .querySelector("#header-logo")
//     .addEventListener("mouseover", animateCrazyLogo);

(function () {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        c = "undefined" !== typeof module && module.exports,
        b = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element, d = function () {
            for (var b, c = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")], d = 0, h = c.length, g = {}; d < h; d++) if ((b = c[d]) && b[1] in a) {
                for (d = 0; d < b.length; d++) g[c[0][d]] =
                    b[d];
                return g
            }
            return !1
        }(), e = {change: d.fullscreenchange, error: d.fullscreenerror}, h = {
            request: function (c) {
                var h = d.requestFullscreen;
                c = c || a.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) c[h](); else c[h](b && Element.ALLOW_KEYBOARD_INPUT)
            }, exit: function () {
                a[d.exitFullscreen]()
            }, toggle: function (a) {
                this.isFullscreen ? this.exit() : this.request(a)
            }, onchange: function (a) {
                this.on("change", a)
            }, onerror: function (a) {
                this.on("error", a)
            }, on: function (b, c) {
                var d = e[b];
                d && a.addEventListener(d, c, !1)
            }, off: function (b,
                              c) {
                var d = e[b];
                d && a.removeEventListener(d, c, !1)
            }, raw: d
        };
    d ? (Object.defineProperties(h, {
        isFullscreen: {
            get: function () {
                return !!a[d.fullscreenElement]
            }
        }, element: {
            enumerable: !0, get: function () {
                return a[d.fullscreenElement]
            }
        }, enabled: {
            enumerable: !0, get: function () {
                return !!a[d.fullscreenEnabled]
            }
        }
    }), c ? module.exports = h : window.screenfull = h) : c ? module.exports = !1 : window.screenfull = !1
})();
var s_iScaleFactor = 1, s_bIsIphone = !1, s_iOffsetX, s_iOffsetY;
(function (a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,
        4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function () {
    sizeHandler()
});

function NotImplementedError(a) {
    this.name = "NotImplementedError";
    this.message = a || ""
}

NotImplementedError.prototype = Error.prototype;

function error(a) {
    throw{name: "NotImplementedError", message: a};
}

function trace(a) {
    console.log(a)
}

window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    sizeHandler()
}

function ifArrayContainsValue(a, c) {
    for (var b = 0; b < a.length; b++) if (a[b] === c) return !0;
    return !1
}

function getSize(a) {
    var c = a.toLowerCase(), b = window.document, d = b.documentElement;
    if (void 0 === window["inner" + a]) a = d["client" + a]; else if (window["inner" + a] != d["client" + a]) {
        var e = b.createElement("body");
        e.id = "vpw-test-b";
        e.style.cssText = "overflow:scroll";
        var h = b.createElement("div");
        h.id = "vpw-test-d";
        h.style.cssText = "position:absolute;top:-1000px";
        h.innerHTML = "<style>@media(" + c + ":" + d["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + c + ":7px!important}}</style>";
        e.appendChild(h);
        d.insertBefore(e, b.head);
        a = 7 == h["offset" + a] ? d["client" + a] : window["inner" + a];
        d.removeChild(e)
    } else a = window["inner" + a];
    return a
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
        var c = getSize("Width");
        _checkOrientation(c, a);
        var b = Math.min(a / CANVAS_HEIGHT, c / CANVAS_WIDTH), d = CANVAS_WIDTH * b;
        b *= CANVAS_HEIGHT;
        if (b < a) {
            var e = a - b;
            b += e;
            d += CANVAS_WIDTH / CANVAS_HEIGHT * e
        } else d < c && (e = c - d, d += e, b += CANVAS_HEIGHT / CANVAS_WIDTH * e);
        e = a / 2 - b / 2;
        var h = c / 2 - d / 2, k = CANVAS_WIDTH / d;
        if (h * k < -EDGEBOARD_X || e * k < -EDGEBOARD_Y) b = Math.min(a / (CANVAS_HEIGHT - 2 *
            EDGEBOARD_Y), c / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), d = CANVAS_WIDTH * b, b *= CANVAS_HEIGHT, e = (a - b) / 2, h = (c - d) / 2, k = CANVAS_WIDTH / d;
        s_iOffsetX = -1 * h * k;
        s_iOffsetY = -1 * e * k;
        0 <= e && (s_iOffsetY = 0);
        0 <= h && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * d, s_oStage.canvas.height = 2 * b, canvas.style.width = d + "px", canvas.style.height = b + "px", s_iScaleFactor =
            2 * Math.min(d / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor) : s_bMobile || isChrome() ? ($("#canvas").css("width", d + "px"), $("#canvas").css("height", b + "px")) : (s_oStage.canvas.width = d, s_oStage.canvas.height = b, s_iScaleFactor = Math.min(d / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > e ? $("#canvas").css("top", e + "px") : $("#canvas").css("top", "0px");
        $("#canvas").css("left", h + "px");
        if (DEBUG_BOX2D) {
            if (s_bMobile || isChrome()) $("#debug").css("width", d + "px"),
                $("#debug").css("height", b + "px");
            0 > e ? $("#debug").css("top", e + "px") : $("#debug").css("top", "0px");
            $("#debug").css("left", h + "px")
        }
        fullscreenHandler()
    }
}

function _checkOrientation(a, c) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > c ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

function isIOS() {
    var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); a.length;) if (navigator.platform === a.pop()) return !0;
    return s_bIsIphone = !1
}

function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < a ? a : 0
}

function getMobileOperatingSystem() {
    var a = navigator.userAgent || navigator.vendor || window.opera;
    return a.match(/iPad/i) || a.match(/iPhone/i) || a.match(/iPod/i) ? "ios" : a.match(/Android/i) ? "android" : "unknown"
}

function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function playSound(a, c, b) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(c), s_aSounds[a].loop(b), s_aSounds[a]) : null
}

function setVolume(a, c) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(c)
}

function setMute(a, c) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[c].mute(a)
}

function soundPlaying(a) {
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) return s_aSounds[a].playing()
}

function createBitmap(a, c, b) {
    var d = new createjs.Bitmap(a), e = new createjs.Shape;
    c && b ? e.graphics.beginFill("#fff").drawRect(0, 0, c, b) : e.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    d.hitArea = e;
    return d
}

function createSprite(a, c, b, d, e, h) {
    a = null !== c ? new createjs.Sprite(a, c) : new createjs.Sprite(a);
    c = new createjs.Shape;
    c.graphics.beginFill("#000000").drawRect(-b, -d, e, h);
    a.hitArea = c;
    return a
}

function randomFloatBetween(a, c, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(a + Math.random() * (c - a), c).toFixed(b))
}

function shuffle(a) {
    for (var c = a.length, b, d; 0 !== c;) d = Math.floor(Math.random() * c), --c, b = a[c], a[c] = a[d], a[d] = b;
    return a
}

function easeLinear(a, c, b, d) {
    return b * a / d + c
}

function easeInQuad(a, c, b, d) {
    return b * (a /= d) * a + c
}

function easeInSine(a, c, b, d) {
    return -b * Math.cos(a / d * (Math.PI / 2)) + b + c
}

function easeInCubic(a, c, b, d) {
    return b * (a /= d) * a * a + c
}

function getTrajectoryPoint(a, c) {
    var b = new createjs.Point, d = (1 - a) * (1 - a), e = a * a;
    b.x = d * c.start.x + 2 * (1 - a) * a * c.traj.x + e * c.end.x;
    b.y = d * c.start.y + 2 * (1 - a) * a * c.traj.y + e * c.end.y;
    return b
}

function formatTime(a) {
    a /= 1E3;
    var c = Math.floor(a / 60);
    a = parseFloat(a - 60 * c).toFixed(0);
    var b = "";
    b = 10 > c ? b + ("0" + c + ":") : b + (c + ":");
    return 10 > a ? b + ("0" + a) : b + a
}

function degreesToRadians(a) {
    return a * Math.PI / 180
}

function collideEdgeWithCircle(a, c, b) {
    if (null === a) return !1;
    a = closestPointOnLine(a.getPointA(), a.getPointB(), c);
    c = distanceV2(c, a);
    return b < c ? null : {distance: c, closest_point: a}
}

function circleDistFromLineSeg(a, c, b) {
    var d = b.p2.x - b.p1.x;
    var e = b.p2.y - b.p1.y;
    var h = a - b.p1.x;
    var k = c - b.p1.y;
    var f = (h * d + k * e) / (e * e + d * d);
    if (0 <= f && 1 >= f) return a = d * f + b.p1.x - a, c = e * f + b.p1.y - c, Math.sqrt(c * c + a * a);
    a -= b.p2.x;
    c -= b.p2.y;
    return Math.min(Math.sqrt(k * k + h * h), Math.sqrt(c * c + a * a))
}

function getAngleBetweenPoints(a, c, b, d) {
    return 180 * Math.atan2(d - c, b - a) / Math.PI
}

function randomSign() {
    return .5 >= Math.random() ? 1 : -1
}

function distanceBetweenTwoPoints(a, c, b, d) {
    a -= b;
    c -= d;
    return Math.sqrt(a * a + c * c)
}

function distance(a, c) {
    var b = a.x - c.x, d = a.y - c.y;
    return Math.sqrt(b * b + d * d)
}

function closestPointOnLine(a, c, b) {
    var d = new CVector2;
    d.setV(b);
    d.subtractV(a);
    b = new CVector2;
    b.setV(c);
    b.subtractV(a);
    b.normalize();
    d = dotProductV2(b, d);
    if (0 >= d) return a;
    if (d >= distanceV2(a, c)) return c;
    b.scalarProduct(d);
    b.addV(a);
    return b
}

function checkRectCollision(a, c) {
    var b = getBounds(a, .9);
    var d = getBounds(c, .98);
    return calculateIntersection(b, d)
}

function calculateIntersection(a, c) {
    var b, d, e, h;
    var k = a.x + (b = a.width / 2);
    var f = a.y + (d = a.height / 2);
    var l = c.x + (e = c.width / 2);
    var n = c.y + (h = c.height / 2);
    k = Math.abs(k - l) - (b + e);
    f = Math.abs(f - n) - (d + h);
    return 0 > k && 0 > f ? (k = Math.min(Math.min(a.width, c.width), -k), f = Math.min(Math.min(a.height, c.height), -f), {
        x: Math.max(a.x, c.x),
        y: Math.max(a.y, c.y),
        width: k,
        height: f,
        rect1: a,
        rect2: c
    }) : null
}

function centerBetweenPointsV2(a, c) {
    var b = new CVector2;
    b.set(.5 * (a.getX() + c.getX()), .5 * (a.getY() + c.getY()));
    return b
}

function dotProductV2(a, c) {
    return a.getX() * c.getX() + a.getY() * c.getY()
}

function distanceV2WithoutSquareRoot(a, c) {
    return (c.getX() - a.getX()) * (c.getX() - a.getX()) + (c.getY() - a.getY()) * (c.getY() - a.getY())
}

function distanceV2(a, c) {
    return Math.sqrt((c.getX() - a.getX()) * (c.getX() - a.getX()) + (c.getY() - a.getY()) * (c.getY() - a.getY()))
}

function reflectVectorV2(a, c) {
    var b = dotProductV2(a, c);
    a.set(a.getX() - 2 * b * c.getX(), a.getY() - 2 * b * c.getY());
    return a
}

function getBounds(a, c) {
    var b = {x: Infinity, y: Infinity, width: 0, height: 0};
    if (a instanceof createjs.Container) {
        b.x2 = -Infinity;
        b.y2 = -Infinity;
        var d = a.children, e = d.length, h;
        for (h = 0; h < e; h++) {
            var k = getBounds(d[h], 1);
            k.x < b.x && (b.x = k.x);
            k.y < b.y && (b.y = k.y);
            k.x + k.width > b.x2 && (b.x2 = k.x + k.width);
            k.y + k.height > b.y2 && (b.y2 = k.y + k.height)
        }
        Infinity == b.x && (b.x = 0);
        Infinity == b.y && (b.y = 0);
        Infinity == b.x2 && (b.x2 = 0);
        Infinity == b.y2 && (b.y2 = 0);
        b.width = b.x2 - b.x;
        b.height = b.y2 - b.y;
        delete b.x2;
        delete b.y2
    } else {
        if (a instanceof createjs.Bitmap) {
            e =
                a.sourceRect || a.image;
            h = e.width * c;
            var f = e.height * c
        } else if (a instanceof createjs.Sprite) if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) {
            e = a.spriteSheet.getFrame(a.currentFrame);
            h = e.rect.width;
            f = e.rect.height;
            d = e.regX;
            var l = e.regY
        } else b.x = a.x || 0, b.y = a.y || 0; else b.x = a.x || 0, b.y = a.y || 0;
        d = d || 0;
        h = h || 0;
        l = l || 0;
        f = f || 0;
        b.regX = d;
        b.regY = l;
        e = a.localToGlobal(0 - d, 0 - l);
        k = a.localToGlobal(h - d, f - l);
        h = a.localToGlobal(h - d, 0 - l);
        d = a.localToGlobal(0 - d, f - l);
        b.x =
            Math.min(Math.min(Math.min(e.x, k.x), h.x), d.x);
        b.y = Math.min(Math.min(Math.min(e.y, k.y), h.y), d.y);
        b.width = Math.max(Math.max(Math.max(e.x, k.x), h.x), d.x) - b.x;
        b.height = Math.max(Math.max(Math.max(e.y, k.y), h.y), d.y) - b.y
    }
    return b
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}

NoClickDelay.prototype = {
    handleEvent: function (a) {
        switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a)
        }
    }, onTouchStart: function (a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    }, onTouchMove: function (a) {
        this.moved = !0
    }, onTouchEnd: function (a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var c = document.createEvent("MouseEvents");
            c.initEvent("click", !0, !0);
            a.dispatchEvent(c)
        }
    }
};
(function () {
    function a(a) {
        var b = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        a = a || window.event;
        a.type in b ? document.body.className = b[a.type] : (document.body.className = this[c] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }

    var c = "hidden";
    c in document ? document.addEventListener("visibilitychange", a) : (c = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (c = "webkitHidden") in
    document ? document.addEventListener("webkitvisibilitychange", a) : (c = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function toDegree(a) {
    return 180 / Math.PI * a
}

function getParamValue(a) {
    for (var c = window.location.search.substring(1).split("&"), b = 0; b < c.length; b++) {
        var d = c[b].split("=");
        if (d[0] == a) return d[1]
    }
}

function saveItem(a, c) {
    s_bStorageAvailable && localStorage.setItem(a, c)
}

function getItem(a) {
    return s_bStorageAvailable ? localStorage.getItem(a) : null
}

function setItemJson(a, c) {
    s_bStorageAvailable && localStorage.setItem(a, JSON.stringify(c))
}

function getItemJson(a) {
    return s_bStorageAvailable ? JSON.parse(localStorage.getItem(a)) : null
}

function fullscreenHandler() {
    ENABLE_FULLSCREEN && screenfull.enabled && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? !0 : !1, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut())
}

if (screenfull.enabled) screenfull.on("change", function () {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut()
});

function CSpriteLibrary() {
    var a, c, b, d, e, h;
    this.init = function (k, f, l) {
        b = c = 0;
        d = k;
        e = f;
        h = l;
        a = {}
    };
    this.addSprite = function (b, d) {
        a.hasOwnProperty(b) || (a[b] = {szPath: d, oSprite: new Image}, c++)
    };
    this.getSprite = function (b) {
        return a.hasOwnProperty(b) ? a[b].oSprite : null
    };
    this._onSpritesLoaded = function () {
        e.call(h)
    };
    this._onSpriteLoaded = function () {
        d.call(h);
        ++b === c && this._onSpritesLoaded()
    };
    this.loadSprites = function () {
        for (var b in a) a[b].oSprite.oSpriteLibrary = this, a[b].oSprite.onload = function () {
            this.oSpriteLibrary._onSpriteLoaded()
        },
            a[b].oSprite.src = a[b].szPath
    };
    this.getNumSprites = function () {
        return c
    }
}

var CANVAS_WIDTH = 768, CANVAS_HEIGHT = 1400, CANVAS_WIDTH_HALF = 384, CANVAS_HEIGHT_HALF = 700, EDGEBOARD_X = 0,
    EDGEBOARD_Y = 100, FPS = 30, FPS_TIME = 1E3 / FPS, DISABLE_SOUND_MOBILE = !1, PRIMARY_FONT = "comfortaa",
    PRIMARY_FONT_COLOUR = "#ffffff", SECONDARY_FONT_COLOUR = "#000000", MULTIPLIER_DIVIDER = 20, BLOCK_HALF_SIZE = 50,
    EXPLOSION_SIZE = 300, SCORE_DIFFICULTY_LIMIT = 2E3, MENU_TIMER_LIMIT = 3E3, MENU_BLOCKS_ROTATION = 3,
    MENU_BLOCKS_SPEED = 5, BACKGROUND_MOVEMENT_VAR = 10, TIMESTEP = 1 / 60, VELOCITY_ITERATIONS = 10,
    POSITION_ITERATIONS = 10, UPDATE_LOOP_VAR =
        3, DEBUG_BOX2D = !1, DEBUG_BOX2D_ALPHA = .5, WORLD_SCALE = 100, GRAVITY = 9.81, FLOOR_VELOCITY_MULTIPLIER = .1,
    FLOOR_LERP_DIVIDER = 4, BLOCKS_PADDING_X = .1, BLOCKS_PADDING_Y = .2, BLOCK_DENSITY = 1, PLAYER_DENSITY = 1,
    FLOOR_DENSITY = 1, BLOCK_FRICTION = 1, FLOOR_FRICTION = 1, PLAYER_FRICTION = 1, BLOCK_RESTITUTION = .01,
    FLOOR_RESTITUTION = .01, PLAYER_RESTITUTION = .01, FLOOR_COVER_Y = CANVAS_HEIGHT - 150,
    FLOOR_Y_START = CANVAS_HEIGHT + 450, FLOOR_Y_LIMIT = FLOOR_Y_START - 600,
    MATRIX_X_START = CANVAS_WIDTH_HALF - 2 * BLOCK_HALF_SIZE, MATRIX_Y_START = FLOOR_Y_LIMIT +
    100, PLAYER_OFFSCREEN_TOLERANCE = 150, PLAYER_START_X = CANVAS_WIDTH_HALF,
    PLAYER_START_Y = CANVAS_HEIGHT_HALF - 200, PLAYER_Y_LIMIT = CANVAS_HEIGHT_HALF, BLOCK_FALLING_SPEED_LIMIT = 10,
    BLOCK_SPEED_LIMIT = 8, FLOOR_LIMIT_SCALED = FLOOR_Y_LIMIT / WORLD_SCALE,
    FLOOR_Y_START_SCALED = FLOOR_Y_START / WORLD_SCALE, PLAYER_LIMIT_SCALED = PLAYER_Y_LIMIT / WORLD_SCALE,
    BLOCK_HALF_SIZE_SCALED = BLOCK_HALF_SIZE / WORLD_SCALE, PLAYER = "Player", BLOCK_0 = 0, BLOCK_1 = 1, BLOCK_2 = 2,
    BLOCK_3 = 3, BLOCK_4 = 4, BLOCK_5 = 5, BLOCK_6 = 6, BLOCK_7 = 7, BLOCK_8 = 8, BLOCK_9 = 9, BLOCK_10 =
        10, BLOCK_11 = 11, BLOCK_12 = 12, BLOCK_13 = 13, BLOCK_14 = 14, BLOCK_SPEED = 97, BLOCK_BOMB = 98, BLOCK_BONUS = 99,
    DYNAMIC_BODY = 0, STATIC_BODY = 1, CONTACT_BEGIN = 0, CONTACT_END = 1, CONTACT_PRESOLVE = 2, CONTACT_POSTSOLVE = 3,
    ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, MATRIX_SPEED, BLOCK_VALUE, BLOCK_BONUS_VALUE, STATE_LOADING = 0,
    STATE_MENU = 1, STATE_HELP = 2, STATE_GAME = 3, ON_MOUSE_DOWN = 0, ON_MOUSE_UP = 1, ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3, GAME_OBJECTS = {
        rigidBodies: [{
            name: "Player", imagePath: "bg_player.png", origin: {x: -1.6671046614646912E-4, y: 2.084001898765564E-4},
            polygons: [[{x: .3678126931190491, y: .9116874933242798}, {
                x: .4316667318344116,
                y: .7981250882148743
            }, {x: .56640625, y: .7981770038604736}, {x: .6318750977516174, y: .9114062786102295}, {
                x: .5665625333786011,
                y: 1.0260937213897705
            }, {x: .43359375, y: 1.0260416269302368}]], circles: [], shapes: [{
                type: "POLYGON",
                vertices: [{x: .43359375, y: 1.0260416269302368}, {
                    x: .5665625333786011,
                    y: 1.0260937213897705
                }, {x: .6318750977516174, y: .9114062786102295}, {
                    x: .56640625,
                    y: .7981770038604736
                }, {x: .4316667318344116, y: .7981250882148743}, {
                    x: .3678126931190491,
                    y: .9116874933242798
                }]
            }]
        }], dynamicObjects: []
    }, BLOCK_MATRIX_LIST = [[{type: BLOCK_6, posX: 0, posY: 0, rotation: 180}, {
        type: BLOCK_11,
        posX: -2,
        posY: 3,
        rotation: 90
    }, {type: BLOCK_9, posX: 6, posY: 2, rotation: 90}, {type: BLOCK_4, posX: 3, posY: 2, rotation: 270}, {
        type: BLOCK_8,
        posX: 0,
        posY: 5,
        rotation: 90
    }, {type: BLOCK_2, posX: 4, posY: 8, rotation: 180}, {type: BLOCK_9, posX: 1, posY: 9, rotation: 0}, {
        type: BLOCK_BONUS,
        posX: -2,
        posY: 11,
        rotation: 0
    }, {type: BLOCK_0, posX: -2, posY: 13, rotation: 0}, {type: BLOCK_5, posX: 1, posY: 12, rotation: 0}, {
        type: BLOCK_5, posX: 5,
        posY: 12, rotation: 0
    }], [{type: BLOCK_11, posX: 2, posY: -1, rotation: 0}, {type: BLOCK_1, posX: -2, posY: 0, rotation: 90}, {
        type: BLOCK_1,
        posX: 6,
        posY: 0,
        rotation: 90
    }, {type: BLOCK_0, posX: -2, posY: 3, rotation: 0}, {type: BLOCK_13, posX: 2, posY: 3, rotation: 90}, {
        type: BLOCK_0,
        posX: 6,
        posY: 3,
        rotation: 0
    }, {type: BLOCK_0, posX: -2, posY: 5, rotation: 0}, {type: BLOCK_BONUS, posX: 4, posY: 5, rotation: 0}, {
        type: BLOCK_0,
        posX: 6,
        posY: 5,
        rotation: 0
    }, {type: BLOCK_5, posX: -1, posY: 8, rotation: 0}, {type: BLOCK_4, posX: 3, posY: 6, rotation: 90}, {
        type: BLOCK_5, posX: 5, posY: 8,
        rotation: 0
    }, {type: BLOCK_14, posX: 2, posY: 11, rotation: 0}, {type: BLOCK_11, posX: 4, posY: 13, rotation: 0}, {
        type: BLOCK_1,
        posX: -1,
        posY: 13,
        rotation: 0
    }], [{type: BLOCK_10, posX: -1, posY: 0, rotation: 180}, {
        type: BLOCK_1,
        posX: 2,
        posY: 0,
        rotation: 90
    }, {type: BLOCK_10, posX: 5, posY: 0, rotation: 90}, {type: BLOCK_11, posX: 2, posY: 3, rotation: 0}, {
        type: BLOCK_0,
        posX: 0,
        posY: 5,
        rotation: 0
    }, {type: BLOCK_0, posX: 2, posY: 5, rotation: 0}, {type: BLOCK_0, posX: 4, posY: 5, rotation: 0}, {
        type: BLOCK_11,
        posX: 2,
        posY: 7,
        rotation: 0
    }, {type: BLOCK_14, posX: -2, posY: 5, rotation: 90},
        {type: BLOCK_0, posX: 0, posY: 9, rotation: 0}, {type: BLOCK_BOMB, posX: 2, posY: 9, rotation: 0}, {
            type: BLOCK_0,
            posX: 4,
            posY: 9,
            rotation: 0
        }, {type: BLOCK_14, posX: 6, posY: 5, rotation: 90}, {
            type: BLOCK_7,
            posX: 1,
            posY: 12,
            rotation: 0
        }, {type: BLOCK_2, posX: 4, posY: 12, rotation: 180}, {
            type: BLOCK_0,
            posX: -2,
            posY: 13,
            rotation: 0
        }], [{type: BLOCK_9, posX: -2, posY: 2, rotation: 90}, {
        type: BLOCK_1,
        posX: 6,
        posY: 2,
        rotation: 90
    }, {type: BLOCK_11, posX: 4, posY: -1, rotation: 0}, {type: BLOCK_BONUS, posX: 4, posY: 1, rotation: 0}, {
        type: BLOCK_3,
        posX: 2,
        posY: 1,
        rotation: 0
    },
        {type: BLOCK_10, posX: 1, posY: 4, rotation: 0}, {type: BLOCK_0, posX: 4, posY: 5, rotation: 0}, {
            type: BLOCK_2,
            posX: 5,
            posY: 7,
            rotation: 270
        }, {type: BLOCK_1, posX: 3, posY: 7, rotation: 0}, {type: BLOCK_6, posX: 0, posY: 8, rotation: 0}, {
            type: BLOCK_14,
            posX: 2,
            posY: 11,
            rotation: 0
        }, {type: BLOCK_11, posX: 4, posY: 13, rotation: 0}, {
            type: BLOCK_1,
            posX: -1,
            posY: 13,
            rotation: 0
        }], [{type: BLOCK_14, posX: 2, posY: -1, rotation: 0}, {
        type: BLOCK_13,
        posX: 4,
        posY: 3,
        rotation: 180
    }, {type: BLOCK_8, posX: 2, posY: 3, rotation: 0}, {type: BLOCK_13, posX: 0, posY: 3, rotation: 0}, {
        type: BLOCK_6,
        posX: 4, posY: 8, rotation: 180
    }, {type: BLOCK_6, posX: 0, posY: 8, rotation: 0}, {type: BLOCK_0, posX: 6, posY: 11, rotation: 0}, {
        type: BLOCK_0,
        posX: -2,
        posY: 13,
        rotation: 0
    }, {type: BLOCK_9, posX: 1, posY: 11, rotation: 0}, {type: BLOCK_9, posX: 3, posY: 13, rotation: 0}], [{
        type: BLOCK_4,
        posX: 3,
        posY: 0,
        rotation: 180
    }, {type: BLOCK_4, posX: 1, posY: 0, rotation: 0}, {type: BLOCK_14, posX: 2, posY: 3, rotation: 0}, {
        type: BLOCK_1,
        posX: -1,
        posY: 5,
        rotation: 0
    }, {type: BLOCK_10, posX: 5, posY: 6, rotation: 180}, {type: BLOCK_3, posX: 4, posY: 7, rotation: 0}, {
        type: BLOCK_6, posX: 0,
        posY: 8, rotation: 0
    }, {type: BLOCK_0, posX: -2, posY: 11, rotation: 0}, {type: BLOCK_0, posX: -2, posY: 13, rotation: 0}, {
        type: BLOCK_5,
        posX: 1,
        posY: 12,
        rotation: 0
    }, {type: BLOCK_5, posX: 5, posY: 12, rotation: 0}], [{type: BLOCK_14, posX: 2, posY: -1, rotation: 0}, {
        type: BLOCK_6,
        posX: 0,
        posY: 2,
        rotation: 0
    }, {type: BLOCK_6, posX: 4, posY: 2, rotation: 180}, {
        type: BLOCK_2,
        posX: 4,
        posY: 6,
        rotation: 180
    }, {type: BLOCK_BONUS, posX: -2, posY: 7, rotation: 0}, {type: BLOCK_7, posX: 1, posY: 6, rotation: 0}, {
        type: BLOCK_1,
        posX: 5,
        posY: 9,
        rotation: 0
    }, {
        type: BLOCK_11, posX: 0, posY: 9,
        rotation: 0
    }, {type: BLOCK_14, posX: 2, posY: 11, rotation: 0}, {type: BLOCK_11, posX: 4, posY: 13, rotation: 0}, {
        type: BLOCK_1,
        posX: -1,
        posY: 13,
        rotation: 0
    }], [{type: BLOCK_BOMB, posX: 6, posY: -1, rotation: 0}, {
        type: BLOCK_7,
        posX: 3,
        posY: 0,
        rotation: 180
    }, {type: BLOCK_2, posX: 0, posY: 0, rotation: 0}, {type: BLOCK_9, posX: 3, posY: 3, rotation: 0}, {
        type: BLOCK_10,
        posX: -1,
        posY: 4,
        rotation: 0
    }, {type: BLOCK_1, posX: -1, posY: 7, rotation: 0}, {type: BLOCK_10, posX: 3, posY: 6, rotation: 0}, {
        type: BLOCK_1,
        posX: 5,
        posY: 5,
        rotation: 0
    }, {type: BLOCK_0, posX: 6, posY: 7, rotation: 0},
        {type: BLOCK_1, posX: 5, posY: 9, rotation: 0}, {type: BLOCK_11, posX: 0, posY: 9, rotation: 0}, {
            type: BLOCK_14,
            posX: 2,
            posY: 11,
            rotation: 0
        }, {type: BLOCK_11, posX: 4, posY: 13, rotation: 0}, {
            type: BLOCK_1,
            posX: -1,
            posY: 13,
            rotation: 0
        }], [{type: BLOCK_6, posX: 0, posY: 0, rotation: 180}, {
        type: BLOCK_11,
        posX: -2,
        posY: 3,
        rotation: 90
    }, {type: BLOCK_9, posX: 6, posY: 2, rotation: 90}, {type: BLOCK_4, posX: 3, posY: 2, rotation: 270}, {
        type: BLOCK_8,
        posX: 0,
        posY: 5,
        rotation: 90
    }, {type: BLOCK_2, posX: 4, posY: 8, rotation: 180}, {type: BLOCK_9, posX: 1, posY: 9, rotation: 0}, {
        type: BLOCK_0,
        posX: -2, posY: 11, rotation: 0
    }, {type: BLOCK_0, posX: -2, posY: 13, rotation: 0}, {type: BLOCK_5, posX: 1, posY: 12, rotation: 0}, {
        type: BLOCK_5,
        posX: 5,
        posY: 12,
        rotation: 0
    }], [{type: BLOCK_10, posX: -1, posY: 0, rotation: 180}, {
        type: BLOCK_1,
        posX: 2,
        posY: 0,
        rotation: 90
    }, {type: BLOCK_10, posX: 5, posY: 0, rotation: 90}, {type: BLOCK_11, posX: 2, posY: 3, rotation: 0}, {
        type: BLOCK_0,
        posX: 0,
        posY: 5,
        rotation: 0
    }, {type: BLOCK_0, posX: 2, posY: 5, rotation: 0}, {type: BLOCK_0, posX: 4, posY: 5, rotation: 0}, {
        type: BLOCK_11,
        posX: 2,
        posY: 7,
        rotation: 0
    }, {
        type: BLOCK_14, posX: -2,
        posY: 5, rotation: 90
    }, {type: BLOCK_0, posX: 0, posY: 9, rotation: 0}, {type: BLOCK_BONUS, posX: 2, posY: 9, rotation: 0}, {
        type: BLOCK_0,
        posX: 4,
        posY: 9,
        rotation: 0
    }, {type: BLOCK_14, posX: 6, posY: 5, rotation: 90}, {type: BLOCK_7, posX: 1, posY: 12, rotation: 0}, {
        type: BLOCK_2,
        posX: 4,
        posY: 12,
        rotation: 180
    }, {type: BLOCK_0, posX: -2, posY: 13, rotation: 0}], [{type: BLOCK_6, posX: -1, posY: 1, rotation: 90}, {
        type: BLOCK_0,
        posX: 6,
        posY: -1,
        rotation: 0
    }, {type: BLOCK_3, posX: 4, posY: 1, rotation: 180}, {type: BLOCK_3, posX: 4, posY: 3, rotation: 0}, {
        type: BLOCK_BONUS, posX: 2,
        posY: 5, rotation: 0
    }, {type: BLOCK_1, posX: -2, posY: 6, rotation: 90}, {type: BLOCK_1, posX: 6, posY: 8, rotation: 90}, {
        type: BLOCK_9,
        posX: 1,
        posY: 9,
        rotation: 0
    }, {type: BLOCK_13, posX: 2, posY: 5, rotation: 0}, {type: BLOCK_14, posX: 2, posY: 11, rotation: 0}, {
        type: BLOCK_11,
        posX: 4,
        posY: 13,
        rotation: 0
    }, {type: BLOCK_1, posX: -1, posY: 13, rotation: 0}], [{type: BLOCK_0, posX: 2, posY: -1, rotation: 0}, {
        type: BLOCK_0,
        posX: 4,
        posY: -1,
        rotation: 0
    }, {type: BLOCK_11, posX: -2, posY: 1, rotation: 90}, {type: BLOCK_11, posX: 6, posY: 1, rotation: 90}, {
        type: BLOCK_2, posX: 2, posY: 0,
        rotation: 0
    }, {type: BLOCK_11, posX: 2, posY: 3, rotation: 0}, {type: BLOCK_0, posX: -2, posY: 5, rotation: 0}, {
        type: BLOCK_0,
        posX: 6,
        posY: 5,
        rotation: 0
    }, {type: BLOCK_BONUS, posX: 6, posY: 7, rotation: 0}, {type: BLOCK_1, posX: 4, posY: 6, rotation: 90}, {
        type: BLOCK_6,
        posX: -1,
        posY: 7,
        rotation: 270
    }, {type: BLOCK_13, posX: 4, posY: 7, rotation: 0}, {type: BLOCK_0, posX: -2, posY: 11, rotation: 0}, {
        type: BLOCK_0,
        posX: -2,
        posY: 13,
        rotation: 0
    }, {type: BLOCK_5, posX: 1, posY: 12, rotation: 0}, {type: BLOCK_5, posX: 5, posY: 12, rotation: 0}], [{
        type: BLOCK_7,
        posX: 1,
        posY: 0,
        rotation: 0
    },
        {type: BLOCK_BONUS, posX: 2, posY: -1, rotation: 0}, {
            type: BLOCK_1,
            posX: 5,
            posY: -1,
            rotation: 0
        }, {type: BLOCK_8, posX: 0, posY: 3, rotation: 0}, {type: BLOCK_6, posX: 5, posY: 3, rotation: 270}, {
            type: BLOCK_1,
            posX: -1,
            posY: 5,
            rotation: 0
        }, {type: BLOCK_14, posX: 2, posY: 7, rotation: 0}, {type: BLOCK_11, posX: 2, posY: 9, rotation: 0}, {
            type: BLOCK_0,
            posX: -2,
            posY: 9,
            rotation: 0
        }, {type: BLOCK_0, posX: 6, posY: 9, rotation: 0}, {
            type: BLOCK_2,
            posX: 5,
            posY: 11,
            rotation: 270
        }, {type: BLOCK_9, posX: 1, posY: 11, rotation: 0}, {type: BLOCK_11, posX: 0, posY: 13, rotation: 0}], [{
        type: BLOCK_BOMB,
        posX: -2, posY: -1, rotation: 0
    }, {type: BLOCK_0, posX: 0, posY: -1, rotation: 0}, {type: BLOCK_10, posX: -1, posY: 2, rotation: 90}, {
        type: BLOCK_7,
        posX: 1,
        posY: 2,
        rotation: 270
    }, {type: BLOCK_5, posX: 5, posY: 0, rotation: 0}, {type: BLOCK_5, posX: 5, posY: 4, rotation: 0}, {
        type: BLOCK_2,
        posX: 0,
        posY: 6,
        rotation: 0
    }, {type: BLOCK_0, posX: 2, posY: 5, rotation: 0}, {type: BLOCK_10, posX: 5, posY: 8, rotation: 180}, {
        type: BLOCK_9,
        posX: 1,
        posY: 9,
        rotation: 0
    }, {type: BLOCK_14, posX: 2, posY: 11, rotation: 0}, {type: BLOCK_11, posX: 4, posY: 13, rotation: 0}, {
        type: BLOCK_1, posX: -1,
        posY: 13, rotation: 0
    }], [{type: BLOCK_13, posX: 0, posY: 3, rotation: 90}, {type: BLOCK_11, posX: 0, posY: -1, rotation: 0}, {
        type: BLOCK_5,
        posX: 5,
        posY: 0,
        rotation: 0
    }, {type: BLOCK_8, posX: 2, posY: 5, rotation: 0}, {type: BLOCK_2, posX: 4, posY: 4, rotation: 180}, {
        type: BLOCK_5,
        posX: -1,
        posY: 8,
        rotation: 0
    }, {type: BLOCK_0, posX: 6, posY: 7, rotation: 0}, {type: BLOCK_2, posX: 4, posY: 8, rotation: 0}, {
        type: BLOCK_0,
        posX: -2,
        posY: 11,
        rotation: 0
    }, {type: BLOCK_0, posX: -2, posY: 13, rotation: 0}, {type: BLOCK_5, posX: 1, posY: 12, rotation: 0}, {
        type: BLOCK_5, posX: 5, posY: 12,
        rotation: 0
    }], [{type: BLOCK_6, posX: -1, posY: 1, rotation: 90}, {type: BLOCK_0, posX: 6, posY: -1, rotation: 0}, {
        type: BLOCK_3,
        posX: 4,
        posY: 1,
        rotation: 180
    }, {type: BLOCK_3, posX: 4, posY: 3, rotation: 0}, {type: BLOCK_BONUS, posX: 2, posY: 5, rotation: 0}, {
        type: BLOCK_1,
        posX: -2,
        posY: 6,
        rotation: 90
    }, {type: BLOCK_1, posX: 6, posY: 8, rotation: 90}, {type: BLOCK_9, posX: 1, posY: 9, rotation: 0}, {
        type: BLOCK_13,
        posX: 2,
        posY: 5,
        rotation: 0
    }, {type: BLOCK_14, posX: 2, posY: 11, rotation: 0}, {type: BLOCK_11, posX: 4, posY: 13, rotation: 0}, {
        type: BLOCK_1, posX: -1, posY: 13,
        rotation: 0
    }], [{type: BLOCK_0, posX: 2, posY: -1, rotation: 0}, {type: BLOCK_7, posX: 1, posY: 0, rotation: 0}, {
        type: BLOCK_10,
        posX: 5,
        posY: 0,
        rotation: 180
    }, {type: BLOCK_4, posX: 3, posY: 4, rotation: 180}, {type: BLOCK_13, posX: 0, posY: 3, rotation: 0}, {
        type: BLOCK_10,
        posX: 5,
        posY: 6,
        rotation: 0
    }, {type: BLOCK_10, posX: -1, posY: 8, rotation: 0}, {type: BLOCK_7, posX: 3, posY: 8, rotation: 0}, {
        type: BLOCK_5,
        posX: -1,
        posY: 12,
        rotation: 0
    }, {type: BLOCK_6, posX: 4, posY: 12, rotation: 0}, {type: BLOCK_0, posX: 6, posY: 11, rotation: 0}], [{
        type: BLOCK_SPEED, posX: 2, posY: -1,
        rotation: 0
    }, {type: BLOCK_5, posX: 5, posY: 0, rotation: 0}, {type: BLOCK_10, posX: -1, posY: 0, rotation: 90}, {
        type: BLOCK_7,
        posX: 3,
        posY: 2,
        rotation: 0
    }, {type: BLOCK_5, posX: -1, posY: 4, rotation: 0}, {type: BLOCK_0, posX: 2, posY: 5, rotation: 0}, {
        type: BLOCK_11,
        posX: 2,
        posY: 7,
        rotation: 0
    }, {type: BLOCK_1, posX: 5, posY: 5, rotation: 0}, {type: BLOCK_0, posX: 6, posY: 7, rotation: 0}, {
        type: BLOCK_1,
        posX: 5,
        posY: 9,
        rotation: 0
    }, {type: BLOCK_2, posX: 0, posY: 8, rotation: 0}, {type: BLOCK_10, posX: -1, posY: 12, rotation: 0}, {
        type: BLOCK_1,
        posX: 1,
        posY: 11,
        rotation: 0
    },
        {type: BLOCK_1, posX: 3, posY: 13, rotation: 0}, {
            type: BLOCK_10,
            posX: 5,
            posY: 12,
            rotation: 180
        }], [{type: BLOCK_BONUS, posX: 2, posY: -1, rotation: 0}, {
        type: BLOCK_3,
        posX: 4,
        posY: 1,
        rotation: 90
    }, {type: BLOCK_0, posX: 0, posY: 1, rotation: 0}, {type: BLOCK_4, posX: -1, posY: 2, rotation: 90}, {
        type: BLOCK_11,
        posX: 6,
        posY: 3,
        rotation: 90
    }, {type: BLOCK_2, posX: 2, posY: 4, rotation: 0}, {type: BLOCK_0, posX: 4, posY: 3, rotation: 0}, {
        type: BLOCK_14,
        posX: 2,
        posY: 7,
        rotation: 0
    }, {type: BLOCK_1, posX: -1, posY: 9, rotation: 0}, {type: BLOCK_BOMB, posX: 2, posY: 9, rotation: 0},
        {type: BLOCK_1, posX: 5, posY: 9, rotation: 0}, {type: BLOCK_1, posX: 5, posY: 11, rotation: 0}, {
            type: BLOCK_10,
            posX: -1,
            posY: 12,
            rotation: 0
        }, {type: BLOCK_7, posX: 3, posY: 12, rotation: 0}], [{
        type: BLOCK_10,
        posX: -1,
        posY: 0,
        rotation: 180
    }, {type: BLOCK_BONUS, posX: 6, posY: -1, rotation: 0}, {
        type: BLOCK_6,
        posX: 3,
        posY: 1,
        rotation: 90
    }, {type: BLOCK_11, posX: -2, posY: 3, rotation: 90}, {type: BLOCK_11, posX: 2, posY: 5, rotation: 0}, {
        type: BLOCK_0,
        posX: 0,
        posY: 3,
        rotation: 0
    }, {type: BLOCK_0, posX: 4, posY: 3, rotation: 0}, {type: BLOCK_4, posX: 5, posY: 4, rotation: 270},
        {type: BLOCK_10, posX: -1, posY: 8, rotation: 0}, {type: BLOCK_7, posX: 3, posY: 8, rotation: 0}, {
            type: BLOCK_5,
            posX: 1,
            posY: 12,
            rotation: 0
        }, {type: BLOCK_1, posX: -2, posY: 12, rotation: 90}, {
            type: BLOCK_5,
            posX: 5,
            posY: 12,
            rotation: 0
        }], [{type: BLOCK_10, posX: -1, posY: 0, rotation: 180}, {
        type: BLOCK_10,
        posX: 5,
        posY: 0,
        rotation: 180
    }, {type: BLOCK_3, posX: 4, posY: 1, rotation: 0}, {type: BLOCK_8, posX: 0, posY: 3, rotation: 0}, {
        type: BLOCK_1,
        posX: 5,
        posY: 5,
        rotation: 0
    }, {type: BLOCK_0, posX: 6, posY: 7, rotation: 0}, {type: BLOCK_1, posX: 5, posY: 9, rotation: 0}, {
        type: BLOCK_7,
        posX: 1, posY: 6, rotation: 0
    }, {type: BLOCK_2, posX: 0, posY: 8, rotation: 0}, {type: BLOCK_BONUS, posX: -2, posY: 11, rotation: 0}, {
        type: BLOCK_0,
        posX: -2,
        posY: 13,
        rotation: 0
    }, {type: BLOCK_5, posX: 1, posY: 12, rotation: 0}, {type: BLOCK_5, posX: 5, posY: 12, rotation: 0}], [{
        type: BLOCK_0,
        posX: -2,
        posY: -1,
        rotation: 0
    }, {type: BLOCK_0, posX: 0, posY: -1, rotation: 0}, {type: BLOCK_10, posX: -1, posY: 2, rotation: 90}, {
        type: BLOCK_7,
        posX: 1,
        posY: 2,
        rotation: 270
    }, {type: BLOCK_5, posX: 5, posY: 0, rotation: 0}, {type: BLOCK_5, posX: 5, posY: 4, rotation: 0}, {
        type: BLOCK_2, posX: 0,
        posY: 6, rotation: 0
    }, {type: BLOCK_BONUS, posX: 2, posY: 5, rotation: 0}, {
        type: BLOCK_10,
        posX: 5,
        posY: 8,
        rotation: 180
    }, {type: BLOCK_9, posX: 1, posY: 9, rotation: 0}, {type: BLOCK_14, posX: 2, posY: 11, rotation: 0}, {
        type: BLOCK_11,
        posX: 4,
        posY: 13,
        rotation: 0
    }, {type: BLOCK_1, posX: -1, posY: 13, rotation: 0}]], TEXT_HELP1 = "DESTROY THE BLOCKS TO MOVE YOUR HEXAGON DOWN",
    TEXT_HELP2 = "TRY NOT TO FALL OUT OF THE TOWER OR YOU'LL LOSE",
    TEXT_HELP3 = "AND REMEMBER: USE THE SPECIAL SQUARES CAREFULLY!", TEXT_BEST = "BEST",
    TEXT_BEST_SCORE = "YOUR BEST SCORE",
    TEXT_SCORE = "SCORE", TEXT_GAMEOVER = "GAME OVER!\nTRY AGAIN?",
    TEXT_ARE_SURE = "ARE YOU SURE YOU WANT TO EXIT? ALL UNSAVED PROGRESS WILL BE LOST",
    TEXT_NEWBESTSCORE = "NEW BEST SCORE!", TEXT_PRELOADER_CONTINUE = "START", TEXT_CREDITS_DEVELOPED = "DEVELOPED BY",
    TEXT_ERR_LS = "YOUR WEB BROWSER DOES NOT SUPPORT STORING SETTING LOCALLY. IN SAFARI, THE MOST COMMON CAUSE OF THIS IS USING 'PRIVATE BROWSING MODE'. SOME INFO MAY NOT SAVE OR SOME FEATURE MAY NOT WORK PROPERLY.",
    TEXT_SHARE_IMAGE = "200x200.jpg", TEXT_SHARE_TITLE =
        "Congratulations!", TEXT_SHARE_MSG1 = "You collected <strong>",
    TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!",
    TEXT_SHARE_SHARE1 = "My score is ", TEXT_SHARE_SHARE2 = " points! Can you do better";

function CPreloader() {
    var a, c, b, d, e, h, k, f, l, n;
    this._init = function () {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.loadSprites();
        n = new createjs.Container;
        s_oStage.addChild(n)
    };
    this.unload = function () {
        l.unload();
        l = null;
        n.removeAllChildren()
    };
    this._onImagesLoaded =
        function () {
        };
    this._onAllImagesLoaded = function () {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function () {
        var g = new createjs.Shape;
        g.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        n.addChild(g);
        g = s_oSpriteLibrary.getSprite("200x200");
        k = createBitmap(g);
        k.regX = .5 * g.width;
        k.regY = .5 * g.height;
        k.x = CANVAS_WIDTH_HALF;
        k.y = CANVAS_HEIGHT_HALF - 180;
        n.addChild(k);
        f = new createjs.Shape;
        f.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(k.x - 100, k.y - 100, 200, 200, 10);
        n.addChild(f);
        k.mask = f;
        g = s_oSpriteLibrary.getSprite("progress_bar");
        d = createBitmap(g);
        d.x = CANVAS_WIDTH_HALF - g.width / 2;
        d.y = CANVAS_HEIGHT_HALF + 50;
        n.addChild(d);
        a = g.width;
        c = g.height;
        e = new createjs.Shape;
        e.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, 1, c);
        n.addChild(e);
        d.mask = e;
        b = new createjs.Text("", "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        b.x = CANVAS_WIDTH_HALF;
        b.y = CANVAS_HEIGHT_HALF + 100;
        b.textBaseline = "alphabetic";
        b.textAlign = "center";
        n.addChild(b);
        g = s_oSpriteLibrary.getSprite("but_start");
        l = CTextButton(CANVAS_WIDTH_HALF,
            CANVAS_HEIGHT_HALF, g, TEXT_PRELOADER_CONTINUE, "Arial", "#000", "bold 50", n);
        l.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
        l.setVisible(!1);
        h = new createjs.Shape;
        h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        n.addChild(h);
        createjs.Tween.get(h).to({alpha: 0}, 500).call(function () {
            createjs.Tween.removeTweens(h);
            n.removeChild(h)
        })
    };
    this._onButStartRelease = function () {
        s_oMain._onRemovePreloader()
    };
    this.refreshLoader = function (h) {
        b.text = h + "%";
        100 === h && (l.setVisible(!0), b.visible =
            !1, d.visible = !1);
        e.graphics.clear();
        h = Math.floor(h * a / 100);
        e.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, h, c)
    };
    this._init()
}

function CMain(a) {
    var c, b = 0, d = 0, e = STATE_LOADING, h, k, f;
    this.initContainer = function () {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        s_oStage.preventSelection = !1;
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && (s_oStage.enableMouseOver(20), $("body").on("contextmenu", "#canvas", function (a) {
            return !1
        }));
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = FPS;
        navigator.userAgent.match(/Windows Phone/i) &&
        (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        h = new CPreloader;
    };
    this.preloaderReady = function () {
        this._loadImages();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        c = !0
    };
    this.soundLoaded = function () {
        b++;
        h.refreshLoader(Math.floor(b / d * 100))
    };
    this._initSounds = function () {
        var a = [];
        a.push({path: "./sounds/", filename: "soundtrack", loop: !0, volume: 1, ingamename: "soundtrack"});
        a.push({
            path: "./sounds/",
            filename: "click", loop: !1, volume: 1, ingamename: "click"
        });
        a.push({path: "./sounds/", filename: "collision", loop: !1, volume: 1, ingamename: "collision"});
        a.push({path: "./sounds/", filename: "explosion", loop: !1, volume: 1, ingamename: "explosion"});
        a.push({path: "./sounds/", filename: "bomb", loop: !1, volume: 1, ingamename: "bomb"});
        a.push({path: "./sounds/", filename: "bonus", loop: !1, volume: 1, ingamename: "bonus"});
        a.push({path: "./sounds/", filename: "clicked_block", loop: !1, volume: 1, ingamename: "clicked_block"});
        a.push({
            path: "./sounds/",
            filename: "speed_bonus", loop: !1, volume: 1, ingamename: "speed_bonus"
        });
        a.push({path: "./sounds/", filename: "game_over", loop: !1, volume: 1, ingamename: "game_over"});
        a.push({path: "./sounds/", filename: "newbestscore", loop: !1, volume: 1, ingamename: "newbestscore"});
        d += a.length;
        s_aSounds = [];
        for (var b = 0; b < a.length; b++) s_aSounds[a[b].ingamename] = new Howl({
            src: [a[b].path + a[b].filename + ".mp3", a[b].path + a[b].filename + ".ogg"],
            autoplay: !1,
            preload: !0,
            loop: a[b].loop,
            volume: a[b].volume,
            onload: s_oMain.soundLoaded
        })
    };
    this._loadImages =
        function () {
            s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
            for (var a = 0; 15 > a; a++) s_oSpriteLibrary.addSprite("block_" + a, "./sprites/block_" + a + ".png");
            s_oSpriteLibrary.addSprite("block_bomb", "./sprites/block_bomb.png");
            s_oSpriteLibrary.addSprite("block_speed", "./sprites/block_speed.png");
            s_oSpriteLibrary.addSprite("block_star", "./sprites/block_star.png");
            s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
            s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
            s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
            s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
            s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
            s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
            s_oSpriteLibrary.addSprite("msg_box_big", "./sprites/msg_box_big.png");
            s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
            s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
            s_oSpriteLibrary.addSprite("but_fullscreen",
                "./sprites/but_fullscreen.png");
            s_oSpriteLibrary.addSprite("bg", "./sprites/bg.jpg");
            s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
            s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
            s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
            s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
            s_oSpriteLibrary.addSprite("logo_menu", "./sprites/logo_menu.png");
            s_oSpriteLibrary.addSprite("player", "./sprites/player.png");
            s_oSpriteLibrary.addSprite("explosion", "./sprites/explosion.png");
            s_oSpriteLibrary.addSprite("floor_cover", "./sprites/floor_cover.png");
            d += s_oSpriteLibrary.getNumSprites();
            s_oSpriteLibrary.loadSprites()
        };
    this._onImagesLoaded = function () {
        b++;
        h.refreshLoader(Math.floor(b / d * 100))
    };
    this._onAllImagesLoaded = function () {
    };
    this.onAllPreloaderImagesLoaded = function () {
        this._loadImages()
    };
    this._onRemovePreloader = function () {
        try {
            saveItem("ls_available", "ok")
        } catch (n) {
            s_bStorageAvailable = !1
        }
        h.unload();
        isIOS() || (s_oSoundTrack = playSound("soundtrack", 1, !0));
        this.gotoMenu()
    };
    this.gotoMenu =
        function () {
            k = new CMenu;
            e = STATE_MENU
        };
    this.gotoGame = function () {
        $("#canvas").trigger("start_session");
        f = new CGame(l);
        e = STATE_GAME
    };
    this.gotoHelp = function () {
        new CHelp;
        e = STATE_HELP
    };
    this.stopUpdate = function () {
        c = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        s_bAudioActive && Howler.mute(!0)
    };
    this.startUpdate = function () {
        s_iPrevTime = (new Date).getTime();
        c = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        s_bAudioActive && Howler.mute(!1)
    };
    this._update = function (a) {
        if (!1 !==
            c) {
            var b = (new Date).getTime();
            s_iTimeElaps = b - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = b;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            e === STATE_MENU && k.update();
            e === STATE_GAME && f.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    var l = a;
    ENABLE_FULLSCREEN = a.fullscreen;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    this.initContainer()
}

var s_bMobile, s_bAudioActive = !0, s_bFullscreen = !1, s_iCntTime = 0, s_iTimeElaps = 0, s_iPrevTime = 0,
    s_iCntFps = 0, s_iCurFps = 0, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null, s_oCanvas,
    s_iTotalScore = 0, s_iBestScore = 0, s_oPhysicsController, s_bStorageAvailable = !0, s_bFirstTimePlaying;

function CMenu() {
    var a, c, b, d, e, h, k, f, l, n, g, m, r, t = null, p = null, u, w, y, x, z, v;
    this._init = function () {
        y = new createjs.Container;
        s_oStage.addChild(y);
        w = MENU_TIMER_LIMIT - 100;
        v = [];
        x = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        x.y = 0;
        y.addChild(x);
        z = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        z.y = CANVAS_HEIGHT;
        y.addChild(z);
        k = new createjs.Container;
        s_oStage.addChild(k);
        s_bFirstTimePlaying = !0;
        var q = s_oSpriteLibrary.getSprite("logo_menu");
        f = createBitmap(q);
        f.regX = q.width / 2;
        f.regY = q.height / 2;
        f.x =
            CANVAS_WIDTH / 2;
        f.y = -150;
        createjs.Tween.get(f, {loop: !1}).to({y: CANVAS_HEIGHT_HALF - 100}, 1E3, createjs.Ease.cubicOut);
        k.addChild(f);
        u = new createjs.Text(TEXT_BEST_SCORE + ": 0", "36px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        u.textAlign = "center";
        u.textBaseline = "alphabetic";
        u.x = CANVAS_WIDTH_HALF;
        u.y = CANVAS_HEIGHT_HALF + 150;
        u.lineWidth = 450;
        u.visible = !1;
        k.addChild(u);
        q = s_oSpriteLibrary.getSprite("but_play");
        l = new CGfxButton(CANVAS_WIDTH_HALF, CANVAS_HEIGHT + 200, q, k);
        createjs.Tween.get(l.getSprite(), {loop: !1}).to({
            y: CANVAS_HEIGHT_HALF +
                350
        }, 1E3, createjs.Ease.cubicOut);
        l.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        q = s_oSpriteLibrary.getSprite("but_credits");
        b = 20 + q.width / 2;
        d = q.height / 2 + 10;
        m = new CGfxButton(b, d, q, k);
        m.addEventListener(ON_MOUSE_UP, this._onCredits, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) q = s_oSpriteLibrary.getSprite("audio_icon"), e = CANVAS_WIDTH - q.width / 4 - 20, h = q.height / 2 + 10, g = new CToggle(e, h, q, s_bAudioActive, k), g.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        q = window.document;
        var A = q.documentElement;
        t = A.requestFullscreen || A.mozRequestFullScreen || A.webkitRequestFullScreen || A.msRequestFullscreen;
        p = q.exitFullscreen || q.mozCancelFullScreen || q.webkitExitFullscreen || q.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (t = !1);
        t && screenfull.enabled && (q = s_oSpriteLibrary.getSprite("but_fullscreen"), a = b + q.width / 2 + 10, c = d, r = new CToggle(a, c, q, s_bFullscreen, k), r.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        n = new createjs.Shape;
        n.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.addChild(n);
        createjs.Tween.get(n).to({alpha: 0}, 1E3).call(function () {
            k.removeChild(n)
        });
        s_bStorageAvailable ? (q = getItem("hexagonfall_total_score"), s_iTotalScore = null !== q && void 0 !== q ? Number(q) : 0, q = getItem("hexagonfall_best_score"), null !== q && void 0 !== q ? (s_iBestScore = q, u.text = TEXT_BEST_SCORE + ": " + s_iBestScore, u.visible = !0) : (s_iBestScore = 0, u.text = TEXT_BEST_SCORE + ": " + s_iBestScore, u.visible = !1)) : new CMsgBox(TEXT_ERR_LS, k);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.updateBackgroundPosition = function () {
        x.y -= 3;
        x.y <= 0 - CANVAS_HEIGHT && (x.y = 0);
        z.y -= 3;
        0 >= z.y && (z.y = CANVAS_HEIGHT)
    };
    this.unload = function () {
        l.unload();
        l = null;
        m.unload();
        k.removeAllChildren();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) g.unload(), g = null;
        t && screenfull.enabled && r.unload();
        s_oMenu = null
    };
    this.refreshButtonPos = function (k, f) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || g.setPosition(e - k, h + f);
        t && screenfull.enabled && r.setPosition(a + k, c + f);
        m.setPosition(b + k, d + f)
    };
    this.resetFullscreenBut = function () {
        t && screenfull.enabled && r.setActive(s_bFullscreen)
    };
    this.exitFromCredits = function () {
    };
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onCredits = function () {
        new CCreditsPanel
    };
    this._onButPlayRelease = function () {
        this.unload();
        s_oMain.gotoGame()
    };
    this._onFullscreenRelease = function () {
        s_bFullscreen ? p.call(window.document) : t.call(window.document.documentElement);
        sizeHandler()
    };
    this.initNewBlock = function () {
        var a = Math.floor(650 * Math.random()) + 50,
            b = s_oSpriteLibrary.getSprite("block_" + (Math.floor(15 * Math.random()) +
                0)), c = createBitmap(b);
        c.regX = .5 * b.width;
        c.regY = .5 * b.height;
        c.scaleX = c.scaleY = .8;
        c.x = a;
        c.y = -200;
        y.addChild(c);
        v.push(c)
    };
    this.updateBlocksPosition = function () {
        for (var a = 0; a < v.length; a++) v[a].rotation += MENU_BLOCKS_ROTATION, v[a].y += MENU_BLOCKS_SPEED, v[a].y > CANVAS_HEIGHT + 200 && y.removeChild(v[a])
    };
    this.update = function () {
        this.updateBackgroundPosition();
        this.updateBlocksPosition();
        w += s_iTimeElaps;
        w > MENU_TIMER_LIMIT && (w = 0, this.initNewBlock())
    };
    s_oMenu = this;
    this._init()
}

var s_oMenu = null;

function CGame(a) {
    var c, b, d, e, h, k, f, l, n, g, m, r, t, p, u, w, y, x, z, v, q;
    this._init = function () {
        r = new createjs.Container;
        s_oStage.addChild(r);
        var a = s_oSpriteLibrary.getSprite("bg_game");
        f = createBitmap(a);
        f.y = 0;
        l = createBitmap(a);
        l.y = CANVAS_HEIGHT;
        r.addChild(f, l);
        m = new createjs.Container;
        s_oStage.addChild(m);
        this._resetVariables();
        this._initNewGame();
        t = new createjs.Container;
        m.addChild(t);
        p = new createjs.Shape;
        p.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        p.alpha = .01;
        t.addChild(p);
        p.on("pressup",
            function (a) {
                s_oGame.onClickedBlock(a)
            });
        this._addFloorCover();
        x = new CInterface(t);
        x.initInterfacesText();
        this.initNewBestScoreText();
        !0 === s_bFirstTimePlaying ? CHelpPanel() : this._onExitHelp()
    };
    this.startShake = function () {
        new CShake(m, 500, 5, 20)
    };
    this.onClickedBlock = function (a) {
        for (var b = 0; b < q.length; b++) if (null !== q[b]) q[b].onClickedBlock(a)
    };
    this._initNewGame = function () {
        s_oPhysicsController = new CPhysicsController;
        g = new CPhysicObjectsCreator(s_oPhysicsController.getWorld());
        n = new CPhysicWorld(g, m);
        u = g.addFloor(m);
        y = g.addPlayer(m);
        this._addFirstMatrix();
        this.createNewMatrixSet()
    };
    this._addFirstMatrix = function () {
        for (var a = [{type: BLOCK_14, posX: 2, posY: -11, rotation: 0}, {
            type: BLOCK_11,
            posX: 4,
            posY: -9,
            rotation: 0
        }, {type: BLOCK_1, posX: -1, posY: -9, rotation: 0}, {
            type: BLOCK_1,
            posX: -1,
            posY: -7,
            rotation: 0
        }, {type: BLOCK_11, posX: 4, posY: -7, rotation: 0}, {
            type: BLOCK_1,
            posX: 5,
            posY: -5,
            rotation: 0
        }, {type: BLOCK_11, posX: 0, posY: -5, rotation: 0}, {
            type: BLOCK_14,
            posX: 2,
            posY: -3,
            rotation: 0
        }], b = 0; b < a.length; b++) {
            var c = g.createBlock(DYNAMIC_BODY, a[b].type);
            c = new CBlock(c, a[b], m);
            q.push(c)
        }
    };
    this.setFloorCoverPosition = function (a) {
        w.y = FLOOR_COVER_Y - a
    };
    this._addFloorCover = function () {
        w = createBitmap(s_oSpriteLibrary.getSprite("floor_cover"));
        w.x = 0;
        w.y = FLOOR_COVER_Y;
        w.on("mousedown", function () {
        });
        t.addChild(w)
    };
    this.createNewMatrixSet = function () {
        var a = BLOCK_MATRIX_LIST.length;
        k < SCORE_DIFFICULTY_LIMIT && (a = 10);
        this.addMatrixSet(Math.floor(Math.random() * a))
    };
    this.getPhysicWorld = function () {
        return n
    };
    this.addBombExplosion = function (a, b) {
        !1 === soundPlaying("bomb") &&
        playSound("bomb", 1, !1);
        this.startShake();
        var c = new createjs.Shape;
        c.graphics.beginFill("black").drawCircle(a, b, EXPLOSION_SIZE);
        c.alpha = .3;
        m.addChild(c);
        for (var d = [], h = 0; h < q.length; h++) {
            var g = q[h];
            distanceBetweenTwoPoints(a, b, g.getX(), g.getY()) < EXPLOSION_SIZE && d.push(g)
        }
        createjs.Tween.get(c).to({alpha: 0}, 500, createjs.Ease.linear).call(function () {
            createjs.Tween.removeTweens(c);
            m.removeChild(c)
        });
        this.loopThroughBlocksExplosion(d)
    };
    this._resetVariables = function () {
        z = null;
        b = c = !1;
        q = [];
        k = e = 0;
        d = 1;
        h = s_iTotalScore;
        setVolume("soundtrack", .5)
    };
    this.initNewBestScoreText = function () {
        v = new createjs.Text(TEXT_NEWBESTSCORE, "50px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        v.textAlign = "center";
        v.textBaseline = "alphabetic";
        v.x = CANVAS_WIDTH_HALF;
        v.y = CANVAS_HEIGHT_HALF - 200;
        v.visible = !1;
        t.addChild(v)
    };
    this.addMatrixSet = function (a) {
        a = BLOCK_MATRIX_LIST[a];
        for (var b = 0; b < a.length; b++) {
            var c = g.createBlock(DYNAMIC_BODY, a[b].type);
            c = new CBlock(c, a[b], m);
            q.push(c)
        }
        m.addChild(t)
    };
    this.unload = function () {
        c = !1;
        x.unload();
        this.destroyPhysicsEngine();
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren();
        s_oGame = null
    };
    this.destroyPhysicsEngine = function () {
        s_oPhysicsController.destroyWorld();
        u.unload();
        u = null;
        y.unload();
        y = null;
        for (var a = 0; a < q.length; a++) q[a].unload(), q[a] = null;
        s_oPhysicsController = n = g = null
    };
    this.onExit = function () {
        setVolume("soundtrack", 1);
        $("#canvas").trigger("end_session");
        $("#canvas").trigger("show_interlevel_ad");
        this.unload();
        s_oMain.gotoMenu()
    };
    this.restart = function () {
        setVolume("soundtrack", .5);
        $("#canvas").trigger("restart_level");
        this.unload();
        s_oMain.gotoGame()
    };
    this._onExitHelp = function () {
        c = !0;
        s_bFirstTimePlaying = !1;
        y.activatePlayer(!0)
    };
    this.addDestroyedBlocks = function () {
        e++;
        d = 1 + Math.round(e / MULTIPLIER_DIVIDER)
    };
    this.updateScore = function () {
        s_iTotalScore = h += k;
        saveItem("hexagonfall_total_score", s_iTotalScore);
        k > s_iBestScore && (s_iBestScore = k, saveItem("hexagonfall_best_score", s_iBestScore))
    };
    this.setFloorMovement = function (a) {
        u.setActive(a)
    };
    this.addScore = function (a, c, h) {
        h *= d;
        this.initScoreText(h, a, c);
        k += h;
        x.refreshScoreText(k);
        k > s_iBestScore && (this.showNewBestScore(), s_iBestScore = k, saveItem("hexagonfall_best_score", s_iBestScore), x.refreshBestScoreText(), b = !0)
    };
    this.showNewBestScore = function () {
        !0 !== b && !0 !== s_bFirstTimePlaying && (!1 === soundPlaying("newbestscore") && playSound("newbestscore", 1, !1), v.visible = !0, (new createjs.Tween.get(v)).to({alpha: 1}, 500, createjs.Ease.quadIn).call(function () {
            (new createjs.Tween.get(v, {loop: !0})).to({
                scaleX: 1.2,
                scaleY: 1.2
            }, 1E3, createjs.Ease.quadOut).to({scaleX: 1, scaleY: 1}, 1E3, createjs.Ease.quadIn);
            (new createjs.Tween.get(v)).wait(2E3).to({alpha: 0}, 1E3, createjs.Ease.quadOut).call(function () {
                v.visible = !1
            })
        }))
    };
    this.initScoreText = function (a, b, c) {
        var d = new createjs.Text("+" + a, "40px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        d.textAlign = "center";
        d.textBaseline = "alphabetic";
        d.x = b;
        d.y = c;
        t.addChild(d);
        createjs.Tween.get(d).to({y: d.y - 400, alpha: 0}, 1E3, createjs.Ease.sineOut).call(function () {
            createjs.Tween.removeTweens(d);
            t.removeChild(d)
        })
    };
    this.loopThroughBlocksExplosion = function (a) {
        for (var b = 0; b < a.length; b++) (function (b) {
            setTimeout(function () {
                    a[b].explodeBlock()
                },
                20 * b)
        })(b)
    };
    this.onSpeedBlockExploded = function () {
        this.loopThroughBlocksExplosion(q)
    };
    this.gameOver = function () {
        c = !1;
        this.updateScore();
        null === z && ($("#canvas").trigger("share_event", s_iTotalScore), $("#canvas").trigger("save_score", s_iTotalScore), playSound("game_over", 1, !1), stopSound("soundtrack"), setTimeout(function () {
            playSound("soundtrack", .5, !1)
        }, 3E3), z = new CEndPanel(k))
    };
    this.setStartGame = function (a) {
        c = a
    };
    this.updatePhysics = function () {
        y.update();
        u.update();
        for (var a = 0; a < q.length; a++) q[a].update();
        s_oPhysicsController.update()
    };
    this.updateBackgroundPosition = function (a) {
        f.y -= a / BACKGROUND_MOVEMENT_VAR;
        f.y <= -1 * CANVAS_HEIGHT && (f.y = 0);
        l.y -= a / BACKGROUND_MOVEMENT_VAR;
        0 >= l.y && (l.y = CANVAS_HEIGHT)
    };
    this.update = function () {
        if (c) for (var a = 0; a < UPDATE_LOOP_VAR; a++) this.updatePhysics()
    };
    s_oGame = this;
    MATRIX_SPEED = a.matrix_speed;
    BLOCK_VALUE = a.block_value;
    BLOCK_BONUS_VALUE = a.block_bonus_value;
    this._init()
}

var s_oGame = null;

function CPhysicsController() {
    var a = Box2D.Common.Math.b2Vec2, c = Box2D.Dynamics.b2World, b = Box2D.Dynamics.b2DebugDraw, d, e = this;
    this.init = function () {
        var b = new a(0, GRAVITY);
        d = new c(b, !0);
        DEBUG_BOX2D && this._initDebugCanvas();
        this.createAContactListener()
    };
    this._initDebugCanvas = function () {
        var a = document.createElement("canvas");
        a.id = "debug";
        a.width = s_oCanvas.width;
        a.height = s_oCanvas.height;
        a.style.position = "fixed";
        document.body.appendChild(a);
        $("#debug").css("pointer-events", "none");
        a = document.getElementById("debug").getContext("2d");
        var c = new b;
        c.SetSprite(a);
        c.SetDrawScale(WORLD_SCALE);
        c.SetFillAlpha(DEBUG_BOX2D_ALPHA);
        c.SetLineThickness(1);
        c.SetFlags(b.e_shapeBit);
        d.SetDebugDraw(c);
        sizeHandler()
    };
    this.removeDebugCanvas = function () {
        var a = document.getElementById("debug");
        a.parentNode.removeChild(a)
    };
    this.createAContactListener = function () {
        var a = new Box2D.Dynamics.b2ContactListener;
        a.BeginContact = function (a) {
            var b = a.GetFixtureA().GetUserData(), c = a.GetFixtureB().GetUserData();
            null === b || null === c || "polygon" !== b.id && "polygon" !== c.id ||
            !1 !== soundPlaying("collision") || playSound("collision", 1, !1);
            e.processContactEvent(CONTACT_BEGIN, b, a);
            e.processContactEvent(CONTACT_BEGIN, c, a)
        };
        a.EndContact = function (a) {
            var b = a.GetFixtureA().GetUserData(), c = a.GetFixtureB().GetUserData();
            e.processContactEvent(CONTACT_END, b, a);
            e.processContactEvent(CONTACT_END, c, a)
        };
        a.PreSolve = function (a, b) {
        };
        d.SetContactListener(a)
    };
    this.processContactEvent = function (a, b, c) {
        b && b.contacttype === a && b.callback(b.params, c)
    };
    this.startComputing = function (a) {
        a.GetBody().SetActive(!0)
    };
    this.applyImpulse = function (a) {
        a.GetBody().ApplyImpulse({x: .8, y: 1}, a.GetBody().GetWorldCenter())
    };
    this.decreaseSpeedRotation = function (a) {
        var b = .99 * a.GetBody().GetAngularVelocity();
        a.GetBody().SetAngularVelocity(b)
    };
    this.getSpeedRotation = function (a) {
        return a.GetBody().GetAngularVelocity()
    };
    this.moveObject = function (a, b, c) {
        b = {x: b / WORLD_SCALE, y: c / WORLD_SCALE};
        a.GetBody().SetPosition(b)
    };
    this.destroyBody = function (a) {
        d.DestroyBody(a.GetBody())
    };
    this.destroyBodyVector = function (a) {
        d.DestroyBody(a)
    };
    this.destroyAllBodies =
        function () {
            for (var a = d.GetBodyList(); a;) {
                var b = a;
                a = a.GetNext();
                d.DestroyBody(b)
            }
            d.deleteUnusedObjects
        };
    this.destroyAllJoints = function () {
        for (var a = d.GetJointList(); a;) {
            var b = a.GetNext();
            d.DestroyJoint(b)
        }
    };
    this.destroyAllContacts = function () {
        for (var a = d.GetContactList(); a;) {
            var b = a.GetNext();
            d.DestroyJoint(b)
        }
    };
    this.destroyWorld = function () {
        this.destroyAllJoints();
        this.destroyAllBodies();
        this.destroyAllContacts();
        DEBUG_BOX2D && this.removeDebugCanvas();
        d = null
    };
    this.getWorld = function () {
        return d
    };
    this.setElementPosition =
        function (a, b) {
            var c = {x: b.x / WORLD_SCALE, y: b.y / WORLD_SCALE};
            a.GetBody().SetPosition(c)
        };
    this.getElementPosition = function (a) {
        var b = a.GetBody().GetPosition();
        return {x: b.x * WORLD_SCALE, y: b.y * WORLD_SCALE, angle: 180 * a.GetBody().GetAngle() / Math.PI}
    };
    this.getElementAngle = function (a) {
        return 180 * a.GetBody().GetAngle() / Math.PI
    };
    this.update = function () {
        d.Step(TIMESTEP, VELOCITY_ITERATIONS, POSITION_ITERATIONS);
        DEBUG_BOX2D && d.DrawDebugData();
        d.ClearForces()
    };
    this.init()
}

function CPhysicObjectsCreator(a) {
    var c = Box2D.Common.Math.b2Vec2, b = Box2D.Dynamics.b2BodyDef, d = Box2D.Dynamics.b2Body,
        e = Box2D.Dynamics.b2FixtureDef, h = Box2D.Collision.Shapes.b2PolygonShape, k;
    this.init = function () {
        k = a
    };
    this.addFloor = function (a) {
        var b = this.addRectangle(350, 1, CANVAS_WIDTH_HALF, FLOOR_Y_START, 0, FLOOR_DENSITY, FLOOR_FRICTION, FLOOR_RESTITUTION);
        return new CFloor(b, a)
    };
    this.addPlayer = function (a) {
        var b = PLAYER_START_X;
        for (var c = PLAYER_START_Y, d = [], e = GAME_OBJECTS.rigidBodies[0].polygons, h = 0; h < e.length; h++) for (var f =
            0; f < e[h].length; f++) d[f] = {x: e[h][f].x, y: e[h][f].y};
        s_oGame.getPhysicWorld().centerToScreen(d);
        b = this.addPolygon(d.reverse(), b, c, 0, PLAYER_DENSITY, PLAYER_FRICTION, PLAYER_RESTITUTION, DYNAMIC_BODY);
        return new CPlayer(b, a)
    };
    this.createBlock = function (a, l) {
        var f = new h, g = new e;
        g.density = BLOCK_DENSITY;
        g.friction = BLOCK_FRICTION;
        g.restitution = BLOCK_RESTITUTION;
        g.shape = f;
        g.userData = {id: "block"};
        var m = new b;
        m.type = d.b2_staticBody;
        a === DYNAMIC_BODY && (m.type = d.b2_dynamicBody);
        m.allowSleep = !0;
        m.awake = !0;
        m.bullet =
            !0;
        m = k.CreateBody(m);
        switch (l) {
            case BLOCK_SPEED:
            case BLOCK_BOMB:
            case BLOCK_BONUS:
            case BLOCK_0:
                f.SetAsBox(BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED);
                m.CreateFixture(g);
                break;
            case BLOCK_1:
                f.SetAsBox(2 * BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED);
                m.CreateFixture(g);
                break;
            case BLOCK_2:
                f.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED, new c(-2 * BLOCK_HALF_SIZE_SCALED, -1 * BLOCK_HALF_SIZE_SCALED));
                m.CreateFixture(g);
                f = new h;
                f.SetAsOrientedBox(3 * BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED,
                    new c(0, BLOCK_HALF_SIZE_SCALED));
                g = new e;
                g.density = BLOCK_DENSITY;
                g.friction = BLOCK_FRICTION;
                g.restitution = BLOCK_RESTITUTION;
                g.shape = f;
                m.CreateFixture(g);
                break;
            case BLOCK_3:
                f.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED, new c(-2 * BLOCK_HALF_SIZE_SCALED, -2 * BLOCK_HALF_SIZE_SCALED));
                m.CreateFixture(g);
                f = new h;
                f.SetAsOrientedBox(2 * BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED, new c(-1 * BLOCK_HALF_SIZE_SCALED, 0));
                g = new e;
                g.density = BLOCK_DENSITY;
                g.friction = BLOCK_FRICTION;
                g.restitution = BLOCK_RESTITUTION;
                g.shape = f;
                m.CreateFixture(g);
                f = new h;
                f.SetAsOrientedBox(2 * BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED, new c(BLOCK_HALF_SIZE_SCALED, 2 * BLOCK_HALF_SIZE_SCALED));
                g = new e;
                g.density = BLOCK_DENSITY;
                g.friction = BLOCK_FRICTION;
                g.restitution = BLOCK_RESTITUTION;
                g.shape = f;
                m.CreateFixture(g);
                break;
            case BLOCK_4:
                f.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED, new c(-3 * BLOCK_HALF_SIZE_SCALED, -1 * BLOCK_HALF_SIZE_SCALED));
                m.CreateFixture(g);
                f = new h;
                f.SetAsOrientedBox(4 * BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED,
                    new c(0, BLOCK_HALF_SIZE_SCALED));
                g = new e;
                g.density = BLOCK_DENSITY;
                g.friction = BLOCK_FRICTION;
                g.restitution = BLOCK_RESTITUTION;
                g.shape = f;
                m.CreateFixture(g);
                break;
            case BLOCK_5:
                f.SetAsBox(2 * BLOCK_HALF_SIZE_SCALED, 2 * BLOCK_HALF_SIZE_SCALED);
                m.CreateFixture(g);
                break;
            case BLOCK_6:
                f.SetAsOrientedBox(2 * BLOCK_HALF_SIZE_SCALED, 2 * BLOCK_HALF_SIZE_SCALED, new c(-1 * BLOCK_HALF_SIZE_SCALED, 0));
                m.CreateFixture(g);
                f = new h;
                f.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED, new c(2 * BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED));
                g = new e;
                g.density = BLOCK_DENSITY;
                g.friction = BLOCK_FRICTION;
                g.restitution = BLOCK_RESTITUTION;
                g.shape = f;
                m.CreateFixture(g);
                break;
            case BLOCK_7:
                f.SetAsOrientedBox(2 * BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED, new c(-2 * BLOCK_HALF_SIZE_SCALED, -1 * BLOCK_HALF_SIZE_SCALED));
                m.CreateFixture(g);
                f = new h;
                f.SetAsOrientedBox(3 * BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED, new c(BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED));
                g = new e;
                g.density = BLOCK_DENSITY;
                g.friction = BLOCK_FRICTION;
                g.restitution = BLOCK_RESTITUTION;
                g.shape = f;
                m.CreateFixture(g);
                break;
            case BLOCK_8:
                f.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED, new c(-2 * BLOCK_HALF_SIZE_SCALED, -2 * BLOCK_HALF_SIZE_SCALED));
                m.CreateFixture(g);
                f = new h;
                f.SetAsOrientedBox(3 * BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED, new c(0, 0));
                g = new e;
                g.density = BLOCK_DENSITY;
                g.friction = BLOCK_FRICTION;
                g.restitution = BLOCK_RESTITUTION;
                g.shape = f;
                m.CreateFixture(g);
                f = new h;
                f.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED, new c(2 * BLOCK_HALF_SIZE_SCALED,
                    2 * BLOCK_HALF_SIZE_SCALED));
                g = new e;
                g.density = BLOCK_DENSITY;
                g.friction = BLOCK_FRICTION;
                g.restitution = BLOCK_RESTITUTION;
                g.shape = f;
                m.CreateFixture(g);
                break;
            case BLOCK_9:
                f.SetAsBox(4 * BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED);
                m.CreateFixture(g);
                break;
            case BLOCK_10:
                f.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED, new c(-1 * BLOCK_HALF_SIZE_SCALED, -1 * BLOCK_HALF_SIZE_SCALED));
                m.CreateFixture(g);
                f = new h;
                f.SetAsOrientedBox(2 * BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED, new c(0, BLOCK_HALF_SIZE_SCALED));
                g = new e;
                g.density = BLOCK_DENSITY;
                g.friction = BLOCK_FRICTION;
                g.restitution = BLOCK_RESTITUTION;
                g.shape = f;
                m.CreateFixture(g);
                break;
            case BLOCK_11:
                f.SetAsBox(3 * BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED);
                m.CreateFixture(g);
                break;
            case BLOCK_12:
                f.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED, new c(-2 * BLOCK_HALF_SIZE_SCALED, -1 * BLOCK_HALF_SIZE_SCALED));
                m.CreateFixture(g);
                f = new h;
                f.SetAsOrientedBox(3 * BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED, new c(0, BLOCK_HALF_SIZE_SCALED));
                g = new e;
                g.density =
                    BLOCK_DENSITY;
                g.friction = BLOCK_FRICTION;
                g.restitution = BLOCK_RESTITUTION;
                g.shape = f;
                m.CreateFixture(g);
                f = new h;
                f.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED, new c(2 * BLOCK_HALF_SIZE_SCALED, -1 * BLOCK_HALF_SIZE_SCALED));
                g = new e;
                g.density = BLOCK_DENSITY;
                g.friction = BLOCK_FRICTION;
                g.restitution = BLOCK_RESTITUTION;
                g.shape = f;
                m.CreateFixture(g);
                break;
            case BLOCK_13:
                f.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED, 2 * BLOCK_HALF_SIZE_SCALED, new c(-2 * BLOCK_HALF_SIZE_SCALED, -1 * BLOCK_HALF_SIZE_SCALED));
                m.CreateFixture(g);
                f = new h;
                f.SetAsOrientedBox(3 * BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED, new c(0, 2 * BLOCK_HALF_SIZE_SCALED));
                g = new e;
                g.density = BLOCK_DENSITY;
                g.friction = BLOCK_FRICTION;
                g.restitution = BLOCK_RESTITUTION;
                g.shape = f;
                m.CreateFixture(g);
                break;
            case BLOCK_14:
                f.SetAsBox(5 * BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED), m.CreateFixture(g)
        }
        return m
    };
    this.addPolygon = function (a, l, n, g, m, r, t, p) {
        var f = new b;
        f.type = d.b2_dynamicBody;
        p === STATIC_BODY && (f.type = d.b2_staticBody);
        f.allowSleep = !1;
        f.bullet = !0;
        p = new e;
        p.density =
            m;
        p.friction = r;
        p.restitution = t;
        p.shape = new h;
        p.userData = {id: "polygon"};
        m = [];
        for (r = 0; r < a.length; r++) t = new c, t.Set(a[r].x / WORLD_SCALE, a[r].y / WORLD_SCALE), m.push(t);
        p.shape.SetAsArray(m, m.length);
        f.position.Set(l / WORLD_SCALE, n / WORLD_SCALE);
        f.angle = g * Math.PI / 180;
        a = k.CreateBody(f).CreateFixture(p);
        a.GetBody().SetActive(!1);
        return a
    };
    this.addRectangle = function (a, c, n, g, m, r, t, p) {
        var f = new b;
        f.type = d.b2_kinematicBody;
        var l = new e;
        l.density = r;
        l.friction = t;
        l.restitution = p;
        l.shape = new h;
        l.shape.SetAsBox(a / WORLD_SCALE,
            c / WORLD_SCALE);
        l.userData = {id: "rectangle"};
        f.position.Set(n / WORLD_SCALE, g / WORLD_SCALE);
        f.angle = m * Math.PI / 180;
        a = k.CreateBody(f);
        a.CreateFixture(l);
        return a
    };
    this.init()
}

function CPhysicWorld(a, c) {
    var b, d, e;
    this._init = function () {
        var a = s_oSpriteLibrary.getSprite("bg");
        b = createBitmap(a);
        b.x = 0;
        b.y = 0;
        b.alpha = 1E-4;
        h.addChild(b);
        d = a.width;
        e = a.height
    };
    this.centerToScreen = function (a) {
        for (var c = d, h = b.x - d / 2, k = b.y - e / 2, g = 0; g < a.length; g++) a[g].x = a[g].x * c + h, a[g].y = e - a[g].y * c + k
    };
    this.unload = function () {
        h.removeChild(b);
        b = null
    };
    var h = c;
    this._init()
}

function CToggle(a, c, b, d, e) {
    var h, k, f, l, n;
    this._init = function (a, b, c, d, e) {
        n = void 0 !== e ? e : s_oStage;
        k = [];
        f = [];
        e = new createjs.SpriteSheet({
            images: [c],
            frames: {width: c.width / 2, height: c.height, regX: c.width / 2 / 2, regY: c.height / 2},
            animations: {state_true: [0], state_false: [1]}
        });
        h = d;
        l = createSprite(e, "state_" + h, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
        l.x = a;
        l.y = b;
        l.stop();
        s_bMobile || (l.cursor = "pointer");
        n.addChild(l);
        this._initListener()
    };
    this.unload = function () {
        l.off("mousedown", this.buttonDown);
        l.off("pressup",
            this.buttonRelease);
        n.removeChild(l)
    };
    this._initListener = function () {
        l.on("mousedown", this.buttonDown);
        l.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function (a, b, c) {
        k[a] = b;
        f[a] = c
    };
    this.setCursorType = function (a) {
        l.cursor = a
    };
    this.setActive = function (a) {
        h = a;
        l.gotoAndStop("state_" + h)
    };
    this.buttonRelease = function () {
        l.scaleX = 1;
        l.scaleY = 1;
        playSound("click", 1, !1);
        h = !h;
        l.gotoAndStop("state_" + h);
        k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(f[ON_MOUSE_UP], h)
    };
    this.buttonDown = function () {
        l.scaleX = .9;
        l.scaleY =
            .9;
        k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN])
    };
    this.setPosition = function (a, b) {
        l.x = a;
        l.y = b
    };
    this._init(a, c, b, d, e)
}

function CGfxButton(a, c, b, d) {
    var e, h, k, f, l, n, g, m, r;
    this._init = function (a, b, c) {
        e = !1;
        h = [];
        k = [];
        l = [];
        f = createBitmap(c);
        f.x = a;
        f.y = b;
        g = n = 1;
        f.regX = c.width / 2;
        f.regY = c.height / 2;
        s_bMobile || (f.cursor = "pointer");
        t.addChild(f);
        this._initListener()
    };
    this.getSprite = function () {
        return f
    };
    this.unload = function () {
        f.off("mousedown", m);
        f.off("pressup", r);
        t.removeChild(f)
    };
    this.setVisible = function (a) {
        f.visible = a
    };
    this.setCursorType = function (a) {
        f.cursor = a
    };
    this._initListener = function () {
        m = f.on("mousedown", this.buttonDown);
        r = f.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function (a, b, c) {
        h[a] = b;
        k[a] = c
    };
    this.addEventListenerWithParams = function (a, b, c, d) {
        h[a] = b;
        k[a] = c;
        l[a] = d
    };
    this.enable = function () {
        e = !1
    };
    this.disable = function () {
        e = !0
    };
    this.buttonRelease = function () {
        e || (f.scaleX = 0 < n ? 1 : -1, f.scaleY = 1, playSound("click", 1, !1), h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(k[ON_MOUSE_UP], l[ON_MOUSE_UP]))
    };
    this.buttonDown = function () {
        e || (f.scaleX = 0 < n ? .9 : -.9, f.scaleY = .9, h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN], l[ON_MOUSE_DOWN]))
    };
    this.rotation = function (a) {
        f.rotation = a
    };
    this.getButton = function () {
        return f
    };
    this.setPosition = function (a, b) {
        f.x = a;
        f.y = b
    };
    this.setX = function (a) {
        f.x = a
    };
    this.setY = function (a) {
        f.y = a
    };
    this.getButtonImage = function () {
        return f
    };
    this.setScaleX = function (a) {
        n = f.scaleX = a
    };
    this.getX = function () {
        return f.x
    };
    this.getY = function () {
        return f.y
    };
    this.pulseAnimation = function () {
        createjs.Tween.get(f).to({scaleX: .9 * n, scaleY: .9 * g}, 850, createjs.Ease.quadOut).to({
            scaleX: n,
            scaleY: g
        }, 650, createjs.Ease.quadIn).call(function () {
            p.pulseAnimation()
        })
    };
    this.trebleAnimation = function () {
        createjs.Tween.get(f).to({rotation: 5}, 75, createjs.Ease.quadOut).to({rotation: -5}, 140, createjs.Ease.quadIn).to({rotation: 0}, 75, createjs.Ease.quadIn).wait(750).call(function () {
            p.trebleAnimation()
        })
    };
    this.removeAllTweens = function () {
        createjs.Tween.removeTweens(f)
    };
    var t = void 0 !== d ? d : s_oStage;
    this._init(a, c, b);
    var p = this;
    return this
}

function CTextButton(a, c, b, d, e, h, k, f) {
    var l, n, g, m, r;
    this._init = function (a, b, c, d, f, e, h, k) {
        l = [];
        n = [];
        f = createBitmap(c);
        var t = Math.ceil(h / 20);
        r = new createjs.Text(d, h + "px " + PRIMARY_FONT, "#000000");
        r.textAlign = "center";
        r.textBaseline = "alphabetic";
        var p = r.getBounds();
        r.x = c.width / 2 + t;
        r.y = Math.floor(c.height / 2) + p.height / 3 + t;
        m = new createjs.Text(d, h + "px " + PRIMARY_FONT, e);
        m.textAlign = "center";
        m.textBaseline = "alphabetic";
        p = m.getBounds();
        m.x = c.width / 2;
        m.y = Math.floor(c.height / 2) + p.height / 3;
        g = new createjs.Container;
        g.x = a;
        g.y = b;
        g.regX = c.width / 2;
        g.regY = c.height / 2;
        g.addChild(f, r, m);
        k.addChild(g);
        s_bMobile || (g.cursor = "pointer");
        this._initListener()
    };
    this.unload = function () {
        g.off("mousedown");
        g.off("pressup");
        f.removeChild(g)
    };
    this.setVisible = function (a) {
        g.visible = a
    };
    this._initListener = function () {
        oParent = this;
        g.on("mousedown", this.buttonDown);
        g.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function (a, b, c) {
        l[a] = b;
        n[a] = c
    };
    this.buttonRelease = function () {
        g.scaleX = 1;
        g.scaleY = 1;
        playSound("click", 1, !1);
        l[ON_MOUSE_UP] &&
        l[ON_MOUSE_UP].call(n[ON_MOUSE_UP])
    };
    this.buttonDown = function () {
        g.scaleX = .9;
        g.scaleY = .9;
        l[ON_MOUSE_DOWN] && l[ON_MOUSE_DOWN].call(n[ON_MOUSE_DOWN])
    };
    this.setTextPosition = function (a) {
        m.y = a;
        r.y = a + 2
    };
    this.setPosition = function (a, b) {
        g.x = a;
        g.y = b
    };
    this.setX = function (a) {
        g.x = a
    };
    this.setY = function (a) {
        g.y = a
    };
    this.getButtonImage = function () {
        return g
    };
    this.getX = function () {
        return g.x
    };
    this.getY = function () {
        return g.y
    };
    this._init(a, c, b, d, e, h, k, f);
    return this
}

function CInterface(a) {
    var c, b, d, e, h, k, f, l, n, g, m = null, r = null, t, p, u, w;
    this._init = function () {
        w = a;
        f = new createjs.Container;
        w.addChild(f);
        var n = s_oSpriteLibrary.getSprite("but_exit");
        c = CANVAS_WIDTH - n.width / 2 - 20;
        b = n.height / 2 + 10;
        t = new CGfxButton(c, b, n, f);
        t.addEventListener(ON_MOUSE_UP, this._onExit, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) {
            var p = s_oSpriteLibrary.getSprite("audio_icon");
            h = c - n.width / 2 - p.width / 4 - 10;
            k = b;
            l = new CToggle(h, k, p, s_bAudioActive, f);
            l.addEventListener(ON_MOUSE_UP, this._onAudioToggle,
                this);
            d = 20 + p.width / 4;
            e = p.height / 2 + 10
        } else d = c - n.width - 10, e = b;
        n = window.document;
        p = n.documentElement;
        m = p.requestFullscreen || p.mozRequestFullScreen || p.webkitRequestFullScreen || p.msRequestFullscreen;
        r = n.exitFullscreen || n.mozCancelFullScreen || n.webkitExitFullscreen || n.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (m = !1);
        m && screenfull.enabled && (p = s_oSpriteLibrary.getSprite("but_fullscreen"), g = new CToggle(d, e, p, s_bFullscreen, f), g.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        this.refreshButtonPos(s_iOffsetX,
            s_iOffsetY)
    };
    this.initInterfacesText = function () {
        n = CANVAS_HEIGHT - 250;
        u = new createjs.Text(TEXT_SCORE + " 0", "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        u.textAlign = "left";
        u.x = 60;
        u.textBaseline = "alphabetic";
        u.y = n;
        f.addChild(u);
        p = new createjs.Text(TEXT_BEST + " " + s_iBestScore, "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        p.textAlign = "right";
        p.x = CANVAS_WIDTH - 60;
        p.textBaseline = "alphabetic";
        p.y = n;
        f.addChild(p);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function (a, f) {
        !1 !== DISABLE_SOUND_MOBILE &&
        !1 !== s_bMobile || l.setPosition(h - a, k + f);
        m && screenfull.enabled && g.setPosition(d + a, e + f);
        t.setPosition(c - a, b + f);
        n = CANVAS_HEIGHT - f - 50;
        s_oGame.setFloorCoverPosition(f);
        void 0 !== u && (u.y = n);
        void 0 !== p && (p.y = n)
    };
    this.refreshScoreText = function (a) {
        u.text = TEXT_SCORE + " " + a
    };
    this.refreshBestScoreText = function () {
        p.text = TEXT_BEST + " " + s_iBestScore
    };
    this.unload = function () {
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) l.unload(), l = null;
        m && screenfull.enabled && g.unload();
        t.unload();
        s_oInterface = null;
        s_oGame._bDisableEvents =
            !1;
        s_oGame.setStartGame(!0)
    };
    this._onExit = function () {
        new CAreYouSurePanel(f);
        s_oGame._bDisableEvents = !0;
        s_oGame.setStartGame(!1)
    };
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onFullscreenRelease = function () {
        s_bFullscreen ? r.call(window.document) : m.call(window.document.documentElement);
        sizeHandler()
    };
    this.resetFullscreenBut = function () {
        m && screenfull.enabled && g.setActive(s_bFullscreen)
    };
    s_oInterface = this;
    this._init();
    return this
}

var s_oInterface = null;

function CPlayer(a, c) {
    var b;
    this._init = function () {
        var a = s_oSpriteLibrary.getSprite("player");
        b = createBitmap(a);
        b.regX = .5 * a.width;
        b.regY = .5 * a.height;
        d.addChild(b);
        this._moveSpritePosOnPhysicPos()
    };
    this.unload = function () {
        b.removeAllEventListeners();
        d.removeChild(b);
        e = null
    };
    this._checkPositionToDestroy = function () {
        var a = s_oPhysicsController.getElementPosition(e);
        (a.x > CANVAS_WIDTH + PLAYER_OFFSCREEN_TOLERANCE || a.x < -1 * PLAYER_OFFSCREEN_TOLERANCE) && this.destroyPlayer()
    };
    this._moveSpritePosOnPhysicPos = function () {
        var a =
            s_oPhysicsController.getElementPosition(e);
        b.x = a.x;
        b.y = a.y;
        b.rotation = a.angle
    };
    this._checkPositionToMoveFloor = function () {
        s_oPhysicsController.getElementPosition(e).y > PLAYER_Y_LIMIT ? s_oGame.setFloorMovement(!0) : s_oGame.setFloorMovement(!1)
    };
    this.destroyPlayer = function () {
        s_oGame.gameOver();
        this.unload()
    };
    this.activatePlayer = function (a) {
        e.GetBody().SetActive(a)
    };
    this.getBody = function () {
        return e
    };
    this.update = function () {
        e && (this._moveSpritePosOnPhysicPos(), this._checkPositionToMoveFloor(), this._checkPositionToDestroy())
    };
    var d = c;
    var e = a;
    this._init()
}

function CBlock(a, c, b) {
    var d, e, h, k, f, l, n;
    this._init = function () {
        k = c.type;
        f = c.posX;
        l = c.posY;
        n = c.rotation;
        var b = {
            x: (MATRIX_X_START + BLOCK_HALF_SIZE * f) / WORLD_SCALE,
            y: (MATRIX_Y_START + BLOCK_HALF_SIZE * l) / WORLD_SCALE
        };
        b.x += BLOCKS_PADDING_X;
        b.y -= BLOCKS_PADDING_Y;
        this._initPlayerSprite();
        e = a;
        e.SetPositionAndAngle(b, degreesToRadians(n));
        this._moveSpritePosOnPhysicPos();
        s_bMobile || (d.cursor = "pointer")
    };
    this.onClickedBlock = function (a) {
        if (e && e.IsActive() && (a = new Box2D.Common.Math.b2Vec2(a.stageX / s_iScaleFactor /
            WORLD_SCALE, a.stageY / s_iScaleFactor / WORLD_SCALE), !0 === this.checkIfPointIsInFixture(a))) if (!1 === soundPlaying("clicked_block") && playSound("clicked_block", 1, !1), k !== BLOCK_SPEED) this.explodeBlock(); else this.onClickedSpeedBlock()
    };
    this.checkIfPointIsInFixture = function (a) {
        if (!e) return !1;
        for (var b = e.GetFixtureList(); b;) {
            var c = b;
            b = b.GetNext();
            if (c.TestPoint(a)) return !0
        }
        return !1
    };
    this.onClickedSpeedBlock = function () {
        !1 === soundPlaying("speed_bonus") && playSound("speed_bonus", 1, !1);
        this.destroyBlock();
        s_oGame.addDestroyedBlocks();
        s_oGame.onSpeedBlockExploded()
    };
    this.destroyBlock = function () {
        s_oGame.addDestroyedBlocks();
        this._initExplosion();
        e && e.SetActive(!1)
    };
    this.explodeBlock = function () {
        if (!h && e) {
            !1 === soundPlaying("explosion") && playSound("explosion", 1, !1);
            this.destroyBlock();
            var a = BLOCK_VALUE;
            k === BLOCK_BONUS && (!1 === soundPlaying("bonus") && playSound("bonus", 1, !1), a = BLOCK_BONUS_VALUE);
            k === BLOCK_BOMB ? s_oGame.addBombExplosion(d.x, d.y) : s_oGame.addScore(d.x, d.y, a)
        }
    };
    this._initExplosion = function () {
        d.visible = !1;
        var a = {
            images: [s_oSpriteLibrary.getSprite("explosion")],
            frames: {width: 190, height: 196, regX: 95, regY: 98}, animations: {idle: [0, 20, !1]}, framerate: 30
        };
        a = new createjs.SpriteSheet(a);
        h = createSprite(a, "idle", 95, 98, 190, 196);
        h.scaleX = h.scaleY = 1.7;
        h.x = d.x;
        h.y = d.y;
        g.addChild(h);
        var b = this;
        createjs.Tween.get(h).to({alpha: 0}, 1E3, createjs.Ease.linear).call(function () {
            createjs.Tween.removeTweens(h);
            g.removeChild(h);
            b.unload()
        })
    };
    this._initPlayerSprite = function () {
        switch (k) {
            case BLOCK_BONUS:
                var a = "block_star";
                break;
            case BLOCK_BOMB:
                a = "block_bomb";
                break;
            case BLOCK_SPEED:
                a =
                    "block_speed";
                break;
            case BLOCK_0:
                a = "block_0";
                break;
            case BLOCK_1:
                a = "block_1";
                break;
            case BLOCK_2:
                a = "block_2";
                break;
            case BLOCK_3:
                a = "block_3";
                break;
            case BLOCK_4:
                a = "block_4";
                break;
            case BLOCK_5:
                a = "block_5";
                break;
            case BLOCK_6:
                a = "block_6";
                break;
            case BLOCK_7:
                a = "block_7";
                break;
            case BLOCK_8:
                a = "block_8";
                break;
            case BLOCK_9:
                a = "block_9";
                break;
            case BLOCK_10:
                a = "block_10";
                break;
            case BLOCK_11:
                a = "block_11";
                break;
            case BLOCK_12:
                a = "block_12";
                break;
            case BLOCK_13:
                a = "block_13";
                break;
            case BLOCK_14:
                a = "block_14"
        }
        a = s_oSpriteLibrary.getSprite(a);
        d = createBitmap(a);
        d.regX = .5 * a.width;
        d.regY = .5 * a.height;
        d.rotation = n;
        g.addChild(d)
    };
    this.getBody = function () {
        return e
    };
    this.getX = function () {
        return d.x
    };
    this.getY = function () {
        return d.y
    };
    this.unload = function () {
        d.removeAllEventListeners();
        g.removeChild(d);
        e = null
    };
    this._moveSpritePosOnPhysicPos = function () {
        d.x = WORLD_SCALE * e.GetPosition().x;
        d.y = WORLD_SCALE * e.GetPosition().y;
        d.rotation = e.GetAngle() / Math.PI * 180
    };
    this._checkPositionToDestroy = function () {
        if (e.GetLinearVelocity().y > BLOCK_FALLING_SPEED_LIMIT) this.unload();
        else {
            var a = WORLD_SCALE * e.GetPosition().x;
            a > CANVAS_WIDTH + PLAYER_OFFSCREEN_TOLERANCE || a < -1 * PLAYER_OFFSCREEN_TOLERANCE ? this.unload() : WORLD_SCALE * e.GetPosition().y > CANVAS_HEIGHT && e.GetLinearVelocity().y > BLOCK_SPEED_LIMIT && this.unload()
        }
    };
    this.update = function () {
        e && (this._moveSpritePosOnPhysicPos(), this._checkPositionToDestroy())
    };
    var g = b;
    this._init()
}

function CFloor(a, c) {
    var b = Box2D.Common.Math.b2Vec2, d;
    this._init = function () {
        d = !0
    };
    this.setActive = function (a) {
        d = a
    };
    this.unload = function () {
        e.SetActive(!1)
    };
    this.getBody = function () {
        return e
    };
    this._checkToCreateNewFloor = function () {
        var a = e.GetPosition();
        a.y < FLOOR_LIMIT_SCALED && (s_oGame.createNewMatrixSet(), e.SetPosition(new b(a.x, FLOOR_Y_START_SCALED)))
    };
    this._moveFloor = function () {
        var a = e.GetPosition();
        e.SetPosition(new b(a.x, a.y - (a.y - PLAYER_LIMIT_SCALED) / PLAYER_LIMIT_SCALED / FLOOR_LERP_DIVIDER * FLOOR_VELOCITY_MULTIPLIER));
        s_oGame.updateBackgroundPosition(a.y)
    };
    this.update = function () {
        e && (d && this._moveFloor(), this._checkToCreateNewFloor())
    };
    var e = a;
    this._init()
}

function CCreditsPanel() {
    var a, c, b, d, e, h, k, f, l, n;
    this._init = function () {
        var g = s_oSpriteLibrary.getSprite("msg_box");
        f = new createjs.Container;
        s_oStage.addChild(f);
        e = new createjs.Shape;
        e.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, 2 * CANVAS_HEIGHT);
        e.alpha = 0;
        f.addChild(e);
        createjs.Tween.get(e).to({alpha: .7}, 500);
        n = CANVAS_HEIGHT + g.height / 2;
        l = new createjs.Container;
        l.y = n;
        f.addChild(l);
        a = createBitmap(g);
        a.regX = g.width / 2;
        a.regY = g.height / 2;
        a.x = CANVAS_WIDTH_HALF;
        a.y = CANVAS_HEIGHT_HALF;
        l.addChild(a);
        h = new createjs.Shape;
        h.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        h.alpha = .01;
        h.on("click", this._onLogoButRelease);
        l.addChild(h);
        s_bMobile || (h.cursor = "pointer");
        g = s_oSpriteLibrary.getSprite("but_exit");
        b = new CGfxButton(605, 572, g, l);
        b.addEventListener(ON_MOUSE_UP, this.unload, this);
        d = new createjs.Text(TEXT_CREDITS_DEVELOPED, "36px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        d.textAlign = "center";
        d.textBaseline = "alphabetic";
        d.x = CANVAS_WIDTH_HALF;
        d.y = CANVAS_HEIGHT_HALF - 80;
        l.addChild(d);
        g = s_oSpriteLibrary.getSprite("logo_ctl");
        c = createBitmap(g);
        c.regX = g.width / 2;
        c.regY = g.height / 2;
        c.x = CANVAS_WIDTH_HALF;
        c.y = CANVAS_HEIGHT_HALF;
        l.addChild(c);
        k = new createjs.Text("https://github.com/sumeimeisu/", "36px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        k.textAlign = "center";
        k.textBaseline = "alphabetic";
        k.x = CANVAS_WIDTH_HALF;
        k.y = CANVAS_HEIGHT_HALF + 100;
        l.addChild(k);
        createjs.Tween.get(l).to({y: 0}, 1E3, createjs.Ease.backOut)
    };
    this.unload = function () {
        createjs.Tween.get(e).to({alpha: 0}, 500);
        createjs.Tween.get(f).to({y: n},
            400, createjs.Ease.backIn).call(function () {
            h.off("click", this._onLogoButRelease);
            b.unload();
            b = null;
            s_oStage.removeChild(f);
            s_oMenu.exitFromCredits()
        })
    };
    this._onLogoButRelease = function () {
        window.open("https://github.com/sumeimeisu/hexagon_fall", "_blank")
    };
    this._init()
}

function CAreYouSurePanel() {
    var a, c, b, d, e, h;
    this._init = function () {
        c = new createjs.Container;
        s_oStage.addChild(c);
        h = new createjs.Container;
        s_oStage.addChild(h);
        e = new createjs.Shape;
        e.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        e.alpha = 0;
        e.on("mousedown", function () {
        });
        c.addChild(e);
        createjs.Tween.get(e).to({alpha: .7}, 500);
        var f = s_oSpriteLibrary.getSprite("msg_box"), k = createBitmap(f);
        k.regX = f.width / 2;
        k.regY = f.height / 2;
        k.x = CANVAS_WIDTH_HALF;
        k.y = CANVAS_HEIGHT_HALF;
        h.addChild(k);
        h.y = CANVAS_HEIGHT + f.height / 2;
        a = h.y;
        createjs.Tween.get(h).to({y: 0}, 1E3, createjs.Ease.backOut);
        f = new createjs.Text(TEXT_ARE_SURE, " 36px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        f.x = CANVAS_WIDTH_HALF;
        f.y = CANVAS_HEIGHT_HALF - 130;
        f.textAlign = "center";
        f.textBaseline = "middle";
        f.lineWidth = 500;
        h.addChild(f);
        b = new CGfxButton(CANVAS_WIDTH_HALF + 195, 790, s_oSpriteLibrary.getSprite("but_yes"), h);
        b.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        d = new CGfxButton(CANVAS_WIDTH_HALF - 195, 790, s_oSpriteLibrary.getSprite("but_no"),
            h);
        d.addEventListener(ON_MOUSE_UP, this._onButNo, this)
    };
    this._onButYes = function () {
        d.disable();
        b.disable();
        createjs.Tween.get(e).to({alpha: 0}, 500);
        createjs.Tween.get(h).to({y: a}, 400, createjs.Ease.backIn).call(function () {
            k.unload();
            s_oGame.onExit()
        })
    };
    this._onButNo = function () {
        d.disable();
        b.disable();
        createjs.Tween.get(e).to({alpha: 0}, 500);
        createjs.Tween.get(h).to({y: a}, 400, createjs.Ease.backIn).call(function () {
            k.unload()
        })
    };
    this.unload = function () {
        d.unload();
        b.unload();
        s_oGame.setStartGame(!0);
        c.removeChild(e);
        s_oStage.removeChild(h);
        e.off("mousedown", function () {
        })
    };
    var k = this;
    this._init()
}

function CHelpPanel() {
    var a, c, b, d, e, h, k, f;
    this._init = function () {
        f = !1;
        c = new createjs.Container;
        s_oStage.addChild(c);
        b = new createjs.Container;
        s_oStage.addChild(b);
        k = new createjs.Shape;
        k.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.alpha = 0;
        k.on("mousedown", function () {
        });
        c.addChild(k);
        createjs.Tween.get(k).to({alpha: .7}, 500);
        var d = s_oSpriteLibrary.getSprite("msg_box"), e = createBitmap(d);
        e.regX = d.width / 2;
        e.regY = d.height / 2;
        e.x = CANVAS_WIDTH_HALF;
        e.y = CANVAS_HEIGHT_HALF;
        b.addChild(e);
        b.y = CANVAS_HEIGHT + d.height / 2;
        a = b.y;
        createjs.Tween.get(b).to({y: 0}, 1E3, createjs.Ease.backOut);
        this.initText();
        var g = this;
        b.on("pressup", function () {
            g._onExitHelp()
        });
        c.on("pressup", function () {
            g._onExitHelp()
        });
        s_oGame._bDisableEvents = !0;
        s_bMobile || (b.cursor = "pointer")
    };
    this.initText = function () {
        var a = CANVAS_WIDTH_HALF, c = CANVAS_HEIGHT_HALF - 125, f = CANVAS_HEIGHT_HALF - 25,
            k = CANVAS_HEIGHT_HALF + 75;
        d = new createjs.Text(TEXT_HELP1, " 32px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        d.textAlign = "center";
        d.textBaseline = "middle";
        d.lineWidth = 500;
        d.x = a;
        d.y = c;
        e = new createjs.Text(TEXT_HELP2, " 32px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        e.textAlign = "center";
        e.textBaseline = "middle";
        e.lineWidth = 500;
        e.x = a;
        e.y = f;
        h = new createjs.Text(TEXT_HELP3, " 32px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        h.textAlign = "center";
        h.textBaseline = "middle";
        h.lineWidth = 500;
        h.x = a;
        h.y = k;
        b.addChild(d, e, h)
    };
    this.unload = function () {
        createjs.Tween.get(k).to({alpha: 0}, 500);
        createjs.Tween.get(b).to({y: a}, 400, createjs.Ease.backIn).call(function () {
            s_oStage.removeChild(b);
            s_oGame._bDisableEvents = !1;
            var a = this;
            b.off("pressup", function () {
                a._onExitHelp()
            })
        })
    };
    this._onExitHelp = function () {
        !0 !== f && (f = !0, createjs.Tween.removeAllTweens(), this.unload(), s_oGame._onExitHelp())
    };
    this._init()
}

function CEndPanel(a) {
    var c, b, d, e, h, k, f, l, n, g;
    this._init = function () {
        g = a;
        b = new createjs.Container;
        s_oStage.addChild(b);
        d = new createjs.Container;
        s_oStage.addChild(d);
        e = new createjs.Shape;
        e.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        e.alpha = 0;
        e.on("mousedown", function () {
        });
        b.addChild(e);
        createjs.Tween.get(e).to({alpha: .7}, 500);
        var m = s_oSpriteLibrary.getSprite("msg_box_big"), r = createBitmap(m);
        r.regX = m.width / 2;
        r.regY = m.height / 2;
        r.x = CANVAS_WIDTH_HALF;
        r.y = CANVAS_HEIGHT_HALF;
        d.addChild(r);
        d.y = CANVAS_HEIGHT + m.height / 2;
        c = d.y;
        createjs.Tween.get(d).to({y: 0}, 1E3, createjs.Ease.backOut).call(function () {
            $("#canvas").trigger("show_interlevel_ad")
        });
        f = new createjs.Text(TEXT_GAMEOVER, "42px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        f.textAlign = "center";
        f.textBaseline = "alphabetic";
        f.x = CANVAS_WIDTH_HALF;
        f.y = CANVAS_HEIGHT_HALF - 160;
        f.lineWidth = 550;
        d.addChild(f);
        l = new createjs.Text(TEXT_SCORE + ": " + g, "36px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        l.textAlign = "center";
        l.textBaseline = "alphabetic";
        l.x = CANVAS_WIDTH_HALF;
        l.y = CANVAS_HEIGHT_HALF - 40;
        l.lineWidth = 550;
        d.addChild(l);
        n = new createjs.Text(TEXT_BEST_SCORE + ": " + s_iBestScore, "36px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        n.textAlign = "center";
        n.textBaseline = "alphabetic";
        n.x = CANVAS_WIDTH_HALF;
        n.y = CANVAS_HEIGHT_HALF + 20;
        n.lineWidth = 550;
        d.addChild(n);
        h = new CGfxButton(CANVAS_WIDTH_HALF - 190, 830, s_oSpriteLibrary.getSprite("but_home"), d);
        h.addEventListener(ON_MOUSE_UP, this._onExit, this);
        k = new CGfxButton(CANVAS_WIDTH_HALF + 190, 830, s_oSpriteLibrary.getSprite("but_restart"), d);
        k.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        new CInterface(b)
    };
    this.unload = function () {
        createjs.Tween.get(e).to({alpha: 0}, 500);
        createjs.Tween.get(d).to({y: c}, 400, createjs.Ease.backIn).call(function () {
            h.unload();
            k.unload();
            s_oStage.removeChild(b);
            s_oEndPanel = null
        })
    };
    this._onExit = function () {
        this.unload();
        s_oGame.onExit()
    };
    this._onRestart = function () {
        this.unload();
        s_oGame.restart()
    };
    s_oEndPanel = this;
    this._init()
}

var s_oEndPanel = null;

function CMsgBox(a, c) {
    var b, d, e;
    this._init = function (a) {
        e = new createjs.Container;
        h.addChild(e);
        a = new createjs.Shape;
        a.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a.alpha = .5;
        a.on("click", function () {
        });
        e.addChild(a);
        a = s_oSpriteLibrary.getSprite("msg_box_big");
        var c = createBitmap(a);
        c.x = .5 * CANVAS_WIDTH;
        c.y = .5 * CANVAS_HEIGHT;
        c.regX = .5 * a.width;
        c.regY = .5 * a.height;
        e.addChild(c);
        b = new createjs.Text(TEXT_ERR_LS, "26px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT /
            2 - 190;
        b.textAlign = "center";
        b.textBaseline = "middle";
        b.lineWidth = 500;
        e.addChild(b);
        d = new CGfxButton(CANVAS_WIDTH / 2, 820, s_oSpriteLibrary.getSprite("but_yes"), e);
        d.addEventListener(ON_MOUSE_UP, this._onButOk, this)
    };
    this._onButOk = function () {
        this.unload()
    };
    this.unload = function () {
        d.unload();
        h.removeChild(e)
    };
    var h = c;
    this._init(a)
}

function CShake(a, c, b, d) {
    var e, h, k, f, l, n, g;
    this._init = function (a, b, c, d) {
        f = k = !1;
        n = 0;
        this._calculateDuration();
        e = a.x;
        h = a.y;
        k || (k = !0, l = setInterval(function () {
            m._tremble()
        }, c))
    };
    this._tremble = function () {
        if (f = !f) {
            var r = Math.random(), t = d *= .95, p = d;
            p = .5 > Math.random() ? -p : p;
            a.x += .5 > r ? -t : t;
            a.y += p
        } else a.x = e, a.y = h;
        n++;
        n > g && (n = 0, k = !1, a.x = e, a.y = h, 0 === c ? l = setInterval(function () {
            m._tremble()
        }, b) : clearInterval(l))
    };
    this._calculateDuration = function () {
        g = c / b
    };
    this.stopTremble = function () {
        clearInterval(l)
    };
    var m = this;
    this._init(a, c, b, d)
}

function extractHostname(a) {
    a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
    a = a.split(":")[0];
    return a = a.split("?")[0]
}

function extractRootDomain(a) {
    a = extractHostname(a);
    var c = a.split("."), b = c.length;
    2 < b && (a = c[b - 2] + "." + c[b - 1]);
    return a
}

var getClosestTop = function () {
    var a = window, c = !1;
    try {
        for (; a.parent.document !== a.document;) if (a.parent.document) a = a.parent; else {
            c = !0;
            break
        }
    } catch (b) {
        c = !0
    }
    return {topFrame: a, err: c}
}, getBestPageUrl = function (a) {
    var c = a.topFrame, b = "";
    if (a.err) try {
        try {
            b = window.top.location.href
        } catch (e) {
            var d = window.location.ancestorOrigins;
            b = d[d.length - 1]
        }
    } catch (e) {
        b = c.document.referrer
    } else b = c.location.href;
    return b
}, TOPFRAMEOBJ = getClosestTop(), PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function seekAndDestroy() {
    for (var a = extractRootDomain(PAGE_URL), c = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)], b = 0; b < c.length; b++) if (c[b] === a) return !0;
    return !1
};

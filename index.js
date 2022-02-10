(function detectOS() {
    const platform = navigator.platform.toLowerCase(),
        iosPlatforms = ['iphone', 'ipad', 'ipod', 'ipod touch'];

    if (platform.includes('mac')) return document.querySelector('#tgMinus').href = "https://macos.telegram.org/";
    if (iosPlatforms.includes(platform)) return document.querySelector('#tgMinus').href = "https://apps.apple.com/app/telegram-messenger/id686449807";
    if (platform.includes('win')) return document.querySelector('#tgMinus').href = "https://desktop.telegram.org/";
    if (/android/.test(navigator.userAgent.toLowerCase())) return document.querySelector('#tgMinus').href = "https://play.google.com/store/apps/details?id=org.telegram.messenger";
    if (/linux/.test(platform)) return document.querySelector('#tgMinus').href = "https://desktop.telegram.org/";

    return 'unknown';
})()
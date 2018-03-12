'use strict';

let MyVoice = new Audio();
let srcVoice = "";

function priseYou(voiceId) {
    chrome.storage.local.get(
    function(item) {
        console.dir(item);
        console.log(item.voice);
        srcVoice = "./voices/My"+item.voice+".mp3";
        MyVoice.src = srcVoice;
        MyVoice.play();
    });
}

// When installed, set the value of voice as "voice1".
// インストールした時、voiceキーに"voice1"を格納する。
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({
        voice: "voice1"
    });
});

// Execuse the priseYou function when click icon.
// iconクリック時にpriseYou関数の実行
chrome.browserAction.onClicked.addListener(priseYou); 
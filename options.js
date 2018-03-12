'use strict';

// When push the 'seve' button, will set as "key: voice" and "value: voices.value" into chromeStrage.
// optionページのsaveボタンを押すと、その時のvoices.valueを取得してvoiceに代入。更にchromeのストレージにkey:voiceで格納されます。
document.getElementById('save').addEventListener('click', function() {
  var voice = document.getElementById('voices').value;
  chrome.storage.local.set({
    voice: voice
  });
});
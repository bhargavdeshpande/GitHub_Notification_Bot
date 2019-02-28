let changeColorButton = document.getElementById('seeTokenButton');

  chrome.storage.sync.get('gitToken', function(data) {
    changeColorButton.setAttribute('value', data.gitToken);
  });

changeColorButton.onclick = function(element) {
    let gitToken = element.target.value;
    chrome.extension.getBackgroundPage().console.log("Git Token Value: "+gitToken);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'console.log("hello1' + '");'});
    });
  };

let setGitToken = document.getElementById('setGitToken');

async function verifyToken(givenToken) {
    // Fetch data from token.txt into variable correctToken
    var correctToken = await fetchToken();
    if (correctToken == givenToken) {
        return true;
    } else {
        return false;
    }
}

async function fetchToken() {
    const url = chrome.runtime.getURL('correct_token.txt');

    const correctToken = await fetch(url)
    return correctToken.text();
}

async function setToken(token) {
    localStorage.gitToken = token;
}

setGitToken.onclick = async function() {
    let token_value = document.getElementById("gitHubToken").value;
    const replyPositive = await verifyToken(token_value);
    if (replyPositive) {
        await setToken(token_value);
        await updateNotifications();
        window.close();
    } else {
        document.getElementById("errorBox").style.display = "block";
    }
}
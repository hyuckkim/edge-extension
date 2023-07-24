const title = document.querySelector('#number');
const button = document.querySelector('#button');
chrome.storage.local.get(["num"]).then((result) => {
    title.innerHTML = result.num ?? 0
})
if (button) {
    button.addEventListener('click', () => {
        var num = parseInt(title.innerHTML);
        title.innerHTML = num + 1;
        chrome.storage.local.set({num: title.innerHTML})
    });
}
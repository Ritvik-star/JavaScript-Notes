// --- Set somewhere else but within scope
const url = "some url";
let progress = 0;
const maxTime = 5000; // 5 seconds
let interval = null;

// onclick or the event that start the call
interval = setInterval(() => {
    progress = progress >= 100 ? 100 : progress + 1
    document.getElementById('myprogress').style.width = `${progress}%`
    
    // end interval and wait at 100%
    if(progress == 100) clearInterval(interval);
}, maxTime/100)
document.getElementById('loadingcontainer').style.display = "none"

const data = fetch('/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        url: url
    })
 }).then(res => {
    document.open()
    res.text().then(function(text) {
        document.write("done")
        // Hide the progressbar, stop the timer and reset progress
        clearInterval(interval);
        progress = 0;
        document.getElementById('myprogress').style.width = "0%"
        document.getElementById('loadingcontainer').style.display = "";
    });
})
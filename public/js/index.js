window.onload = function () {
    document.getElementById('rzp-button1').onclick = function (e) {
        e.preventDefault();
        fetch('/paynow').then(res => res.json()).then(res => {
            console.log(res)
        }).catch(error => {
            console.log(error)
        })
    }
}
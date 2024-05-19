document.addEventListener("DOMContentLoaded", function() {
    // Replace 'YOUR_AD_SERVER_CODE' with the actual code from your ad server
    var adCode = '<script src="https://your-ad-server.com/ad.js"><\/script>';

    // Create a div element to contain the ad
    var adContainer = document.getElementById('ad-container');
    adContainer.innerHTML = adCode;

    // Alternatively, you can append a script element
    var script = document.createElement('script');
    script.src = "https://your-ad-server.com/ad.js";
    adContainer.appendChild(script);
});

function fetchAds(tags, type) {
    var formdata = new FormData();
    formdata.append("type", type);
    formdata.append("tags", tags.join(',')); // Convert array to comma-separated string

    var ajax = new XMLHttpRequest();
    ajax.addEventListener("load", completeHandler, false);

    ajax.open("POST", "https://ad.simaneka.com/api/get");
    ajax.setRequestHeader("authorisation", "R9OwqLrtjgiubbWPmYymPmzgKkIxZjIc");

    ajax.send(formdata);
}

function completeHandler(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);

    // Assuming response is an object with ad details
    renderAd(response);

    // Render additional ads if response contains multiple ads
    if (response.additionalAds) {
        renderAdditionalAds(response.additionalAds);
    }
}

function renderAd(ad) {
    const adContainer = document.getElementById('ad-container');

    const adElement = document.createElement('div');
    adElement.classList.add('ad');

    if (ad.type === 'Vertical Strip') {
        adElement.classList.add('ad-vertical');
    } else if (ad.type === 'Horizontal Strip') {
        adElement.classList.add('ad-horizontal');
    }

    adElement.innerHTML = `
        <a class="anchorElement" href="${ad.href}">
            <img class="advertIMG" src="${ad.link}" alt="${ad.alt}">
            <p class="headerText">${ad.message}</p>
        </a>
    `;

    adContainer.appendChild(adElement);
}

function renderAdditionalAds(ads) {
    ads.forEach(ad => renderAd(ad));
}

// Example usage: Fetch ads based on tags and render them
const contentTags = ['Classes', 'School', 'Tutors', 'Ads', 'Network', 'Sports', 'Students', 'Electronics', 'Fix', 'Phones'];
const adTypes = ['Vertical Strip', 'Horizontal Strip', 'Thick Horizontal', 'Thick Vertical', 'Light Square', 'Dark Square'];

adTypes.forEach(type => fetchAds(contentTags, type));


var page = {
    topBanner: document.querySelector('.topBanner'),
    topBannerHeight: 40,
    menu: document.getElementById('navigation'),
    firstSection: document.querySelector('.section__container').firstElementChild,
    btnClose: document.getElementById('topBanner__btn--close'),
    btnOpen: document.getElementById('navigation__btn--open')
}

// Check that topBanner exists
if(typeof(page.topBanner) != 'undefined' && page.topBanner !== null){
    page.menu.style.top = page.topBannerHeight + 'px';
    page.firstSection.style.marginTop = '110px';
} else {
    console.log('topBanner does not exist!');
}

// Close top banner
var closeTopBanner = page.btnClose.addEventListener('click', function() {
    toggle();
    page.topBanner.style.display = 'none';
    page.menu.style.top = '0';
    page.firstSection.style.marginTop = '70px';
    document.getElementById('navigation__btn--open').style.display = 'visible';
});

// Open top banner
var openTopBanner = page.btnOpen.addEventListener('click', function() {
    page.topBanner.style.cssText = 'display:visible;';
    page.menu.style.top = page.topBannerHeight + 'px';
    page.firstSection.style.marginTop = '110px';
    document.getElementById('navigation__btn--open').classList.add('hidden');
    console.log('Element topBanner IS visible!');
});

function toggle() {
    if (page.btnOpen.classList.contains('hidden')) {
        page.btnOpen.classList.remove('hidden');
    } else if (!page.btnOpen.classList.contains('hidden')) {
        page.btnOpen.classList.add('hidden');
    }
};
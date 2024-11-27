document.addEventListener('DOMContentLoaded', () => {
const goToProgramLink = document.getElementById('go-to-program');
if (goToProgramLink) {
    goToProgramLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = './index.html#program';
    });
}

const goToOverviewLink = document.getElementById('go-to-overview');
if (goToOverviewLink) {
    goToOverviewLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = './index.html#overview';
    });
}

const goToAnnouncementLink = document.getElementById('go-to-announcement');
if (goToAnnouncementLink) {
    goToAnnouncementLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = './index.html#announcement';
    });
}

const goToContactLink = document.getElementById('go-to-contact');
if (goToContactLink) {
    goToContactLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = './index.html#contact';
    });
}
});

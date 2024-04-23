

function changeVideo(link, videoUrl, title, event) {
    event.preventDefault(); 
    document.querySelectorAll('.select-video').forEach(function(item) {
        item.classList.remove('active');
    });
    link.classList.add('active');
    var videoContainer = document.querySelector('.video-container');
    videoContainer.innerHTML = `
        <div class="video-playlist">
            <iframe src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
            <h2>${title}</h2>
        </div>
    `;
    document.getElementById('video-title').innerText = title;
}

const startTime = performance.now();

window.addEventListener('load', function () {
    const loadTime = performance.now() - startTime;

    const loadTimeInSeconds = (loadTime / 1000).toFixed(3);
    const loadingTimeElement = document.getElementById('loading-time');
    loadingTimeElement.textContent = `Page load time is: ${loadTimeInSeconds} seconds`;
    console.log(`Page load time is${loadTimeInSeconds} seconds.`);
});

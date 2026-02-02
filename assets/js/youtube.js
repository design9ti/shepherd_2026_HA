// YouTube callback: creates iframe content for backdrop
(function () {
  window.createYouTubeCallback = function (videoId) {
    return function () {
      if (!videoId) return
      const container = document.createElement('div')
      container.style.width = '100%'
      container.style.height = '100%'

      const iframe = document.createElement('iframe')
      iframe.className = 'video-modal__iframe'
      iframe.src = `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`
      iframe.setAttribute('allow', 'autoplay; fullscreen')
      iframe.setAttribute('allowfullscreen', 'true')
      iframe.style.width = '100%'
      iframe.style.height = '100%'
      iframe.style.border = 'none'

      container.appendChild(iframe)
      return container
    }
  }
})()

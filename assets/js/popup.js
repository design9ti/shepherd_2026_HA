(function () {
  let backdrop = null
  let body = null

  function buildBackdrop(bgColor = 'rgba(0,0,0,0.85)') {    
    backdrop = document.createElement('div')
    backdrop.className = `modal`
    backdrop.style = `background: ${bgColor};`
    backdrop.innerHTML = `
      <div class="modal__content" role="dialog" aria-modal="true">
        <div class="modal__body"></div>
      </div>
    `
    document.body.appendChild(backdrop)
    body = backdrop.querySelector('.modal__body')
    setupBackdropListeners()
  }

  function setupBackdropListeners() {
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) closeBackdrop()
    })

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && backdrop && backdrop.parentNode) closeBackdrop()
    })
  }

  function openBackdrop(content, onOpen, bgColor) {
    if (!backdrop) buildBackdrop(bgColor)
    
    if (content) {
      body.innerHTML = ''
      if (typeof content === 'string') {
        body.innerHTML = content
      } else {
        body.appendChild(content)
      }
    }
    document.body.style.overflow = 'hidden'
    if (onOpen) onOpen()
  }

  function closeBackdrop(onClose) {
    if (backdrop && backdrop.parentNode) {
      backdrop.remove()
      backdrop = null
      body = null
    }
    document.body.style.overflow = ''
    if (onClose) onClose()
  }

  window.openBackdrop = openBackdrop
  window.closeBackdrop = closeBackdrop
})()

function renderHeader() {
  const body = document.querySelector('body')
  body.insertAdjacentHTML('afterbegin', `
    <nav class="sticky top-0">
      <div class="flex justify-between nav-inner absolute w-full px-2.5">
        <a class="inline-flex">
          <img class="w-[380px]" src="./assets/images/icon/home-logo.svg"/>
        </a>
        <div class="flex items-start justify-center menu gap-[15px]">
          <a href="https://www.facebook.com/housingwellbeinghk" target="_blank">
            <img class="facebook" src="./assets/images/icon/facebook.svg" />
          </a>
          <a href="https://www.instagram.com/housingwellbeing.hk/" target="_blank">
            <img class="ig" src="./assets/images/icon/ig.svg" />
          </a>
          <a href="mailto:hello@housingwellbeing.hk">
            <img class="email" src="./assets/images/icon/email.svg"  />
          </a>
          <a
            onclick="renderBackdropMenu()"
            class="menu_trigger homepage"
          ><img class="menu" src="./assets/images/icon/menu_trigger.svg" /></a>
        </div>
      </div>
    </nav>
  `)
}

function renderOtherHeader() {
  const menuItems = [
    { title: 'Introduction', url: 'introduction.html' },
    { title: '5 Construction Process', url: 'introduction.html' },
    { title: 'BIM', url: 'introduction.html' },
    { title: 'Case Study', url: 'introduction.html' },
    { title: 'Checklist', url: 'introduction.html' },
    { title: 'Gallery', url: 'introduction.html' },
  ]

  const body = document.querySelector('body')
  body.insertAdjacentHTML('afterbegin', `
    <nav class="sticky top-0">
      <div class="flex justify-between nav-other-inner absolute w-full px-7.5 h-[100px] items-center">
        <a class="inline-flex">
          <img class="w-[240px]" src="./assets/images/icon/home-logo.svg"/>
        </a>
        <div class="flex items-center justify-center menu gap-[20px] h-full">
          <div class="menu-wrapper h-full">
            ${menuItems.map(i => (
    `<div class="h-full flex items-center"><a>${i.title}</a></div>`
  )).join('')}
          </div>

          <a
            onclick="renderBackdropMenu()"
            class="menu_trigger"
          ><img class="menu" src="./assets/images/icon/menu_trigger.svg" /></a>
          ${renderSizeAndLang()}
        </div>
      </div>
    </nav>
  `)
}

function renderSizeAndLang() {
  return `
    <div class="acc-font-size flex justify-center gap-2">
      <div class=""><span class="size1">A</span></div>
      <div class=""><span class="size2">A</span></div>
      <div class=""><span class="size3">A</span></div>
    </div>
    <div class="lang-switcher flex justify-center text-base">
      <div><span class="font-bold">繁</span></div>
      <div><span class="font-bold">简</span></div>
      <div class="active"><span class="font-bold">EN</span></div>
    </div>
    `
}

function renderBackdropMenu() {

  const menuItems = [
    { title: 'Introduction', url: 'introduction.html' },
    { title: '5 Construction Process', url: 'introduction.html' },
    { title: 'BIM', url: 'introduction.html' },
    { title: 'Case Study', url: 'introduction.html' },
    { title: 'Checklist', url: 'introduction.html' },
    { title: 'Gallery', url: 'introduction.html' },
  ]

  const menu = `
    <div class="backdrop-menu">
      ${menuItems.map(i => (
    `
        <a class="item" href="${i.url}">
          <span>${i.title}</span>
          <div class="img-wrap"><img src="./assets/images/icon/icon-plus.svg" /></div>
        </a>
      `
  )).join('')}
      <div class="flex flex-col gap-7 mt-4">
        <div class="flex items-start justify-center menu gap-[15px]">
          <a href="https://www.facebook.com/housingwellbeinghk" target="_blank">
            <img class="facebook" src="./assets/images/icon/facebook.svg" />
          </a>
          <a href="https://www.instagram.com/housingwellbeing.hk/" target="_blank">
            <img class="ig" src="./assets/images/icon/ig.svg" />
          </a>
          <a href="mailto:hello@housingwellbeing.hk">
            <img class="email" src="./assets/images/icon/email.svg"  />
          </a>
        </div>
        ${renderSizeAndLang()}
      </div>
    </div>
  `
  openBackdrop(menu, false, '#F6CAA0E6')
}

function renderFooter() {
  const body = document.querySelector('body')
  body.insertAdjacentHTML('beforeend', `
    <footer class="flex justify-between mx-auto">
      <div class="flex p-5 items-center">
        <img class="max-h-[56px] mr-5" src="./assets/images/icon/footer_1.svg" />
        <img class="max-h-[30px]" src="./assets/images/icon/footer_2.svg" />
      </div>
      <div class="flex items-center text-[#EF4136]">©${new Date().getFullYear()} All Rights Reserved.</div>
    </footer>
  `)
}

function onDocumentLoaded() {
  const isHomePage = document.querySelector('body.homepage')
  if (isHomePage) {
    renderHeader()
  } else {
    renderOtherHeader()
  }
  renderFooter()
}

document.addEventListener('DOMContentLoaded', onDocumentLoaded)

import Search from '../_components/site-search/_site-search.js'
import * as GOVUKFrontend from 'govuk-frontend'

const $searchContainer = document.querySelector('[data-module="app-search"]')
new Search($searchContainer).init()

window.onload = function () {
  document.documentElement.classList.remove('no-js')
  GOVUKFrontend.initAll();
}

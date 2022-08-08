function changeIcon(icon){
    let element = document.querySelector(".container")
    element.classList.toggle('show-menu')
    icon.classList.toggle('fa-xmark')
    let backgorundColor = document.querySelector('.color-black')
    backgorundColor.classList.toggle('show-background-black')
}

function showListFeature(){
         let list = document.querySelectorAll('.menu-list-features')
         list.forEach(i => {
         i.classList.toggle('show-list-feature')
 })
        let arrowIcon = document.querySelector(".fa-chevron-down")
        arrowIcon.classList.toggle("fa-chevron-up")

        let menuFeatureContainer = document.querySelector('.menu-feature-container')
        menuFeatureContainer.classList.toggle('show-shadows-feature')
}



function showListCOmpany(){
    let com = document.querySelectorAll('.menu-company')
    com.forEach(i => {
        i.classList.toggle('show-list-company')
    })

    let arrownIconCompany = document.querySelector('.fa-angle-down')
    arrownIconCompany.classList.toggle('fa-angle-up')

    let menuCompanyContainer = document.querySelector('.menu-company-container')
    menuCompanyContainer.classList.toggle('show-shadow-company')
}

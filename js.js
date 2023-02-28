let content = document.getElementById('content')
let para = document.querySelector('.value')
let colors = document.querySelector('.colors')
let reset = document.querySelector('.reset')
let grey = document.querySelector('.grey')
let range = document.querySelector('#range')
document.body.appendChild(content)


function gridFun () {
    for (i=0; i<256; i++) {
        let grid = document.createElement('div')
        content.appendChild(grid)

        grid.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'grey'
        })
    }
} gridFun()

function deleteContent () {
    while  (content.firstChild) {
        content.removeChild(content.firstChild)
    }
}

function swiper(){ 
    para.textContent = '16x16'
    range.addEventListener('input', function (e) {
        let valu = e.target.value
        para.textContent = `${valu}x${valu}`
        deleteContent()
        
        content.setAttribute('style', `grid-template-columns: repeat(${valu}, 2fr); grid-template-rows: repeat(${valu}, 2fr);`)
        
        for (i=0; i< valu* valu; i++ ) {
            let grid = document.createElement('div')
            content.appendChild(grid)
            
            grid.addEventListener('mouseover', function (e) {
                e.target.style.backgroundColor = 'grey'
            })
        }
    })
} swiper()

function getRandomRGB () {
    let a = Math.round(Math.random() * 255)
    let b = Math.round(Math.random() * 255)
    let c = Math.round(Math.random() * 255)
    
    return `rgb(${a}, ${b}, ${c})`
}

colors.addEventListener('click', function () { 
    let valu = document.querySelector('#range').value
    let child = content.children
    for (i=0; i<valu*valu; i++) {
        child[i].addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = getRandomRGB()
        })
    }
})

function resetFun () {
    reset.addEventListener('click', function (e){
        let valu = document.querySelector('#range').value
        let child = content.children
        for (i=0; i<valu*valu; i++) {
            child[i].style.backgroundColor = 'aliceblue'
        }
    })
}resetFun()

grey.addEventListener('click', function () {
    let valu = document.querySelector('#range').value
    let child = content.children
        for (i=0; i<valu*valu; i++) {
            child[i].addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = 'grey'
            })
        }
})

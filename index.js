if(window.innerWidth >= 1080){
    const headingImg = document.querySelector('.img > img');
    headingImg.setAttribute('src','images/image-header-desktop.jpg')
}

window.addEventListener('resize', ()=> {
    if(window.innerWidth >= 1080){
        const headingImg = document.querySelector('.img > img');
        headingImg.setAttribute('src','images/image-header-desktop.jpg')
        console.log(headingImg);
    }
})
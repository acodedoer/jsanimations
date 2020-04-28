// const runningMan = () => {
//     document.querySelector('#signal').style.backgroundColor='green'
//     const IMAGESRC = []
//     const img = document.getElementById('img-runner')
//     let frame_counter = 0;
//     const distance = window.innerWidth;
//     let step = 5;
//     let position = 0;

//     for(let i = 0; i<8; i++){
//         IMAGESRC[i] = `images/run${i}.svg`
//     }

//     const animateFrame = () => {
//         if(frame_counter >= IMAGESRC.length){
//             frame_counter = 0;
//         }
//         img.src = IMAGESRC[frame_counter]
//         frame_counter+=1;
//         setTimeout(animateFrame, 50)
//     }
//     const animatePosition = () => {
//         if(position>= distance-96 || position < 0){
//             img.classList.toggle('mirror-img')
//             step *= -1;
//         }

//         position += step;
//         img.style.left = position + 'px'
//         setTimeout(animatePosition, 50)
//     }

//     animatePosition()
//     animateFrame()
// }
// window.addEventListener('load', runningMan)

const runningMan = () => {
    document.querySelector('#signal').style.backgroundColor='green'
    const IMAGESRC = []
    const img = document.getElementById('img-runner')
    let frame_counter = 0;
    const distance_x = window.innerWidth-100;
    const distance_y = window.innerHeight-100;
    let step = 5;
    let position_y = 0;
    let position_x = 0;

    for(let i = 0; i<8; i++){
        IMAGESRC[i] = `images/run${i}.svg`
    }

    const animateFrame = () => {
        if(frame_counter >= IMAGESRC.length){
            frame_counter = 0;
        }
        img.src = IMAGESRC[frame_counter]
        frame_counter+=1;
        setTimeout(animateFrame, 50)
    }

    const animatePosition0 = () => {
        if(position_y>= distance_y){
            img.style.transform = 'rotate(0deg)'
            animatePosition1()
        }
        else{
            position_y += step;
            img.style.top = position_y + 'px'
            setTimeout(animatePosition0, 50)
        }
    }

    const animatePosition1 = () => {
        if(position_x>= distance_x){
            step*= -1
            img.style.transform = 'rotate(270deg)'
            animatePosition2()
        }
        else{
            position_x += step;
            img.style.left = position_x + 'px'
            setTimeout(animatePosition1, 50)
        }
    }

    const animatePosition2 = () => {
        if(position_y<= 0){
            img.style.transform = 'rotate(180deg)'
            animatePosition3()
        }
        else{
            position_y += step;
            img.style.top = position_y + 'px'
            setTimeout(animatePosition2, 50)
        }
    }

    const animatePosition3 = () => {
        if(position_x<= 0){
            step*= -1
            img.style.transform = 'rotate(90deg)'
            animatePosition0()
        }
        else{
            position_x += step;
            img.style.left = position_x + 'px'
            setTimeout(animatePosition3, 50)
        }
    }

    animatePosition0()
    animateFrame()
}
window.addEventListener('load', runningMan)
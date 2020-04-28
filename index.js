const runningMan = () => {
    document.querySelector('#signal').style.backgroundColor='green'
    const IMAGESRC = []
    const img = document.getElementById('img-runner')
    let frame_counter = 0;
    const distance_x = window.innerWidth-96;
    const distance_y = window.innerHeight-96;
    let step = 5;
    let rotation = 90;
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

    const moveHorizontally = () => {
        position_x += step;
        if(position_x>= distance_x || position_x<0){
            step*=-1;
            rotation == 0? rotation = 270 : rotation = 90
            img.style.transform = `rotate(${rotation}deg)`
            moveVertically()
        }
        else{
            img.style.left = position_x + 'px'
            setTimeout(moveHorizontally, 50)
        }
    }

    const moveVertically = () => {
        position_y += step;
        if(position_y>= distance_y || position_y< 0){
            rotation == 90? rotation = 0 : rotation = 180
            img.style.transform = `rotate(${rotation}deg)`
            moveHorizontally()
        }
        else{
            img.style.top = position_y + 'px'
            setTimeout(moveVertically, 50)
        }
    }

    moveVertically()
    animateFrame()
}
window.addEventListener('load', runningMan)
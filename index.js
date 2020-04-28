const runningMan = () => {
    document.querySelector('#signal').style.backgroundColor='green'
    const IMAGESRC = []
    const img = document.getElementById('img-runner')
    let frame_counter = 0;
    const distance = window.innerWidth;
    let step = 5;
    let position = 0;

    for(let i = 0; i<8; i++){
        IMAGESRC[i] = `images/run${i}.svg`
    }

    const run = () => {
        if(frame_counter >= IMAGESRC.length){
            frame_counter = 0;
        }
        if(position>= distance-96 || position < 0){
            img.classList.toggle('mirror-img')
            step *= -1;
        }

        console.log(distance)
        console.log(position)
        console.log(step)

        img.src = IMAGESRC[frame_counter]
        position += step;
        img.style.left = position + 'px'
        frame_counter+=1;
        setTimeout(run, 50)
    }

    run()
}

window.addEventListener('load', runningMan)
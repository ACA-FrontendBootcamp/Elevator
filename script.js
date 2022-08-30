let floors=[]
let flagMove = 0
let floor;

const container = document.createElement('div');
document.body.appendChild(container)
container.classList.add('container')

const building = document.createElement('div');
container.appendChild(building)
building.classList.add('building')


const liftButton = document.createElement('div');
container.appendChild(liftButton)
liftButton.classList.add('liftButton')

for (let i = 0; i<8; i++){ 
    const floor=document.createElement('div');
    building.appendChild(floor)
    floor.classList.add('floor')

    const wall=document.createElement('img');
    floor.appendChild(wall)
    wall.setAttribute('src','./assets/wall.png')

    const space=document.createElement('div');
    floor.appendChild(space)
    space.classList.add('space')

    const wall1=document.createElement('img');
    floor.appendChild(wall1)
    wall1.setAttribute('src','./assets/wall.png')
}



const lift = document.createElement('img');
building.appendChild(lift)
lift.classList.add('lift')
lift.setAttribute('src','./assets/lift.png')
let liftBottom = 0;
let liftLeft = 138;
lift.style.left = liftLeft + 'px';
lift.style.bottom = liftBottom  + 'px';

for(let i = 7; i>0;i = i-2 ){
    j = i+1;
    const button = document.createElement('button')
    liftButton.appendChild(button)
    button.innerHTML= ""+i;
    button.classList.add('.button')
    button.onclick = (event) => {
            if(!floors.includes(+event.target.innerHTML)) {
            floors.push(+event.target.innerHTML)
            }
        }
    const button1 = document.createElement('button')
    liftButton.appendChild(button1)
    button1.innerHTML= ""+j;
    button1.classList.add('.button')
    button1.onclick = (event) => {
            if(!floors.includes(+event.target.innerHTML)) {
            floors.push(+event.target.innerHTML)
            }
        }
}
  

const buttonMove = document.createElement('button')
liftButton.appendChild(buttonMove)
buttonMove.innerHTML= "Move"
buttonMove.classList.add('buttonMove')
buttonMove.onclick = () => {
    console.log(floors)
    if(flagMove ==0) {
setTimeout(() =>  { 
     move()
    } ,1000) }
}
           
function move(){
    if(floors.length) {
        floor = Math.min(...floors) 
        if (lift.style.bottom.slice(0,-2) < 100*floor-100){ 
            flagMove = 1;
            moveUpId = setInterval(() => {
                liftBottom =  liftBottom +1;
                lift.style.bottom = liftBottom + 'px';
                if(liftBottom == 0 ||  liftBottom ==100 || liftBottom == 200 || liftBottom == 300 || 
                    liftBottom == 400 || liftBottom == 500 || liftBottom == 600 || liftBottom == 700 ){
                        if(floors.includes((liftBottom)/100+1)) {
                            clearInterval(moveUpId)
                            lift.setAttribute('src','./assets/lift.gif')
                            setTimeout(() => {
                                lift.setAttribute('src','./assets/lift.png')
                                floors = floors.filter((item => item!= (liftBottom-100)/100+2))
                            flagMove = 0;
                            },2500)           
                } 
            }
        }, 4)
} 
else if(lift.style.bottom.slice(0,-2) > 100*floor-100){ 
    flagMove = 1;
    moveDownId =  setInterval(() =>  {
        liftBottom =  liftBottom -1;
        lift.style.bottom = liftBottom + 'px';
        if(liftBottom == 0 ||  liftBottom ==100 || liftBottom == 200 || liftBottom == 300 || liftBottom == 400 || 
            liftBottom == 500 || liftBottom == 600 || liftBottom == 700 ){
                if(floors.includes((liftBottom)/100+1)){
                    clearInterval(moveDownId)
                    lift.setAttribute('src','./assets/lift.gif')
                    setTimeout(() => {
                        lift.setAttribute('src','./assets/lift.png')
                        floors = floors.filter((item => item!= (liftBottom-100)/100+2))
                        flagMove = 0;
                    },2500)
                   
                } 
            }
        }, 4)
    }
    else if(lift.style.bottom.slice(0,-2) == 100*floor-100){
        floors = floors.filter((item => item!= (liftBottom-100)/100+2))
    }
}
}


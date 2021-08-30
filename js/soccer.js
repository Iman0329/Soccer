let player = document.getElementById('player');
let who = document.querySelector('.who');
let skill = document.getElementById('skill');
let how = document.querySelector('.how');
let direction = document.getElementById('middle');
let arrow = document.getElementById('arrow');
let strength = document.getElementById('strength');
let strong = document.querySelector('.strong');
let ball = document.getElementById('ball');
let upper = document.getElementById('upper');
let result = document.getElementById('result');
let keeper = document.getElementById('keeper');
let playerskill = 0;
let directionskill = 0;
let typeskill = 0;
let directionspeed = 1;
let runspeed = 1;
let degree = 90;
let missdegree = 0;
let missstrong = 0;
let missstoostrong = 0;
let goalkeeper = 0;
let goalkeeperdegreefrom = 0;
let goalkeeperdegreeto = 0;
    
//restart
function restart(){
    player.style.cssText =` 
        position : relative;
        margin : 5% 2%;
    `; 
    skill.style.cssText =` 
        position : relative;
        margin : 5% 2%;
    `;
    strength.style.cssText =` 
        position : relative;
        margin : 5% 2%;
    `;
    who.style.display = 'none';
    skill.style.display = 'none';
    how.style.display = 'none';
    direction.innerText = 'Press to rotate direction';
    strength.style.display = 'none';
    strong.style.display = 'none';
    document.getElementById('middle').style.display = 'none';

    playerskill = 0;
    directionskill = 0;
    typeskill = 0;
    directionspeed = 1;
    runspeed = 1;
    degree = 90;
    missdegree = 0;
    missstrong = 0;
    missstoostrong = 0;
    goalkeeper = 0;
    goalkeeperdegreefrom = 0;
    goalkeeperdegreeto = 0;
    arrow.style.transform = `rotate(${degree}deg)`;
    ball.style.transform = 'translate(0px,0px)';
    upper.style.transform = 'translateY(0px)';
    result.innerText = ' ';
    keeper.src = "./pic/goalkeeper.png";
    keeper.style.cssText = `transform : translate(0px,0px);`;
    document.getElementById('turn').style.display = 'block';
}
document.getElementById('restart').addEventListener('click', restart);

//select player
function selectplayer(){
    //goalkeeper defense random 1~6, turn into degree 30~150
    goalkeeper = Math.floor((Math.random()*6)+1); //if 1, defense 30~50degree
    goalkeeperdegreefrom = (goalkeeper * 20) + 10;  //30degree
    goalkeeperdegreeto = (goalkeeper * 20) + 30;  //50degree

    player.style.cssText =` 
        position : absolute;
        top : 10%;
        left : 3%;
        width : 95%;
        margin : 0 2%;
    `; 
    who.style.display = 'block';   
}
player.addEventListener('click',selectplayer);
function whichplayer(){
    if(this.id == 1){
        playerskill = 50;
        runspeed *= playerskill;
        directionskill = 10;
        directionspeed *= directionskill;
        console.log(playerskill);
        player.style.display = 'none';
        who.style.display = 'none';
        skill.style.display = 'flex';
    }
    else if(this.id == 2){
        playerskill = 30;
        runspeed *= playerskill;
        directionskill = 4;
        directionspeed *= directionskill;
        console.log(playerskill);
        player.style.display = 'none';
        who.style.display = 'none';
        skill.style.display = 'flex';
    }
    else{
        playerskill = 10;
        runspeed *= playerskill;
        directionskill = 10;
        directionspeed *= directionskill;
        console.log(playerskill);
        player.style.display = 'none';
        who.style.display = 'none';
        skill.style.display = 'flex';
    }
}
document.querySelectorAll('.name').forEach((element) => {
    element.addEventListener('click',whichplayer);
});


//select shoot type
function selectshot(){
    console.log('d');
    skill.style.cssText =` 
        display : flex;
        position : absolute;
        top : 10%;
        left : 0px;
        width : 95%;
        margin : 0 2%;
    `; 
    how.style.display = 'block';
    
}
skill.addEventListener('click',selectshot);
function whattype(){
    if(this.id == 1){
        typeskill = 5;
        runspeed *= typeskill;
        directionskill = 5;
        directionspeed *= directionskill;
        console.log(typeskill);
        skill.style.display = 'none';
        how.style.display = 'none';
        document.getElementById('middle').style.display = 'flex';

        ball.classList.add('power');
    }
    else if(this.id == 2){
        typeskill = 3;
        runspeed *= typeskill;
        directionskill = 10;
        directionspeed *= directionskill;
        console.log(typeskill);
        skill.style.display = 'none';
        how.style.display = 'none';
        document.getElementById('middle').style.display = 'flex';
    }
    else{
        typeskill = 1;
        runspeed *= typeskill;
        directionskill = 5;
        directionspeed *= directionskill;
        console.log(typeskill);
        skill.style.display = 'none';
        how.style.display = 'none';
        document.getElementById('middle').style.display = 'flex';
    }
}
document.querySelectorAll('.type').forEach((element) => {
    element.addEventListener('click',whattype);
});


//choose direction
let flag = 1;
function middle(){
    direction.innerText = 'Release to Stop';
    function middleinside(){
        if(flag == 1){
            if(degree >= 180){
                flag = -1;
                console.log('-1');
            }else if(degree >= 0){
                degree += 10;
                arrow.style.transform = `rotate(${degree}deg)`;
            }
        }else if(flag == -1){
            if(degree <= 0){
                flag = 1;
            }else if(degree <= 180){
                degree -= 10;
                arrow.style.transform = `rotate(${degree}deg)`;
            }
        }
    }
    let stop = setInterval(middleinside,`${directionspeed}`);
    function stopinter(){
        clearInterval(stop);
        direction.style.display = 'none';
        strength.style.display = 'flex';
        document.getElementById('startstop').style.display = 'flex';
    }
    direction.addEventListener('mouseup', stopinter);
}
direction.addEventListener('mousedown', middle);

//shoot strength
function selectstrength(){
    strength.style.cssText =` 
        position : absolute;
        top : 1%;
        left : 0px;
        width : 95%;
        margin : 0 2%;
        z-index : 2;
    `; 
    strong.style.display = 'block';
    let strongheight = 9.4;
    function howstrong(){
        if(strongheight < 99.4){
            strongheight += 5;
        }else{
            strongheight = 9.4;
        }
        document.getElementById('strongpower').style.height = `${strongheight}%`;
    }
    let running = setInterval(howstrong,`${runspeed}`);

    function startstop(){
        missdegree = degree / 3 * 14 - 420;
        missstrong = strongheight * 2 + 55;
        misstoostrong = strongheight * 4 + 100;
        clearInterval(running);
        
        if(goalkeeper == 1){
                keeper.src = "./pic/goalkeeperleft.png";
                keeper.style.cssText = `
                    transform : translate(-280px,-40px) rotate(30deg) scale(1.1);
                `;
        }
        else if(goalkeeper == 2){
                keeper.src = "./pic/goalkeeperleft.png";
                keeper.style.cssText = `
                    transform : translate(-187px,-40px) rotate(60deg);
                `;
        }
        else if(goalkeeper == 3){
                keeper.src = "./pic/goalkeeperleft.png";
                keeper.style.cssText = `
                    transform : translate(-94px,-30px) rotate(60deg);
                `;
        }
        else if(goalkeeper == 4){
                keeper.src = "./pic/goalkeeperright.png";
                keeper.style.cssText = `
                    transform : translate(94px,-30px) rotate(-60deg);
                `;
        }
        else if(goalkeeper == 5){
                keeper.src = "./pic/goalkeeperright.png";
                keeper.style.cssText = `
                    transform : translate(187px,-40px) rotate(-60deg);
                `;
        }
        else{
                keeper.src = "./pic/goalkeeperright.png";
                keeper.style.cssText = `
                    transform : translate(280px,-40px) rotate(-30deg) scale(1.1);
                `;
        }

        if(strongheight >= 60){
            //goalkick
            if(degree > 150){
                ball.style.transform = `translate(${missdegree}px,-${misstoostrong}px)`;
                result.innerText = 'MISS...Correct your direction!!';
            }
            //what's the goal type & where does the ball goes 
            else if(degree >= 30 && degree <= 150){
                if(strongheight >= 80){
                        //power ball
                        if(typeskill ==5){
                            if(degree > 130){
                                ball.classList.remove('ball');
                                ball.classList.add('powerball');
                                ball.style.transform = 'translate(280px,-350px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }
                            }
                            else if(degree > 110){
                                ball.classList.remove('ball');
                                ball.classList.add('powerball');
                                ball.style.transform = 'translate(187px,-350px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }
                            }
                            else if(degree > 90){
                                ball.classList.remove('ball');
                                ball.classList.add('powerball');
                                ball.style.transform = 'translate(94px,-350px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }
                            }
                            else if(degree > 70){
                                ball.classList.remove('ball');
                                ball.classList.add('powerball');
                                ball.style.transform = 'translate(-94px,-350px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }
                            }
                            else if(degree > 50){
                                ball.classList.remove('ball');
                                ball.classList.add('powerball');
                                ball.style.transform = 'translate(-187px,-350px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }
                            }
                            else{
                                ball.classList.remove('ball');
                                ball.classList.add('powerball');
                                ball.style.transform = 'translate(-280px,-350px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }   
                            }
                        }
                        //inside ball
                        else if(typeskill ==3){
                            if(degree > 130){
                                ball.style.transform = 'translate(280px,-350px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }
                            }
                            else if(degree > 110){
                                ball.style.transform = 'translate(187px,-350px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }
                            }
                            else if(degree > 90){
                                ball.style.transform = 'translate(94px,-350px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }                            
                            }
                            else if(degree > 70){
                                ball.style.transform = 'translate(-94px,-350px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }                            
                            }
                            else if(degree > 50){
                                ball.style.transform = 'translate(-187px,-350px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }                            
                            }
                            else{
                                ball.style.transform = 'translate(-280px,-350px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }                            
                            }
                        }
                        //knukle ball
                        else if(typeskill ==1){
                            if(degree > 130){
                                ball.style.transform = 'translateX(280px)';
                                upper.style.transform = 'translateY(-350px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }                            
                            }
                            else if(degree > 110){
                                ball.style.transform = 'translateX(187px)';
                                upper.style.transform = 'translateY(-350px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }                            
                            }
                            else if(degree > 90){
                                ball.style.transform = 'translateX(94px)';
                                upper.style.transform = 'translateY(-350px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }                            
                            }
                            else if(degree > 70){
                                ball.style.transform = 'translateX(-94px)';
                                upper.style.transform = 'translateY(-350px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }                            
                            }
                            else if(degree > 50){
                                ball.style.transform = 'translateX(-187px)';
                                upper.style.transform = 'translateY(-350px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }                            
                            }
                            else{
                                ball.style.transform = 'translateX(-280px)';
                                upper.style.transform = 'translateY(-350px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }                            
                            }
                        }
                }
                else if(strongheight >= 60){
                        //power ball
                        if(typeskill ==5){
                            if(degree > 130){
                                ball.classList.remove('ball');
                                ball.classList.add('powerball');
                                ball.style.transform = 'translate(280px,-230px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                    ball.classList.remove('powerball');
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }
                            }
                            else if(degree > 110){
                                ball.classList.remove('ball');
                                ball.classList.add('powerball');
                                ball.style.transform = 'translate(187px,-230px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }
                            }
                            else if(degree > 90){
                                ball.classList.remove('ball');
                                ball.classList.add('powerball');
                                ball.style.transform = 'translate(94px,-230px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }
                            }
                            else if(degree > 70){
                                ball.classList.remove('ball');
                                ball.classList.add('powerball');
                                ball.style.transform = 'translate(-94px,-230px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }
                            }
                            else if(degree > 50){
                                ball.classList.remove('ball');
                                ball.classList.add('powerball');
                                ball.style.transform = 'translate(-187px,-230px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }
                            }
                            else{
                                ball.classList.remove('ball');
                                ball.classList.add('powerball');
                                ball.style.transform = 'translate(-280px,-230px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }
                            }
                        }
                        //inside ball
                        else if(typeskill ==3){
                            if(degree > 130){
                                ball.style.transform = 'translate(280px,-230px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }
                            }
                            else if(degree > 110){
                                ball.style.transform = 'translate(187px,-230px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }
                            }
                            else if(degree > 90){
                                ball.style.transform = 'translate(94px,-230px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }
                            }
                            else if(degree > 70){
                                ball.style.transform = 'translate(-94px,-230px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }
                            }
                            else if(degree > 50){
                                ball.style.transform = 'translate(-187px,-230px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }
                            }
                            else{
                                ball.style.transform = 'translate(-280px,-230px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }   
                            }
                        }
                        //knukle ball
                        else if(typeskill ==1){
                            if(degree > 130){
                                ball.style.transform = 'translateX(280px)';
                                upper.style.transform = 'translateY(-230px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }
                            }
                            else if(degree > 110){
                                ball.style.transform = 'translateX(187px)';
                                upper.style.transform = 'translateY(-230px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }
                            }
                            else if(degree > 90){
                                ball.style.transform = 'translateX(94px)';
                                upper.style.transform = 'translateY(-230px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }
                            }
                            else if(degree > 70){
                                ball.style.transform = 'translateX(-94px)';
                                upper.style.transform = 'translateY(-230px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }
                            }
                            else if(degree > 50){
                                ball.style.transform = 'translateX(-187px)';
                                upper.style.transform = 'translateY(-230px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }
                            }
                            else{
                                ball.style.transform = 'translateX(-280px)';
                                upper.style.transform = 'translateY(-230px)';
                                if(degree >= goalkeeperdegreefrom && degree <= goalkeeperdegreeto){
                                    result.innerText = 'MISS....';
                                }
                                else{
                                    result.innerText = 'GOAL!!!!';
                                }   
                            }
                        }
                }
            }
            //goalkick
            else if(degree < 30){
                ball.style.transform = `translate(${missdegree}px,-${misstoostrong}px)`;
                result.innerText = 'MISS...Correct your direction!!';
            }
        }
        else{
            result.innerText = 'MISS...Kick Stronger!!!';
            ball.style.transform = `translate(${missdegree}px,-${missstrong}px)`;
            ball.classList.remove('powerball');
            upper.style.transform = `translateY(-${missstrong}px))`;
        }
        document.getElementById('startstop').style.display = 'none';
        document.getElementById('turn').style.display = 'none';
    }
    document.getElementById('startstop').addEventListener('mousedown',startstop);
}
strength.addEventListener('click',selectstrength);


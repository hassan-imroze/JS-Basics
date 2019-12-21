// Speed limit = 70
// For each 7 KM above limit : 1 point;
// If gets 12 points -> licence Suspended

function checkSpeed(speed){
    let speedLimit = 70;
    let kmPerPoint = 5;
    if(speed < (speedLimit + kmPerPoint))
        console.log('Ok');
    else{
    
        const points = Math.floor((speed -speedLimit) / kmPerPoint);
        if(points >= 12) 
            console.log('License Suspended');
        else
            console.log('Points: '+ points);
    }
}

checkSpeed(60);
checkSpeed(72);
checkSpeed(180);
checkSpeed(99);
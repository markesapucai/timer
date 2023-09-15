const res = document.querySelector('.res');
const comecar = () => {
    
    const data = new Date('01-01-1970 00:00:00');
    let up;
    let zero;

    function updateClock() { 
        zeroSec = (data.getSeconds() < 10)? 0: '';
        zeroMin = (data.getMinutes() < 10)? 0: '';
        zeroHor = (data.getHours() < 10)? 0: '';
        const resul = `${zeroHor}${data.getHours()}:${zeroMin}${data.getMinutes()}:${zeroSec}${data.getSeconds()}`;
        mostraResul(resul);
    }

    up = setInterval(() => {
        data.setSeconds(data.getSeconds() + 1);
        updateClock();
    }, 1000);

    pausar = () => {
        clearInterval(up)
    }
    updateClock();
    reset = () => {
        clearInterval(up)
        res.innerHTML = '00:00:00';
    }
};


function mostraResul(resul) {
    res.innerHTML = resul;
}
const palyerNameArray = [];



function display(palyerNameArray) {
    const playerList = document.getElementById('select');
    playerList.innerHTML = " ";


    for (let i = 0; i < palyerNameArray.length; i++) {

        const player = palyerNameArray[i].playerName;
        const ol = document.createElement('ol');
        ol.innerHTML = `<li>${i + 1} . ${player} </li>`;

        playerList.appendChild(ol);


    }
}



function addPlayer(xyz) {

    const playerName = xyz.parentNode.children[0].innerText;
    const playerobj = {
        playerName: playerName
    }
    palyerNameArray.push(playerobj);

    calculation(palyerNameArray.length);
    display(palyerNameArray);


}



function calculation(len) {

    const lengt = parseInt(len);


    document.getElementById('cal').addEventListener('click', function () {
        const perPlayerAmount = document.getElementById('per-player-amount');
        const perPlayerAmountStringValue = perPlayerAmount.value;
        const perPlayerAmountFloatValue = parseFloat(perPlayerAmountStringValue);
        const total = length * perPlayerAmountFloatValue;

        const totalA = lengt * perPlayerAmountFloatValue;
        const perPlayer = document.getElementById('set');
        perPlayer.innerText = totalA;

        document.getElementById('cal-total').addEventListener('click', function () {
            const mangerSalary = document.getElementById('manager-salary');
            const mangerSalaryStringValue = mangerSalary.value;
            const mangerSalaryFloatValue = parseFloat(mangerSalaryStringValue);

            const coachSalary = document.getElementById('coach-salary');
            const coachSalaryStringValue = coachSalary.value;
            const coachSalaryFloatValue = parseFloat(coachSalaryStringValue);



            const totalAmount = totalA + mangerSalaryFloatValue + coachSalaryFloatValue;
            const totalAmoutOfAll = document.getElementById('set-total');

            totalAmoutOfAll.innerText = totalAmount;




        })
    })


}


function disable(btn){
 btn.disabled=true;
 document.body.style.backgroundColor = "red";
}
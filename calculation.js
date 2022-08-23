const palyerNameArray = [];
var length=0;

function display(palyerNameArray) {
    const playerList = document.getElementById('select');
   
    if(palyerNameArray.length>5)
    {
        alert("5 player's already added");
        return;

    }
    else{
        
        playerList.innerHTML = " ";
        length=length+1;

        for (let i = 0; i < palyerNameArray.length; i++) {
    
            const player = palyerNameArray[i].playerName;
            const ol = document.createElement('ol');
            ol.innerHTML = `<li>${i + 1} . ${player} </li>`;
    
            playerList.appendChild(ol);
           
    
    
        }
    }
    
    calculation(length);
    
    
}



function addPlayer(p) {

    const playerName = p.parentNode.children[0].innerText;
    const playerobj = {
        playerName: playerName
    }
    palyerNameArray.push(playerobj);

   
    display(palyerNameArray);


}



function calculation(length) {

    const len = parseInt(length);


    document.getElementById('cal-all-player-expense').addEventListener('click', function () {
        const perPlayerAmount = document.getElementById('per-player-amount');
        const perPlayerAmountStringValue = perPlayerAmount.value;
    
        const perPlayerAmountFloatValue = parseFloat(perPlayerAmountStringValue);      

        const total = len * perPlayerAmountFloatValue;
        const perPlayer = document.getElementById('set');
        perPlayer.innerText = total;

        document.getElementById('cal-total').addEventListener('click', function () {
            const managerSalary = document.getElementById('manager-salary');
            const managerSalaryStringValue = managerSalary.value;
            const managerSalaryFloatValue = parseFloat(managerSalaryStringValue);

            const coachSalary = document.getElementById('coach-salary');
            const coachSalaryStringValue = coachSalary.value;
            const coachSalaryFloatValue = parseFloat(coachSalaryStringValue);


            const totalAmount = total + managerSalaryFloatValue + coachSalaryFloatValue;
            const totalAmoutOfAll = document.getElementById('set-total');

            totalAmoutOfAll.innerText = totalAmount;
           



        })
    })

}


function disable(btn){
    btn.disabled=true;
    btn.style.background='gray';
}
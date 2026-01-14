let board=['','','','','','','','',''];
let player ='X';
let movesCount = 0;
let Game_active=true;
let winningconditions=[
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
]

function move(chosenbox){
  if(board[chosenbox]=='' && Game_active){
    board[chosenbox]=player;
    document.querySelectorAll('.boxes')[chosenbox].innerHTML=player;
    
    if(player==='X'){
      player='O';}
    else{
      player='X';}
    movesCount++;
    turn();
    checkresult();
  }
}

function turn(){
  document.querySelector('.instruction').innerHTML=`Player [ ${player} ] move`;
}

function checkresult(){
  let currentstatus=false;
  
  for (let i=0;i<8;i++){
    let con=winningconditions[i];
    let a=board[con[0]];
    let b=board[con[1]];
    let c=board[con[2]];
    
    if(a=='' || b=='' || c==''){
      continue;
    }

    else if(a==b && b==c){
      currentstatus=true;
      document.querySelectorAll('.boxes')[con[0]].style.backgroundColor = 'rgba(136, 255, 0, 0.5)';
      document.querySelectorAll('.boxes')[con[1]].style.backgroundColor = 'rgba(136, 255, 0, 0.5)';
      document.querySelectorAll('.boxes')[con[2]].style.backgroundColor = 'rgba(136, 255, 0, 0.5)';
      document.querySelectorAll('.boxes')[con[0]].style.boxShadow = '0 0 20px rgba(136, 255, 0)';
      document.querySelectorAll('.boxes')[con[1]].style.boxShadow = '0 0 20px rgba(136, 255, 0)';
      document.querySelectorAll('.boxes')[con[2]].style.boxShadow = '0 0 20px rgba(136, 255, 0)';
      break;}
  }

  if(currentstatus){
    document.querySelector('.instruction').innerHTML=` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Player [ ${player=='X'?'O':'X'} ] has won! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;
    document.querySelector('.instruction').style.color = 'rgba(136, 255, 0)';
    document.querySelector('.instruction').style.fontSize = '40px';
    document.querySelector('.instruction').style.border = '5px solid rgba(136, 255, 0)';
    document.querySelector('.instruction').style.boxShadow = '0 0 50px rgba(136, 255, 0)';
    document.querySelector('.instruction').style.backgroundColor= 'rgba(255, 255, 255, 0.4)';
    Game_active=false;
  }

  else if (movesCount === 9) {
    document.querySelector('.instruction').innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It's a Draw!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    document.querySelector('.instruction').style.color = 'rgba(245, 73, 0)';
    document.querySelector('.instruction').style.fontSize = '40px';
    document.querySelector('.instruction').style.border = '5px solid rgba(245, 73, 0)';
    document.querySelector('.instruction').style.boxShadow = '0 0 50px rgba(245, 73, 0)';
    document.querySelector('.instruction').style.backgroundColor= 'rgba(255, 255, 255, 0.4)';
    const allBoxes = document.querySelectorAll('.boxes');
    
    for (let i = 0; i < allBoxes.length; i++) {
      allBoxes[i].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
      allBoxes[i].style.boxShadow = '0 0 20px rgba(255, 255, 255)';
    }
    Game_active = false;
    
  }
  
}
function resetgame(){
  board=['','','','','','','','',''];
  player ='X';
  Game_active=true;
  document.querySelectorAll('.boxes').forEach(xd=>xd.innerHTML='');
  document.querySelector('.instruction').innerHTML=`Player [ X ] move`;
  document.querySelector('.instruction').style.color = 'rgb(139, 224, 252)';
  document.querySelector('.instruction').style.fontSize = '30px';
  document.querySelector('.instruction').style.border = '5px solid transparent';
  document.querySelector('.instruction').style.boxShadow = '0 0 50px transparent';
  document.querySelector('.instruction').style.backgroundColor= 'transparent';
  const allBoxes = document.querySelectorAll('.boxes');

  for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].innerHTML = '';
    allBoxes[i].style.backgroundColor = '';
    allBoxes[i].style.boxShadow = '';
  }
  movesCount = 0;
}
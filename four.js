var plyr1=prompt("Enter plyr1 name, you are BlUE");

var ply1clr='rgb(86, 151, 255)';
var plyr2=prompt("Enter plyr2 name , you are RED");
var ply2clr='rgb(237, 45, 73)';

var gameOn=true;

var table=$('table tr');


function reportWin(rowNum,colNum){
  console.log("you won at this row,col to check open console");
  console.log(rowNum);
  console.log(colNum);

}

function changeColor(rowIndex,colIndex,color){

  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}


function returnColor(rowIndex,colIndex){

  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');

}


function checkBottom(colIndex){
  colorReport=returnColor(5,colIndex);
  for (var row = 5; row>-1; row--){
    colorReport=returnColor(row,colIndex);
    if (colorReport=='rgb(128, 128, 128)') {

      return row;

    }
  }
}

function colorMatchCheck(one,two,three,four){
  return(one==two && one==three && one==four && one!='rgb(128, 128, 128)' && one!=undefined);
}

function horizWin(){
  for (var row = 0; row<6;row++){
    for(var col=0;col<4;col++){
      if(colorMatchCheck(returnColor(row,col),returnColor(row,col+1),returnColor(row,col+2),returnColor(row,col+3))){
        alert("Horizontal win");
        reportWin(row,col);
        return true;
      }
      else{
        continue;
      }
    }
  }
}


function vertiWin(){
  for (var col = 0; col<7;col++){
    for(var row=0;row<3;row++){
      if(colorMatchCheck(returnColor(row,col),returnColor(row+1,col),returnColor(row+2,col),returnColor(row+3,col))){
        alert("Vertical win");
        reportWin(row,col);
        return true;
      }
      else{
        continue;
      }
    }
  }
}





function diagnolWin(){
  for (var col = 0; col<4;col++){
    for(var row=0;row<7;row++){
      if(colorMatchCheck(returnColor(row,col),returnColor(row+1,col+1),returnColor(row+2,col+2),returnColor(row+3,col+3))){
        alert("Diagnol win");
        reportWin(row,col);
        return true;
      }
      else if(colorMatchCheck(returnColor(row,col),returnColor(row-1,col+1),returnColor(row-2,col+2),returnColor(row-3,col+3))){
          alert("Diagnol win");
          reportWin(row,col);
          return true;


      }
      else{
        continue;
      }
    }
  }
}


var currentplyr=1;
var currentName=plyr1;
var currentColor=ply1clr;

$('h3').text(plyr1+ "  its yor turn drop into any column!!")

$('.board button').on('click', function(){

    var col= $(this).closest('td').index();
    var availBottom=checkBottom(col);
    changeColor(availBottom,col,currentColor);

    if(horizWin() || vertiWin() || diagnolWin()){

      $('h1').text(" You have won !!  " + currentName);
      $('h2').fadeOut('fast');
        $('h3').fadeOut('fast');
    }
    currentplyr=currentplyr * -1;
    if(currentplyr==1){
      currentName=plyr1;
      $('h3').text(" its your turn  " + currentName)
      currentColor=ply1clr;

    }
    else{
      currentName=plyr2;
      $('h3').text( " its your turn  " + currentName)
      currentColor=ply2clr;

    }


})

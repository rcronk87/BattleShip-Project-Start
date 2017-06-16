// This is the controller
$(document).ready(function(){
  tableLoop();
// This is the click to change color to red and counts torpedos
  $("td").click(function() {
    // var split = $(this).attr('class').split("");
    // console.log(split);
    var row = $(this).attr("class");
    var column = $(this).attr("class");
    console.log(row)
    console.log(column)
    $(this).css("background-color", "red")
    $(this).addClass("hit");
    // if(shipLocation === split){
    //   alert("hit");
    // }
    if($("td").hasClass("hit") === true) {
      $("#torpedos").text("Torpedos used: " + torpedos++);
      $(this).off("click");
    }
    if(board[row[0]][column[1]] === ship) {
    alert("hit");
    }
});
})













// This is the model
// fucntion to makle the table 10 x 10
var torpedos = 1;
// var index;
var board = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,-0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];
var ship = 1;
var ships = 0
shipPosition();
function tableLoop() {
  var table = $("<table> </table>")
  // loop to make rows
  for (i = 0; i < 10; i++) {
    var row = $("<tr></tr>");
    $(table).append(row);
    // loop to make 100 td
      for (var j = 0; j < 10; j++) {
        var stuff = $("<td></td>").addClass([i] + [j]);
        $(row).append(stuff);
      }
  }
  // adding table to html
  $(".board").append(table);
}
// var index;

// function boardData() {
//   for(var i= 0; i < 10; i++) {
//     for(var j=1; j < 10; j++){
//       board[i][j] = 0
function shipPosition() {
  while  (ships < 5){
    var column = Math.floor(Math.random() * 10);
    // column = column.toString();
    var row = Math.floor(Math.random() * 10);
    // row = row.toString();
    board[row][column] = ship
    console.log(ship)
    ships = ships + 1;
  }
};


// boardData();


// function newCallShip() {
//   var randomShip = Math.floor(Math.random() * 100);
//   var shipSpot = "space" + randomShip
//   console.log(newCallShip)
// }

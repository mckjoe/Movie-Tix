
function Ticket(movie, time, age, snacks) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.snacks = snacks;
}

Ticket.prototype.food = function(){
    var money = 0;
    if (this.snacks.length === 1) {
      money += 2;
    } else if (this.snacks.length === 2) {
      money += 4;
    } else if (this.snacks.length === 3) {
      money += 6;
    } else if (this.snacks.length === 4) {
      money += 8;
    } else if (this.snacks.length === 5) {
      money += 10;
    } else if (this.snacks.length === 6) {
      money += 12;
    } else if (this.snacks.length === 7) {
      money += 14;
    } else if (this.snacks.length === 8) {
      money += 16;
    }
    return money;
}

Ticket.prototype.ticketCost = function() {
  var cost = 0;
  if ((this.movie === "Dazed and Confused") || (this.movie === "Indiana Jones and the Last Crusade") || (this.movie === "Rosemary's Baby") || (this.movie === "I got the Hook-up")) {
    cost += 5;
  } if (this.age === "Adult") {
    cost += 3;
  } if (this.age === "child") {
    cost += 1;
  } if ((this.time === "2:00 PM") || (this.time === "5:00 PM")) {
    cost += 2;
  } if ((this.time === "7:00 PM") || (this.time === "9:00 PM")) {
    cost += 4;
  }
  return cost;

}

$(document).ready(function() {
  var snacks = [];
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var movie = $("#movie").val();
    var age = $("#age").val();
    var time = $("#time").val();
    var newTicket = new Ticket(movie, time, age, snacks);
    $("input:checkbox[name=treats]:checked").each(function() {
      snacks.push($(this).val());
    });
    console.log(snacks);
    // var ticketFace = newTicket.viewTicket();
    var ticketTotal = newTicket.ticketCost();
    var snackMoney = newTicket.food();
    console.log(snackMoney);
    $("#form-div").hide();
    $(".movie").text(movie);
    $(".time").text(time);
    $(".age").text(age);
    $(".cost").text(ticketTotal);
    $(".treats").text(snackMoney);
    var total = snackMoney += ticketTotal;
    console.log(total);
    $(".total").text(total);
    $("#ticket").show(8000);
  });
});

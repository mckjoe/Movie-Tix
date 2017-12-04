function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

// Ticket.prototype.viewTicket = function(){
//   return "Movie: " + this.movie + " Time: " + this.time + " Age: " + this.age;
// }

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
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var movie = $("#movie").val();
    var age = $("#age").val();
    var time = $("#time").val();
    var newTicket = new Ticket(movie, time, age);
    // var ticketFace = newTicket.viewTicket();
    var ticketTotal = newTicket.ticketCost();
    $("#form-div").hide();
    $(".movie").text(movie);
    $(".time").text(time);
    $(".age").text(age);
    $(".cost").text(ticketTotal);
    $("#ticket").show(8000);
  });
});

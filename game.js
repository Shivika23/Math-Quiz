var p1 = localStorage.getItem("p1")
var p2 = localStorage.getItem("p2")

p1s = 0
p2s = 0
                                                                                        
document.getElementById("player1").innerHTML = p1 + " - "
document.getElementById("player2").innerHTML = p2 + " - "

document.getElementById("p1_s").innerHTML = p1s
document.getElementById("p2_s").innerHTML = p2s

document.getElementById("pq").innerHTML = "Player Question = " + p1
document.getElementById("pa").innerHTML = "Player Answer = " + p2

function send() {
    number1 = document.getElementById("num1").value
    number2 = document.getElementById("num2").value
    actual_answer = parseInt(number1) * parseInt(number2)

}

qt = "p1"
at = "p2"

function check() {
    ganswer = document.getElementById("icb").value
    answer = ganswer.toLowerCase()

    if (word == answer) {
        if (at == "p2") {
            p2s = p2s + 1
            document.getElementById("p2_s").innerHTML = p2s
        } else {
            p1 = p1 + 1
            document.getElementById("p1_s").innerHTML = p1s
        }

    }

    if (qt == "p1") {
        qt = "p2"
        document.getElementById("pq").innerHTML = "Player Question = " + p2
    } else {
        qt = "p1"
        document.getElementById("pq").innerHTML = "Player Question = " + p1
    }

    if (at == "p1") {
        at = "p2"
        document.getElementById("pa").innerHTML = "Player Answer = " + p2
    } else {
        at = "p1"
        document.getElementById("pa").innerHTML = "Player Answer = " + p1
    }


}
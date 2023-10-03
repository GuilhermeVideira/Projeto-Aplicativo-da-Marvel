 document.getElementsByClassName('questao')[0].style.display = "block";
 function prox(id) {
            document.getElementsByClassName('questao')[id-1].style.display = "none";
            document.getElementsByClassName('questao')[id].style.display = "block";
        }
        function result() {
            var score = 0;
            if (document.getElementById('correct1').checked) {
                score++;
            }
            if (document.getElementById('correct2').checked) {
                score++;
            }
            if (document.getElementById('correct3').checked) {
                score++;
            }
            alert("Sua pontuação é: "+ score);
        }
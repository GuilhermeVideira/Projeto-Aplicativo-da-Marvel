//botão 1
document.getElementById("p1").disabled = true;


//cria um event listener que escuta mudanças no input
    document.getElementById("correct1").addEventListener("input", function(event){

  //busca conteúdo do input
    var conteudo = document.getElementById("correct1").value;

    //valida conteudo do input 
    if (conteudo !== null && conteudo !== '') {
      //habilita o botão
      document.getElementById("p1").disabled = false;
    } else {
      //desabilita o botão se o conteúdo do input ficar em branco
      document.getElementById("p1").disabled = true;
    }
});

//botão 2
document.getElementById("p1").disabled = true;


    document.getElementById("b2").addEventListener("input", function(event){

    var conteudo = document.getElementById("b2").value;

    if (conteudo !== null && conteudo !== '') {
      document.getElementById("p1").disabled = false;
    } else {
      document.getElementById("p1").disabled = true;
    }
});
//botão 3

document.getElementById("p1").disabled = true;


    document.getElementById("b3").addEventListener("input", function(event){

    var conteudo = document.getElementById("b3").value;

    if (conteudo !== null && conteudo !== '') {
      document.getElementById("p1").disabled = false;
    } else {
      document.getElementById("p1").disabled = true;
    }
});

//botão 4
document.getElementById("p1").disabled = true;


    document.getElementById("b4").addEventListener("input", function(event){

    var conteudo = document.getElementById("b4").value;

    if (conteudo !== null && conteudo !== '') {
      document.getElementById("p1").disabled = false;
    } else {
      document.getElementById("p1").disabled = true;
    }
});

//botão 5
document.getElementById("p2").disabled = true;


    document.getElementById("b5").addEventListener("input", function(event){

    var conteudo = document.getElementById("b5").value;

    if (conteudo !== null && conteudo !== '') {
      document.getElementById("p2").disabled = false;
    } else {
      document.getElementById("p2").disabled = true;
    }
});

//botão 6
document.getElementById("p2").disabled = true;


    document.getElementById("correct2").addEventListener("input", function(event){

    var conteudo = document.getElementById("correct2").value;

    if (conteudo !== null && conteudo !== '') {
      document.getElementById("p2").disabled = false;
    } else {
      document.getElementById("p2").disabled = true;
    }
});

//botão 7
document.getElementById("p2").disabled = true;


    document.getElementById("b7").addEventListener("input", function(event){

    var conteudo = document.getElementById("b7").value;

    if (conteudo !== null && conteudo !== '') {
      document.getElementById("p2").disabled = false;
    } else {
      document.getElementById("p2").disabled = true;
    }
});

//botão 8
document.getElementById("p2").disabled = true;


    document.getElementById("b8").addEventListener("input", function(event){

    var conteudo = document.getElementById("b8").value;

    if (conteudo !== null && conteudo !== '') {
      document.getElementById("p2").disabled = false;
    } else {
      document.getElementById("p2").disabled = true;
    }
});

//botão 9
document.getElementById("e1").disabled = true;


    document.getElementById("b9").addEventListener("input", function(event){

    var conteudo = document.getElementById("b9").value;

    if (conteudo !== null && conteudo !== '') {
      document.getElementById("e1").disabled = false;
    } else {
      document.getElementById("e1").disabled = true;
    }
});

//botão 10
document.getElementById("e1").disabled = true;


    document.getElementById("b10").addEventListener("input", function(event){

    var conteudo = document.getElementById("b10").value;

    if (conteudo !== null && conteudo !== '') {
      document.getElementById("e1").disabled = false;
    } else {
      document.getElementById("e1").disabled = true;
    }
});

//botão 11
document.getElementById("e1").disabled = true;


    document.getElementById("b11").addEventListener("input", function(event){

    var conteudo = document.getElementById("b11").value;

    if (conteudo !== null && conteudo !== '') {
      document.getElementById("e1").disabled = false;
    } else {
      document.getElementById("e1").disabled = true;
    }
});

//botão 12
document.getElementById("e1").disabled = true;


    document.getElementById("correct3").addEventListener("input", function(event){

    var conteudo = document.getElementById("correct3").value;

    if (conteudo !== null && conteudo !== '') {
      document.getElementById("e1").disabled = false;
    } else {
      document.getElementById("e1").disabled = true;
    }
});
       
        document.getElementsByClassName('container')[0].style.display = "block";

        
        function next(id) {
            document.getElementsByClassName('container')[id-1].style.display = "none";
            document.getElementsByClassName('container')[id].style.display = "block";
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
            
            alert("Você acertou + "+ score +"/3")
             if(score>=3){
              alert("Você é muito fã da Marvel")
             }
             
                
             if(score==2){
              alert("Bom")
             }
             else{
              alert("Tá precisando estudar heim...")

             }
               }
             
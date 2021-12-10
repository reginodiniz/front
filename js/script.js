const form = document.querySelector("form");

form.addEventListener("submit", async function(event){
    event.preventDefault();

    const formData = new FormData(form);
    const options = {method:"post",body:formData};

    const response = await fetch("https://api-pw-gino.herokuapp.com/clientes",options);

    if(response.ok){
        const result = await response.json();
        console.log(result);
        alert("Foi cadastrado com sucesso!");
    } else {
        console.warn("Falha na consulta da API");
    }
    var Carregador_Arquivo = function(event){
        var reader = new FileReader();
                //console.log(reader)
        
        reader.onload = function(){
        var btnPrev = document.querySelector(".fechar_Prev_js");
        var output = document.getElementById("nova");
        output.style.display = "block";
        output.style.backgroundImage = src(" ");
    }
    reader.readAsDataURL(event.target.files[0]);
    }
});



// async function getclientes(){
//     const response = await fetch("http://localhost:3001/clientes");
//     const clientes = await response.json();
///----(OBSER) JSON.stringify(Object.fromEntries(formData));
//const multer  = require('multer')
//const upload = multer({ dest: 'uploads/' }) foi incluido no lugar do (fomdata) passando a ("imagem")
//     fabricantes.forEach((fabricante) => {
//     fabricantesSelect.innerHTML += '<option value="${fabricante.id}{fabricante.nome}</option>';
//     });
        
    
//     }
//     getclientes();
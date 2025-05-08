function ampliar(imagem, texto) {
    document.getElementById("modal-img").src = "img/" + imagem;
    document.getElementById("modal-texto").innerText = texto;
    document.getElementById("modal").style.display = "flex";
  }
  
  function fecharModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  function irPara(pagina) {
    window.location.href = pagina;
  }
  
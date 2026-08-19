    const botao = document.getElementById('btn-interativo');
    const foto = document.getElementById('foto-perfil');
    const statusTexto = document.getElementById('status-interacao');

    botao.addEventListener('click', () => {
      document.body.classList.toggle('modo-destaque');
      statusTexto.classList.toggle('msg-visivel');
      
      // Exemplo: alterna a imagem se desejar
      // foto.src = foto.src.includes('foto.jpg') ? 'foto-gato.jpg' : 'foto.jpg';
    });
document.addEventListener("DOMContentLoaded", function () {
    const botoes = document.querySelectorAll(".detalhes-btn");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupText = document.getElementById("popup-text");
    const popupMedia = document.getElementById("popup-images"); // Container das mídias
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentSlide = 0;
    let slides = [];

    // Conteúdo dos popups (com imagens e vídeos misturados)
    const conteudoPopup = {
        popup1: {
            media: [
                { type: 'image', src: 'imagens cursos/conduta/slide 1.png' },  
                { type: 'image', src: 'imagens cursos/conduta/slide 2.png' },  
                { type: 'video', src: 'imagens cursos/conduta/ratão1.mp4' }   // Vídeo aparece como um slide normal
            ]
        },
        popup2: {
            media: [
                { type: 'image', src: 'imagens cursos/patrulha/slide1.png' },
                { type: 'image', src: 'imagens cursos/patrulha/slide2.png' },
                { type: 'image', src: 'imagens cursos/patrulha/slide3.png' },
                { type: 'image', src: 'imagens cursos/patrulha/slide4.png' },
                { type: 'image', src: 'imagens cursos/patrulha/slide5.png' },
                { type: 'image', src: 'imagens cursos/patrulha/slide6.png' },
                { type: 'image', src: 'imagens cursos/patrulha/slide7.png' },
                { type: 'image', src: 'imagens cursos/patrulha/slide8.png' },
                { type: 'image', src: 'imagens cursos/patrulha/slide9.png' },
                { type: 'image', src: 'imagens cursos/patrulha/slide10.png' },
                { type: 'image', src: 'imagens cursos/patrulha/slide11.png' },
                { type: 'image', src: 'imagens cursos/patrulha/slide12.png' },
                { type: 'image', src: 'imagens cursos/patrulha/slide13.png' },
            ]
        }
    };

    // Quando clicar no botão de detalhes
    botoes.forEach(botao => {
        botao.addEventListener("click", function () {
            const popupId = this.getAttribute("data-popup");
            const data = conteudoPopup[popupId];

            if (data) {
                popupTitle.textContent = data.title;
                popupText.textContent = data.text;

                // Limpar conteúdo anterior
                popupMedia.innerHTML = "";
                slides = [];

                // Adicionar mídia ao popup
                data.media.forEach(item => {
                    if (item.type === 'image') {
                        const img = document.createElement("img");
                        img.src = item.src;
                        img.alt = "Imagem";
                        img.classList.add("popup-slide");
                        slides.push(img);
                    } else if (item.type === 'video') {
                        const video = document.createElement("video");
                        video.src = item.src;
                        video.controls = true;
                        video.classList.add("popup-slide");
                        slides.push(video);
                    }
                });

                // Adicionar slides ao popupMedia
                slides.forEach(slide => popupMedia.appendChild(slide));

                // Exibir o primeiro slide
                currentSlide = 0;
                mostrarSlide();

                // Exibir o popup
                popup.style.display = "flex";
            }
        });
    });

    // Função para mostrar o slide atual
    function mostrarSlide() {
        slides.forEach((slide, index) => {
            slide.style.display = index === currentSlide ? "block" : "none";
        });
    }

    // Botão próximo slide
    nextBtn.addEventListener("click", function () {
        if (slides.length > 0) {
            currentSlide = (currentSlide + 1) % slides.length;
            mostrarSlide();
        }
    });

    // Botão slide anterior
    prevBtn.addEventListener("click", function () {
        if (slides.length > 0) {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            mostrarSlide();
        }
    });

    // Fechar popup
    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Fechar clicando fora do popup
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});

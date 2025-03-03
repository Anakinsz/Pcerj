document.addEventListener("DOMContentLoaded", function () {
    const images = [
        { src: "/imagens/delegados.png", title: "PCERJ", headline: "Polícia Civil", description: "Polícia Civil do Estado do Rio de Janeiro (PCERJ) é uma instituição responsável pela investigação de crimes e pela manutenção da ordem pública no estado. Criada em 1808, durante o período imperial, com a chegada da Família Real ao Brasil, a corporação inicialmente tinha a função de polícia judiciária e, ao longo dos anos, passou a desempenhar um papel crucial no combate ao crime organizado, ao tráfico de drogas e a outras atividades ilícitas. A PCERJ é reconhecida por sua estrutura especializada, como a Delegacia de Homicídios e a Delegacia de Repressão a Entorpecentes, com o objetivo de garantir a segurança e a justiça à população." },
        { src: "/imagens/cgpc.png", title: "Investigações", headline: "Investigações Especiais", description: "Controladoria Geral da Polícia Civil (CGPC) do Estado do Rio de Janeiro é um órgão responsável pela supervisão e controle das atividades internas da instituição, com foco na transparência, prevenção de irregularidades e aprimoramento da gestão pública. A CGPC tem como missão garantir que as ações da Polícia Civil estejam em conformidade com as normas legais e éticas, além de promover a fiscalização interna e assegurar a prestação de contas à sociedade." },
        { src: "/imagens/delegadotablet.png", title: "Treinamentos", headline: "Cursos Especiais", description: "Convite para se tornar um Policial Civil: Junte-se a nós na luta contra o crime!A Polícia Civil do Estado do Rio de Janeiro (PCERJ) Ao ingressar na PCERJ, você estará no coração das investigações que combatem o crime organizado, o tráfico de drogas, e diversas outras práticas ilegais que afligem nossa cidade e estado. Na PCERJ, você terá a chance de trabalhar em unidades especializadas como a CORE, CGPC, SAER e GEM. entre outros departamentos, que são responsáveis por realizar operações de alto risco e desenvolver estratégias eficazes para desmantelar organizações criminosas." }
    ];

    let currentIndex = 0;

    const imageElement = document.getElementById('image');
    const titleElement = document.getElementById('title');
    const headlineElement = document.getElementById('headline');
    const descriptionElement = document.getElementById('description');
    const indicators = document.querySelectorAll('.indicators li');

    function updateImageAndText() {
        const currentImage = images[currentIndex];

        imageElement.style.opacity = 0;

        setTimeout(() => {
            imageElement.src = currentImage.src;
            titleElement.textContent = currentImage.title;
            headlineElement.textContent = currentImage.headline;
            descriptionElement.textContent = currentImage.description;

            indicators.forEach((indicator, index) => {
                if (index === currentIndex) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });

            imageElement.style.opacity = 1;
        }, 500);
    }

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImageAndText();
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImageAndText();
    });

    updateImageAndText();

    // Animação ao rolar a página para exibir imagens progressivamente
    const imageTextSections = document.querySelectorAll(".image-text");

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.8;

        imageTextSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

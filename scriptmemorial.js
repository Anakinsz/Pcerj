window.onload = function() {
    const delegados = document.querySelectorAll('.delegados');
    delegados.forEach((grupo, index) => {
        setTimeout(() => {
            grupo.style.opacity = 1;
        }, index * 500);
    });
};

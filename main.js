document.addEventListener("DOMContentLoaded", () => {


    let lunacy = parseInt(localStorage.getItem("lunacy")) || 0;


    function salvarLunacy() {
        localStorage.setItem("lunacy", lunacy);
    }


    function atualizarUI() {
        const el = document.getElementById("lunacyText");
        if (el) el.innerText = lunacy;
    }


    atualizarUI();


    const farmBtn = document.getElementById("farmBtn");


    if (farmBtn) {
        farmBtn.onclick = () => {
            lunacy += 130;
            salvarLunacy();
            atualizarUI();
        };
    }


    const extract1Btn = document.getElementById("extract1Btn");
    const extract10Btn = document.getElementById("extract10Btn");


    if (extract1Btn) {
        extract1Btn.onclick = () => {


            if (lunacy < 130) {
                alert("Você não tem lunacy suficiente. Cozinhe mais bongy.");
                return;
            }


            lunacy -= 130;
            salvarLunacy();
            atualizarUI();


            const resultados = gerarPull(1);
            localStorage.setItem("pullResults", JSON.stringify(resultados));


            window.location.href = "result.html";
        };
    }


    if (extract10Btn) {
        extract10Btn.onclick = () => {


            if (lunacy < 1300) {
                alert("Você não tem lunacy suficiente. Cozinhe mais bongy");
                return;
            }


            lunacy -= 1300;
            salvarLunacy();
            atualizarUI();


            const resultados = gerarPull(10);
            localStorage.setItem("pullResults", JSON.stringify(resultados));


            window.location.href = "result.html";
        };
    }


});


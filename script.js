const cont = () => document.getElementById("contagem");

const func = (cont) => {
    const final = new Date(2024, 12, 15);
    const agora = Date.now();
    const diff_num = final - agora;
    const diff = Math.round(diff_num / (1000 * 3600 * 24));
    console.log(diff+" DIAS");
    cont().innerHTML = diff+" DIAS";
};

func(cont);
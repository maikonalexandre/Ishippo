const nomeum = document.getElementById('firstname');
const nomedois = document.getElementById('secondname');
const shippar = document.getElementById('shippar');
const result = document.getElementById('result');
const comb = document.getElementById('comb');


shippar.addEventListener('click', sort);

 function sort() {

    const nomeum = document.getElementById('firstname').value.toUpperCase();
    const nomedois = document.getElementById('secondname').value.toUpperCase();;


    if (nomeum == '' || nomedois == '') {
        alert('Preencha todos os campos');
        document.getElementById('result').value = "";
    } else {
        document.getElementById('result').value = '' + nomeum + ' e ' + nomedois;

        var nome = [];
        nome[0] = nomeum.slice(0, 4);
        nome[1] = nomeum.slice(0, 3);
        nome[2] = nomeum.slice(0, 2);
        nome[3] = nomeum.slice(1, 3);

        var numt = [];
        numt[0] = nomedois.slice(0, 4);
        numt[1] = nomedois.slice(0, 3);
        numt[2] = nomedois.slice(0, 2);
        numt[3] = nomedois.slice(1, 3);

        combinations = [];
        combinations2 = [];


        for (i = 0; i < nome.length; ++i) {
            for (j = 0; j < numt.length; ++j) {
                combinations.push([nome[j] + numt[i]]);
                combinations2.push([numt[i] + nome[j]]);
            }
        }

        console.log(combinations);
        console.log(combinations2);

        // ships[2] = nome1+nome30;
        // ships[3] = nome1+nome40;
        // ships[4] = nome2+nome10;
        // ships[5] = nome2+nome20;
        //ships[6] = nome2+nome30;
        // ships[7] = nome2+nome40;
        // ships[8] = nome3+nome10;
        // ships[9] = nome3+nome20;
        // ships[10] = nome3+nome30;
        // ships[11] = nome3+nome40;

        const comb = document.getElementById('rt');
        comb.innerText = combinations.join(' ') + combinations2.join(' ');
        document.getElementById('firstname').value = "";
        document.getElementById('secondname').value = "";

        //alert(''+nome1+' '+nome2 +' '+nome3+' '+nome4 +' '+nome10+' '+nome20 +' '+nome30+' '+nome40);
    }
        //const nomeums = nomeum.split("",4);
        //const primeira = nomeums[0] + nomeums[1];
        //const segundo = nomeums[2] + nomeums[3]; 
}

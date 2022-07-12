// Consts do documento

const c = document.getElementById('canvas')

const membro = document.getElementById('membro')
const grupo = document.getElementById('grupo')
const data = document.getElementById('data')
const local = document.getElementById('local')
const form = document.querySelector('.needs-validation')
const download = document.getElementById('download')

function canvas(){

    const ctx = c.getContext('2d')
    // Limpa o certificado
    ctx.clearRect(0, 0, 2380, 3368);

    // Validação do Formulário
    // Eu ainda não pensei em nenhum jeito melhor e mais dinâmico de fazer isso, então fica assim por enquanto

    if(membro.value == null || membro.value == ""){
        membro.classList.add('is-invalid')
    }
    else{
        membro.classList.remove('is-invalid')
    }

    if(grupo.value == null || grupo.value == ""){
        grupo.classList.add('is-invalid')
    }
    else{
        grupo.classList.remove('is-invalid')
    }

    if(data.value == null || data.value == ""){
        data.classList.add('is-invalid')
    }
    else{
        data.classList.remove('is-invalid')
    }

    if(local.value == null || local.value == ""){
        local.classList.add('is-invalid')
    }
    else{
        local.classList.remove('is-invalid')
    }

    if(local.classList.contains('is-invalid') || data.classList.contains('is-invalid') || grupo.classList.contains('is-invalid') || membro.classList.contains('is-invalid')){
        download.classList.add('disabled')
    }
    else{

        drawCanvas()
}
}

function drawCanvas(){
    const ctx = c.getContext('2d')
    const canvasTxt = window.canvasTxt.default; 

// Sistema que escolhe se o jovem é lobinho ou escoteiro 

let info = {
ramo: 'Escoteiro',
cor1: '#007739',
cor2: '154D30',
chefe: 'Chefe de Sessão'
}

if(document.getElementById('lobinho').checked){
info.ramo = 'Lobinho'
info.cor1 = '#00295C'
info.cor2 = '#FED702'
info.chefe = 'Akelá da Alcatéia'

}
else{
info.ramo = 'Escoteiro'
info.cor1 = '#007739'
info.cor2 = '#154D30'
info.chefe = 'Chefe de Sessão'

}
// Fundo
ctx.fillStyle = "#fff"
ctx.fillRect(0, 0, 2380, 3368);


// Cabeçalho

ctx.beginPath();
ctx.fillStyle = info.cor1;
ctx.rect(-75, -75, 2600, 490);
ctx.lineWidth = "8";
ctx.strokeStyle = info.cor2;
ctx.fill();
ctx.save();
ctx.clip();
ctx.lineWidth *= 16;
ctx.fill();
ctx.stroke();
ctx.restore();

// Textos

ctx.fillStyle = '#000';


const titulo = `CERTIFICADO DE PROMESSA`

canvasTxt.fontFamily = 'Arial'
canvasTxt.fontSize = '128'
canvasTxt.fontWeight = '700'
canvasTxt.lineHeight = 144
canvasTxt.align = 'center'
canvasTxt.justify = false
canvasTxt.drawText(ctx, titulo, 596, 920, 1184, 100)

const certificamos = `Certificamos que`

canvasTxt.fontFamily = 'Arial'
canvasTxt.fontSize = '64'
canvasTxt.fontWeight = '500'
canvasTxt.align = 'center'
canvasTxt.justify = false
canvasTxt.drawText(ctx, certificamos, 332, 1220, 1712, 112)

canvasTxt.fontFamily = 'Arial'
canvasTxt.fontSize = '72'
canvasTxt.fontWeight = '500'
canvasTxt.align = 'center'
canvasTxt.justify = false
canvasTxt.drawText(ctx, membro.value, 332, 1310, 1712, 112)

const promessa = `prestou sua promessa como ${info.ramo}(a) \ndo Grupo Escoteiro ${grupo.value} \nsendo reconhecido(a) como membro da \ngrande fraternidade mundial dos escoteiros.`

canvasTxt.fontFamily = 'Arial'
canvasTxt.fontSize = '64'
canvasTxt.fontWeight = '400'
canvasTxt.lineHeight = 72
canvasTxt.align = 'center'
canvasTxt.justify = false
canvasTxt.drawText(ctx, promessa, 340, 1504, 1712, 112)


// Data e Local

const datalocal = `${local.value}, ${data.value.slice(0, 10).split('-').reverse().join('/')}`
canvasTxt.fontFamily = 'Arial'
canvasTxt.fontSize = '64'
canvasTxt.fontWeight = '400'
canvasTxt.lineHeight = 20
canvasTxt.align = 'center'
canvasTxt.justify = false
canvasTxt.drawText(ctx, datalocal, 332, 1800, 1712, 340)

// Assinaturas

ctx.beginPath();
ctx.moveTo(332, 2500);
ctx.lineTo(332+600, 2500);
ctx.strokeStyle = '#000'
ctx.lineWidth = 12;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1432, 2500);
ctx.lineTo(1432+600, 2500);
ctx.lineWidth = 12;
ctx.stroke();

canvasTxt.fontFamily = 'Arial'
canvasTxt.fontSize = '64'
canvasTxt.fontWeight = '400'
canvasTxt.lineHeight = 80
canvasTxt.align = 'center'
canvasTxt.justify = false
canvasTxt.drawText(ctx, 'Diretor-Presidente', 332, 2500+20, 603, 78)
canvasTxt.drawText(ctx, info.chefe, 1432, 2500+20, 603, 78)


// Cria um botão para download do certificado

download.classList.remove('disabled')
download.download = `Certificado_${membro.value.split(' ')[0]}.png`;
download.href = c.toDataURL() 

}


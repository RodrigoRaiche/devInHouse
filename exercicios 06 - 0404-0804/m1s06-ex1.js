function saudar(nome,...titulos) {

    titulos.forEach(titulo =>{
        console.log('Olá '+nome+ ', '+ titulo);
    })

}

pessoaCharles = {
Nome:'Charles',
Titulos:['Príncipe de Gales', 'Duque de Edimburgo', 'Duque da Cornualha', 'Duque de Rothesay', 'Conde de Merioneth', 'Conde de Carrick',  'Conde de Chester', 'Barão Greenwich', 'Barão de Renfrew', 'Lorde das Ilhas', 'Príncipe e Grande Intendente da Escócia',  'Cavaleiro da Ordem da Austrália']
}

saudar(pessoaCharles.Nome, pessoaCharles.Titulos);

console.log('------------------------------')

pessoaDaenerys = {
Nome: 'Daenerys Targaryen',
Titulos: ['Rainha dos Ândalos', 'Protetora dos Sete Reinos', 'Khaleesi do Grande Mar de Grama', 'Mãe de Dragões', 'Quebradora de Correntes']
}

saudar(pessoaDaenerys.Nome, pessoaDaenerys.Titulos);
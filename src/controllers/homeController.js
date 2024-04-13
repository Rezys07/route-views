exports.paginaInicial = (req , res) => {
    res.render('index')
}

exports.trataPost = (req , res) => {
    res.send('Hey, i am your new route post!')
}
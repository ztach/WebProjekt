const Typ = require('../models').Typ;

exports.getAllController = (req, res) => {
    Typ.findAll().then(typ => {
        res.status(200).json(typ);
    });    
} 


exports.postTypeController = (req, res)=>{
    Typ.create({
        typ: req.body.typ
    }).then(typ => {
        /*console.log(typ.get({
            plain: true
        }));*/
        res.status(200).json(typ);
    }).error(err => {
        res.status(405).json('Error has occured');
    });
}

exports.getIdController = (req, res) => {
    Typ.findByPk(req.params.id).then(typ => {
        res.status(200).json(typ);
    });
}

exports.putIdController = (req, res) => {
    Typ.update({
        typ: req.body.typ
    },{
        where: { id: req.params.id }
    }).then(result => {
        res.status(200).json(result);
    });
}


exports.deleteIdController = (req, res) => {
    //console.log('Delete typ by id');
    Typ.destroy({
        where: { id: req.params.id }
    }).then(result => {
        res.status(200).json(result);
    });
}

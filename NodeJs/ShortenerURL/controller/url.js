const shortId= require('shortid');
const Url = require('../model/url');

async function handleShortenUrl(req, res){

    const body = req.body;

    if(!body){
        res.status(400).end({error: "Url is invalid!"});
    }

    const id = shortId();

    await Url.create({
        shortId: id,
        redirectURL: body.Url,
        visitHistory: [],
    })

    return res.json({id: id});
}

module.exports = {
    handleShortenUrl,
}
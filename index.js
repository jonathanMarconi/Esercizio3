const express= require('express');
const app = express();
const {libri} =require('./libri');
app.use(express.json());
app.get('/G3T',(req,res)=>{
    res.status(200).json(libri)
})
app.get('/G3T/:id', (req, res) =>{
    const {id} = req.params
    const book = libri.find((book) => book.id === id)
    res.json(book);
})
app.post('/P0ST',(req,res)=>{
    console.log(req.body);
if(req.body){
    const book = req.body;
    libri.push(book);
    res.status(200).json({success: true, data: libri});


}else{
    res.status(400).send(error);
}

})
app.delete('/D3L/:id',(req, res) =>{
    const { id } = req.params;

    //cerco l'index del libro con l'id indicato
    const index = libri.findIndex(book => book.id === id);
    //elimino un elemento a partire dalla posizione index
    libri.splice(index, 1);

    res.status(200).json({ success: true, data: libri })
})
app.put('/PUT/:id',(req,res)=>{
    const{id}=req.params;
    const book = req.body;
    libri[Number(id)-1]=book;
    res.status(200).json({success: true, data: libri})
})


app.listen(3000);
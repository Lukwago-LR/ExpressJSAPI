import express from 'express';
import cors from 'cors';

const app = express()

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

//referencing cors
app.use(cors());

// route definitions below here
app.get("/api", function(req, res){
    res.json({msg:"Oh, the pleasures of God"});
});

let PORT = process.env.PORT || 3011;

app.listen(PORT, function(){
    console.log('App starting on port', PORT)
})
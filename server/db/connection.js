const mongoose = require('mongoose');

const url = "mongodb+srv://chatapp2002:chatapp@cluster0.yqnvgd7.mongodb.net/"

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))
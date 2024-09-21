const mongoose = require('mongoose')

// mongoose.connect(`mongodb://localhost:27017/sample`)
mongoose.connect(`mongodb+srv://quillnotes:qIY6irXpqB5lpKp1@notes.qrb1p.mongodb.net/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });


const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post"
        }
    ]
})

module.exports = mongoose.model("user", userSchema)
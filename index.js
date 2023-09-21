import express from 'express';
import multer from 'multer';
import path from 'path'
import cors from 'cors';
import { PythonShell } from 'python-shell'
// import { loadLayersModel, browser, scalar } from '@tensorflow/tfjs-node'; // For Node.js environment

const app = express()

app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

//referencing cors
app.use(cors());

// route definitions below here
app.get("/api/predict", function (req, res) {
    // run python code
    PythonShell.run('Python-Code/main.py', null).then(messages => {
        console.log(messages[2])
        res.json(
            {
                "predictions": messages[2]
            }
        );
    });
});

// route definitions below here
// app.get("/api/javaWay", function (req, res) {
//     // const tf = require('@tensorflow/tfjs-node'); // For Node.js environment

//     // Define a function to load the model
//     async function loadModel() {
//         const model = await loadLayersModel('trainedModel/20230130-17341675100040-full-image-set-mobienetv2-Adam.h5');

//         // Define a function to classify an image
//         async function classifyImage(imageElement) {
//             // Preprocess the image
//             const tensor = browser.fromPixels(imageElement)
//                 .resizeNearestNeighbor([224, 224]) // Resize to the model's input size
//                 .toFloat()
//                 .div(scalar(255))
//                 .expandDims();

//             // Make a prediction
//             const prediction = await model.predict(tensor);

//             // Get the class with the highest probability
//             const predictedClass = prediction.argMax(1).dataSync()[0];

//             return predictedClass;
//         }

//         return classifyImage;
//     }

//     // Load the model and use it for classification
//     loadModel()
//         .then(classifyImage => {

//             const img = new Image();

//             // Set the source of the image
//             img.src = 'uploads\image001.png';
//             const imageElement = img.src;
//             const predictedClass = classifyImage(imageElement);
//             console.log('Predicted class:', predictedClass);
//             res.json(
//                 {
//                     "predictions": predictedClass
//                 }
//             );
//         })
//         .catch(error => {
//             console.error('Error loading model:', error);
//         });

// });

const storage = multer.diskStorage({
    destination: 'public/uploads/', // Specify the directory where uploaded files will be saved
    filename: function (req, file, callback) {
        // Rename the file to ensure it doesn't overwrite any existing files
        callback(null, "image" + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

app.use(express.static('public')); // Serve static files like HTML

app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).write('<h1 style="color:red; text-align:center;">No file uploaded.</h1><div style="text-align:center;"><button onclick="history.back();">Back</button></div>');
    }
    res.write('<h1 style="color:green; text-align:center;">File uploaded successfully.</h1><div style="text-align:center;"><button onclick="history.back();">Back</button></div>');
});

let PORT = process.env.PORT || 3011;

app.listen(PORT, function () {
    console.log('App starting on port', PORT)
})
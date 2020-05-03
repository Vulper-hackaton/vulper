const functions = require('firebase-functions');
const os = require('os');
const path = require('path');
const cors = require('cors')({ origin: true });
const Busboy = require('busboy');
const fs = require('fs');

const {Storage} = require('@google-cloud/storage');
const storage = new Storage ({
  projectId: "vulper-hackaton",
  keyFilename: "vulper-hackaton-firebase-adminsdk-2ngo1-d1afc8d96a.json"
});


exports.uploadFile = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== 'POST') {
      return res.status(500).json({
        message: 'Not allowed',
      })
    }
    const busboy = new Busboy({ headers: req.headers });
    let uploadData = null;

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      const filepath = path.join(os.tmpdir(), filename);
      uploadData = { file: filepath, type: mimetype };
      file.pipe(fs.createWriteStream(filepath))
    });

    busboy.on('finish', () => {
      const bucket = storage.bucket('fb-cloud-functions-demo.appspot.com');
      bucket
          .upload(uploadData.file, {
            uploadType: 'media',
            metadata: {
              metadata: {
                contentType: uploadData.type,
              },
            },
          })
          .then(() => {
            res.status(200).json({
              message: 'It worked!',
            }); return 1;
          })
          .catch(err => {
            res.status(500).json({
              error: err,
            })
          })
    });
    busboy.end(req.rawBody)
  })
});

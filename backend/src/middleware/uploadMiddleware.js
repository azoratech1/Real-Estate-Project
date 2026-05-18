import multer from "multer";

/*
=====================================
MULTER MEMORY STORAGE
=====================================
*/

const storage =
  multer.memoryStorage();

/*
=====================================
ALLOWED IMAGE TYPES
=====================================
*/

const allowedMimeTypes = [

  "image/jpeg",

  "image/jpg",

  "image/png",

  "image/webp"
];

/*
=====================================
FILE FILTER
=====================================
*/

const fileFilter = (
  req,
  file,
  cb
) => {

  /*
  =====================================
  VALIDATE IMAGE TYPE
  =====================================
  */

  if (

    allowedMimeTypes.includes(
      file.mimetype
    )

  ) {

    cb(null, true);

  } else {

    cb(

      new Error(

        "Only JPG, JPEG, PNG and WEBP images are allowed"

      ),

      false
    );
  }
};

/*
=====================================
UPLOAD CONFIG
=====================================
*/

const upload = multer({

  storage,

  /*
  =====================================
  LIMITS
  =====================================
  */

  limits: {

    /*
    =====================================
    MAX FILE SIZE
    =====================================
    */

    fileSize:
      5 * 1024 * 1024, // 5MB

    /*
    =====================================
    MAX FILES
    =====================================
    */

    files: 4
  },

  fileFilter
});

export default upload;
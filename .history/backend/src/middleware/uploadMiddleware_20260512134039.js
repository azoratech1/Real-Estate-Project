import multer from "multer";

/*
=====================================
MULTER MEMORY STORAGE
=====================================
*/

const storage = multer.memoryStorage();

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
  ALLOW ONLY IMAGES
  =====================================
  */

  if (
    file.mimetype.startsWith(
      "image/"
    )
  ) {

    cb(null, true);

  } else {

    cb(
      new Error(
        "Only image files are allowed"
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

  limits: {

    /*
    =====================================
    MAX FILE SIZE
    =====================================
    */

    fileSize:
      5 * 1024 * 1024 // 5MB

  },

  fileFilter

});

export default upload;
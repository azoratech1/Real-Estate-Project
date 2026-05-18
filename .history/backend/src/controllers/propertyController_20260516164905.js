import Property from "../models/Property.js";
import imagekit from "../config/imagekit.js";
/*
=====================================
SLUGIFY FUNCTION
=====================================
*/

const slugify = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

/*
=====================================
CREATE PROPERTY
=====================================
*/

export const createProperty = async (
  req,
  res
) => {
  try {

    /*
    =====================================
    GET FORM DATA
    =====================================
    */

    const {
      title,
      description,
      shortDescription,

      propertyType,
      listingType,

      state,
      city,
      locality,
      address,
      pincode,
location,
      price,
      maintenance,
      securityDeposit,

      bedrooms,
      bathrooms,
      balconies,

      furnishing,

      builtUpArea,
      carpetArea,

      contactName,
      contactNumber,

      featured
    } = req.body;

    /*
    =====================================
    VALIDATION
    =====================================
    */

    if (
      !title ||
      !description ||
      !propertyType ||
      !listingType ||
      !state ||
      !city ||
      !price
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Required fields are missing"
      });
    }

    /*
    =====================================
    HANDLE AMENITIES
    =====================================
    */

    let amenities = [];

    if (req.body.amenities) {

      if (
        Array.isArray(
          req.body.amenities
        )
      ) {

        amenities =
          req.body.amenities;

      } else {

        amenities = [
          req.body.amenities
        ];

      }
    }

    /*
    =====================================
    HANDLE IMAGES
    =====================================
    */

   /*
=====================================
UPLOAD IMAGES TO IMAGEKIT
=====================================
*/

let images = [];

/*
=====================================
VALIDATE IMAGE LIMIT
=====================================
*/

if (
  req.files &&
  req.files.length > 4
) {

  return res.status(400).json({

    success: false,

    message:
      "Maximum 4 images allowed"
  });
}

/*
=====================================
UPLOAD IMAGES TO IMAGEKIT
=====================================
*/



if (
  req.files &&
  req.files.length > 0
) {

  for (const file of req.files) {

    const response =
      await imagekit.upload({

        file:
          file.buffer,

        fileName:
          `${Date.now()}-${file.originalname}`,

        folder:
          "/properties"
      });

    images.push({

      url:
        response.url,

      fileId:
        response.fileId
    });
  }
}
    /*
    =====================================
    BOOLEAN CONVERSION
    =====================================
    */

    const featuredValue =
      featured === "true";

    /*
    =====================================
    CREATE PROPERTY
    =====================================
    */
/*
=====================================
CONVERT NUMBER FIELDS
=====================================
*/

const parsedPrice =
  Number(price);

const parsedBedrooms =
  Number(bedrooms);

const parsedBathrooms =
  Number(bathrooms);

const parsedBalconies =
  Number(balconies);

const parsedBuiltUpArea =
  Number(builtUpArea);

const parsedCarpetArea =
  Number(carpetArea);
  let parsedLocation = null;

if (location) {

  parsedLocation =
    JSON.parse(location);
}
    const property =
      await Property.create({

        title,

        slug: slugify(title),

        description,

        shortDescription,

        propertyType,

        listingType,

        state,

        city,

        locality,

        address,

        pincode,
location:
  parsedLocation,
        price:parsedPrice,

        maintenance,

        securityDeposit,

        bedrooms:parsedBedrooms,

        bathrooms:parsedBathrooms,

        balconies:parsedBalconies,

        furnishing,

        builtUpArea:parsedBuiltUpArea,

        carpetArea:parsedCarpetArea,

        amenities,

        contactName,

        contactNumber,

        featured:
          featuredValue,

        images,

        postedBy:
          req.user?.id
      });

    /*
    =====================================
    RESPONSE
    =====================================
    */

    res.status(201).json({
      success: true,
      message:
        "Property created successfully",
      property
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

/*
=====================================
GET ALL PROPERTIES
=====================================
*/

export const getAllProperties = async (
  req,
  res
) => {
  try {

    const properties =
     await Property.find()
 .select("-__v")
  .populate("state")
  .populate("city")
  .sort({
    createdAt: -1
  });

    /*
    =====================================
    FORMAT RESPONSE
    =====================================
    */

    const formattedProperties =
      properties.map((property) => ({

        _id: property._id,

        title: property.title,

        slug: property.slug,

       city:
  property.city?.name,
  state:
  property.state?.name,

        locality:
          property.locality,

        propertyType:
          property.propertyType,

        listingType:
          property.listingType,

        price: property.price,

        bedrooms:
          property.bedrooms,

        bathrooms:
          property.bathrooms,

        featured:
          property.featured,

        createdAt:
          property.createdAt,

     imageCount:
  property.images?.length || 0,
  thumbnail:
  property.images?.[0]?.url || null,
      }));

    res.status(200).json({
      success: true,
      count:
        formattedProperties.length,
      properties:
        formattedProperties
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

/*
=====================================
GET SINGLE PROPERTY
=====================================
*/

export const getSingleProperty =
  async (req, res) => {
    try {

      const property =
       await Property.findById(
  req.params.id
)
.populate("state")
.populate("city");
      if (!property) {
        return res.status(404).json({
          success: false,
          message:
            "Property not found"
        });
      }

      /*
      =====================================
      INCREASE VIEWS
      =====================================
      */

      property.views += 1;

      await property.save();

      res.status(200).json({
        success: true,
        property
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message
      });

    }
  };

/*
=====================================
UPDATE PROPERTY
=====================================
*/

export const updateProperty =
  async (req, res) => {
    try {

      const property =
        await Property.findById(
          req.params.id
        );

      if (!property) {
        return res.status(404).json({
          success: false,
          message:
            "Property not found"
        });
      }

      /*
      =====================================
      UPDATE FIELDS
      =====================================
      */

      // Object.keys(req.body).forEach(
      //   (key) => {

      //     if (
      //       key !== "amenities"
      //     ) {

      //       property[key] =
      //         req.body[key];

      //     }
      //   }
      // );
/*
=====================================
NUMBER FIELDS
=====================================
*/

const numberFields = [

  "price",

  "maintenance",

  "securityDeposit",

  "bedrooms",

  "bathrooms",

  "balconies",

  "builtUpArea",

  "carpetArea",

  "plotArea",

  "floor",

  "totalFloors",

  "ageOfProperty"

];

/*
=====================================
UPDATE FIELDS
=====================================
*/

Object.keys(req.body).forEach(
  (key) => {

    /*
    =====================================
    SKIP AMENITIES
    =====================================
    */

 if (
  key === "amenities" ||
  key === "location"
)
  return;

    /*
    =====================================
    HANDLE NUMBERS
    =====================================
    */

    if (
      numberFields.includes(key)
    ) {

      property[key] =
        Number(req.body[key]);

    } else {

      property[key] =
        req.body[key];

    }
  }
);
      /*
      =====================================
      UPDATE SLUG
      =====================================
      */

      if (req.body.title) {

        property.slug =
          slugify(
            req.body.title
          );

      }

      /*
      =====================================
      HANDLE AMENITIES
      =====================================
      */

      if (
        req.body.amenities
      ) {

        if (
          Array.isArray(
            req.body.amenities
          )
        ) {

          property.amenities =
            req.body.amenities;

        } else {

          property.amenities = [
            req.body.amenities
          ];

        }
      }

      /*
      =====================================
      HANDLE FEATURED
      =====================================
      */

     if (
  req.body.featured !== undefined
) {

        property.featured =
          req.body.featured ===
          "true";

      }

      /*
      =====================================
      HANDLE IMAGES
      =====================================
      */

      // if (
      //   req.files &&
      //   req.files.length > 0
      // ) {

      //   property.images =
      //     req.files.map(
      //       (file) => ({
      //         data:
      //           file.buffer,

      //         contentType:
      //           file.mimetype
      //       })
      //     );

      // }
/*
=====================================
HANDLE IMAGES
=====================================
*/

/*
=====================================
UPLOAD NEW IMAGES
=====================================
*/

if (
  req.files &&
  req.files.length > 0
) {

  /*
  =====================================
  CHECK IMAGE LIMIT
  =====================================
  */

  const totalImages =
    property.images.length +
    req.files.length;

  if (totalImages > 4) {

    return res.status(400).json({

      success: false,

      message:
        `Maximum 4 images allowed. Currently you already have ${property.images.length} image(s).`
    });
  }

  /*
  =====================================
  UPLOAD TO IMAGEKIT
  =====================================
  */

  for (const file of req.files) {

    const response =
      await imagekit.upload({

        file:
          file.buffer,

        fileName:
          `${Date.now()}-${file.originalname}`,

        folder:
          "/properties"
      });

    property.images.push({

      url:
        response.url,

      fileId:
        response.fileId
    });
  }
}
      /*
      =====================================
      SAVE PROPERTY
      =====================================
      */
if (req.body.location) {

  property.location =
    JSON.parse(
      req.body.location
    );
}
      const updatedProperty =
        await property.save();

      res.status(200).json({
        success: true,
        message:
          "Property updated successfully",
        property:
          updatedProperty
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message
      });

    }
  };

/*
=====================================
DELETE PROPERTY
=====================================
*/

export const deleteProperty =
  async (req, res) => {
    try {

      const property =
        await Property.findById(
          req.params.id
        );

      if (!property) {
        return res.status(404).json({
          success: false,
          message:
            "Property not found"
        });
      }
for (
  const image
  of property.images
) {

  await imagekit.deleteFile(
    image.fileId
  );
}
      await property.deleteOne();

      res.status(200).json({
        success: true,
        message:
          "Property deleted successfully"
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message
      });

    }
  };

/*
=====================================
GET PROPERTY IMAGE
=====================================
*/

export const getPropertyImage =
  async (req, res) => {
    try {

      const property =
        await Property.findById(
          req.params.id
        );

      if (!property) {
        return res.status(404).json({
          success: false,
          message:
            "Property not found"
        });
      }

      const imageIndex =
        req.params.index;

      const image =
        property.images[
          imageIndex
        ];

      if (!image) {
        return res.status(404).json({
          success: false,
          message:
            "Image not found"
        });
      }

      res.set(
        "Content-Type",
        image.contentType
      );

      return res.send(
        image.data
      );

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message
      });

    }
  };
  /*
=====================================
DELETE PROPERTY IMAGE
=====================================
*/

export const deletePropertyImage =
  async (req, res) => {
    try {

      const {
        id,
        index
      } = req.params;

      /*
      =====================================
      FIND PROPERTY
      =====================================
      */

      const property =
        await Property.findById(id);

      if (!property) {
        return res.status(404).json({
          success: false,
          message:
            "Property not found"
        });
      }

      /*
      =====================================
      CHECK IMAGE
      =====================================
      */

      if (
        !property.images[index]
      ) {
        return res.status(404).json({
          success: false,
          message:
            "Image not found"
        });
      }

      /*
      =====================================
      REMOVE IMAGE
      =====================================
      */
await imagekit.deleteFile(

  property.images[index]
    .fileId
);
      property.images.splice(
        index,
        1
      );

      await property.save();

      res.status(200).json({
        success: true,
        message:
          "Image deleted successfully"
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message
      });

    }
  };
  /*
=====================================
GET DASHBOARD STATS
=====================================
*/

export const getDashboardStats =
  async (req, res) => {
    try {

      /*
      =====================================
      TOTAL PROPERTIES
      =====================================
      */

      const totalProperties =
        await Property.countDocuments();

      /*
      =====================================
      FEATURED PROPERTIES
      =====================================
      */

      const featuredProperties =
        await Property.countDocuments({
          featured: true
        });

      /*
      =====================================
      ACTIVE LISTINGS
      =====================================
      */

      const activeListings =
        await Property.countDocuments({
          status: "Active"
        });

      /*
      =====================================
      RECENT PROPERTIES
      =====================================
      */

      const recentProperties =
       await Property.find()
  .select("-__v")
  .populate("state")
  .populate("city")
  .sort({
    createdAt: -1
  })
  .limit(5);

      res.status(200).json({
        success: true,

        stats: {

          totalProperties,

          featuredProperties,

          activeListings

        },

        recentProperties

      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message
      });

    }
  };
  export const getSuggestions =
  async (req, res) => {

    try {

      const q =
        req.query.q;

      

      if (!q) {

        return res.json({

          success: true,

          suggestions: []
        });
      }

      /*
      =====================================
      FIND PROPERTIES
      =====================================
      */

      const properties =
        await Property.find({

          $or: [

            {
              title: {
                $regex: q,
                $options: "i"
              }
            },

            {
              locality: {
                $regex: q,
                $options: "i"
              }
            },

            {
              address: {
                $regex: q,
                $options: "i"
              }
            }
          ]
        })

        .populate("city")

        .limit(8);

      /*
      =====================================
      FORMAT SUGGESTIONS
      =====================================
      */

      const suggestions =
        properties.map(
          (property) => ({

            id:
              property._id,

            title:
              property.title || "",

            locality:
              property.locality || "",

            city:
              property.city?.name || "",

            type:
              property.propertyType || ""
          })
        );

      /*
      =====================================
      RESPONSE
      =====================================
      */

      res.json({

        success: true,

        suggestions
      });

    } catch (error) {

      console.log(
        "Suggestions Error:",
        error
      );

      res.status(500).json({

        success: false,

        message:
          "Failed to fetch suggestions"
      });
    }
  };
export const getNearbyProperties =
  async (req, res) => {

    try {

      const lat =
        Number(req.query.lat);

      const lng =
        Number(req.query.lng);

      /*
      =====================================
      VALIDATION
      =====================================
      */

      if (!lat || !lng) {

        return res.status(400).json({

          success: false,

          message:
            "Latitude and longitude required"
        });
      }

      /*
      =====================================
      FIND PROPERTIES
      =====================================
      */

      const properties =
        await Property.find({

          location: {

            $near: {

              $geometry: {

                type: "Point",

                coordinates: [
                  lng,
                  lat
                ]
              },

              $maxDistance:
                10000
            }
          }
        })

        .populate("city")

        .populate("state")

        .sort({
          createdAt: -1
        })

        .limit(20);

      /*
      =====================================
      FORMAT RESPONSE
      =====================================
      */

      const formattedProperties =

        properties.map(
          (property) => ({

            _id:
              property._id,

            title:
              property.title,

            slug:
              property.slug,

            city:
              property.city?.name ||

              "",

            state:
              property.state?.name ||

              "",

            locality:
              property.locality,

            propertyType:
              property.propertyType,

            listingType:
              property.listingType,

            price:
              property.price,

            bedrooms:
              property.bedrooms,

            bathrooms:
              property.bathrooms,

            featured:
              property.featured,

            createdAt:
              property.createdAt,

            imageCount:
              property.images
                ?.length || 0,

            thumbnail:
              property.images?.[0]
                ?.url || null
          })
        );

      /*
      =====================================
      RESPONSE
      =====================================
      */

      res.json({

        success: true,

        properties:
          formattedProperties
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          "Failed to fetch nearby properties"
      });
    }
  };
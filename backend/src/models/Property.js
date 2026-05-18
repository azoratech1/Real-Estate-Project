import mongoose from "mongoose";

/*
=====================================
IMAGE SCHEMA
=====================================
*/

// const imageSchema = new mongoose.Schema({
//   data: Buffer,

//   contentType: String
// });

/*
=====================================
PROPERTY SCHEMA
=====================================
*/

const propertySchema = new mongoose.Schema(

  {
    /*
    =====================================
    BASIC INFO
    =====================================
    */

    title: {
      type: String,
      required: true,
      trim: true
    },

    slug: {
      type: String,
      unique: true
    },

    description: {
      type: String,
      required: true
    },

    shortDescription: {
      type: String
    },

    /*
    =====================================
    PROPERTY TYPE
    =====================================
    */

    propertyType: {
      type: String,
      enum: [
        "Apartment",
        "Villa",
        "Plot",
        "Office",
        "Commercial",
        "Shop",
        "Warehouse"
      ],
      required: true
    },

    listingType: {
      type: String,
      enum: [
        "Sale",
        "Rent"
      ],
      required: true
    },

    /*
    =====================================
    LOCATION
    =====================================
    */

    country: {
      type: String,
      default: "India"
    },

state: {
  type:
    mongoose.Schema.Types.ObjectId,

  ref: "State",

  required: true
},

city: {
  type:
    mongoose.Schema.Types.ObjectId,

  ref: "City",

  required: true
},

    locality: {
      type: String
    },

    address: {
      type: String
    },

    pincode: {
      type: String
    },



location: {

  type: {

    type: String,

    enum: ["Point"],

    default: "Point"
  },

  coordinates: {

    type: [Number],

    required: true
  }
},

    /*
    =====================================
    PRICE
    =====================================
    */

    price: {
      type: Number,
      required: true
    },
contactEmail: String,
    maintenance: Number,

    securityDeposit: Number,

    pricePerSqft: Number,

    /*
    =====================================
    PROPERTY DETAILS
    =====================================
    */

    bedrooms: Number,

    bathrooms: Number,

    balconies: Number,

    floor: Number,

    totalFloors: Number,

    furnishing: {
      type: String,
      enum: [
        "Furnished",
        "Semi-Furnished",
        "Unfurnished"
      ]
    },

    facing: {
      type: String,
      enum: [
        "North",
        "South",
        "East",
        "West"
      ]
    },

    ageOfProperty: Number,

    /*
    =====================================
    AREA DETAILS
    =====================================
    */

    builtUpArea: Number,

    carpetArea: Number,

    plotArea: Number,

    /*
    =====================================
    AMENITIES
    =====================================
    */

    amenities: [
      {
        type: String
      }
    ],

    /*
    =====================================
    MEDIA
    =====================================
    */

images: [

  {

    url: {
      type: String
    },

    fileId: {
      type: String
    }
  }
],

    /*
    =====================================
    STATUS
    =====================================
    */

    status: {
      type: String,
      enum: [
        "Active",
        "Sold",
        "Rented"
      ],
      default: "Active"
    },

    featured: {
      type: Boolean,
      default: false
    },

    /*
    =====================================
    CONTACT
    =====================================
    */

    contactName: String,

    contactNumber: String,

    /*
    =====================================
    ANALYTICS
    =====================================
    */

    views: {
      type: Number,
      default: 0
    },

    enquiries: {
      type: Number,
      default: 0
    },

    /*
    =====================================
    POSTED BY
    =====================================
    */

   postedBy: {

  type:
    mongoose.Schema.Types.ObjectId,

  ref: "User",

  required: true
}
  },

  {
    timestamps: true
  }
);
propertySchema.index({
  location: "2dsphere"
});
const Property = mongoose.model(
  "Property",
  propertySchema
);

export default Property;
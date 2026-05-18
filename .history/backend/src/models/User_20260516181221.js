import mongoose from "mongoose";

const userSchema =
  new mongoose.Schema(

    {
      /*
      =====================================
      BASIC INFO
      =====================================
      */

      name: {

        type: String,

        required: true,

        trim: true
      },

      email: {

        type: String,

        required: true,

        unique: true,

        lowercase: true,

        trim: true
      },

      phone: {

        type: String,

        trim: true
      },

      password: {

        type: String,

        required: true
      },

      /*
      =====================================
      ROLE
      =====================================
      */

      role: {

        type: String,

        enum: [

          "admin",

          "user"
        ],

        default: "user"
      },

      /*
      =====================================
      ACCOUNT TYPE
      =====================================
      */

      accountType: {

        type: String,

        enum: [

          "owner",

          "dealer"
        ],

        default: "owner"
      },

      /*
      =====================================
      PROFILE
      =====================================
      */

      avatar: {

        type: String,

        default: ""
      },

      bio: {

        type: String,

        default: ""
      },

      companyName: {

        type: String,

        default: ""
      },

      /*
      =====================================
      VERIFICATION
      =====================================
      */

      isVerified: {

        type: Boolean,

        default: false
      },

      /*
      =====================================
      FAVOURITE PROPERTIES
      =====================================
      */

      favourites: [

        {

          type:
            mongoose.Schema.Types.ObjectId,

          ref: "Property"
        }
      ]
    },

    {
      timestamps: true
    }
  );

const User =
  mongoose.model(
    "User",
    userSchema
  );

export default User;
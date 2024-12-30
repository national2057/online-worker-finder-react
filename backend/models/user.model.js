const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
      required: true,
    },
    phone: { type: String, required: true },
    address: { type: String },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["customer", "worker", "admin"],
      required: true,
    },
    profile: {
      bio: { type: String },
      category: { type: String },
      experience: { type: String },
      profilePhoto: { type: String },
      rating: { type: String},
    },
  },
  { timestamps: true }
);

// const virtual = userSchema.virtual("id");
// virtual.get(function () {
//   return this._id;
// });
// userSchema.set("toJSON", {
//   virtuals: true,
//   versionKey: false,
//   transform: function (doc, ret) {
//     ret._id;
//   },
// });

exports.User = mongoose.model("User", userSchema);

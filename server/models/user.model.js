const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "The Username is required"],
    },

    password: {
      type: String,
      required: [true, "The password is required"],
    },

    height: {
      type: Number,
      required: [true, "Please enter a valid height"],
    },

    initialWeight: {
      type: Number,
      required: [true, "Please enter a valid weight"],
    },

    activityLevel: {
      type: String,
      required: [true, "Please enter your activity level"],
    },

    dailyWeights: {
      type: Array,
    },

    foods: {
      type: Array,
    },
  },
  { timestamps: true }
);

UserSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

UserSchema.pre("validate", function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "The passwords don't match");
  }
  next();
});

UserSchema.pre("save", function (next) {
  bcrypt
    .hash(this.password, 10)
    .then((hash) => {
      this.password = hash;
      next();
    })
    .catch((err) => console.log(err));
});

module.exports = mongoose.model("User", UserSchema);

import mongoose from "mongoose";
import bcrypt from "bcrypt";


const adminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    });


 adminSchema.pre('save', async function(next) {
  const admin = this;
   
  // console.log(this);

  if (!admin.isModified('password')) {
    next();
  };

  try {
    const saltRounds = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(admin.password, saltRounds);
    admin.password = hashedPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
  }

})
  

/* 
adminSchema.pre("save", async function (next) {
    const saltRounds = 10;
    if (this.isNew || this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
  });
  /*
  
  /*
  adminSchema.methods.isPasswordValid = async function (password) {
    return await bcrypt.compare(password, this.password);
  };*/

  // adminSchema.methods.isPasswordValid = async function (password) {
  //   try {
  //     // console.log('Comparing password in model method'); // Debugging Console Messages
  //     // const isValid = await bcrypt.compare(password, this.password);
  //     const isValid = this.password === password;
  //     // console.log('Password comparison result:', isValid); // Debugging Console Messages
  //     return isValid;
  //   } catch (error) {
  //     console.error('Error in password validation:', error);
  //     return false;
  //   }
  // };


  adminSchema.methods.isPasswordValid = async function (password) {
    try {
      const isValid = await bcrypt.compare(password, this.password);
      // const isValid = this.password === password;
      return isValid;
    } catch (error) {
      console.error('Error in password validation:', error);
      return false;
    }
  };
  

/*
adminSchema.pre("save", function(next) {
    // Hash password before saving
    bcrypt.hash(this.password, 10, function(err, hash) {
        if (err) return next(err);
        this.password = hash;
        next();
    });
    });
    
    adminSchema.methods.comparePassword = function(password, next) {
    // Compare password
    bcrypt.compare(password, this.password, function(err, isMatch) {
        if (err) return next(err);
        next(null, isMatch);
    });
    };

    */
      

/*
adminSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};



adminSchema.pre("save", async function(next) {
    if (this.isNew || this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});
*/

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
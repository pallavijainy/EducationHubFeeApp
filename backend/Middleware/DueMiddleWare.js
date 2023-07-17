const { StudentModel } = require("../model/StudentModel");

async function DueMiddleWare(req, res, next) {
  try {
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();
    const isStudent = await StudentModel.find();

    for (const el of isStudent) {
      const joiningMonth = new Date(el.createdAt).getMonth();
      const joiningDate = new Date(el.createdAt).getDate();
      const daysSinceJoining = Math.floor(
        (new Date() - new Date(el.createdAt)) / (1000 * 60 * 60 * 24)
      );
      if (daysSinceJoining >= 30) {
        const newDue = +el.due + +el.fee;

        try {
          await StudentModel.findByIdAndUpdate(
            el._id,
            { due: newDue },
            { new: true }
          );
          console.log("Successfully updated due for student:", el._id);
        } catch (error) {
          console.error("Error updating due for student:", el._id, error);
        }
      }
    }

    next(); // Call next() to proceed to the next middleware or route handler
  } catch (error) {
    console.error("Error updating students:", error);
    next(error); // Pass the error to the next middleware or error handler
  }
}

module.exports = { DueMiddleWare };

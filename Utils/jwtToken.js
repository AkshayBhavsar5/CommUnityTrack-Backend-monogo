// import jwt from "jsonwebtoken";

// export const generateToken =  (user, message, statusCode, res) => {
  
//   res
//     .status(statusCode)
//     .cookie("token", token, {
//       expires: new Date(
//         Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
//       ),
//       httpOnly: true,
//     })
//     .json({
//       success: true,
//       message,
//       user,
//       token,
//     });
// };

// // generateJsonWebToken
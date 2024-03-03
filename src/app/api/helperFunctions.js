import Jwt from "jsonwebtoken";
const signature = process.env.JWT_SIGN;

export function generateJWT(payload) {
  const token = Jwt.sign(payload, signature, { expiresIn: "1d" });
  return token;
}
export function verifyJWT(token) {
  console.log("tokeb", Jwt.verify(token, signature));
}

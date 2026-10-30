import { AUTH_TIMER } from "../libs/config";
import { HttpCode, Message } from "../libs/Errors";
import { Member } from "../libs/types/member";
import Jwt from "jsonwebtoken";

class AuthService {
  constructor() {}
  public async createToken(payload: Member) {
    return new Promise((resolve, reject) => {
      const duration = `${AUTH_TIMER}h`;
      Jwt.sign(
        payload,
        process.env.SECRET_TOKEN as string,
        {
          expiresIn: duration,
        },
        (err, token) => {
          if (err)
            reject(
              new Error(
                `${HttpCode.UNAUTHORIZRED}: ${Message.TOKEN_CREATION_FAILED}`,
              ),
            );
          else resolve(token as string);
        },
      );
    });
  }
}

export default AuthService;

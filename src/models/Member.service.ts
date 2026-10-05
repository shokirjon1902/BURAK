import { LoginInput, Member, MemberInput } from "../libs/types/member";
import MemberModel from "../schema/Member.model";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enum";
import bcrypt from "bcryptjs";

class MemberService {
  private readonly memberModel;
  tempResult: any;

  constructor() {
    this.memberModel = MemberModel;
  }

  /*  SPA */

  public async signup(input: MemberInput): Promise<Member> {
    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

    try {
      const result = await this.memberModel.create(input);
      const member = result.toObject() as Member;
      member.memberPassword = ""; // Hide the password field

      return result.toJSON();
    } catch (err) {
      console.error("Error, model:signup", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
    }
  }

  public async login(input: LoginInput): Promise<Member> {
    //TODO: Cpnsider member status later
    const member = await this.memberModel
      .findOne(
        { memberNick: input.memberNick },
        { _id: 1, memberNick: 1, memberPassword: 1 },
      )
      .exec();

    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

    const isMatch = await bcrypt.compare(
      input.memberPassword!,
      member.memberPassword!,
    );
    // const isMatch = input.memberPassword === member.memberPassword;

    if (!isMatch) {
      throw new Errors(HttpCode.UNAUTHORIZRED, Message.WRONG_PASSWORD);
    }

    const result = await this.memberModel.findById(member._id).lean().exec();
    if (!result) {
      throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);
    }

    return result;
  }

  /*  BSSR */

  public async processSignup(input: MemberInput): Promise<Member> {
    const exist = await this.memberModel
      .findOne({ memberType: MemberType.RESTAURANT })
      .exec();
    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

    try {
      const result = await this.memberModel.create(input);
      result.memberPassword = ""; // Hide the password field
      return result;
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
  public async processLogin(input: LoginInput): Promise<Member> {
    const member = await this.memberModel
      .findOne(
        { memberNick: input.memberNick },
        { _id: 1, memberNick: 1, memberPassword: 1 },
      )
      .exec();

    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

    const isMatch = await bcrypt.compare(
      input.memberPassword!,
      member.memberPassword!,
    );
    // const isMatch = input.memberPassword === member.memberPassword;

    if (!isMatch) {
      throw new Errors(HttpCode.UNAUTHORIZRED, Message.WRONG_PASSWORD);
    }

    const result = await this.memberModel.findById(member._id).exec();
    if (!result) {
      throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);
    }

    return result;
  }
}

export default MemberService;

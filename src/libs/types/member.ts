import { ObjectId } from "mongoose";
// import { Date } from "mongoose";
import { MemberStatus, MemberType } from "../enums/member.enum";
import { Request } from "express";
import {  Session } from "express-session";
export interface Member {
  _id: ObjectId;
  memberType: MemberType;
  memberStatus: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword?: string;
  memberAddress?: string;
  memberDesc?: string;
  memberPoints?: number;
  memberImage: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MemberInput {
  memberType?: MemberType;
  memberStatus?: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword: string;
  memberAddress?: string;
  memberDesc?: string;
  memberPoints?: number;
  memberImage?: string;
}

export interface LoginInput {
  memberNick: string;
  memberPassword?: string;
}

export interface AdminRequest extends Request {
  member: Member;
  session: Session & {member: Member};

  

} 
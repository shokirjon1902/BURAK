import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { Message } from "../libs/Errors";

const memberServise = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.render("home");  
  } catch (err) {
    console.log("Error, go home", err);
    res.redirect("/admin");
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.render("signup");
  } catch (err) {
    console.log("Error, getSignup", err);
      res.redirect("/admin");
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.render("login");
  } catch (err) {
    console.log("Error, getLogin", err);
    res.redirect("/admin");
  }
};

restaurantController.processSignup = async (
  req: AdminRequest, 
  res: Response) => {
  try {
    console.log("processSignup");

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberServise.processSignup(newMember);

    req.session.member=result;
    req.session.save(function() {
     res.send(result);
   }); 
  } catch (err) {
    console.log("Error, processSignup", err);
     const message = 
     err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
     res.send(
      `<script> alert ("${message}"); window,location.replace("/admin/signup")</script>`
    );
  }
};

restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
  try {
    console.log("processLogin");

    const input: LoginInput = req.body;
    const result = await memberServise.processLogin(input);
     //TODO: SESSIONS AUTHENTICATION

     req.session.member=result;
  req.session.save(function() {
    res.send(result);
    
  });

  } catch (err) {
    console.log("Error, processLogin", err);
    const message = 
     err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
     res.send(
      `<script> alert ("${message}"); window,location.replace("/admin/login")</script>`
    );
  }
};


restaurantController.logout = async (req: AdminRequest, res: Response) => {
  try {
    console.log("logout");
    req.session.destroy(function(err) {
      res.redirect("/admin")
    })

  } catch (err) {
    console.log("Error, logout", err);
    res.redirect("/admin")
  }
};




restaurantController.checkAuthSession = async (
  req: AdminRequest, 
  res: Response
) => {
  try {
    console.log("checkAuthSession");
    if (req.session?.member) 
      res.send(`<script> alert ("${req.session.member.memberNick}");</script>`);
    else res.send(`<script>alert('${Message.NOT_AUTHENTICATED}');</script>`);
  } catch (err) {
    console.log("Error, checkAuthSession", err);
    res.send(err);
  }
};

restaurantController.verfyRestaurant = (
  req: AdminRequest, 
  res: Response, 
  next: Function
) => {
   if(req.session?.member?.memberType === MemberType.RESTAURANT) {
    req.member =req.session.member;
    next();
   } else {
    const message = Message.NOT_AUTHENTICATED;
    res.send(
      `<script>alert('${message}'); window.location.replace("/admin/login")</script>`
    );

  }  
    
};
  


export default restaurantController;

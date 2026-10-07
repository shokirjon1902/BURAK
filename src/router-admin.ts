import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";

/**  Restaurant */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);
routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post(
    "/signup", 
     makeUploader("./uploads/members").single("memberImage"), 
     restaurantController.processSignup);

routerAdmin
  .get("/logout", restaurantController.logout)

routerAdmin.get("/check-me", restaurantController.checkAuthSession);

/** Product */
routerAdmin.get("/product/all", 
  restaurantController.verfyRestaurant,
  productController.getAllProducts
);
routerAdmin.post("/product/create", 
  restaurantController.verfyRestaurant, 
  makeUploader("./uploads/products").array("productImages", 5),
  productController.createNewProduct
);
routerAdmin.post(
  "/product/:id", 
  restaurantController.verfyRestaurant, 
  productController.updateChoosenProduct
);



/** User */
export default routerAdmin;

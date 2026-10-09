import { shapeIntoMongooseObjectId } from "../libs/config";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { Product, ProductInput, ProductUpdateInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";

class ProductService {
  createNewProduct(data: ProductInput) {
    throw new Error("Method not implemented.");
  }
    private readonly productModel;
    
      constructor() {
        this.productModel = ProductModel;
      }

  /* SPA */

  /** SSR */

  public async getAllProducts( ): Promise<Product[]>{
    const result = await this.productModel.find().exec();
    if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
   }


  public async updateChoosenProduct(
    id: string,
    input: ProductUpdateInput
   ): Promise<Product>{
    id= shapeIntoMongooseObjectId(id);
    const result = await this.productModel
    .findOneAndUpdate({_id: id}, input, {new: true})
    .exec();
    if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.UPDATE_FAILED);

    return result;
   }

}

export default ProductService;

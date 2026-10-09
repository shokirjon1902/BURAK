import { ObjectId } from "mongoose";
import { ProductCollection, ProductSize, ProductStatus } from "../enums/product.enum";

export interface Product{
    _id: ObjectId; 
    productStatus: ProductStatus;
    productCollection: ProductCollection;
    productName: string;
    productPrice: Number;
    productLeftCount: Number;
    productSize: ProductSize;
    productVolume: Number;
    productDesc?: string ;
    productImages: string[];
    productViews: number; 
}

export interface ProductInput{
    productStatus?: ProductStatus;
    productCollection: ProductCollection;
    productName: string;
    productPrice: Number;
    productLeftCount: Number;
    productSize?: ProductSize;
    productVolume?: Number;
    productDesc?: string ;
    productImages?: string[];
    productViews?: number; 
}

export interface ProductUpdateInput{
    _id: ObjectId; 
    productStatus?: ProductStatus;
    productCollection?: ProductCollection;
    productName?: string;
    productPrice?: Number;
    productLeftCount?: Number;
    productSize?: ProductSize;
    productVolume?: Number;
    productDesc?: string ;
    productImages?: string[];
    productViews?: number; 
}
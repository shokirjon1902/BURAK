import path from "path";
import multer from "multer";
import {v4} from "uuid";

/** MULTER IMAGE UPLOADER **/
function getTargetImageStorage(address: any){
    return multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, address);
        },
        filename: function (req, file, cb) {
            const extention = path.parse(file.originalname).ext;
            const random_name = v4() + extention;
            cb(null, random_name);
        }
    });
}

const makeUploader = (address: string) => {
    const storage = getTargetImageStorage(address);
    return multer({ storage: storage });
}



export default makeUploader;

// const product_storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads/products");
//   },
//   filename: function (req, file, cb) {
//     console.log(file);
//     const extention = path.parse(file.originalname).ext;
//     const random_name = v4() + extention;
//     cb(null, random_name);
//   }
// });

// export const uploadProductImage = multer({ storage: product_storage });
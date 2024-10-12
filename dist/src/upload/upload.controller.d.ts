export declare class UploadController {
    uploadImage(file: Express.Multer.File): {
        originalname: string;
        filename: string;
        path: string;
    };
    uploadFile(file: Express.Multer.File): {
        originalname: string;
        filename: string;
        path: string;
    };
}

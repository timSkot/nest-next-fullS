/// <reference types="multer" />
import { IMediaResponse } from './media.interface';
export declare class MediaService {
    saveMedia(mediaFile: Express.Multer.File, folder?: string): Promise<IMediaResponse>;
}

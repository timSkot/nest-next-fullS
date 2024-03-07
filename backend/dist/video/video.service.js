"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const video_entity_1 = require("./video.entity");
const typeorm_2 = require("typeorm");
let VideoService = class VideoService {
    constructor(videoRepository) {
        this.videoRepository = videoRepository;
    }
    async byId(id, isPublic = false) {
        const video = await this.videoRepository.findOne({
            where: {
                id: id
            },
            relations: {
                user: true,
                comments: {
                    user: true
                }
            },
            select: {
                user: {
                    id: true,
                    name: true,
                    avatarPath: true,
                    isVerified: true,
                    subscribersCount: true,
                    subscriptions: true
                },
                comments: {
                    message: true,
                    id: true,
                    user: {
                        id: true,
                        name: true,
                        avatarPath: true,
                        isVerified: true,
                        subscribersCount: true
                    }
                }
            }
        });
        if (!video)
            throw new common_1.NotFoundException('Video not found!');
        return video;
    }
    async update(id, dto) {
        const video = await this.byId(id);
        return this.videoRepository.save({
            ...video,
            ...dto
        });
    }
    async getAll(searchTerm) {
        let options = {};
        if (searchTerm)
            options = {
                name: (0, typeorm_2.ILike)(`%${searchTerm}%`)
            };
        return this.videoRepository.find({
            where: {
                ...options,
                isPublic: true
            },
            order: {
                createdAt: 'DESC'
            },
            relations: {
                user: true,
                comments: {
                    user: true
                }
            },
            select: {
                user: {
                    id: true,
                    name: true,
                    avatarPath: true,
                    isVerified: true
                }
            }
        });
    }
    async getMostPopularByViews() {
        return this.videoRepository.find({
            where: {
                views: (0, typeorm_2.MoreThan)(0)
            },
            relations: {
                user: true
            },
            select: {
                user: {
                    id: true,
                    name: true,
                    avatarPath: true,
                    isVerified: true
                }
            },
            order: {
                views: -1
            }
        });
    }
    async create(userId) {
        const defaultValue = {
            name: '',
            user: { id: userId },
            videoPath: '',
            description: '',
            thumbnailPath: ''
        };
        const newVideo = this.videoRepository.create(defaultValue);
        const video = await this.videoRepository.save(newVideo);
        return video.id;
    }
    async delete(id) {
        return this.videoRepository.delete({ id });
    }
    async updateCountViews(id) {
        const video = await this.byId(id);
        video.views++;
        return this.videoRepository.save(video);
    }
    async updateReaction(id) {
        const video = await this.byId(id);
        video.likes++;
        return this.videoRepository.save(video);
    }
};
exports.VideoService = VideoService;
exports.VideoService = VideoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(video_entity_1.VideoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VideoService);
//# sourceMappingURL=video.service.js.map
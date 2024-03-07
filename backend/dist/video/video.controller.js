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
exports.VideoController = void 0;
const common_1 = require("@nestjs/common");
const video_service_1 = require("./video.service");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const user_decorator_1 = require("../user/user.decorator");
const video_dto_1 = require("./video.dto");
let VideoController = class VideoController {
    constructor(videoService) {
        this.videoService = videoService;
    }
    async getVideoPrivate(id) {
        return this.videoService.byId(+id);
    }
    async getAll(searchTerm) {
        return this.videoService.getAll(searchTerm);
    }
    async getMostPopularByViews() {
        return this.videoService.getMostPopularByViews();
    }
    async getVideo(id) {
        return this.videoService.byId(+id, true);
    }
    async createVideo(id) {
        return this.videoService.create(id);
    }
    async updateVideo(id, dto) {
        return this.videoService.update(+id, dto);
    }
    async deleteVideo(id) {
        return this.videoService.delete(+id);
    }
    async updateViews(videoId) {
        return this.videoService.updateCountViews(+videoId);
    }
    async updateLikes(videoId) {
        return this.videoService.updateReaction(+videoId);
    }
};
exports.VideoController = VideoController;
__decorate([
    (0, common_1.Get)('get-private/:id'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "getVideoPrivate", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('searchTerm')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('most-popular'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "getMostPopularByViews", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "getVideo", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)(),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "createVideo", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)(':id'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, video_dto_1.VideoDto]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "updateVideo", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)(':id'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "deleteVideo", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)('update-views/:videoId'),
    __param(0, (0, common_1.Param)('videoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "updateViews", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)('update-likes/:videoId'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Param)('videoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "updateLikes", null);
exports.VideoController = VideoController = __decorate([
    (0, common_1.Controller)('video'),
    __metadata("design:paramtypes", [video_service_1.VideoService])
], VideoController);
//# sourceMappingURL=video.controller.js.map
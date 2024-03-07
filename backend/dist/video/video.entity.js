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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoEntity = void 0;
const typeorm_1 = require("typeorm");
const base_1 = require("../utils/base");
const user_entity_1 = require("../user/user.entity");
const comment_entity_1 = require("../comment/comment.entity");
let VideoEntity = class VideoEntity extends base_1.Base {
};
exports.VideoEntity = VideoEntity;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VideoEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false, name: 'is_public' }),
    __metadata("design:type", Boolean)
], VideoEntity.prototype, "isPublic", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], VideoEntity.prototype, "views", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], VideoEntity.prototype, "likes", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], VideoEntity.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '', type: 'text' }),
    __metadata("design:type", String)
], VideoEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '', name: 'video_path' }),
    __metadata("design:type", String)
], VideoEntity.prototype, "videoPath", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '', name: 'thumbnail_path' }),
    __metadata("design:type", String)
], VideoEntity.prototype, "thumbnailPath", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, user => user.videos),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], VideoEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.CommentEntity, comment => comment.video),
    __metadata("design:type", Array)
], VideoEntity.prototype, "comments", void 0);
exports.VideoEntity = VideoEntity = __decorate([
    (0, typeorm_1.Entity)('Video')
], VideoEntity);
//# sourceMappingURL=video.entity.js.map
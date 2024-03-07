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
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const video_entity_1 = require("../video/video.entity");
const base_1 = require("../utils/base");
const subscription_entity_1 = require("./subscription.entity");
let UserEntity = class UserEntity extends base_1.Base {
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ select: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false, name: 'is_verified' }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "isVerified", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, name: 'subscribers_count' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "subscribersCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '', type: 'text' }),
    __metadata("design:type", String)
], UserEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '', name: 'avatar_path' }),
    __metadata("design:type", String)
], UserEntity.prototype, "avatarPath", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => video_entity_1.VideoEntity, video => video.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "videos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => subscription_entity_1.SubscriptionEntity, sub => sub.fromUser),
    __metadata("design:type", Array)
], UserEntity.prototype, "subscriptions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => subscription_entity_1.SubscriptionEntity, sub => sub.toChannel),
    __metadata("design:type", Array)
], UserEntity.prototype, "subscribers", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)('User')
], UserEntity);
//# sourceMappingURL=user.entity.js.map
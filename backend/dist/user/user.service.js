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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const typeorm_2 = require("typeorm");
const subscription_entity_1 = require("./subscription.entity");
const bcryptjs_1 = require("bcryptjs");
let UserService = class UserService {
    constructor(userRepository, subscriptionRepository) {
        this.userRepository = userRepository;
        this.subscriptionRepository = subscriptionRepository;
    }
    async byId(id) {
        const user = await this.userRepository.findOne({
            where: {
                id
            },
            relations: {
                videos: true,
                subscriptions: {
                    toChannel: true
                }
            },
            order: {
                createdAt: 'DESC'
            }
        });
        if (!user)
            throw new common_1.NotFoundException('User not found!');
        return user;
    }
    async updateProfile(id, dto) {
        const user = await this.byId(id);
        const isSameUser = await this.userRepository.findOneBy({ email: dto.email });
        if (isSameUser && id !== isSameUser.id)
            throw new common_1.BadRequestException('Email is already exist');
        if (dto.password) {
            const salt = await (0, bcryptjs_1.genSalt)(10);
            user.password = await (0, bcryptjs_1.hash)(dto.password, salt);
        }
        user.email = dto.email;
        user.name = dto.name;
        user.description = dto.description;
        user.avatarPath = dto.avatarPath;
        return this.userRepository.save(user);
    }
    async subscribe(id, channelId) {
        const data = {
            toChannel: { id: channelId },
            fromUser: { id }
        };
        const isSubscribed = await this.subscriptionRepository.findOneBy(data);
        if (!isSubscribed) {
            const newSubscription = await this.subscriptionRepository.create(data);
            await this.subscriptionRepository.save(newSubscription);
            return true;
        }
        await this.subscriptionRepository.delete(data);
        return false;
    }
    async getAll() {
        return await this.userRepository.find();
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(subscription_entity_1.SubscriptionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map
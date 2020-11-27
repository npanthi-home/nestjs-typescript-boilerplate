import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import Profile from '../../core/common/profile/Profile';
import ProfileService from '../../core/common/profile/ProfileService';
import Context from '../../core/context/Context';

@Controller('/profile')
export default class ProfileController {
  profileService: ProfileService;

  constructor(@Inject('Core') core: Context) {
    this.profileService = core.profile.profileService;
  }

  @Post()
  async create(@Body() profile: Profile) {
    return await this.profileService.create(profile);
  }

  @Get('/:username')
  async get(@Param('username') username) {
    return await this.profileService.get(username);
  }
}

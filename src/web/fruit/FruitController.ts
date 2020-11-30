import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import FruitService from 'src/core/common/fruit/FruitService';
import Context from 'src/core/context/Context';
import Fruit from '../../core/common/fruit/Fruit';

@Controller('/fruit')
export default class FruitController {
  service: FruitService;

  constructor(@Inject('Core') core: Context) {
    this.service = core.fruit.service;
  }

  @Post()
  async create(@Body() fruit: Fruit) {
    return this.service.save(fruit);
  }

  @Get('/:name')
  async get(@Param('name') name: string) {
    return this.service.find('name', name);
  }
}

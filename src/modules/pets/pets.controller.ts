import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from '../../common/dtos/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import {
  ConvertParamToObjectId,
  ConvertToObjectId,
} from 'src/decorators/convert-to-objectId.decorator';
import { CondominiumInterceptor } from 'src/interceptors/captureCondominium.interceptor';
import { Types } from 'mongoose';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  create(
    @ConvertParamToObjectId(['unit', 'condominium']) createPetDto: CreatePetDto,
  ) {
    return this.petsService.create(createPetDto);
  }

  @UseInterceptors(CondominiumInterceptor)
  @Get()
  findAll(@Param('requestCondominium') requestCondominium: Types.ObjectId) {
    return this.petsService.findAll(requestCondominium);
  }

  @Get('get-by-name/:name')
  findByName(@Param('name') name: string) {
    return this.petsService.findByName(name);
  }

  @Get(':_id')
  findOne(@ConvertToObjectId() _id: Types.ObjectId) {
    return this.petsService.findOne(_id);
  }

  @Patch(':_id')
  update(
    @ConvertToObjectId('_id') _id: Types.ObjectId,
    @Body() updatePetDto: UpdatePetDto,
  ) {
    return this.petsService.update(_id, updatePetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petsService.remove(+id);
  }
}

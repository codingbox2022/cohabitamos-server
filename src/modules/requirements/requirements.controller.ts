import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RequirementsService } from './requirements.service';
import { CreateRequirementDto } from './dto/create-requirement.dto';
import { UpdateRequirementDto } from './dto/update-requirement.dto';
import { ConvertToObjectId } from 'src/decorators/convert-to-objectId.decorator';
import { Types } from 'mongoose';
import { CondominiumInterceptor } from 'src/interceptors/captureCondominium.interceptor';
import { RequirementFiltersDto } from './dto/requirement-filter.dto';
import { utils } from 'utils';
import { GetUserInterceptor } from 'src/interceptors/getUser.interceptor';
import { UserEntity } from 'src/entities/user.entity';
import { ConvertToTaskDto } from './dto/convert-to-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('requirements')
export class RequirementsController {
  constructor(private readonly requirementsService: RequirementsService) {}

  @Post()
  create(@Body() createRequirementDto: CreateRequirementDto) {
    return this.requirementsService.createRequest(createRequirementDto);
  }

  @Post('create-task')
  // @UsePipes(new ValidationPipe({ transform: true }))
  @UseInterceptors(GetUserInterceptor)
  @UseInterceptors(CondominiumInterceptor)
  createTask(
    @Body() createTaskDto: CreateTaskDto,
    @Param('operator') operator: UserEntity,
    @Param('requestCondominium') requestCondominium: Types.ObjectId,
  ) {
    return this.requirementsService.createTask(
      createTaskDto,
      operator,
      requestCondominium,
    );
  }

  @UseInterceptors(CondominiumInterceptor)
  @Post('find-all')
  findAll(
    @Param('requestCondominium') requestCondominium: Types.ObjectId,
    @Body() requirementFiltersDto: RequirementFiltersDto,
  ) {
    return this.requirementsService.findAll(
      requestCondominium,
      requirementFiltersDto,
    );
  }

  @UseInterceptors(CondominiumInterceptor)
  @Post('find-tasks')
  findTasks(
    @Param('requestCondominium') requestCondominium: Types.ObjectId,
    @Body() requirementFiltersDto: RequirementFiltersDto,
  ) {
    return this.requirementsService.findTasks(
      requestCondominium,
      requirementFiltersDto,
    );
  }

  @UseInterceptors(CondominiumInterceptor)
  @Get('metrics/:from/:until')
  getMetrics(
    @Param('requestCondominium') requestCondominium: Types.ObjectId,
    @Param('from') from: string,
    @Param('until') until: string,
  ) {
    const adjustedFrom = utils.prepareSearchDates(from);
    const adjustedUntil = utils.prepareSearchDates(until);

    return this.requirementsService.getMetrics({
      from: adjustedFrom,
      until: adjustedUntil,
      condominiumId: requestCondominium,
    });
  }

  @Get('get-by-user/:email')
  getByEmail(@Param('email') email: string) {
    return this.requirementsService.getByUser(email);
  }

  @Get(':_id')
  findOne(@ConvertToObjectId() _id: Types.ObjectId) {
    return this.requirementsService.findOne(_id);
  }

  @UseInterceptors(GetUserInterceptor)
  @Patch(':_id')
  update(
    @ConvertToObjectId() _id: Types.ObjectId,
    @Body() updateRequirementDto: UpdateRequirementDto,
    @Param('operator') operator: UserEntity,
  ) {
    return this.requirementsService.update(_id, updateRequirementDto, operator);
  }

  @Patch('convert-to-task/:_id')
  convertToTask(
    @ConvertToObjectId() _id: Types.ObjectId,
    @Body() convertToTaskDto: ConvertToTaskDto,
  ) {
    return this.requirementsService.convertToTask(_id, convertToTaskDto);
  }

  @Delete(':_id')
  remove(@ConvertToObjectId() _id: Types.ObjectId) {
    return this.requirementsService.remove(_id);
  }
}

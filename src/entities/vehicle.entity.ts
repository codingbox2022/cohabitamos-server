import { Ref, modelOptions, mongoose, prop } from '@typegoose/typegoose';
import { UnitEntity } from './unit.entity';
import { CondominiumEntity } from './condominium.entity';

enum VehicleConditionEnum {
  VISITOR = 'Visitante',
  PERMANENT = 'Residente',
  RETIRED = 'Retirado',
}

@modelOptions({
  schemaOptions: { collection: 'vehicles', timestamps: true },
})
export class VehiclesEntity {
  _id: mongoose.Types.ObjectId;
  @prop({ required: true })
  plate: string;

  @prop({})
  brand: string;

  @prop({})
  model: string;

  @prop({})
  color: string;

  @prop({ enum: VehicleConditionEnum, default: VehicleConditionEnum.PERMANENT })
  condition: string;

  @prop({ ref: () => UnitEntity })
  unit: Ref<UnitEntity>[];

  @prop({ ref: () => CondominiumEntity })
  condominium: Ref<CondominiumEntity>[];
}

import { modelOptions, prop, Severity } from '@typegoose/typegoose';
import { UnitEntity } from './unit.entity';
import { ShortUserEntity } from './user.entity';
import { VehiclesEntity } from './vehicle.entity';
import { PetEntity } from './pet.entity';
import { CondominiumEntity } from './condominium.entity';
import { Visitor } from 'src/common/dtos/create-visitor.dto';

@modelOptions({
  schemaOptions: { collection: 'guest-reports', timestamps: true },
  options: { allowMixed: Severity.ALLOW },
})
export class GuestReportEntity {
  @prop({ required: true })
  arrivalDate: Date;

  @prop({ required: true })
  departureDate: Date;

  @prop({ default: 1 })
  guestQty: number;

  @prop({ required: true })
  unit: UnitEntity;

  @prop({ required: true })
  user: ShortUserEntity;

  @prop({ default: null })
  pet: PetEntity;

  @prop({ default: null })
  vehicle: VehiclesEntity;

  @prop({ required: true })
  condominium: CondominiumEntity;
  @prop()
  visitors: Visitor[];
}

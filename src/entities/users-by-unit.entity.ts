import { Ref, modelOptions, prop } from '@typegoose/typegoose';
import { UnitEntity } from './unit.entity';
import { UserEntity } from './user.entity';
import { CondominiumEntity } from './condominium.entity';
import { USER_CONDITION, AUTHORIZATION_STATUS } from 'src/common/enums';

export enum conditionEnum {
  OWNER = 'Propietario',
  TENANT = 'Arrendatario',
  RESIDENT = 'Residente',
  VISITOR = 'Visitante',
}

@modelOptions({
  schemaOptions: { collection: 'users_by_unit', timestamps: true },
})
export class UsersByUnitEntity {
  @prop({ ref: () => UnitEntity })
  unit: Ref<UnitEntity>; //ref+

  @prop({ ref: () => UserEntity })
  user: Ref<UserEntity>; //ref

  @prop({ default: USER_CONDITION.RESIDENT })
  condition: USER_CONDITION;

  @prop({ ref: () => CondominiumEntity })
  condominium: Ref<CondominiumEntity>;

  @prop({ default: AUTHORIZATION_STATUS.PENDING })
  status: AUTHORIZATION_STATUS;
}

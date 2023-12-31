export enum ACCOUNT_STATES {
  ACTIVE = 'Activo',
  SUSPENDED = 'Suspendido',
  CLOSED = 'Cerrado',
}

export enum REQUIREMENT_STATE {
  OPEN = 'Abierto',
  CLOSED = 'Cerrado',
  IN_PROGRESS = 'En curso',
  ON_HOLD = 'Esperando respuesta',
}

export enum STATUS {
  VISITOR = 'Visitante',
  PERMANENT = 'Residente',
  RETIRED = 'Retirado',
}

export enum PET_KIND {
  DOG = 'Perro',
  CAT = 'Gato',
  OTHER = 'Otro',
}

export enum UNIT_TYPES {
  APT = 'Apto',
  HOUSE = 'Casa',
  BUSINESS = 'Local',
}

export enum USER_CONDITION {
  OWNER = 'Propietario',
  TENANT = 'Arrendatario',
  RESIDENT = 'Residente',
  AUTHORIZED = 'Autorizado',
  OTHER = 'Otro',
}

export enum DOCUMENT_TYPES {
  CC = 'Cédula de Ciudadanía',
  CE = 'Cédula de Extranjería',
  PA = 'Pasaporte',
  PTP = 'Permiso Temporal de Permanencia',
  OTHER = 'Otro',
  UNASSIGNED = '',
}

export enum DEFAULT_REQUIREMENTS_TYPES {
  BILLING = 'Problema con cuenta de cobro',
  CONDOMINIUM = 'Novedad en áreas comunes',
  PARKING = 'Novedad en parqueadero',
  PETS = 'Novedad con mascota',
  HELPERS = 'Novedad personal de servicios generales',
  SECURITY = 'Novedad con vigilancia',
  MAILING = 'Novedad con correspondencia',
  COEXISTENCE = 'Problema de convivencia',
}

export enum ROLES {
  SUPER_ADMIN = 'superadmin',
  ADMIN = 'administrador',
  USER = 'usuario',
  OPERATOR = 'operador',
  ADMIN_OPERATOR = 'operador de administración',
}

export enum VISITORS_CONDITION {
  MAIN_GUEST = 'Responsable',
  AUTHORIZED = 'Autorizado',
  HOME_ASSISTANT = 'Asistente de hogar',
  RELATIVE = 'Familiar / Amigo',
  PROVIDER = 'Proveedor',
}

export enum EXECUTION_STATUS {
  ON_TIME = 'A tiempo',
  BEGINING_SOON = 'Pronto a iniciar',
  BEGINNING_DELAYED = 'Inicio demorado',
  ENDING_SOON = 'Pronto a finalizar',
  ENDING_DELAYED = 'Finalización demorada',
  WAITING = 'En espera',
}

export enum AUTHORIZATION_STATUS {
  PENDING = 'Pendiente',
  AUTHORIZED = 'Autorizado',
  REJECTED = 'Rechazado',
}

export enum EMAIL_ACTIONS {
  GUEST_REPORT_CREATED = 'GUEST REPORT CREATED',
  NEW_REQUEST_MESSAGE = 'NEW REQUEST MESSAGE',
  REQUEST_CREATED = 'REQUEST CREATED',
  UNIT_AUTH_REQUEST_APPROVED = 'UNIT AUTH REQUEST APPROVED',
  UNIT_AUTH_REQUEST_CREATED = 'UNIT AUTH REQUEST CREATED',
}

export enum NOTIFICATION_COLLECTIONS {
  GUEST_REPORTS = 'guest-reports',
  REQUIREMENTS = 'requirements',
  REQUIREMENTS_LOGS = 'requirements_logs',
  AUTHORIZATION_REQUESTS = 'user-by-unit',
}

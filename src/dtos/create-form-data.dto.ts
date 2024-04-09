import { IsString, IsEmail, IsPhoneNumber, IsBoolean, IsUUID } from 'class-validator';

export class CreateFormDataDto {
  @IsUUID()
  readonly uniqueId: string;

  @IsString()
  readonly title: string;

  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsPhoneNumber()
  readonly phoneNumber: string;

  @IsBoolean()
  readonly isGraduate: boolean;
}

import { IsString, IsEmail, IsPhoneNumber, IsBoolean, IsUUID } from 'class-validator';

export class FillDataDto {
  @IsUUID()
  readonly uniqueId: string;

  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsPhoneNumber()
  readonly phoneNumber: string;

  @IsBoolean()
  readonly isGraduate: boolean;
}
import { IsNumber, IsString, IsDate, IsDecimal } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
// TODO rename and make sure the dtos are done correctly
@Exclude()
export class ExpenseDto {
  @Expose()
  @IsNumber()
  id: number;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  description: string;

  @Expose()
  @IsDecimal()
  cost: number;

  @Expose()
  @IsDate()
  dateCreated: Date;
}

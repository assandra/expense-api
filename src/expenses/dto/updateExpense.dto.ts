import { IsNumber, IsString, IsDecimal } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UpdateExpenseDto {
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
}

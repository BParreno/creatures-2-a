import { ApiProperty } from "@nestjs/swagger";


export class CreateCreatureDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  origin: string;
  @ApiProperty({required: false})
  skills: string;
  @ApiProperty({required: false})
  weaknesses: string;
}

import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';
import { SkuInfoDTO } from './SkuInfo.dto';

export class PlaceOrderDTO {
  //TODO: 能否创建一个碎片防止多次相同的出现
  @IsNumber()
  @Min(0.01)
  @Max(999999.99)
  @IsNotEmpty()
  totalPrice: number;
  @IsNumber()
  @Min(0.01)
  @Max(999999.99)
  @IsNotEmpty()
  finalTotalPrice;
  couponId : number;
  @IsNotEmpty()
  skuInfoList:SkuInfoDTO [];
  @IsNotEmpty()
  address;
}

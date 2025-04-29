import { type SchemaTypeDefinition } from 'sanity'
import { product } from './schemas/products'
import { productCategory } from './schemas/product-categfory'
import { promotionCampaign } from './schemas/promotion-campaign'
import { promotionCode } from './schemas/promotion-codes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    product,
    productCategory,
    promotionCampaign,
    promotionCode
  ],
}

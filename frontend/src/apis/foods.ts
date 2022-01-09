import axios from 'axios';
import { foodsIndex } from '../urls/index'

export interface FoodApiType {
  id: number
  restaurant_id: number
  name: string
  price: number
  description: string
  created_at: string
  updated_at: string
}

export const fetchFoods = (restaurantId: number) => {
  return axios.get(foodsIndex(restaurantId))
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}

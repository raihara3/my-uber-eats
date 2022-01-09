import axios from 'axios';
import { restaurantsIndex } from '../urls/index'

export interface RestaurantApiType {
  id: number
  name: string
  fee: number
  time_required: number
  created_at: string
  updated_at: string
}

export const fetchRestaurants = () => {
  return axios.get(restaurantsIndex)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}

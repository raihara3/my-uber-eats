import React, { useEffect } from "react"

// apis
import { fetchRestaurants } from '../apis/restaurants'

const Restaurants = () => {
  useEffect(() => {
    fetchRestaurants()
      .then(data => {
        console.log(data)
      })
  }, [])

  return (
    <>
      レストラン一覧
    </>
  )
}

export default Restaurants

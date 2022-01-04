import React, { useEffect } from "react"

// apis
import { fetchRestaurants } from '../apis/restaurants'; //←この行を追加する

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

// lib
import React, { useEffect, useReducer } from "react"
import styled from "styled-components"

// apis
import { fetchRestaurants, RestaurantApiType } from '../apis/restaurants'

// action
import { FETCHING_ACTION, FETCH_SUCCESS_ACTION } from "../actions"

// reducer
import { restaurantsReducer, initialState } from "../reducers/restaurants"

// images
import MainLogo from '../images/logo.png'
import MainCoverImage from '../images/main-cover-image.png'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px 32px;
`

const MainLogoImage = styled.img`
  height: 90px;
`

const MainCoverImageWrapper = styled.div`
  text-align: center;
`

const MainCover = styled.img`
  height: 600px;
`

const Restaurants = () => {
  const [state, dispatch] = useReducer(restaurantsReducer, initialState)

  useEffect(() => {
    dispatch({type: FETCHING_ACTION})

    fetchRestaurants()
      .then(data => {
        dispatch({
          type: FETCH_SUCCESS_ACTION,
          payload: {
            restaurants: data.restaurants
          }
        })
      })
  }, [])
  console.log(state)

  return (
    <>
      <HeaderWrapper>
        <MainLogoImage src={MainLogo} alt="main logo" />
      </HeaderWrapper>
      <MainCoverImageWrapper>
        <MainCover src={MainCoverImage} alt="main cover" />
      </MainCoverImageWrapper>
      {state.restaurantsList.map((restaurant: RestaurantApiType) => (
        <div key={restaurant.id}>
          {restaurant.name}
        </div>
      ))}
    </>
  )
}

export default Restaurants

// lib
import React, { useEffect, useReducer } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom";

// apis
import { fetchRestaurants, RestaurantApiType } from '../apis/restaurants'

// action
import {
  RESTAURANTS_FETCHING_ACTION,
  RESTAURANTS_FETCH_SUCCESS_ACTION
} from "../actions"

// reducer
import {
  restaurantsReducer,
  initialState as restaurantsInitialState
} from "../reducers/restaurants"

// images
import MainLogo from '../images/logo.png'
import MainCoverImage from '../images/main-cover-image.png'
import RestaurantImage from '../images/restaurant-image.jpg'

// component
import Skeleton from '@material-ui/lab/Skeleton';

// constants
import { REQUEST_STATE } from "../constants"

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

const RestaurantsContentsList = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 150px;
`

const RestaurantsContentWrapper = styled.div`
  width: 450px;
  height: 300px;
  padding: 48px;
`

const RestaurantsImageNode = styled.img`
  width: 100%;
`

const MainText = styled.p`
  color: black;
  font-size: 18px;
`

const SubText = styled.p`
  color: black;
  font-size: 12px;
`

const Restaurants = () => {
  const [restaurantsState, dispatch] = useReducer(restaurantsReducer, restaurantsInitialState)

  useEffect(() => {
    dispatch({type: RESTAURANTS_FETCHING_ACTION})

    fetchRestaurants()
      .then(data => {
        dispatch({
          type: RESTAURANTS_FETCH_SUCCESS_ACTION,
          payload: {
            restaurants: data.restaurants
          }
        })
      }
    )
  }, [])

  return (
    <>
      <HeaderWrapper>
        <MainLogoImage src={MainLogo} alt="main logo" />
      </HeaderWrapper>
      <MainCoverImageWrapper>
        <MainCover src={MainCoverImage} alt="main cover" />
      </MainCoverImageWrapper>
      <RestaurantsContentsList>
        {
          restaurantsState.fetchState === REQUEST_STATE.LOADING ?
            <>
              <Skeleton variant="rect" width={450} height={300} />
              <Skeleton variant="rect" width={450} height={300} />
              <Skeleton variant="rect" width={450} height={300} />
            </>
          :
            restaurantsState.restaurantsList.map((item: RestaurantApiType, index: number) =>
              <Link to={`/restaurants/${item.id}/foods`} key={index} style={{ textDecoration: 'none' }}>
                <RestaurantsContentWrapper>
                  <RestaurantsImageNode src={RestaurantImage} />
                  <MainText>{item.name}</MainText>
                  <SubText>{`配送料：${item.fee}円 ${item.time_required}分`}</SubText>
                </RestaurantsContentWrapper>
              </Link>
            )
        }
      </RestaurantsContentsList>
    </>
  )
}

export default Restaurants

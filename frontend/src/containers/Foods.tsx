// lib
import React, { useEffect, useReducer } from "react"

// api
import { fetchFoods, FoodApiType } from "../apis/foods"

// action
import {
  FOODS_FETCHING_ACTION,
  FOODS_FETCH_SUCCESS_ACTION
} from "../actions"

// reducer
import {
  foodsReducer,
  initialState as foodsInitialState
} from "../reducers/foods"

// constants
import { REQUEST_STATE } from "../constants"

interface Props {
  restaurantsId: number
}

const Foods: React.FC<Props> = ({
  restaurantsId
}) => {
  const [foodsState, dispatch] = useReducer(foodsReducer, foodsInitialState)

  useEffect(() => {
    dispatch({type: FOODS_FETCHING_ACTION})

    fetchFoods(restaurantsId)
    .then((data) =>
      dispatch({
        type: FOODS_FETCH_SUCCESS_ACTION,
        payload: {
          foods: data.foods
        }
      })
    )
  }, [])

  return (
    <>
      {
        foodsState.fetchState === REQUEST_STATE.LOADING ?
          <>
            <p>
              ロード中...
            </p>
          </>
        :
          foodsState.foodsList.map((food: FoodApiType) =>
            <div key={food.id}>
              {food.name}
            </div>
          )
      }
    </>
  )
}

export default Foods

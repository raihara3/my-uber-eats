import React from "react"

const Foods = ({
  match
}) => {
  return (
    <>
      フード一覧<br />
      レストランIDは{match.params.restaurantsId}
    </>
  )
}

export default Foods

import React from "react"

interface Props {
  restaurantsId: string
}

const Foods: React.FC<Props> = ({
  restaurantsId
}) => {
  return (
    <>
      フード一覧<br />
      レストランIDは{restaurantsId}
    </>
  )
}

export default Foods

import React, { useEffect } from 'react'



export const Logout = ({history}) => {

    useEffect(() => {
        localStorage.clear();
        history.push("/auth");

    }, [])

  return (
    <div>

    </div>
  )
}

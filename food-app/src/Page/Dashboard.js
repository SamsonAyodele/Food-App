import React from 'react'

let user = JSON.parse(sessionStorage.getItem('user'))

const Dashboard = () => {
  return (
    <div>
      <h1>{`Good afternoon, ${user?.name}!`}</h1>
    </div>
  )
}

export default Dashboard
import React from "react";
import Card from './Card'

const CardList = ({ robots }) => {

    const CardArray = robots.map((user,i) => {
        return (
        <Card 
        id={robots[i].id} 
        email={robots[i].email} 
        name={robots[i].name} 
        />)
    })

  return (
    <div>
        {
            robots.map((user,i) => {
                return (
                <Card 
                key={robots[i].id}
                id={robots[i].id} 
                email={robots[i].email} 
                name={robots[i].name} 
                />
                )
            })
        }
    </div>
  )
}

export default CardList;

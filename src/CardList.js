import React from 'react';
import Card from './Card';
const CardList = ({users}) =>{
	const cardComponent = users.map((user,index) =>{
		return( 
				<Card 
					key={index}
					id={users[index].id}
					name={users[index].name}
					email={users[index].email}
				/>
			);
	})
	return (
		<div>
			{cardComponent}
	
  		</div>
	);
}
export default CardList;
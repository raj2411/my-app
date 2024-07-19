import React from 'react';

const Scroll = (props) =>{
	console.log("-------------------------------------------------------------------");
	console.log(props.children);
	return (
		<div style={{overflowY:'scroll', border: '5px solid black', height: '700px'}}>
			{props.children}
		</div>
	)
};
export default Scroll;

const p = new Promise((resolve,reject) =>{ 
	setTimeout(4000);
	resolve("success");
})

const xyz = [
	
]

let s = Promise.all(xyz.map( url => {
	return fetch(url)
}))

s.then(res => console.log(res))

const urlsToFetch = [
    "https://jsonplaceholder.typicode.com/posts",
	"https://jsonplaceholder.typicode.com/posts",
	"https://jsonplaceholder.typicode.com/posts"
];
 
const fetchPromises = urlsToFetch.map(url => 
    fetch(url)
        .then(response => response.json())
);
 
Promise.all(fetchPromises)
    .then(responses => {
        const responseData = responses.map(response => response);
        console.log('Fetched data:', responseData);
    })
    .catch(error => console.error('Error fetching data:', error));
function api(topic, payload){
	return new Promise(resolve => fetch('/api', {
			method: "POST",
			headers: {
			   "Content-Type": "application/json"
			},
			body: JSON.stringify({
				topic: topic,
				payload: payload
			})
		}).then(
			response => response.text().then(
				text => {
					try{                    
						let response = JSON.parse(text)
						
						resolve(response)
					}catch(err){
						console.log("api parse error", err, text)
					}
				}
			),
			err => {
				console.log("api response error", err)
			}
		)    
	)	
}

let app = div().pad(3).bc("#ffe").fs(20).html(`Lichess Straw Poll.`)

if(USER.id){
	app.a(div().mart(10).html("<pre>" + JSON.stringify(USER, null, 2) + "</pre>"))
}

document.getElementById("root").appendChild(app.e)

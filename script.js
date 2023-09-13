	//Abre el canal de consulta a la API de huggingface
	async function query(data) {
		const response = await fetch(
			"https://api-inference.huggingface.co/models/SamLowe/roberta-base-go_emotions",
			{
				headers: { Authorization: "Bearer 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" },
				method: "POST",
				body: JSON.stringify(data),
			}
		);
		const result = await response.json();
		return result;
	}
	
	function procesar(){
		userText=document.getElementById("textarea").value
		/*
			aquí el chequeo de errores en la entrada antes de enviar a la API de AI
		*/
		
		//Paso la entrada del usuario a la API y quedo esperando la respuesta que puede demorar un tiempo
		query({"inputs": userText}).then((response) => {
			console.log(JSON.stringify(response));
			document.getElementById("temporary-output").innerHTML="<h2>Respuesta de la API:</h2><br>"+JSON.stringify(response);
		});
	}
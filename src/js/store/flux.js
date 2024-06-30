const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: []
			
		},
		actions: {
			
			getCharacters: async () =>{
				try {
					const response = await fetch("https://rickandmortyapi.com/api/character")
					if(response.ok){
						const data = await response.json();
						setStore({characters: data.results})
					}
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;

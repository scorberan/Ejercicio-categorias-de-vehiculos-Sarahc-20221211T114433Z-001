function categorizeVehiculo(dataInformacion, category) { 

	if(!category){
		console.error('Category not indroduced')
		return;
	}

	const vehiculoList = document.getElementById('vehiculo-list');
	
	const vehiculoNode = document.createElement('div');
	bookNode.classList.add('book');

	const titleNode = document.createElement('span');
	titleNode.innerHTML = vehiculoTitle;

	const categoryNode = document.createElement('strong');
	categoryNode.innerHTML = category;
	
	vehiculoNode.appendChild(titleNode);
	vehiculoNode.appendChild(categoryNode);

	vehiculoList.prepend(bookNode);
}

window.addEventListener('load', () => {


	document.getElementById('categorize').addEventListener('click', () => {
		const vehiculoTitle = document.getElementById('vehiculotitle').value;
		const vehiculoTitletoLowerCase = vehiculoTitle.toLowerCase()
		console.log(vehiculoTitle);
		
			
		 if (vehiculoTitletoLowerCase.includes('3 ruedas ')||vehiculoTitletoLowerCase.includes(' 5 ruedas ')||bookTitletoLowerCase.includes('pato')||bookTitletoLowerCase.includes('pollo')){
			categorizeVehiculo(vehiculoTitle,"coche");
			return;
			
		}
			if (bookTitletoLowerCase.includes('recetas')||bookTitletoLowerCase.includes('cocinar')||bookTitletoLowerCase.includes('asar')){
			categorizeBook(bookTitle,"Cocina"); 
			return;
			
		}
		
			categorizeBook(bookTitle, 'otros');
		

		
			


	})
});
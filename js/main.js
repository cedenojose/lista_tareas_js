(function(){
	// variables
	var lista = document.getElementById('lista'),
		tareaInput = document.getElementById('tareaInput'),
		btnNuevaTarea = document.getElementById('btn-agregar');
	
	// Funciones

	var asignaEvento = function() {
	 	// Borrando elementos de la lista (evento)
		for (var i = 0; i <= lista.children.length - 1; i++) {
			lista.children[i].addEventListener("click", eliminarTarea)
		}
	 };

	var agregarTarea = function () {
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement('li'),
			enlace = document.createElement('a'),
			contenido = document.createTextNode(tarea);
			;
		if (tarea === '') {
			tareaInput.setAttribute('placeholder', 'Agrega una tarea valida')
			tareaInput.className = 'error';
			return false;
		}

		// Agregamos el contenido al enlace
		enlace.appendChild(contenido);
		// Le establecemos un atributo href
		enlace.setAttribute('href', '#');
		// Agregamos el enlace a la nueva tarea	
		nuevaTarea.appendChild(enlace);
		// Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);

		tareaInput.value = '';

		for (var i = 0; i <= lista.children.length - 1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}
	};
	var comprobarInput = function() {
		tareaInput.className = '';
		tareaInput.setAttribute('placeholder', 'Agrega tu tarea');
	};
	var eliminarTarea = function() {
		this.parentNode.removeChild(this);
	};

	// Eventos
	// Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);
	// Comprobar input
	tareaInput.addEventListener("click", comprobarInput)

	asignaEvento();


}());

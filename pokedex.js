const fetchPokemon = () => {

    if(noEsVacio(document.getElementById("txtPokemon"))){
        const inputPokemon = document.getElementById("txtPokemon").value.toLowerCase();
        const url = 'https://pokeapi.co/api/v2/pokemon/'+inputPokemon;
    
         fetch(url).then((res)=> {
            if(res.status == 404){
            cambiarImagenNoEncontrado("assets/pikachu_llorando.gif")
            cambiarTitulo("Pokemon no encontrado");
            //console.log("es 404");
        }
        

            //console.log(res);
            return res.json();

         }).then((data)=> {

        

        cambiarTitulo(data.name);
        cambiarImagen(data.sprites.front_default);
        agregarDatos(data);
        //console.log(data);  
    })
    }
    
}

const cambiarImagen = (url)=>{
    document.getElementById("pokemonImg").src = url;
    document.getElementById("pokemonImg").width = "170";
}

const cambiarImagenNoEncontrado = (url)=>{
    document.getElementById("pokemonImg").src = url;
    document.getElementById("pokemonImg").width = "130";
}

const cambiarTitulo = (title)=>{
    
    document.getElementById("namePokemon").innerHTML = title;
}

const agregarDatos = (data)=>{

    document.getElementById("txtTipo").innerHTML = "Tipo: "+data.types[0].type.name;
    document.getElementById("txtPoder").innerHTML = "Poder: "+data.stats[0].base_stat;
    document.getElementById("txtAtaque").innerHTML = "Ataque: "+data.stats[1].base_stat;
    document.getElementById("txtDefensa").innerHTML = "Defensa: "+data.stats[2].base_stat;
    document.getElementById("txtAtaqueS").innerHTML = "Ataque especial: "+data.stats[3].base_stat;
    document.getElementById("txtDefensaS").innerHTML = "Defensa especial: "+data.stats[4].base_stat;
    document.getElementById("txtVelocidad").innerHTML = "Velocidad: "+data.stats[5].base_stat;
}

const noEsVacio = (elemento)=>{
    if (elemento.value.length > 0){
        return(true);
    }
    else{
        elemento.placeholder = "Debes escribir el nombre o id...";
        return false;
    }
}

//Eventos
const tbBuscar = document.getElementById("txtPokemon");

tbBuscar.addEventListener("keyup",(event)=>{
    if(event.key =='Enter'){
        fetchPokemon();
    }
})
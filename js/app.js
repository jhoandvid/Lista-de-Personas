const personas=[
    new Persona('Juan', 'Perez','13'),
    new Persona('Karla', 'Lara','23')
];

function mostrarPersonas(){
    let texto='';
    for (let persona of personas){
        console.log(persona);
        texto +=`<li>${persona.nombre} ${persona.apellido} ${persona.edad}</li>`
    }

    document.getElementById('personas').innerHTML=texto;
}

function agregarPersonas(){
    const forma=document.forms['forma'];
    const nombre=forma['nombre'];
    const apellido=forma["apellido"]; 
    const edad=forma["edad"];
    if(nombre.value!='' && apellido.value!='' && edad.value!=''){
        const persona=new Persona(nombre.value, apellido.value, edad.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }else{
        console.log("no hay informacion que agragar")
    }
    }
   
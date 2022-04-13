const heroes ={
    capi:{
        nombre:'Capitan',
        poder:'Inmortal'
    },
    hardy:{
        nombre:'Hardyman',
        poder:'Dormir y mear todo el dia'
    },
    kimi:{
        nombre:'Kimberlygirl',
        poder:'Dormir y ladrar a todos y temblar'
    }
}

export const buscarHeroe = (id,callback) =>{
    

    const heroe = heroes[id];

    if(heroe){
        callback(null,heroe);
    }else{ //Un error
        callback(`No existe un heroe con el id ${id}`);
    }

   // callback(heroe);

}
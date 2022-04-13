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


export const buscarNene = (id) =>{
    const heroe = heroes[id];
    
    return new Promise( (resolve, reject) => {
        if(heroe){
            resolve(heroe);
        }else{
            reject(`No existe un heroe con el id ${id}`)
        }

    }); 
}

export const buscarNeneAsync = async(id) =>{
    const heroe = heroes[id];
        if(heroe){
            return heroe;
        }else{
            throw `No existe un heroe con el id ${id}`;
        }
}


// const promesaLenta = new Promise ((resolve,reject) =>{
//     setTimeout(() => {
//         resolve('Promesa Lenta')
//     }, 2000);
// }) 

// const promesaMedia = new Promise ((resolve,reject) =>{
//     setTimeout(() => {
//         resolve('Promesa Media')
//     }, 1500);
// }) 
// const promesaRapida = new Promise ((resolve,reject) =>{
//     setTimeout(() => {
//         resolve('Promesa Rapida')
//     }, 1000);
// }) 

// export {
//     promesaLenta,
//     promesaMedia,
//     promesaRapida
// }
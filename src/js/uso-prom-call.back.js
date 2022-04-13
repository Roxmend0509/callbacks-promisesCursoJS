import { buscarHeroe as buscarHeroeCallBack } from './js/callbacks';
import { buscarNene } from './js/promesas';
import './style.css'

const heroeId1 = 'capi'
const heroeId2 = 'hardy'
const heroeId3 = 'kimi'



// buscarHeroe( heroeId1, (err, heroe1)=>{

// if(err){ return console.error(err);}


// buscarHeroe(heroeId2,(err,heroe2) =>{
//     if(err){ return console.error(err);}

//     buscarHeroe(heroeId3,(err,heroe3) =>{
//         if(err){ return console.error(err);}


//     console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} y ${heroe3.nombre}`);
//     });

// });
// });


// buscarNene(heroeId1).then(heroe =>{
//     //console.log(`Enviando a ${heroe.nombre}`);

//     buscarNene(heroeId2).then(heroe2 =>{
//         console.log(`Enviando a ${heroe.nombre} y ${heroe2.nombre}`);
//     })
// })


Promise.all([buscarNene(heroeId1),buscarNene(heroeId2)])
    .then( ([heroe1, heroe2]) => {

    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre}`);
}).catch (err =>{
    alert(err)
}).finally(() =>{
    console.log( 'Se termino programa' )
})

console.log( 'Fin programa' )
import './style.css'

const heroeId = 'capi'

buscarHeroe( heroeId, ()=>{
    console.log('Callback llamado')
});
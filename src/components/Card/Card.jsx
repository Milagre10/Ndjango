
import Casa from '../../assets/casa.jpg'
import styles from './Card.module.css'
function Card(){
   
    return(
        <>
            <div className={styles.container}>
                <div className={styles.img}>
                    <img src={Casa} alt="" />
                </div>
                <div className={styles.description}>
                    <h4>Apartamento</h4>
                    <span>Luis Cabral, Maputo</span>
                    <span>MT$ 12.000,00/mes</span>
                    <div className={styles.itens}>
                       <a href="">Detalhes</a>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Card;
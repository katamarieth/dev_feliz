import './styles.css';
import image from '../../assets/homem-feliz-dinheiro.jpg'

export default function Body() {
    return (
        <>
        <h1 className="title_body">O sonho de todo dev!!!!</h1>

        <div>
                <img src={image} alt="homem feliz com dinheiro" className='image_home'/>
               
        </div>
        </>    
    )
}
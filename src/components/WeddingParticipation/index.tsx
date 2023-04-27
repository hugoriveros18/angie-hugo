import { useParams } from "react-router-dom";
import { participantes } from "../../variables/invitados";
import IlustrationOne from '../../assets/img/main-page_ilustration1.jpg'
import IlustrationTwo from '../../assets/img/main-page_ilustration2.jpg'
import IlustrationThree from '../../assets/img/main-page_ilustration3.jpg'
import IlustrationFour from '../../assets/img/main-page_ilustration4.jpg'
import IlustrationFive from '../../assets/img/main-page_ilustration5.jpg'
import AngieHugo from '../../assets/img/imagen-angie-hugo.jpg'
import DressCode from '../../assets/img/dress-code.png'
import './styles.css';

const WeddingParticipation = () => {

    //PARAMS
    const { nombreInvitado } = useParams();
    
    //JSX
    return(
        <>
            <div className={`main-page__global-container`}>
                <div className={`main-page__ilustration-one ilustration`}>
                    <img src={IlustrationOne}/>
                </div>
                <div className={`main-page__angie-hugo`}>
                    <span>ANGIE</span>
                    <span>&</span>
                    <span>HUGO</span>
                </div>
                <div className={`main-page__ilustration-two ilustration`}>
                    <img src={IlustrationTwo}/>
                </div>
            </div>

            <div className={`content__global-container`}>
                <div className={`content__invitado`}>
                    <p>{nombreInvitado ? participantes[nombreInvitado] : ''}</p>
                </div>

                <div className={`content__text-one`}>
                    <p>
                        !NOS CASAMOS! <br/> NOS ALEGRA COMPARTIR CON USTEDES LA DECISIÓN DE EMPEZAR ESTE CAMINO JUNTOS
                    </p>
                </div>


                <div className={`content__ceremony-date`}>
                    <p>03</p>
                    <p>·</p>
                    <p>06</p>
                    <p>·</p>
                    <p>2023</p>
                </div>

                <div className={`content__image-one`}>
                    <img src={IlustrationThree}/>
                </div>

                <div className={`content__text-three`}>
                    <p>"Casarse y compartir la vida es algo hermoso. Es un viaje comprometido, a veces difícil, a veces complicado, pero vale la pena animarse. Y en este viaje de toda la vida, la esposa y el esposo no están solos; los acompaña Jesús"</p>
                    <p className={`content__text-three--name`}>Papa Francisco</p>
                </div>

                <div className={`content__image-two`}>
                    <img src={AngieHugo}/>
                </div>
            </div>
        </>

    )
}

export default WeddingParticipation

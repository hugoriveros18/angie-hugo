import { useParams } from "react-router-dom";
import { invitados, invitadosIndividuales } from "../../variables/invitados";
import IlustrationOne from '../../assets/img/main-page_ilustration1.jpg'
import IlustrationTwo from '../../assets/img/main-page_ilustration2.jpg'
import IlustrationThree from '../../assets/img/main-page_ilustration3.jpg'
import IlustrationFour from '../../assets/img/main-page_ilustration4.jpg'
import IlustrationFive from '../../assets/img/main-page_ilustration5.jpg'
import AngieHugo from '../../assets/img/imagen-angie-hugo.jpg'
import DressCode from '../../assets/img/dress-code.png'
import './styles.css';

const WeddingInvitation = () => {

    //VARIABLES
    const message = "¡Hola! Quisiera confirmar mi asistencia a la ceremonia y recepción el día 3 de Junio";
    const formattedMessage = message.replace(/ /g, '%20');

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

            {
                (nombreInvitado && invitados[nombreInvitado]) &&
                <div className={`content__global-container`}>
                    <div className={`content__invitado`}>
                        <p>{invitados[nombreInvitado]}</p>
                    </div>

                    <div className={`content__text-one`}>
                        <p>
                            !NOS CASAMOS! <br/> Y QUEREMOS COMPARTIR {invitadosIndividuales.includes(nombreInvitado) ? 'CONTIGO' : 'CON USTEDES'} ESTE DÍA TAN ESPECIAL PARA NOSOTROS
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

                    <div className={`content__ceremony-info`}>
                        <div className={`ceremony-info__hour`}>
                            <h3>CEREMONIA</h3>
                            <p>HORA: 2:30 PM</p>
                        </div>
                        <div className={`ceremony-info__address`}>
                            <h4>PARROQUIA SANTA MARÍA DEL CAMINO</h4>
                            <p>Calle 138 # 58d - 35</p>
                        </div>
                    </div>

                    <div className={`content__ceremony-info`}>
                        <div className={`ceremony-info__hour`}>
                            <h3>RECEPCIÓN</h3>
                            <p>HORA: 6:00 PM - 10:00 PM</p>
                        </div>
                        <div className={`ceremony-info__address`}>
                            <h4>RESTAURANTE DANIEL</h4>
                            <p>Calle 73 # 9 - 70</p>
                        </div>
                    </div>

                    <div className={`content__image-one`}>
                        <img src={IlustrationFour}/>
                    </div>

                    <div className={`content__text-two`}>
                        <p>POR FAVOR CONFIRMAR LA ASISTENCIA ANTES DEL 15 DE MAYO AL WHATSAPP <span><a href={`https://wa.me/3163042458?text=${formattedMessage}`}>3163042458</a></span> O <span><a href={`https://wa.me/3115292688?text=${formattedMessage}`}>3115292688</a></span></p>
                    </div>


                    <div className={`content__formalities`}>
                        <div className={`content__formalities--dress`}>
                            <img src={DressCode}/>
                            <p>Dress code: formal</p>
                        </div>
                        <div className={`content__formalities--sobres`}>
                            <p>Lluvia de Amor y Sobres</p>
                        </div>
                    </div>

                    <div className={`content__image-one`}>
                        <img src={IlustrationFive}/>
                    </div>

                    <div className={`content__text-three`}>
                        <p>"Casarse y compartir la vida es algo hermoso. Es un viaje comprometido, a veces difícil, a veces complicado, pero vale la pena animarse. Y en este viaje de toda la vida, la esposa y el esposo no están solos; los acompaña Jesús"</p>
                        <p className={`content__text-three--name`}>Papa Francisco</p>
                    </div>

                    <div className={`content__image-two`}>
                        <img src={AngieHugo}/>
                    </div>
                </div>
            }

        </>

    )
}

export default WeddingInvitation

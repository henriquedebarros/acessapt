import React, { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext';
import './style.scss';
import imagemDestaque from '../../images/imagem-destaque.png';
import Pills from '../../components/Pills';

const Places = [
    'Praças', 'Parques', 'Igrejas', 'Miradouros', 'Para crianças', 'Museus'
]

const Home = () => {
    const {filteredPlaces, setFilteredPlaces} = useContext(FilterContext);

    const handleFilterPlaces = (item) => {
        if(item === filteredPlaces) {
            setFilteredPlaces('');
            return;
        }
        setFilteredPlaces(item);
    }
    
    let i = 0;
    return(
        <main id="main-content" className="home__container">
            <div className="home__col">
                <h1 className="home__title">Lisboa para toda a gente!</h1>
                <div className="home__image home__image--destaque hide-desktop">
                    <img src={imagemDestaque} alt="" />
                </div>
                <p className="home__text">Nossa missão é facilitar o encontro entre lugares inclusivos e pessoas que procuraram alternativas culturais para sair de casa, com a mobilidade que todo o cidadão necessita.</p>
                <p className="home__text">Verificamos 10 pontos essenciais de acessibilidade para pessoas com deficiência em variados locais da cidade.</p>
                <div className="home__pills">
                    {
                        Places.map((item) => {
                            i++;
                            return(
                                <Pills 
                                    local = {item}
                                    selected = {filteredPlaces === item}
                                    onClick = {() => handleFilterPlaces(item)}
                                    key = {i}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className="home__col">
                <div className="home__image home__image--destaque hide-mobile">
                    <img src={imagemDestaque} alt="" />
                </div>
            </div>
        </main>
    )
}

export default Home;
import './content1.css'; // Оставьте здесь,  если стили нужны только для этого компонента
import photo from './../../image/image 1.png'
function Content1() {
    return (
        <div className="content1">
            <div className="container">
               <div className="content_container">
               <div className="content_text">
                    <h1>Что мы предлагаем</h1>
                    <h4>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда,
                         ремонт и настройку всех его узлов,
                         шиномонтажные работы.
                         Вовремя проведенное ТО велосипеда помогает избежать
                         многих проблем и дорогого ремонта.
                         Все работы выполняем качественно и с душой.</h4>
                </div>
                <img src={photo} alt='photo'/>
               </div>
                
            </div>
            
        </div>
    );
}

export default Content1;
import './footer.css'
import photofooter from './../../image/footer.png'
function Footer() {
    return(
        <div className="footer">
            <div className="container">
                <div className="footer_content">
                <img src={photofooter} alt='photofooter'/>
                <div className="textfooter">
                    <h1>Прокат велосипедов</h1>
                    <h4>
                    У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды.
                     Как раз мы находимся в прекрасном парке!
                    </h4>
                </div>
                </div>
                
            </div>
        </div>
    );
}

export default Footer;
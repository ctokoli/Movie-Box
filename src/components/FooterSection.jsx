import { AiFillFacebook } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'

const FooterSection = () => {
    return (
         <>
            <footer className='container'>
                <div className="social">
                    <AiFillFacebook />
                    <AiOutlineInstagram />
                    <AiOutlineTwitter  />
                    <AiFillYoutube />
                </div>
                <div className="footer_text">
                    <p>Conditions of Use</p>
                    <p>Pravicy & Policy</p>
                    <p>Press Room</p>
                </div>
                <div className="copyright">
                    <span>&#169;</span><span>MovieBox By Cephas Tokoli with ♥️</span>
                </div>
            </footer>
        </> 
    );
}
 
export default FooterSection;
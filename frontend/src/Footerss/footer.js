import Trendyol from "./trendyol";
import Kampanya from "./kampanya";
import Satici from "./satici";
import Yardim from "./yardim";
import Ulke from "./ulke";
import Sertifika from "./sertifika";
import Guvenlik from "./guvenlik";
import Mobil from "./uygulama";





function Footer() {
    return (
        <footer className="footer-container">
            <Trendyol />
            <Kampanya />
            <Satici/>
            <Yardim />
            <Ulke/>
            <Sertifika/>
            <Guvenlik/>
            <Mobil/>
          

        </footer>
    );
}

export default Footer;
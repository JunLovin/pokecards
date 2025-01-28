import '@styles/Footer.css'
import GitHub from '@public/github.svg'

function Footer() {

    const handleClick = () => {
        window.open('https://github.com/JunLovin/pokecards', '_blank');
    }

    return (
        <>
            <footer>
                <img src={GitHub} alt="Github" onClick={handleClick}></img>
            </footer>
        </>
    )
}

export default Footer;
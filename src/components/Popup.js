import close from '../img/close.svg';
const Popup = () => {
    return <div className="mobile__popup">
        <div className="mobile__close">
            <h1>Debola <span>Adebanjo</span></h1>
            <img src={close} alt="close icon" />
        </div>
        <ul>
            <li><a href="#g">Home</a></li>
            <li><a href="#g">Works</a></li>
            <li><a href="#g">Projects & collabolations</a></li>
            <li><a href="#g">Skills & recommendations</a></li>
            <li><a href="#g">Press and awards</a></li>
            <li><a href="#g">About me</a></li>
            <li><a href="#g">Gallery</a></li>
            <li><a href="#g">Let's work</a></li>
        </ul>
    </div>
}
export default Popup;
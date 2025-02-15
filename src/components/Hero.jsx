import "./Hero.css"

function Hero(props){
    return(
        <>
        <div className={props.cName}>
            <img src={props.heroImg} />
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
        </div>
        </>
    )
}
export default Hero;
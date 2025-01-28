import '@styles/header.css'

function Header({ score, bestScore }) {
    return (
        <>
            <header>
                <nav>
                    <h1><a href="/">PokeCards!</a></h1>
                    <div className="scoreBoard-container">
                        <p>Score: <span>{score}</span></p>
                        <p>Best Score: <span>{bestScore}</span></p>
                    </div>
                </nav>
            </header>
            <section>
                <h2>
                    Welcome to PokeCards!
                </h2>
                <p>
                    Don&apos;t click on the same card twice!
                </p>
            </section>
        </>
    )
}

export default Header;
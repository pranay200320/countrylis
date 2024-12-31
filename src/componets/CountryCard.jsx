
const CountryCard = () => {
    return (
        <>
            <a className="country-card" href="/country.html?name=Barbados">
                <img src="https://flagcdn.com/bb.svg" alt="Barbodos" />
                <div className="card-text">
                    <h3 className="card-title">Basrbados</h3>
                    <p>
                        <b>Populations : </b>2,87,315
                    </p>
                    <p>
                        <b>Region:</b>America
                    </p>
                    <p>
                        <b>Capital:</b>Bridgetown
                        
                    </p>
                </div>
            </a>
        </>
    )
}

export default CountryCard
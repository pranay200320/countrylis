
const CountryCard = ({ name, flags, population, Region, Capitals }) => {
    return (
        <>
            <a className="country-card" href={`/country.html?name=${name}`}>
                <img src={flags} alt={name} />
                <div className="card-text">
                    <h3 className="card-title">{name}</h3>
                    <p>
                        <b>Populations : </b>{population}
                    </p>
                    <p>
                        <b>Region:</b>{Region}
                    </p>
                    <p>
                        <b>Capital:</b>{Capitals}

                    </p>
                </div>
            </a>
        </>
    )
}

export default CountryCard
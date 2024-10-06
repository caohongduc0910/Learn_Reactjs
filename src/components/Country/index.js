import countries from '../../data/country.js'

function Country() {
    return (
        <>
            <ul>
                {countries.map(itemCountry => (
                    <li key={itemCountry.id}> 
                        {itemCountry.name}
                        <ul>
                            {
                                itemCountry.city.map((itemCity) => (
                                    <li key={itemCity.id}> {itemCity.name} </li>
                                ))
                            }
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Country
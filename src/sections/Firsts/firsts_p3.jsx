import firstDate from '../../assets/first-date.jpg'

const firsts_p3 = () => {
    return(
        <div className="container">
            <h1 className="container-header">Our Firsts this 2025</h1>
            <div className="container-entry">
                <p className="entry">First date on August 17</p>
                <img src={firstDate} alt="" className="entry-img" />
                <p className="entry">Became official on August 30</p>
                <p className="entry">First kiss on September 7</p>
            </div>
        </div>
    )
}

export default firsts_p3;
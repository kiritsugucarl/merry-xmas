import firstDayo from '../../assets/first-dayo.jpg'

const firsts_p2 = () => {
    return(
        <div className="container">
            <h1 className="container-header">Our Firsts this 2025</h1>
            <div className="container-entry">
                <p className="entry">First dayo on July 30, 2025</p>
                <img src={firstDayo} alt="" className="entry-img" />
                <p className="entry">First delivery on August 2, 2025</p>
                
            </div>
        </div>
    )
}

export default firsts_p2;
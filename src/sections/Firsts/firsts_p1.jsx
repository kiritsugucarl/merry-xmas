import firstMeet from '../../assets/first-meet.jpg'

const firsts_p1 = () => {
    return (
        <div className="container">
            <h1 className="container-header">Our Firsts this 2025</h1>
            <div className="container-entry">
                <p className="entry">Met at March 23, 2025(Joana's Place)</p>
                <img src={firstMeet} className="entry-img" />
                <p className="entry">Became FB friends on June 28, 2025</p>
                <p className="entry">First chat on July 17, 2025</p>
            </div>
        </div>
    );
};

export default firsts_p1;
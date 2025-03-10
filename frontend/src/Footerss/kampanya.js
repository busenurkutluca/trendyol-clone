function Kampanya() {
    const kampanyaList = [
        { text: "Kampanyalar", url: "#" },
        { text: "Alışveriş Kredisi", url: "#" },
        { text: "Elit Üyelik", url: "#" },
        { text: "Hediye Fikirleri", url: "#" }
    ];

    return (
        <div className="footer-section">
            <h3>Kampanyalar</h3>
            <ul>
                {kampanyaList.map((item, index) => (
                    <li key={index}>
                        <a href={item.url}>{item.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Kampanya;

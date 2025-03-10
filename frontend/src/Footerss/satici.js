function Satici() {
    
    const saticiList = [
        { text: "Trendyol'da Satış Yap", url: "#" },
        { text: "Temel Kavramlar", url: "#" },
        { text: "Trendyol Akademi", url: "#" },
       
    ];

    return (
        <div className="satıcı-footer">
            <h3>Satıcı</h3>
            <ul>
                {saticiList.map((item, index) => (
                   <li key={index}>
                   <a href={item.url}>{item.text}</a>
               </li>
                ))}
            </ul>
        </div>
    );
}

export default Satici;

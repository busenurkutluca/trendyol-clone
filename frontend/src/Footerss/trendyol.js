function Trendyol() {
    
    const trend = [
        { text: "Biz Kimiz", url: "#" },
        { text: "Kariyer", url: "#" },
        { text: "Sürdürülebilirlik", url: "#" },
        { text: "İletişim", url: "#" },
        { text: "Trendyol'da Güvenlik", url: "#" }
    ];


    return (
        <div className="trend-footer">
            <h3>Trendyol</h3>
            <ul>
                {trend.map((item, index) => (
                   <li key={index}>
                   <a href={item.url}>{item.text}</a>
               </li>
                ))}
            </ul>
        </div>
    );
}

export default Trendyol;

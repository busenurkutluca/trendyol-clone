function Yardim() {
    
    const yardimList = [
        { text: "Sıkça Sorulan Sorular", url: "#" },
        { text: "Canlı Yardım / Asistan", url: "#" },
        { text: "Nasıl İade Edebilirim", url: "#" },
        { text: "İşlem Rehberi", url: "#" },
       
    ];
    return (
        <div className="yardım-footer">
            <h3>Yardım</h3>
            <ul>
                {yardimList.map((item, index) => (
                  <li key={index}>
                  <a href={item.url}>{item.text}</a>
              </li>
                ))}
            </ul>
        </div>
    );
}

export default Yardim;

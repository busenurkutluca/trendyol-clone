function Menu() {
    const categories = [
        "Kadın", "Erkek", "Anne & Çocuk", "Ev & Yaşam", "Süpermarket",
        "Kozmetik", "Ayakkabı & Çanta", "Elektronik", "Çok Satanlar"
    ];

    return (
        <div className="menu">
            {categories.map((category, index) => (
                <a key={index} href="/">{category}</a>
            ))}
        </div>
    );
}

export default Menu;

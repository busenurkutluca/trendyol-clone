function Top() {
  const links = [
      { text: "İndirim Kuponlarım", url: "#" },
      { text: "Trendyol'da Satış Yap", url: "#" },
      { text: "Hakkımızda", url: "#" },
      { text: "Yardım & Destek", url: "#" }
  ];

  return (
      <div className="header-top">
          {links.map((link, index) => (
              <a key={index} href={link.url}>{link.text}</a>
          ))}
      </div>
  );
}

export default Top;

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const categories = [
  "Kadın", "Erkek", "Anne & Çocuk", "Ev & Mobilya",
  "Süpermarket", "Kozmetik", "Ayakkabı & Çanta",
  "Elektronik", "Spor & Outdoor", "Kitap & Kırtasiye & Hobi"
];

function CategoriesMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="category-menu-container">
      <button
        className="category-button"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <FaBars className="menu-icon" /> Tüm Kategoriler
      </button>
      {isOpen && (
        <ul className="category-dropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
          {categories.map((category, index) => (
            <li key={index} className="category-item">{category}</li>
          ))}
        </ul>
      )}

      <style jsx>{`
        .category-menu-container {
          position: relative;
          display: inline-block;
        }
        .category-button {
          background-color: #f27a1a;
          color: white;
          border: none;
          padding: 10px 15px;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          border-radius: 5px;
        }
        .category-button:hover {
          background-color: #d76a17;
        }
        .menu-icon {
          font-size: 18px;
        }
        .category-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          list-style: none;
          padding: 0;
          margin: 0;
          width: 200px;
          border-radius: 5px;
        }
        .category-item {
          padding: 10px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .category-item:hover {
          background: #f5f5f5;
        }
      `}</style>
    </div>
  );
}

export default CategoriesMenu;
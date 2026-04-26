const categories = ["all", "bloom", "sunblaze", "autumn", "frostbite"];

function Category({ setCategory }) {
  return (
    <div className="categories">
      {categories.map((cat) => (
        <button key={cat} onClick={() => setCategory(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Category;
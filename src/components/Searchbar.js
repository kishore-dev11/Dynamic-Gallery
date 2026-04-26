function Searchbar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search images..."
      className="search"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default Searchbar;
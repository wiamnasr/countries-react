const SearchBox = ({ onChange, value, placeholder }) => {
  return (
    <input
      type='text'
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default SearchBox;

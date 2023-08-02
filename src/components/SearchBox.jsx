const SearchBox = ({onSearch}) => {
  return <input className="grow pa3 ba b--green bg-lightest-blue" type="search" placeholder="search robots" onChange={onSearch} />;
};

export default SearchBox;

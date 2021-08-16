const Home = () => {
  const handleClick = (e) => {
    console.log("Hello, Raka", e);
  };

  const handleClickMeAgain = (name, e) => {
    console.log("Hello " + name, e.target);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickMeAgain("mario", e)}>
        Click me again
      </button>
    </div>
  );
};

export default Home;

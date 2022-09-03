import { useEffect, useState, createContext } from "react";
import { mainCardData, overViewData } from "../data";
import MainCard from "./Card";
import OveriewCard from "./OverviewCard";
import Switch from "./Switch";

const ThemeContext = createContext(null);

const App = () => {
  const [mainCard, setmainCard] = useState([]);
  const [overviewCard, setoverviewCard] = useState([]);
  const [theme, setTheme] = useState("dark");
  document.body.id = theme;

  useEffect(() => {
    setmainCard(mainCardData);
    setoverviewCard(overViewData);
  }, [mainCard, overviewCard]);

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
    document.body.id = theme;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="bg-pattern"></div>
      <div className="container ">
        <div className="row  ">
          <div className="col-md-9 mt-5 ">
            <h2 className="fw-bold text-dark-color">Social Media Dashboard</h2>
            <p className="fw-bold text-Dark-Grayish-Blue">
              Total Followers: 23,004
            </p>
          </div>
          <div className="col-md-3  mt-5 d-flex justify-content-between justify-content-md-end">
            <p className="fw-bold text-Dark-Grayish-Blue text-overview-heading">
              Dark Mode
            </p>
            &nbsp;
            <Switch toggle={toggleTheme} />
          </div>
        </div>
        <div className="row g-4 row-cols-1 row-cols-lg-4  ">
          <MainCard data={mainCard} />
        </div>
        <div className="row my-4">
          <h4 className="fw-bold text-Dark-Grayish-Blue">Overiew - Today</h4>
        </div>
        <div className="row g-4 row-cols-1 row-cols-md-4">
          <OveriewCard data={overviewCard} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
export default App;

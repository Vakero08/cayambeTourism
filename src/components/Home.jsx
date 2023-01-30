import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getData } from "../utils/request";
import Carousel from "./Carousel";
import Categories from "./Categories";
import DetailSite from "./DetailSite";
import Images from "./Images";

const Home = () => {
  const [dataApi, setdataApi] = useState([]);
  const [dataTemp, setDataTemp] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [optionCarousel, setOptionCarousel] = useState(1);
  const [currentItem, setCurrentItem] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      if (data.length) {
        setDataFilter(data);
        const newdata = cutData(data);
        setDataTemp(newdata);
        setdataApi(data);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (optionCarousel > 0 && dataFilter.length) {
      const newdata = cutData(dataFilter);
      setDataTemp(newdata);
    }
  }, [optionCarousel, dataFilter]);
  const cutData = params => {
    let newData = null;
    switch (optionCarousel) {
      case 1:
        newData = params.slice(0, 5);
        break;
      case 2:
        newData = params.slice(5, 10);
        break;
      case 3:
        newData = params.slice(10, 15);
        break;
      case 4:
        newData = params.slice(15, 20);
        break;
      case 5:
        newData = params.slice(20, 25);
        break;
      case 6:
        newData = params.slice(25, 30);
      case 7:
        newData = params.slice(30, 35);
        break;
      default:
        newData = params.slice(0, 5);
        break;
    }
    return newData;
  };

  const changeCarousel = value => {
    setOptionCarousel(value);
  };

  const filterCategory = value => {
    let data = structuredClone(dataApi);
    let dataFilters = data.filter(item => {
      if (item.category.includes(value)) {
        return item;
      }
    });
    setDataFilter(dataFilters);
    setOptionCarousel(1);
  };
  return (
    <section>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* <div className="flex flex-row flex-wrap"> */}
      <div>
        <Categories filterCategory={filterCategory} />
        {dataApi.length !== 0 ? (
          <>
            <div className="options mx-auto my-0">
              {dataTemp.map((dato, idx) => (
                <Images key={dato.name + "_" + idx} dato={dato} setCurrentItem={setCurrentItem} />
              ))}
            </div>
            <Carousel setOpt={changeCarousel} size={dataFilter.length} />
            {currentItem && <DetailSite currentItem={currentItem} />}
          </>
        ) : (
          <span>no data</span>
        )}
      </div>
    </section>
  );
};
export default Home;

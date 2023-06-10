import { useState, useEffect } from "react";
import classes from "./Test.module.css";

const Test = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resTitle = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        const dataTitle = await resTitle.json();
        const resDes = await fetch(
          "https://jsonplaceholder.typicode.com/comments/1"
        );
        const dataDes = await resDes.json();
        const resPhoto = await fetch(
          "https://jsonplaceholder.typicode.com/photos/1"
        );
        const dataPhoto = await resPhoto.json();

        setData({
          Title: dataTitle.name,
          UserName: dataTitle.username,
          Des: dataDes.body,
          Photo: dataPhoto.url,
          UserIcon: dataPhoto.thumbnailUrl,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const contain = data !== {} ? data : "Nothing";

  return (
    <div className={classes["TestPage__ItemsContainer"]}>
      <div className={classes["TestPage__PostContainer"]}>
        <div className={classes["TestPage__PostContainer-head"]}>
          <div className={classes["TestPage__PostContainer-head_items"]}>
            <div
              className={
                classes["TestPage__PostContainer-head_items--detailuser"]
              }
            >
              <img src={contain.UserIcon} alt="user icon" />
              <div>
                <span
                  className={
                    classes[
                      "TestPage__PostContainer-head_items--detailuser_title"
                    ]
                  }
                >
                  {contain.Title}
                </span>
                <span>{"@" + contain.UserName}</span>
                <span>July 23</span>
              </div>
            </div>
            <div>
              <a href="_">
                <i class="fa fa-ellipsis-v"></i>
              </a>
            </div>
          </div>
        </div>
        <span className={classes["TestPage__PostContainer-description"]}>
          {contain.Des}
        </span>
        <div className={classes["TestPage__PostContainer-MainImage"]}>
          <img src={contain.Photo} alt={contain.Title} />
        </div>
        <div className={classes["TestPage__PostContainer-LinksContainer"]}>
          <div>
            <a href="_">
              <i class="fa fa-comment"></i>
            </a>
            <span>200</span>
          </div>
          <div>
            <a href="_">
              <i class="fa fa-refresh"></i>
            </a>
            <span>20</span>
          </div>
          <div>
            <a href="_">
              <i class="fa fa-heart"></i>
            </a>
            <span>4k</span>
          </div>
          <div>
            <a href="_">
              <i class="fa fa-bar-chart"></i>
            </a>
            <span>890</span>
          </div>
          <div>
            <a href="_">
              <i class="fa fa-upload"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;

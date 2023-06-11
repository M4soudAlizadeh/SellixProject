import { useState, useEffect } from "react";
import classes from "./Test.module.css";
import SellixClient from "../utils/SellixClient";

const Test = () => {
  const [reqPhoto, setReqPhoto] = useState({});
  const [reqUser, setReqUser] = useState({});
  const [reqComments, setReqComments] = useState({});
  useEffect(() => {
    SellixClient("GET", "photos").get(setReqPhoto);
    SellixClient("GET", "users").get(setReqUser);
    SellixClient("GET", "comments").get(setReqComments);
  }, []);
  const numbersArray = Array.from({ length: 10 }, (_, i) => i + 1);
  const contain = numbersArray.map((e, i) => {
    const obj = {
      Key: reqUser[i]?.username + reqUser[i]?.name + Math.random(),
      Title: reqUser[i]?.name,
      UserName: reqUser[i]?.username,
      Des: reqComments[i]?.body,
      Photo: reqPhoto[i]?.url,
      UserIcon: reqPhoto[i]?.thumbnailUrl,
    };
    return obj;
  });
  return (
    <div className={classes["TestPage__ItemsContainer"]}>
      {contain.map((item, _) => {
        return (
          <div className={classes["TestPage__PostContainer"]}>
            <div className={classes["TestPage__PostContainer-head"]}>
              <div className={classes["TestPage__PostContainer-head_items"]}>
                <div
                  className={
                    classes["TestPage__PostContainer-head_items--detailuser"]
                  }
                >
                  <img src={item.UserIcon} alt="user icon" />
                  <div>
                    <span
                      className={
                        classes[
                          "TestPage__PostContainer-head_items--detailuser_title"
                        ]
                      }
                    >
                      {item.Title}
                    </span>
                    <span>{"@" + item.UserName}</span>
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
              {item.Des}
            </span>
            <div className={classes["TestPage__PostContainer-MainImage"]}>
              <img src={item.Photo} alt={item.Title} />
            </div>
            <div className={classes["TestPage__PostContainer-LinksContainer"]}>
              <div>
                <a href="_">
                  <i className="fa fa-comment"></i>
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
        );
      })}
    </div>
  );
};

export default Test;

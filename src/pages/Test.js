import { useState, useEffect, useRef } from "react";
import classes from "./Test.module.css";
import SellixClient from "../utils/SellixClient";
import { Fragment } from "react/cjs/react.production.min";

const Test = () => {
  const count = useRef(1);
  const content = count.current;
  const [reqPhoto, setReqPhoto] = useState({});
  const [reqUser, setReqUser] = useState({});
  const [reqComments, setReqComments] = useState({});
<<<<<<< HEAD

=======
  const [page, setPage] = useState(1);
>>>>>>> af264ba9cb77f39900287072e08970367f4060fc
  useEffect(() => {
    SellixClient("GET", "photos").get(setReqPhoto);
    SellixClient("GET", "users").get(setReqUser);
    SellixClient("GET", "comments").get(setReqComments);
  }, []);
<<<<<<< HEAD

  const numbersArray = Array.from({ length: 10 }, (_, i) => i + 1);
  const contain = numbersArray.map((_, i) => {
=======
  const numbersArray = Array.from({ length: 20 }, (_, i) => i + 1);
  const containe = numbersArray.map((_, i) => {
>>>>>>> af264ba9cb77f39900287072e08970367f4060fc
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
  const containee = (page = 1) => {
    const start = (page - 1) * 10;
    const end = page * 10;
    console.log(containe.slice(start, end));
    return containe.slice(start, end);
  };
  const clickPageHandle = () => {
    setPage(content);
  };
  console.log(content);
  const contain = containee(page);
  return (
    <Fragment>
      <div>
        <div>
          <button onClick={clickPageHandle}>
            <div>
              <i className="fa fa-arrow-right"></i>
              <span ref={count}>2</span>
            </div>
          </button>
        </div>
        <div>
          <button>
            <div>
              <i className="fa fa-arrow-left"></i>
              <span>1</span>
            </div>
          </button>
        </div>
      </div>
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
              <div
                className={classes["TestPage__PostContainer-LinksContainer"]}
              >
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
    </Fragment>
  );
};

export default Test;

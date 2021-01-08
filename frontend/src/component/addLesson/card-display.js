import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from "antd";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import { useHistory } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { Row, Col, Divider, Statistic } from "antd";
import { Rate } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import fire from "../pices/fire.jpg";

/************************************************/
toast.configure();
var obj = {};
export default function CardDisplay() {
  const history = useHistory();

  var userId = localStorage.getItem("id");
  // var role = localStorage.getItem('role');

  const [product, setProduct] = useState({});
  const [data, setData] = useState([]);
  const { Meta } = Card;
  const [status, setStatus] = useState();
  const [userCourses, setUserCourses] = useState([]);
  const [index, setIndex] = useState();
  const [registerationState, setregisterationState] = useState(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get("http://localhost:8000/teacher/card");
        setData(result.data);
      } catch (error) {
        console.log(error, "oh nooooo");
      }
    }
    fetchData();
  }, []);

  //useEffect(() => {},[]);

  const makePayment = async (token) => {
    console.log("makePayment ", product);

    try {
      const response = await axios.post(
        "http://localhost:8000/payments/charge",
        { token, obj }
      );
      setStatus(response.data);
      if (status === "success") {
        toast("Success! Check email for details", { type: "success" });
        await axios.post(
          "http://localhost:8000/user/addNewCourse/" + userId,
          obj
        );

        // history.push('/account/'+userId);
      } else {
        toast("Something went wrong", { type: "error" });
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleShow3 = () => {
    handleShow();
  };

  const checkRegistration = async () => {
    console.log("checkRegistration ", obj);

    try {
      const userInfo = await axios.get(
        "http://localhost:8000/user/account/" + userId
      );
      setUserCourses(userInfo.data.Courses);
      console.log("this is courses of this teacher", userInfo.data.Courses);

      for (var x = 0; x < userCourses.length; x++)
        if (userCourses[x] === obj.id) {
          toast("You are already registersd at this course", { type: "error" });
          return true;
        } else {
          return false;
        }
    } catch (error) {}
  };

  return (
    <div
      style={{
        backgroundImage: "url(" + fire + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Row justify="space-around" gutter={40}>
        {data.map((card, i) => (
          <Col key={i}>
            <Card
              hoverable
              style={{ width: 350, hight: 70, margin: "auto" }}
              cover={
                <img
                  alt="example"
                  src={card.image}
                  style={{
                    height: "400",
                    maxHeight: "400px",
                    width: "350",
                    maxWidth: "350px",
                  }}
                />
              }
            >
              <Meta title={card.Title} description={card.Desceription} />
              <label>Teacher name :</label>
              <span>{card.Name}</span>
              <label>The Price : </label>
              <span>{card.price}</span>
              <br />

              <Button
                onClick={() => {
                  obj = {
                    name: data[i].Title,
                    price: data[i].price,
                    productBy: data[i].Name,
                    id: data[i]._id,
                  };
                  const state = checkRegistration();
                  if (!state) handleShow3();
                }}
              >
                Buy this course with just ${card.price}
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Woohoo!!!!</Modal.Title>
                </Modal.Header>
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/3159/3159066.svg"
                  alt="css"
                />
                <Modal.Footer>
                  <StripeCheckout
                    stripeKey={process.env.REACT_APP_KEY}
                    token={makePayment}
                    name="Tick Kid"
                    amount={obj.price * 100}
                  />
                </Modal.Footer>
              </Modal>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

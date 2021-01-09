import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from "antd";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import { Link, useHistory } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { Row, Col } from "antd";
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
    if(userId === null ){  
      toast("You are not logged in! ", { type: "error" });
    history.push('/login')}
  else
    try {
      const userInfo = await axios.get(
        "http://localhost:8000/user/account/" + userId
      );
      setUserCourses(userInfo.data.Courses);
      console.log("this is courses of this teacher", userInfo.data.Courses);

      for (var x = 0; x < userCourses.length; x++)
        if (userCourses[x] === obj.id) {
          toast("You are already registersd at this course", { type: "error" });
          console.log("jjjj");
        } else {
          console.log("nnnn");
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

              <Link  to={{    pathname: "/payment",  
                state: { name: data[i].Title, 
                   price: data[i].price,
                    productBy: data[i].Name,
                    id: data[i]._id,}  }}
                    style={{fontSize:'1.2rem'}}
                    onClick={checkRegistration}
                    >
                      Buy this course with just ${card.price}
              </Link>

              
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

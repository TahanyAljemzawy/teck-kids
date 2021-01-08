import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from "antd";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import { useHistory } from "react-router-dom";
import { Button} from 'react-bootstrap';
import { Row, Col, Divider,Statistic } from 'antd';
import { Rate } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import fire from '../pices/fire.jpg';

/************************************************/
toast.configure();
export default function CardDisplay() {
  const history = useHistory();

  var userId = localStorage.getItem("id");

  const [product, setProduct] = useState({});
  const [data, setData] = useState([]);
  const { Meta } = Card;
  const [status, setStatus] = useState();
  const [userCourses, setUserCourses] = useState([]);
  const [index, setIndex] = useState();
  const [registerationState, setregisterationState] = useState(false);

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
var obj = {};
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
          setregisterationState(true);
          break;
        } else {
        }
    } catch (error) {}
  };

  return (
    <div>
      <Row gutter={40}>
        {data.map((card, i) => (
          <Col key={i}>
            <Card
              hoverable
              style={{ width: 400, hight: 200, margin: "auto" }}
              cover={<img alt="example" src={card.image} />}
            >
              <Meta title={card.Title} description={card.Desceription} />
              <label>Teacher name :</label>
              <span>{card.Name}</span>
              <label>The Price : </label>
              <span>{card.price}</span>
              <br />

              <StripeCheckout
                stripeKey={process.env.REACT_APP_KEY}
                token={makePayment}
                name="Tick Kid"
                amount={parseInt(card.price) * 100}
              >
                <Button
                  onClick={() => {
                     obj = {
                        name: data[i].Title,
                      price: data[i].price,
                      productBy: data[i].Name,
                      id: data[i]._id
                     } 
                    // setProduct({
                    //   name: data[i].Title,
                    //   price: data[i].price,
                    //   productBy: data[i].Name,
                    //   id: data[i]._id,
                    // });
                    checkRegistration();
                  }}
                >
                  Buy this course with just ${card.price}
                </Button>
              </StripeCheckout>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

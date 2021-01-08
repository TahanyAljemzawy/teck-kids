import React, {useState, useRef} from 'react'
import { Button, Modal} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { Row, Col } from 'antd';




/*************************************************************** */
function DragNDrop({data}) {

  const history = useHistory();
    const [list, setList] = useState(data); 
    const [dragging, setDragging] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dragItem = useRef();
        const dragItemNode = useRef();
        
    const handletDragStart = (e, params) => {
                console.log('dragging', params)
                dragItem.current = params;
                dragItemNode.current = e.target;
                dragItemNode.current.addEventListener('dragend', handleDragEnd)
        
                setTimeout(() => {
                    setDragging(true); 
                },0)
                    
                }    

                const handleDragEnter = (e, params) => {
                            console.log('Entering a drag target', params)
                            if (dragItemNode.current !== e.target) {
                                console.log('Target is NOT the same as dragged item')
                                setList(oldList => {
                                    // grab deep coby of the object
                                    let newList = JSON.parse(JSON.stringify(oldList))
                                    console.log(newList)
                                    newList[params.grpI].items.splice(params.itemI, 0, newList[dragItem.current.grpI].items.splice(dragItem.current.itemI,1)[0])
                                    dragItem.current = params;
                                    localStorage.setItem('List', JSON.stringify(newList));
                                    return newList;
                                })
                            }
                        }



                const handleDragEnd = (e) => {
                    console.log("ending drag...")
                            setDragging(false);
                            dragItem.current = null;
                            dragItemNode.current.removeEventListener('dragend', handleDragEnd)
                            dragItemNode.current = null;
                        }


                  

                const getStyles = (params) => {
                    const currentItem =  dragItem.current;
                if (currentItem.grpI === params.grpI && currentItem.itemI === params.itemI) {
                    return ' dnd-item current'
                            }
                            return "dnd-item" 
                    
                    
                        }


    return (
      <div id= 'bbbbbb'>   
                     <p  id='ididid'> ▶▶▶Read the Following HTML code and check the classes and ides for each tag, then drop the right answer inside its right place ◀◀◀</p>
<div>
<div >
<Row><Col  span={12}> 
 <pre style={{background:"#383838	",  marginLeft: "60px;", borderStyle: "solid;", textAlign: "inherit", border:"20px"
    }} >
  <br></br>

  &lt;!<span style={{color:"#C71585"}}>DOCTYPE</span><span style={{color:"#8B008B"}}>html</span>&gt;
  <br></br>
&lt;<span style={{color:"#C71585"}}>html</span> &gt;<br></br>
&lt;<span style={{color:"#C71585"}}>body</span> &gt;<br></br>

&lt;<span style={{color:"#C71585"}}>h1</span><span style={{color:"#7FFF00"}}>class</span> = <span style={{color:"#FFD700"}}>''textStyle''</span> &gt;<span style={{color:"#FFFAF0"}}>This is a Class Heading</span> &lt;/<span style={{color:"#C71585"}}>h1</span> &gt;    <br></br>
&lt;<span style={{color:"#C71585"}}>p</span> <span style={{color:"#7FFF00"}}>class</span> = <span style={{color:"#FFD700"}}>''textStyle''</span> &gt;<span style={{color:"#FFFAF0"}}>This is a Class paragraph </span> &lt;/<span style={{color:"#C71585"}}>p</span> &gt; <br></br>
&lt;<span style={{color:"#C71585"}}>p</span> <span style={{color:"#7FFF00"}}>id</span> = <span style={{color:"#FFD700"}}>''font''</span> &gt;<span style={{color:"#FFFAF0"}}>This is an Id paragraph </span> &lt;/<span style={{color:"#C71585"}}>p</span> &gt; <br></br>
&lt;/<span style={{color:"#C71585"}}>div</span> &gt;<br></br>
&lt;/<span style={{color:"#C71585"}}>body</span> &gt;<br></br>
&lt;/<span style={{color:"#C71585"}}>html</span> &gt;<br></br>
</pre>
 </Col> 
 <Col  id="apples" span={12}>
   
 <div  style={{borderStyle: 'solid',width:'450px',marginLeft:'90px', height:"276px" }}>
<div >
<h1 style={{color:"red",fontFamily:"cursive" ,textAlign:"center"}} > This is a Class Heading </h1 > <br></br>  
<p style={{color:"red",fontFamily:"cursive" ,textAlign:"center"}} > This is a Class paragraph </p > <br></br>

<p style={{fontSize:"20px" ,textAlign:"center"}} > This is a paragraph </p >    <br></br>  <br></br>  <br></br>
</div></div>
   </Col>
   </Row>
   </div>



</div>


<div className="drag-n-drop">
      {list.map((grp, grpI) =>( 
         <div key={grp.title, grp.title2, grp.title3 }
          className="dnd-group"
          onDragEnter={dragging && !grp.items.length?(e) => handleDragEnter(e,{grpI, itemI: 0}):null}
          
          >
           <div className="group-title">{grp.title} </div>
            {grp.items.map((item, itemI) => (
              <div draggable   
               onDragStart={(e) => {handletDragStart(e, {grpI, itemI})} }
               onDragEnter={dragging?(e) => {handleDragEnter(e, {grpI, itemI})}:null} 
                    key = {item} 
                     className={dragging?getStyles({grpI, itemI}):"dnd-item"}
                     
                     >
            {item}
                </div>
            ))}
                        {grp.title2}
                        {/* {item} */}
                        {grp.title3 }

                        

         </div>
      ))} 
      
      <div>


      {localStorage.getItem('List')===  '[{"title":".textStyle{","items":["  font-family: cursive;","color: red;"],"title2":"}"},{"title":"#font{","items":["  text-align: center;","  font-size: 20px;"],"title2":"}"},{"title":"CSS","items":[]}]' ||localStorage.getItem('List')===  '[{"title":".textStyle{","items":["  font-family: cursive;","color: red;"],"title2":"}"},{"title":"#font{","items":["  font-size: 20px;","  text-align: center;"],"title2":"}"},{"title":"CSS","items":[]}]' ||localStorage.getItem('List')===  '[{"title":".textStyle{","items":["color: red;","  font-family: cursive;"],"title2":"}"},{"title":"#font{","items":["  font-size: 20px;","  text-align: center;"],"title2":"}"},{"title":"CSS","items":[]}]' ||localStorage.getItem('List')===  '[{"title":".textStyle{","items":["color: red;","  font-family: cursive;"],"title2":"}"},{"title":"#font{","items":["  text-align: center;","  font-size: 20px;"],"title2":"}"},{"title":"CSS","items":[]}]'? <div>  
         <Button variant="primary" onClick={handleShow}> SUBMIT </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Woohoo!!!!</Modal.Title>
      </Modal.Header>
      <img src= "https://www.flaticon.com/svg/static/icons/svg/3159/3159066.svg" alt="css"/>
      <Modal.Footer>
        
        <Button variant="primary" onClick={()=>{history.push('/CSS/ex3')}}> Go to the Next exersise </Button>
      </Modal.Footer>
    </Modal></div>:<div>  
         <Button variant="primary" onClick={handleShow}> SUBMIT </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Try Again!!!!</Modal.Title>
      </Modal.Header>
      <img src= "https://www.flaticon.com/svg/static/icons/svg/3159/3159020.svg" alt="css"/>
      <Modal.Footer>
      </Modal.Footer>
    </Modal></div>}

      </div>


</div></div>
      
  
    )
}

export default DragNDrop

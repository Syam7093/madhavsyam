import React, { useRef,useState } from 'react'

function Result() {

    // let score=0;
    let [score,getscore]=useState(0);
    let karthik=["sai","ramana","bhava"];
    let jana={
        name:"ramesh",price:250,brand:"jio"
    }

    let names=[{name:"syam",education:"btech" ,gender:"male"},{name:"najeema",education:"btech" ,gender:"male"}]

    let tRef=useRef();
    let engRef=useRef();
    let mathRef=useRef();
    let socRef=useRef();
    let span1=useRef();
    let span2=useRef();
    let span3=useRef();
    let span4=useRef();
    let span5=useRef();
    let buttonRef=useRef();
    let selectRef=useRef();
    let sai="";
    



    let allOnChange=(inputRef,mainSpan)=>{
        let marks=Number(inputRef.current.value);
            if(marks<0 || marks>100)
            {
                mainSpan.current.innerHTML="INVALID";
                buttonRef.current.style.display="none"
            }
            else{
                if(marks>=35)
                {
                    mainSpan.current.innerHTML="pass";
                    buttonRef.current.style.display="inline-block"
                }
                else{
                    mainSpan.current.innerHTML="fail";
                    buttonRef.current.style.display="inline-block"
                }
            }



    }



    let allTotal=(tt,e,m,s,ss)=>{
        let t11=Number(tt.current.value);
        let t22=Number(e.current.value);
        let m1=Number(m.current.value);
        let s1=Number(s.current.value);
        let total=t11+t22+m1+s1;
        ss.current.innerHTML=total;
    }
  return (
    <div>
        <div>
        <label>telugu</label>
        <input type="number" ref={tRef}
        onChange={()=>{
            allOnChange(tRef,span1);
           
        }}
        
        
        
        ></input>
        <span ref={span1}></span>
        </div>
        <div>
        <label>english</label>
        <input type="number" ref={engRef}
         onChange={()=>{
            allOnChange(engRef,span2);
           
        }}
        
        ></input>
        <span ref={span2}></span>
        </div>
        <div>
        <label>maths</label>
        <input type="number" ref={mathRef}
         onChange={()=>{
            allOnChange(mathRef,span3);
           
        }}
        
        ></input>
        <span ref={span3}></span>
        </div>
        <div>
        <label>social</label>
        <input type="number" ref={socRef}
         onChange={()=>{
            allOnChange(socRef,span4);
           
        }}
        ></input>
        <span ref={span4}></span>
        </div>
        <div>
            <button ref={buttonRef}
            onClick={()=>{

                allTotal(tRef,engRef,mathRef,socRef,span5)

                

            }}
            
            
            
            >submit</button>
            <span ref={span5}></span>
        </div>
        <div>
            <button onClick={()=>{
                let sai=[10,20,30,40]
                let ravi=sai.map((num)=>{
                    return num+10;
                })
                console.log(ravi);
                let sai1=["ramana","raju","ganesh","suraj","hello"]
                let ravi1=sai1.map((num1)=>{
                    return "sri" +num1 + "j";
                })
                console.log(ravi1.join());



            }}
            
            >map</button>
        </div>
        <div>
        <ol>
        {karthik.map((lala)=>{
            return <li>{karthik}</li>

        })}
        </ol>
        </div>

        <table>
            <tr>
                <th>name</th>
                <th>price</th>
                <th>brand</th>
            </tr>
            <tr>
                <td>{jana.name}</td>
                <td>{jana.price}</td>
                <td>{jana.brand}</td>
            </tr>
        </table>
        <div>
        <label>select one</label>
            <select ref={selectRef}
            onChange={()=>{
                let sai=selectRef.current.value;

                console.log(sai);
            }} 
            
            >
                
                <option>hi</option>
                <option>bye</option>
                <option>sai</option>
                <option>rajesh</option>
            </select>
            <button onClick={()=>{
                console.log(sai);
            }}>hi</button>
        </div>
        <div>
            <table>
                <tr>
                    <th>name</th>
                    <th>education</th>
                    <th>gender</th>
                </tr>
               {names.map((sai)=>{
                return <tr>
                <th>{sai.name}</th>
                <th>{sai.education}</th>
                <th>{sai.gender}</th>
            </tr>
               })}
            </table>
        </div>
        <div>
        <button>add:{score}</button>
        <button onClick={()=>{
            // let ram=0;
        getscore(score++);
            console.log(score)
        }}>+</button>
        </div>
    </div>
  )
}

export default Result
import React, {} from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundcolor: 'white'
    // })
    let myStyle ={
        color: props.mode ==='dark'?'white':'rgb(69 69 82)',
        backgroundColor: props.mode ==='dark'?'rgb(69 69 82)':'white',
    }
    // const [btntext, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundcolor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundcolor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")   

    //     }
    // }

  return (
                <div className='container' style={{ color: props.mode ==='dark'?'white':'#042743'}}>
                    <h1 className='my-2'>About Us</h1>
                <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                   <strong> Analyze your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                 TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                   TextUtils is a free character counter tool that provides instant character count &word count statistics for a given text,TextUtils 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
        {/* <div className='container my-3'>
        <button onClick={toggleStyle} type='button' className='btn btn-primary'>{btntext}</button>
    </div> */}
  </div>
  )
}

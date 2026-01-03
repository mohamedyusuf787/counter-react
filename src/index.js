import ReactDOM from "react-dom/client";

import Counter from "./counter/index.jsx";
// import Random from "./random/index.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function Navbar() {
//   return (
//     <div>
//       <ul>
//         <li>Home</li>
//         <li>Product</li>
//         <li>Contact</li>
//       </ul>
//     </div>
//   )
// }

// function About() {
//   return (
//     <div>
//       <h1>About us</h1>
//       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem veniam eum repudiandae, repellendus vel reiciendis numquam. Incidunt odit omnis labore recusandae neque, vitae rerum necessitatibus, explicabo iure itaque impedit quaerat?</p>
//     </div>
//   )
// }


// A value is called from a component to another component is called props (property)
// function One(){
//   return( <>
//   <h1>"one is called"</h1>
//  <Two one="44"></Two>
//  </>
//   )
// }

// function Two(num){
// return (
//   <>
//   <h1>two called</h1>
//   <Three two={num.one}></Three>
//   </>
// )
// }

// function Three(num){
//   return(
//     <h1>three called{num.two}</h1>
//   )
// }

// const containerStyle = {
//   width: "400px",
//   margin: "40px auto",
//   border: "1px solid #ccc",
//   borderRadius: "12px",
//   overflow: "hidden",
//   backgroundColor: "#c4c4c4ff"
// };


// function Input() {
//   return (
//     <div style={{
//       padding: "12px",
//     }}>
//       <input
//         type="text"
//         placeholder="Search"
//         style={{
//           width: "100%",
//           padding: "10px",
//           borderRadius: "8px",
//           border: "none"
//         }}
//       />
//     </div>
//   );
// }

// function Message(props) {
//   return (
//     <div style={{
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       backgroundColor: "violet",
//       padding: "10px",
//       margin: "8px",
//       borderRadius: "10px"
//     }}>
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <img
//           src={profile}
//           style={{
//             width: "50px",
//             height: "50px",
//             borderRadius: "50%",
//             objectFit: "cover",
//             marginRight: "10px"
//           }}
//         />
//         <div>
//           <h4 style={{ margin: 0 }}>{props.Pname}</h4>
//           <p style={{ margin: 0 }}>{props.Pmsg}</p>
//         </div>
//       </div>
//       <p style={{ margin: 0 }}>12:44</p>
//     </div>
//   );
// }



// var msglist = [
//   {
//     pname: "yusuf",
//     pmsg: "Hey, send the document",
//   },
//   {
//     pname: "bob",
//     pmsg: "Hey, how are you",
//   },
//   {
//     pname: "irshath",
//     pmsg: "Hey, who are you",
//   },
//   {
//     pname:"aadil",
//     pmsg:"what are you doing"
//   }
// ]


root.render(
<>
   <Counter/>
   
  </>
  // .......................
  
  // <div style={containerStyle}>
  //   <Input/>
  //   {
  //   msglist.map((data) => (
  //     <Message
  //       Pname={data.pname}
  //       Pmsg={data.pmsg}
  //     />
  //   ))
  //   }
  // </div>
);



// Dest1.js
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./dest1.css";
import pic from "../../assets/Destination3.png";
import { Container } from "@mui/material";
import { lightBlue } from "@mui/material/colors";

function Dest1() {
  return (
    <div>
      <Navbar />
      <Container>
        <div className="dest-cards-container" style={{ marginTop: "20px", marginBottom: "20px", display:'flex',flexDirection:'row',backgroundColor:'#99ccff',borderRadius:'10px'}}>
          {/* Card 1 */}
          <div className="dest-card">
            <h1 className="dest-label" style={{ textAlign: "center", marginTop: "20px" }}>
              Paris
            </h1>
            <img
              className="dest-image"
              src={pic}
              alt="Paris"
              style={{
                display: "block",
                margin: "0 auto",
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
                marginBottom: "16px",
              }}
            />
            <p
              className="dest-content"
              style={{
                fontSize: "18px",
                lineHeight: "1.5",
                color: "#333",
                textAlign: "justify",
                marginBottom: "20px",
              }}
            >
              {/* Replace the content with your actual content */}
              Paris is the capital city of France and is known for its iconic landmarks. 
              The design of the Eiffel Tower is attributed to Maurice Koechlin and Émile Nouguier, 
              two senior engineers working for the Compagnie des Établissements Eiffel...

              user:anonymous
            </p>
          </div>
  
          {/* Card 2 */}
          <div className="dest-card">
            <h1 className="dest-label" style={{ textAlign: "center", marginTop: "20px" }}>
              Hidden Spots
            </h1>
            {/* Add image and content for the second card here */}
            
            <p
              className="dest-content"
              style={{
                fontSize: "18px",
                lineHeight: "1.5",
                color: "#333",
                textAlign: "justify",
                marginBottom: "20px",
              }}
            >
              {/* Replace the content with your actual content for the second card */}
              TROCADÉRO
              I admit, it’s not so secret anymore but it’s the best place to get the Eiffel Tower views. I like finding unique angles of this square, especially since it is kinda difficult to shoot here in winter.
              
              If you want no one in the photos, try heading here during sunrise! Plus, it’s the best place to watch the sun rise over Paris.
              <br>
              </br>
              user:Anonymous
            </p>
           <a href="/"> <button className="but" style={{backgroundColor:'#99ccff', width:'60px',height:'40px',color:'white',border:'none',justifyContent:'center',borderRadius:'20px'}}>Back</button></a>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Dest1;

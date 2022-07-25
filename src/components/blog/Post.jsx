import React, { useEffect } from "react";
import { useParams } from "react-router";

function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5">Freight Forwarding</h1>
        <h6 className="mb-5">Author: Zameer</h6>
    <h1>PERSONALISED SERVICE</h1>
        <p>
          
We are able to offer one-on-one customer service to our clients. 
We treat your cargo as if it is our own, mindful that the success of 
    our business ultimately depends on the success of yours..
        </p>
    <h1>OVER 22 YEARS EXPERIENCE
</h1>
        <p>
          We have been dealing with the Indian Quarantine and Inspection Service and the Indian Customs 
          in relation to aspects of international trade so we are experts in the field.
        </p>
    <h1>A TRUSTED TEAM OF EXPERTS
</h1>
        <p>
          This is a professionally managed company with well-trained qualified & experienced professional
        to serve the esteemed customers. We believe in delivering high quality,
        dedicated and personalized services to our esteemed customers
        </p>
      </div>
    </div>
  );
}

export default Post;

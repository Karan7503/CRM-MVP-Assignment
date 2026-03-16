import React, { useState } from "react";
import axios from "axios";

function LeadComponent() {

  const [lead, setLead] = useState({
    name: "",
    phone: "",
    email: "",
    source: "",
    status: "New"
  });

  const handleChange = (e) => {
    setLead({
      ...lead,
      [e.target.name]: e.target.value
    });
  };

  const submitLead = async () => {

    try {

      await axios.post("http://localhost:5000/leads", lead);

      alert("Lead Added Successfully");
      
      // window.location.reload();

      setLead({
        name: "",
        phone: "",
        email: "",
        source: "",
        status: "New"
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <h2>Add Lead</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={lead.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={lead.phone}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={lead.email}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="source"
        placeholder="Lead Source"
        value={lead.source}
        onChange={handleChange}
      />

      <br /><br />

      <select name="status" value={lead.status} onChange={handleChange}>

      <option value="New">New</option>
      <option value="Contacted">Contacted</option>
      <option value="Visit Scheduled">Visit Scheduled</option>
      <option value="Negotiation">Negotiation</option>
      <option value="Won">Won</option>
      <option value="Lost">Lost</option>

      </select>

      <br /><br />

      <button onClick={submitLead}>
        Add Lead
      </button>

    </div>
  );
}

export default LeadComponent;
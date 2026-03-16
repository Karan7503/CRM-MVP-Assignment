import React, { useEffect, useState } from "react";
import axios from "axios";

function Leads() {

  const [leads, setLeads] = useState([]);

  const fetchLeads = () => {
    axios.get("http://localhost:5000/leads")
      .then((res) => {
        setLeads(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchLeads();
  }, [leads]);

  return (
    <div>

      <h2>Leads List</h2>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Source</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {leads.map((lead) => (
            <tr key={lead.lead_id}>
              <td>{lead.name}</td>
              <td>{lead.phone}</td>
              <td>{lead.email}</td>
              <td>{lead.source}</td>
              <td>{lead.status}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Leads;
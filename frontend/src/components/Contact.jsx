import  { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: " ",
    email: " ",
    message: " "
  });

  const sendMail = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    const {name, email, message} = inputs;
    const succ = handleInputError({name, email, message});
    if(!succ) return;
    const res = await fetch("http://localhost:8000/send/mail", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(inputs)
    });
    
   
    const data = await res.json();
    toast.success("Message sent successfully");
      if(data.error){
        toast.error(data.error);
        return false;
      }
      if(data.status == 200){
        alert("Message sent successfully");
        return true;
    }
  }

  return (
    <section className="contact">
      <form onSubmit={sendMail}>
        <h1>CONTACT US</h1>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={inputs.name}
            onChange={(e) => setInputs({...inputs, name:e.target.value})}//allows us to enter our value in targeted field
          />
        </div>
        <div> 
          <label>Email</label>
          <input
            type="email"
            value={inputs.email}
            onChange={(e) => setInputs({...inputs, email: e.target.value})}
          />
        </div>
        <div>
          <label>Message</label>
          <input
            type="text"
            value={inputs.message}
            onChange={(e) => setInputs({...inputs, message: e.target.value})}
          />
        </div>
        <button
          type="submit"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;

function handleInputError({name, email, message}){
  if(!name || !email || !message){
    toast.error("Please fill all the details");
    return false;
  }
  return true;
}
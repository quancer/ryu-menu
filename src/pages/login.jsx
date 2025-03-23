import { useState } from 'react';

export default function FormExample() {
  const [formData, setFormData] = useState({ username: '', email: '' });

  const handleChange = (e) => {
    console.log("Event объект:", e);
    console.log("Target:", e.target);
    console.log("Input name:", e.target.name);
    console.log("Input value:", e.target.value);

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e)=>{
    e.preventDefault();

    console.log(formData)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Нэр" onChange={handleChange} />
      <input type="email" name="email" placeholder="Имэйл" onChange={handleChange} />
      <input type="submit" value="ilgeeh" />
    </form>
  );
}

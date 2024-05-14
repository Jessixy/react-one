import { useState } from "react";
import { User } from "../../hooks/http/http-users";

export type NewUserFormProps = {
  onSubmit: (user: User) => void;
  onClose: (isOpen: boolean) => void;
};

const NewUserForm = ({ onSubmit, onClose }: NewUserFormProps) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    const newUser = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      age: formData.age,
      email: formData.email,
      role: "USER",
    };
    onSubmit(newUser);
    onClose(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-y-4 bg-slate-100 rounded-md p-6"
    >
      <div className="grid grid-cols-2 gap-1">
        <label htmlFor="firstname">Vorname:</label>
        <input
          className="rounded-md py-0 px-2 outline-gray-300"
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-2 gap-1">
        <label htmlFor="lastname">Nachname:</label>
        <input
          className="rounded-md py-0 px-2 outline-gray-300"
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-2 gap-1 ">
        <label htmlFor="email">EMail:</label>
        <input
          className="rounded-md py-0 px-2 outline-gray-300"
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-2 gap-1 ">
        <label htmlFor="age">Alter:</label>
        <input
          className="rounded-md py-0 px-2 outline-gray-300"
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gray-50 py-2 mt-4 rounded-md hover:bg-gray-300"
      >
        Absenden
      </button>
    </form>
  );
};

export default NewUserForm;

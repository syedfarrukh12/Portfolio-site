import { useRef, useState } from "react";
import { useSnackbar } from "notistack";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const { enqueueSnackbar } = useSnackbar();
  const [state, setState] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateEmail(state.user_email)) {
      enqueueSnackbar("Invalid email address", { variant: "error" });
      return;
    }

    emailjs
      .sendForm(
        "service_o6zziic",
        "template_hm989le",
        form.current,
        "72y7OKuJu7cznWRpz"
      )
      .then(
        () => {
          enqueueSnackbar("Email sent successfully!", { variant: "success" });

          setState({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        () => {
          enqueueSnackbar("Failed to send email. Please try again later.", {
            variant: "error",
          });
        }
      );
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col bg-slate-900 rounded-xl p-5 space-y-5 md:w-1/2 lg:w-1/3"
    >
      <div className="flex flex-col">
        <label className="text-white">Name</label>
        <input
          className="rounded-md border-none p-2 outline-none"
          type="text"
          name="user_name"
          value={state.user_name}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-white">Email</label>
        <input
          className="rounded-md border-none p-2 outline-none"
          type="email"
          name="user_email"
          value={state.user_email}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-white">Message</label>
        <textarea
          className="rounded-md border-none p-2 outline-none"
          name="message"
          rows={5}
          value={state.message}
          onChange={handleChange}
        />
      </div>

      <input
        className="rounded-full p-3 bg-[#a5b9c9] text-black font-semibold hover:bg-[#DDE6ED] cursor-pointer"
        type="submit"
        value="Send"
      />
    </form>
  );
}

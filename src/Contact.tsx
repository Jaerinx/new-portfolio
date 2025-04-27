import { useRef, useState } from "react";
export default function Contact() {
  const [result, setResult] = useState("");
  const form = useRef<HTMLFormElement>(null);
  const onSubmit = async (event: EventTarget & HTMLFormElement) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "450cdfba-cb76-4252-9373-045e388eb38a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      form.current?.reset();
      setTimeout(() => {
        setResult("Redirecting...");
      }, 1000);
      setTimeout(() => {}, 2000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      className="w-full min-h-screen flex justify-start items-center px-14 border-t-2 border-primary_darker"
      id="contact"
    >
      <div className="w-[calc(100vw-6.8rem)] h-[calc(100vh-5rem)] rounded-lg p-0 cursor-default z-0 flex justify-start items-center">
        <form
          onSubmit={(e) => {
            onSubmit(e.currentTarget);
          }}
          ref={form}
          className="flex flex-col gap-5 w-full h-full py-[1rem] max-w-[500px] text-paragraph "
        >
          <h1 className="m-0">Contact me</h1>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="rounded-lg bg-[transparent] border-accent border-2 p-2"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="rounded-lg bg-[transparent] border-accent border-2 p-2"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="h-full rounded-lg bg-[transparent] border-accent border-2 p-2"
          ></textarea>
          {result && <span className="text-paragraph">{result}</span>}
          <button
            type="submit"
            className="border border-green rounded-lg py-2 bg-secondary text-white  hover:opacity-80 cursor-pointer duration-200"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
}

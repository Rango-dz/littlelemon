import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Header from "./compononets/Header";
import Footer from "./compononets/Footer";

export default function Contact() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      text: "",
    },
  });

  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      navigate("/success", {
        state: data,
        replace: true,
      });
    }
  };

  return (
    <div className="grid grid-flow-row justify-stretch">
      <Header />
      <main className="container ~mt-5/10 px-3 py-5 bg-light text-center mx-auto">
        <div>
          <h2 className="text-center ~text-3xl/5xl font-semibold text-yellow-300 mb-5">
            Contact us
          </h2>
          <span className="text-center text-gray-500 prose font-medium mb-4">
            Please Send us a messange We will contact you soon
          </span>
          <div className="flex align-middle shadow rounded-md ~p-5/10 bg-gray-100 ~border-spacing-5/10 my-0 mx-auto ~max-w-md/xl">
            <form
              action="#"
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-flow-row-dense w-full text-left"
            >
              <div id="reserve" className="w-full p-0 m-0">
                <label className="font-semibold" htmlFor="name">
                  Name
                </label>
                <input
                  className="~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 mb-5 w-full"
                  type="text"
                  id="name"
                  {...register("name", { required: true })}
                />
                {errors.name && <span>This field is required.</span>}
              </div>
              <div>
                <label className="text-left font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  className="~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 mb-5 w-full"
                  type="text"
                  id="email"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required.</span>}
              </div>
              <div>
                <label className="text-left font-semibold" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 mb-5 w-full"
                  type="text"
                  id="phone"
                  {...register("phone", { required: false })}
                />
                {errors.phone && <span>This field is required.</span>}
              </div>
              <div>
                <label className="text-left font-semibold" htmlFor="note">
                  Message
                </label>
                <textarea
                  className="~p-2/3 rounded-md border focus:shadow hover:shadow ~border-gray-400shadow-inner focus-within:outline-yellow-300 min-h-20 mb-5 w-full"
                  size={50}
                  id="note"
                  name="note"
                  rows="5"
                  cols="33"
                  {...register("note", { required: true })}
                ></textarea>
                {errors.note && <span>This field is required.</span>}
              </div>
              <button
                variant="outline"
                value="Submit"
                className="mt-5 ~p-2/3 bg-yellow-300 hover:bg-yellow-400 uppercase rounded shadow font-bold"
                type="submit"
              >
                Book now
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import { useForm, ValidationError } from "@formspree/react";
import { Check } from "lucide-react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xeqyyknz");

  return (
    <form onSubmit={handleSubmit} className="max-w-xl flex flex-col gap-5 mx-auto">
      <div>
        <Input name="name" id="name" type="text" label="Full Name" variant="faded" />
        <ValidationError prefix="name" field="name" errors={state.errors} className="text-danger" />
      </div>

      <div>
        <Input name="email" id="email" type="email" label="Email Address" variant="faded" />
        <ValidationError
          prefix="email"
          field="email"
          errors={state.errors}
          className="text-danger"
        />
      </div>

      <div>
        <Textarea name="message" id="message" type="text" label="Message" variant="faded" />
        <ValidationError
          prefix="message"
          field="message"
          errors={state.errors}
          className="text-danger"
        />
      </div>

      {state.succeeded ? (
        <p className="p-3 bg-success rounded-lg flex gap-3">
          <Check /> You message has been sent successfully.
        </p>
      ) : (
        <Button color="primary" type="submit" isLoading={state.submitting}>
          Send
        </Button>
      )}
    </form>
  );
}

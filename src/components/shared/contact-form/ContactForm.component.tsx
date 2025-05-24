"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ContactFormProps } from "./ContactForm.type";
import { FC } from "react";

const ContactForm: FC<ContactFormProps> = ({ data, events }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-6xl flex flex-col lg:flex-row overflow-hidden">
        {/* Left Side */}
        <div className="bg-sky-400 w-full lg:w-1/2 flex flex-col items-center justify-center p-8 text-white relative">
          <img
            src="https://i.imgur.com/NnIwW0k.png"
            alt="Phone Girl"
            className="w-64 mb-4"
          />
          <h2 className="text-2xl font-semibold text-center mb-4">get in touch</h2>
          <div className="text-sm text-center space-y-1">
            <p>
              <span className="bg-yellow-300 text-black px-1 font-bold">contact</span>
              <span className="ml-1">@e-comm.ng</span>
            </p>
            <p>+234 4556 6666 34</p>
            <p>20 Prince Hakeem Lekki, Phase 1, Lagos.</p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2 p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Fullname</label>
              <Input placeholder="James Doe" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input type="email" placeholder="jamesdoe@gmail.com" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <Textarea placeholder="Type your message..." rows={5} />
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </Card>

      {/* Search Input */}
      <div className="mt-10 w-full max-w-xl flex">
        <Input
          placeholder="Search query..."
          className="rounded-r-none border-r-0"
        />
        <Button className="rounded-l-none">Search</Button>
      </div>
    </div>
  );
}

export default ContactForm;

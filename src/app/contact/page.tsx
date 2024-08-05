"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image'
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GithubIcon, LinkedinIcon } from "lucide-react";
const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('/api/form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                console.log("submitted")
                setStatus('success');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
       
     
    <>
        <Card className="w-[50vw] h-[70vh] mt-[5vh] ml-[25vw] bg-transparent  border-none bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent" >
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center ">Contact Me!</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-transparent border-none hover:bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 focus:bg-gradient-to-r focus:from-yellow-500 focus:to-pink-500 hover:text-black focus:text-black transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-transparent border-none hover:bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 focus:bg-gradient-to-r focus:from-yellow-500 focus:to-pink-500 hover:text-black focus:text-black transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="bg-transparent border-none hover:bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 focus:bg-gradient-to-r focus:from-yellow-500 focus:to-pink-500 hover:text-black focus:text-black transition-all duration-300"

                  />
                </div>
              </div>
              <Button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            {status === 'success' && (
              <p className="text-green-600">Your message has been sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600">There was an error sending your message. Please try again.</p>
            )}
          </CardFooter>
        </Card>
      

      <footer className="mt-4 p-4">
        <div className="flex justify-center items-center space-x-4">
          <Link href="https://github.com/DanTiw" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:scale-125 transition-transform duration-300">
            <GithubIcon size={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/danishtiwari" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-125 transition-transform duration-300">
            <LinkedinIcon size={24} />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default ContactForm;
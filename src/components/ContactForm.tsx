import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init('3VPfWvZ6_5an-anZE');
      
      // Prepare template parameters matching EmailJS format
      const templateParams = {
        name: data.name,        // {{name}} in template
        email: data.email,      // {{email}} in template (for Reply To)
        subject: data.subject,
        message: data.message,
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_bh1w6ds',
        'template_1fas7qf',
        templateParams
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });

      // Reset form
      form.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-card shadow-lg border-0 rounded-2xl">
      <CardHeader>
        <CardTitle className="text-foreground text-2xl flex items-center">
          <Mail className="w-6 h-6 mr-3 text-primary" />
          Send me a message
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your full name" 
                        className="bg-background border-border focus:border-primary"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                rules={{ 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="bg-background border-border focus:border-primary"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="subject"
              rules={{ required: "Subject is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Subject
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="What's this about?" 
                      className="bg-background border-border focus:border-primary"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              rules={{ required: "Message is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell me about your project, idea, or just say hello!"
                      className="bg-background border-border focus:border-primary min-h-[120px] resize-none"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 h-12"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 mr-3 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-3" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;

import ContactForm from "@/components/contact/ContactForm"


export const metadata = {
    title: 'contact',
    description: 'contact page',
  }
  
const ContactPage = () => {
    return(
        <>
         <ContactForm></ContactForm>
        </>
   
    );
}

export default ContactPage;
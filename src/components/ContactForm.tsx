import { z } from 'zod';
import { services } from '../data/servicesInfo';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
//import { useNavigate } from 'react-router-dom';


const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const schema = z.object({
    name: z.string({ required_error: 'Name field is required' })
        .min(3, { message: 'Name must be at least 3 characters' })
        .max(100, { message: 'Name must be within 100 characters' }),

    email: z.string({ required_error: 'Email address  is required' })
        .email({ message: 'Must be a valid email address' }),

    phone: z.string({ required_error: 'Phone number is required' })
        .regex(phoneRegex, { message: 'Please enter a valid phone number' }),

    serviceType: z.string(),

    serviceTimeBound: z.string(),

    message: z.string({ required_error: 'A short message to Infrabuilders is required to submit the form!' })
        .min(15, { message: 'Message must contain at least 15 characters ' })
        .max(500, { message: 'The short message should be within 500 characters' })
});





type FormData = z.infer<typeof schema>;


const ContactForm = () => {
    //const navigate = useNavigate();
    const { register, reset, handleSubmit, watch, formState: { errors, isSubmitSuccessful } } = useForm<FormData>({ resolver: zodResolver(schema) });

    const serviceTime = ['Right Away', 'In 3 Months', 'In 6 Months', 'In 1 Year', 'Just Asking'];

    const autoResponse = `Thanks for submitting your request. We will reach you soon.
                         - Team Infrabuilders.`;

    const contactName = watch('name');


    const onSubmit: SubmitHandler<FormData> = (data, e) => {
        console.log(data);
        e?.target.submit();
        if (isSubmitSuccessful) {
            alert('Your request was submitted successfully.\n Thanks!');
            reset();
            //navigate('/index.html');

        }
        else {
            alert("Oops! There was some error in submitting the form.\nPlease try again!")
        }

    }
    const onError = (errors, e) => console.log(errors, e);



    return (
        <>

            <form id="infra-contact-form" name="contact_form"
                action="https://formsubmit.co/choudhurytrina.dev@gmail.com"
                method="POST" // default to post
                onSubmit={handleSubmit(onSubmit, onError)} // function to be called before the request
                //onSuccess={() => { console.log('success') }} // valid response
                onError={() => { }} // error response
                //validateStatus={status => status >= 200} // validate status code
                target='_blank'
            >

                <div className="form-head">
                    <div className="single-input">
                        <input
                            {...register('name')}
                            id='name' type="text" name="name" min={3} max={100} placeholder="Name" required />
                        {errors.name && <p className="text-danger">{errors.name?.message}</p>}
                    </div>
                    <div className="single-input">
                        <input
                            {...register('email')}
                            id='email' type="email" name="email" placeholder="Email" required />
                        {errors.email && <p className="text-danger">{errors.email?.message}</p>}
                    </div>
                </div>
                <div className="form-head">
                    <div className="single-input">
                        <input
                            {...register('phone')}
                            id='phone' type="tel" name="phone" placeholder="Phone" required />
                        {errors.phone && <p className="text-danger">{errors.phone?.message}</p>}
                    </div>
                </div>
                <div className="form-head">
                    <div className="single-input">

                        <select
                            {...register('serviceType')}
                            id="serviceType" name="serviceType" className="form-control dropdown-show-right">
                            <option value="">--- Select Service Type ---</option>
                            {services.map((service) => (
                                <option key={service.id} value={service.title}>{service.title}</option>

                            ))}
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="single-input">
                        <select
                            {...register('serviceTimeBound')}
                            id="serviceTimeBound" name="serviceTimeBound" className="form-control dropdown-show-right" >
                            <option value="">--- Select Time-bound ---</option>
                            {serviceTime.map((time) => (
                                <option key={time} value={time}>{time}</option>
                            ))}

                        </select>
                    </div>
                </div>


                <div className="form-body">
                    <textarea
                        {...register('message')}
                        id='message' name="message" className="text-area" cols={30} rows={10} placeholder="Please leave a short message describing your requirements or queries here..." required></textarea>
                    {errors.message && <p className="text-danger">{errors.message?.message}</p>}
                </div>

                <input type="hidden" name="_subject" value={'New Contact Request from ' + contactName + ' for Infrabuilders'}></input>
                <input type="hidden" name="_cc" value="choudhury.trina@gmail.com"></input>
                <input type="hidden" name="_template" value="table"></input>
                <input type="hidden" name="_autoresponse" value={autoResponse}></input>
                {/* <input type="hidden" name="_next" value="index.html"></input> */}
                <button className="button-boxed" type="submit" value="submit">Send message <i className="ti-arrow-right"></i></button>
                <p className="xboot-send-message"></p>
            </form>

        </ >

    )
}

export default ContactForm;
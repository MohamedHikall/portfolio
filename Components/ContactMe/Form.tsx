'use client'
import { sendEmail } from '@/actions/contact';
import { InterestsData } from '@/data/mock/InterestsData';
import { ContactFormData, contactSchema } from '@/lib/validations';
import CustomButton from '@/shared/CustomButton/CustomButton'
import CustomField from '@/shared/CustomField/CustomField'
import DropdownWidget from '@/shared/DropdownWidget/DropdownWidget'
import { cn } from '@/utils/cn';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

interface FormProps {
    selectedInterests: number[];
    resetInterests: () => void;
}

const Form = ({ selectedInterests, resetInterests }: FormProps) => {

    const { register, handleSubmit, setValue, watch, reset, formState: { errors, isSubmitting }, } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema), defaultValues: { service: '', budget: '' } });

    const onSubmit = async (data: ContactFormData) => {
        try {
            const interestNames = selectedInterests.map(id => {
                const item = InterestsData.find(i => i.id === id);
                return item ? item.title : id;
            });
            const finalData = { ...data, interests: interestNames };
            const result = await sendEmail(finalData);
            if (result.success) {
                console.log('Form submitted successfully', finalData);
                reset();
                resetInterests();
            } else {
                console.error('Server error:', result.error);
            }
        } catch (e) {
            console.log('Form submission failed', e);
        }
    }

    const subjects = ["Web Design", "Responsive Development", "Branding", "UI/UX Design"];
    const budgets = ["$500 - $1000", "$1000 - $3000", "$3000 - $5000", "$5000+"];

    const sharedClasses = cn(
        'col md:row-between-center gap-6 lg:gap-20',
    );

    return (

        <div className="pt-30 md:pt-40">

            <h3 className='text-3xl md:text-6xl mb-2 md:mb-4 font-semibold' >Get in touch with me</h3>
            <p className='text-gray-light md:text-lg w-full lg:max-w-[40%]' >Let`s bring your ideas to life. With my expertise in Envato design and development, we can create something truly remarkable.</p>

            <form className='mt-10' onSubmit={handleSubmit(onSubmit)}>

                <div className="col space-y-6 md:space-y-8">

                    <div className={sharedClasses}>
                        <CustomField label='What`s your name?' placeholder='Mohamed Haikal' type='text' {...register('name')} error={errors.name?.message} required />
                        <CustomField label='Enter your email address' placeholder='info@example.com' type='email' {...register('email')} error={errors.email?.message} required />
                    </div>

                    <div className={sharedClasses}>
                        <DropdownWidget label={'What a service are you interested in?'} placeholder={watch('service') || 'Personal portfolio'} options={subjects} required onSelect={(value) => setValue('service', value, { shouldValidate: true })} error={errors.service?.message} />
                        <DropdownWidget label={'What`s your ballpark budget?'} placeholder={watch('budget') || '$2600'} options={budgets} required onSelect={(value) => setValue('budget', value, { shouldValidate: true })} error={errors.budget?.message} />
                    </div>

                    <CustomField label='Do you already have a website?' placeholder={watch('website') || 'domain.com'} type='text' {...register('website')} error={errors.website?.message} required />
                    <CustomField label='How can i help you?' placeholder={watch('message') || 'Hey! Could you help me ......'} type='textarea' {...register('message')} error={errors.message?.message} required />
                    <CustomButton type='submit' className='w-fit mx-auto md:mx-0' variant='primary' disabled={isSubmitting} title={isSubmitting ? 'Sending...' : 'Send Message'} />

                </div>

            </form>

        </div>

    )
}

export default Form
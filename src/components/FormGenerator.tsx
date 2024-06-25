import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormGeneratorProps } from '@homework-task/interfaces/components.interfaces';

const FormGenerator: React.FC<FormGeneratorProps> = ({ validationSchema, renderForm }) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(validationSchema),
    });

    const mutation = useMutation((data) => axios.post('https://jsonplaceholder.typicode.com/posts', data), {
        onSuccess: (data) => console.log('Success:', data),
        onError: (error) => console.log('Error:', error),
    });

    const onSubmit: SubmitHandler<any> = (data) => {
        mutation.mutate(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center bg-[#faf6f3] w-full max-w-lg mx-auto p-6 rounded-lg shadow-md"
        >
            {renderForm({ control, errors })}
            <button
                type="submit"
                disabled={mutation.isLoading}
                className={`
                    px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md mt-11 w-full
                    hover:bg-blue-700
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-700
                    ${mutation.isLoading ? 'opacity-50 cursor-not-allowed' : ''}
                `}
                style={{ backgroundColor: 'rgb(92, 98, 249)' }}
            >
                {mutation.isLoading ? 'Submitting...' : 'Submit'}
            </button>
            {mutation.isError && <p className="mt-2 text-sm text-[#bb0003]">Error submitting form.</p>}
            {mutation.isSuccess && <p className="mt-2 text-sm text-">Form submitted successfully.</p>}
        </form>
    );
};

export default FormGenerator;

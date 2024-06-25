import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm, UseFormReturn } from 'react-hook-form';
import { useMutation } from 'react-query';

import { FormGeneratorProps } from '@homework-task/interfaces/components.interfaces';

const FormGenerator: React.FC<FormGeneratorProps> = ({ validationSchema, renderForm }) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    }: UseFormReturn = useForm({
        resolver: zodResolver(validationSchema),
    });

    const mutation = useMutation((data) => axios.post('https://jsonplaceholder.typicode.com/posts', data));

    const onSubmit = (data: any) => {
        mutation.mutate(data);
    };

    return (
        <form
            onSubmit={() => void handleSubmit(onSubmit)}
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

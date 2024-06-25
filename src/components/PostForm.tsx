import React from 'react';

import { Controller } from 'react-hook-form';
import { z } from 'zod';

import { RenderFormProps } from '@homework-task/interfaces/components.interfaces';

import FormGenerator from './FormGenerator';

const formSchema = z.object({
    title: z.string().min(1, 'Title is required').max(50, 'Title must be 50 characters or less'),
    body: z.string().min(1, 'Body is required').max(500, 'Body must be 500 characters or less'),
});

const renderForm = ({ control, errors }: RenderFormProps) => (
    <div className="space-y-4 w-full">
        <div className="flex flex-col">
            <label htmlFor="title" className="mb-2 font-medium text-gray-700">
                Title
            </label>
            <Controller
                name="title"
                control={control}
                render={({ field }) => (
                    <input
                        {...field}
                        id="title"
                        className="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                )}
                defaultValue=""
            />
            {errors.title && <span className="mt-1 text-sm text-[#bb0003]">{errors.title.message}</span>}
        </div>
        <div className="flex flex-col">
            <label htmlFor="body" className="mb-2 font-medium text-gray-700">
                Body
            </label>
            <Controller
                name="body"
                control={control}
                render={({ field }) => (
                    <textarea
                        {...field}
                        id="body"
                        className="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                )}
                defaultValue=""
            />
            {errors.body && <span className="mt-1 text-sm text-[#bb0003]">{errors.body.message}</span>}
        </div>
    </div>
);

const PostForm: React.FC = () => <FormGenerator validationSchema={formSchema} renderForm={renderForm} />;

export default PostForm;

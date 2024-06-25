import React, { useEffect, useState } from 'react';

import { PageGeneratorProps } from '@homework-task/interfaces/components.interfaces';

const PageGenerator: React.FC<PageGeneratorProps> = ({ data }) => {
    const [components, setComponents] = useState<Record<string, React.ComponentType<any> | undefined>>({});
    useEffect(() => {
        const importComponents = async () => {
            const componentImports: Record<string, React.ComponentType<any> | undefined> = {};
            for (const section of data) {
                for (const component of section.components) {
                    try {
                        const importedComponent = await import(`../components/${component.type}`);
                        componentImports[component.type] = importedComponent.default;
                    } catch (error) {
                        console.warn(`Error importing component "${component.type}":`, error);
                    }
                }
            }

            setComponents(componentImports);
        };

        importComponents();
    }, [data]);

    return (
        <>
            {data.map((section, index) => (
                <div key={index} className={`${section.props.classes}`}>
                    {section.components.map((component, idx) => {
                        const Component = components[component.type];
                        if (!Component) {
                            return null;
                        }
                        return <Component key={idx} {...component.props} />;
                    })}
                </div>
            ))}
        </>
    );
};

export default PageGenerator;

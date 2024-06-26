import React, { useEffect, useState } from 'react';

import { PageGeneratorProps } from '@homework-task/interfaces/components.interfaces';

type ComponentModule = {
    default: React.ComponentType<unknown>;
};

const PageGenerator: React.FC<PageGeneratorProps> = ({ data }) => {
    const [components, setComponents] = useState<Record<string, React.ComponentType<unknown> | undefined>>({});
    useEffect(() => {
        const importComponents = async () => {
            const componentImports: Record<string, React.ComponentType<unknown> | undefined> = {};
            for (const section of data) {
                for (const component of section.components) {
                    const module: ComponentModule = (await import(`../components/${component.type}`)) as ComponentModule;
                    if (module) {
                        componentImports[component.type] = module.default;
                    }
                }
            }

            setComponents(componentImports);
        };

        importComponents()
            .then(() => {})
            .catch(() => {});
    }, [data]);

    return (
        <>
            {data.map((section, index) => (
                <div key={index} className={`${section.props.classes.join(',')}`}>
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
